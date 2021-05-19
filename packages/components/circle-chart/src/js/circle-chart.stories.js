import {html} from 'lit-html';

import './ods-circle-chart.js';

// This default export determines where your story goes in the story list
export default {
    title: 'Components/Circle Chart',
    parameters: {
        viewport: {
            viewports: {
                default: {
                    name: 'Default',
                    styles: {
                        width: '800px',
                        height: '100%',
                    },
                    type: 'desktop',
                }
            },
            defaultViewport: 'default'
        },
    },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => {
    return html`
        <ods-circle-chart .chartTitle=${args.chartTitle}
                          .chartSubtitle=${args.chartSubtitle}
                          .ariaTitle=${args.ariaTitle}
                          .ariaDescription=${args.ariaDescription}
                          .minBound=${args.minBound}
                          .maxBound=${args.maxBound}
                          ?withLegends=${args.withLegends}>
            <ods-circle-chart-segment title="toto1" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto2" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto3" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto4" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto5" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto6" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto7" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto8" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto9" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto10" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto11" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto12" description="tata" value="7.6"></ods-circle-chart-segment>
            <ods-circle-chart-segment title="toto13" description="tata" value="7.6"></ods-circle-chart-segment>
        </ods-circle-chart>
    `;
};

export const Default = Template.bind({});

Default.args = {
    /* 👇 The args you need here will depend on your component */
    chartTitle: '/Go',
    chartSubtitle: 'Storage',
    ariaTitle: 'Chart representing the amount of storage used',
    ariaDescription: 'Each segment represents the amount of storage used (in Go), the complete chart contains the amount of usable storage',
    minBound: 0,
    maxBound: 100,
    withLegends: true
};
