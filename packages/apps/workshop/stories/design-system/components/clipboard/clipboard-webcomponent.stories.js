import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import '@ovh-ux/ui-kit/dist/js/oui-clipboard';

import readme from '@ovh-ux/ui-kit.clipboard/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'clipboard-webcomponent.stories';
angular.module(moduleName, ['oui.clipboard']);

export default {
  title: 'Design System/Components/Clipboard/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-clipboard model="$ctrl.model"></oui-clipboard>`,
    {
      $ctrl: {
        model: text('Model', 'Copy this text'),
      },
    },
  ),
);
