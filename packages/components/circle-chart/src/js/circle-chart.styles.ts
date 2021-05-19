import {css} from 'lit-element';
export const styles = css`
    :host {
        --circle-donut-background-color: var(--c-gray-050, #f2f2f2);
        --circle-chart-color: var(--c-blue-800, #00185e);
        --circle-chart-color-dark: var(--c-white, #fff);
        --circle-donut-segment-background-color: var(--c-blue-600, #002dbe);
    }
    
    figure {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
    
    @media (min-width: 768px) {
        figure {
            flex-direction: row;
        }
    }
    
    .figure-content,
    .figure-key {
        flex: 1;
        padding: 0 1em;
        align-self: center;
    }
    
    .figure-key {
        flex: 0 1 auto;
    }
    
    .figure-content svg {
        height: auto;
    }
    
    .donut-ring, .donut-segment {
        fill: transparent;
    }
    
    .donut-ring {
        stroke: var(--circle-donut-background-color);
        stroke-width: 4;
    }
    
    .donut-segment {
        stroke-width: 4.1;
    }
    
    .chart-text {
        fill: var(--circle-chart-color);
        transform: translateY(0.25em);
    }
    
    @media (prefers-color-scheme: dark) {
        .chart-text {
            fill: var(--circle-chart-color);
        }
    }
    
    .chart-title {
        font-size: 0.6em;
        line-height: 1;
        text-anchor: middle;
        transform: translateY(-0.25em);
    }
    
    .chart-subtitle {
        font-size: 0.2em;
        text-transform: uppercase;
        text-anchor: middle;
        transform: translateY(0.7em);
    }
    
    .figure-key-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: column wrap;
        align-items: space-between;
    }
    
    .figure-key-list .legend {
        margin: 0 0 .2em;
        padding: 0;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }
    
    .shape-circle {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        margin-right: 1em;
        border-radius: 50%;
        background-color: var(--circle-donut-segment-background-color);
    }
`;
