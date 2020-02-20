import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Clipboard from '@ovh-ux/ui-kit.clipboard';

import readme from '@ovh-ux/ui-kit.clipboard/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-clipboard-stories';
angular.module(moduleName, [Clipboard]);

export default {
  title: 'Version 3/Components/Clipboard',

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
