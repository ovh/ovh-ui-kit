import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'abbreviations.stories';
angular.module(moduleName, ['oui.tooltip']);

export default {
  title: 'Version 4/Content/Abbreviations',

  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export const Default = () => `
<p>Praesent in congue purus, at <abbr title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">elementum sem</abbr>. Curabitur porta eros volutpat, sodales justo eu, congue metus.</p>`;

export const WithTooltip = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <p>Praesent in congue purus, at elementum sem. <abbr title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" oui-tooltip>Curabitur porta</abbr> eros volutpat, sodales justo eu, congue metus.</p>`,
  ),
);
