import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.clipboard/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-clipboard-stories';
angular.module(moduleName, ['oui.clipboard']);

export default {
  title: 'Version 3/Components/Clipboard',

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
