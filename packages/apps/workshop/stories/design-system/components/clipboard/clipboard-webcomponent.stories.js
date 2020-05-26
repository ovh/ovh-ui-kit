import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Clipboard from '@ovh-ux/ui-kit.clipboard';

import readme from '@ovh-ux/ui-kit.clipboard/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'clipboard-webcomponent.stories';
angular.module(moduleName, [Clipboard]);

export default {
  title: 'Design System/Components/Clipboard/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
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
