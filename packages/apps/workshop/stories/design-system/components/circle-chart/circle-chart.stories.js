import { forModule } from 'storybook-addon-angularjs';

import CircleChart from '@ovh-ux/ui-kit.circle-chart';

import readme from '@ovh-ux/ui-kit.circle-chart/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'circle-chart.stories';
angular.module(moduleName, [CircleChart]);

export default {
  title: 'Design System/Components/Circle Chart/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-circle-chart chart-title="/Go"
                      chart-subtitle="storage data"
                      aria-title="Example chart title"
                      aria-description="Example chart description"
                      min-bound="0"
                      max-bound="100"
                      segments="[
                        { title: 'Lorem ipsum', description: 'dolor sit amet', value: '7.6' },
                        { title: 'Consectetur', description: 'adipiscing elit', value: '7.6' },
                        { title: 'Nunc', description: 'quam velit', value: '7.6' },
                        { title: 'Tempor', description: 'et neque sit amet', value: '7.6' },
                        { title: 'Faucibus', description: 'varius diam', value: '7.6' },
                        { title: 'Nunc', description: 'maximus', value: '7.6' },
                        { title: 'Nibh', description: 'id feugiat ullamcorper', value: '7.6' },
                        { title: 'Maecenas', description: 'non dui risus', value: '7.6' },
                        { title: 'Fusce', description: 'laoreet finibus mauris', value: '7.6' },
                        { title: 'In', description: 'facilisis nisi fringilla quis', value: '7.6' },
                        { title: 'Vestibulum', description: 'mattis pulvinar dolor', value: '7.6' },
                        { title: 'Maecenas', description: 'blandit', value: '7.6' },
                        { title: 'Est', description: 'in vulputate fermentum', value: '7.6' },
                      ]">
    </oui-circle-chart>
    `,
    {
      $ctrl: {},
    },
  ),
);

export const WithLabels = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-circle-chart chart-title="/Go"
                      chart-subtitle="storage data"
                      aria-title="Example chart title"
                      aria-description="Example chart description"
                      min-bound="0"
                      max-bound="100"
                      with-legends
                      segments="[
                        { title: 'Lorem ipsum', description: 'dolor sit amet', value: '7.6' },
                        { title: 'Consectetur', description: 'adipiscing elit', value: '7.6' },
                        { title: 'Nunc', description: 'quam velit', value: '7.6' },
                        { title: 'Tempor', description: 'et neque sit amet', value: '7.6' },
                        { title: 'Faucibus', description: 'varius diam', value: '7.6' },
                        { title: 'Nunc', description: 'maximus', value: '7.6' },
                        { title: 'Nibh', description: 'id feugiat ullamcorper', value: '7.6' },
                        { title: 'Maecenas', description: 'non dui risus', value: '7.6' },
                        { title: 'Fusce', description: 'laoreet finibus mauris', value: '7.6' },
                        { title: 'In', description: 'facilisis nisi fringilla quis', value: '7.6' },
                        { title: 'Vestibulum', description: 'mattis pulvinar dolor', value: '7.6' },
                        { title: 'Maecenas', description: 'blandit', value: '7.6' },
                        { title: 'Est', description: 'in vulputate fermentum', value: '7.6' },
                      ]">
    </oui-circle-chart>
    `,
    {
      $ctrl: {},
    },
  ),
);

WithLabels.storyName = 'With labels';
