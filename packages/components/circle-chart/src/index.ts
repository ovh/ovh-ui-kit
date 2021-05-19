import {LitElement, html, customElement, property, TemplateResult, svg} from 'lit-element';

import {styles} from './js/circle-chart.styles';

import {DEFAULT_VALUES, SEGMENT_COLORS} from './js/circle-chart.constant';

// @ts-ignore
/**
 * An example element.
 *
 */
@customElement('ods-circle-chart')
export class CircleChart extends LitElement {

    /**
     * Chart title - displayed at the center of the chart
     */
    @property({type: String})
    chartTitle = 'Title';

    /**
     * Chart subtitle - displayed at the center of the chart
     */
    @property({type: String})
    chartSubtitle = 'Subtitle';

    /**
     * Chart legend title - for a11y purposes
     */
    @property({type: String})
    ariaTitle = 'Chart Title';

    /**
     * Chart legend description - for a11y purposes
     */
    @property({type: String})
    ariaDescription = 'Chart Description';

    /**
     * The starting number for counting segments
     */
    @property({type: Number})
    minBound = 0;

    /**
     * The total for counting segments
     */
    @property({type: Number})
    maxBound = 100;

    /**
     * The total for counting segments
     */
    @property({type: Boolean})
    withLegends = false;

    constructor() {
        super();
    }

    getPercentage(value: number, min: number, max: number): number {
        return Math.min(max, Math.max(min, (value * 100 / (max - min))));
    }

    getStrokeDasharray(value: number, min: number, max: number): string {
        let percent: number = this.getPercentage(value, min, max);
        return `${percent} ${100 - percent}`;
    }

    getStrokeDashoffset(total: number, minBound: number, maxBound: number, index: number): number {
        if (!index) {
            return DEFAULT_VALUES.OFFSET;
        }
        return 100 - this.getPercentage(total, minBound, maxBound) + DEFAULT_VALUES.OFFSET;
    }

    getChartSegments() {
        let total: number = 0;
        const segments: Array<TemplateResult> = [];

        this.querySelectorAll("ods-circle-chart-segment").forEach((item: Element, index: number) => {
            const attribute: NamedNodeMap = item.attributes;

            let template: TemplateResult = svg`
                    <circle class=${`donut-segment donut-segment-${index + 1}`}
                            cx="21"
                            cy="21"
                            stroke-dasharray=${this.getStrokeDasharray(Number(attribute['value']?.value), this.minBound, this.maxBound)}
                            stroke-dashoffset=${this.getStrokeDashoffset(total, this.minBound, this.maxBound, index)}
                            r="15.91549430918954"
                            aria-labelledby=${`chart-segment-${index + 1}-title chart-segment-${index + 1}-desc`}
                            stroke=${SEGMENT_COLORS[index]}>
                      <title id=${`chart-segment-${index + 1}-title`}>${attribute['title']?.value}</title>
                      <desc id=${`chart-segment-${index + 1}-desc`}>${attribute['description']?.value}</desc>
                    </circle>
                `;
            total += Number(attribute['value'].value);
            segments.push(template);
        });
        return segments;
    }

    getChartLegends() {
        const legends: Array<TemplateResult> = [];

        this.querySelectorAll("ods-circle-chart-segment").forEach((item: Element, index: number) => {
            const attribute: NamedNodeMap = item.attributes;

            let template: TemplateResult = html`
                <li class="legend">
                    <span class="shape-circle"
                          style="--circle-donut-segment-background-color: ${SEGMENT_COLORS[index]}"></span>
                    <span>
                        <div>${attribute['title']?.value}</div>
                        <div><small>${attribute['description']?.value}</small></div>
                    </span>
                </li>`;
            legends.push(template);
        });
        return legends;
    }

    static get styles() {
        return styles;
    }

    render() {
        return html`
            <figure>
                <div class="figure-content">
                    <svg width="100%"
                         height="100%"
                         viewBox="0 0 42 42"
                         class="donut"
                         aria-labelledby="chart-title chart-desc"
                         role="img">
                        <title id="chart-title">${this.ariaTitle}</title>
                        <desc id="chart-desc">${this.ariaDescription}</desc>
    
                        <circle class="donut-ring"
                                cx="21"
                                cy="21"
                                r="15.91549430918954"></circle>
                            
                        ${this.getChartSegments()}
    
                        ${(this.chartTitle || this.chartSubtitle) ?
                            svg`<g class="chart-text">
                                <text x="50%"
                                      y="50%"
                                      class="chart-title">
                                    ${this.chartTitle}
                                </text>
                                <text x="50%"
                                      y="50%"
                                      class="chart-subtitle">
                                    ${this.chartSubtitle}
                                </text>
                            </g>` : ''
                        }
                    </svg>
                </div>
                ${this.withLegends ?
            html`<figcaption class="figure-key">
                            <ul class="figure-key-list"
                                  aria-hidden="true"
                                  role="presentation">
                                ${this.getChartLegends()}
                            </ul>
                        </figcaption>`
            : ''
        }                
            </figure>
        `;
    }
}
