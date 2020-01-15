import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.switch/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-switch-stories';
angular.module(moduleName, ['oui.switch']);

export default {
  title: 'Old/Components/Switch',

  parameters: {
    notes: readme,
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-switch
      disabled="$ctrl.disabled"
      model="$ctrl.checked"
      on-change="$ctrl.onChange(modelValue)">
    </oui-switch>`,
    {
      $ctrl: {
        checked: boolean('Checked state', false),
        disabled: boolean('Disabled state', false),
        onChange: action('onClick'),
      },
    },
  ),
);
