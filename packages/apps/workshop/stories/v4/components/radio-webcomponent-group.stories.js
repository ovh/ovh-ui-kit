import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.radio/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-radio-stories';
angular.module(moduleName, ['oui.radio']);

export default {
  title: 'Version 4/Components/Radio/WebComponent/Group',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-radio-group
      model="$ctrl.model"
      on-change="$ctrl.onChange(modelValue)">
      <oui-radio
        disabled="$ctrl.disabled"
        value="$ctrl.value1">
        Value A
      </oui-radio>

      <oui-radio
        disabled="$ctrl.disabled"
        value="$ctrl.value2">
        Value B
      </oui-radio>

      <oui-radio
        disabled="$ctrl.disabled"
        value="$ctrl.value3">
        Value C
      </oui-radio>
    </oui-radio-group>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: 'a',
        value1: 'a',
        value2: 'b',
        value3: 'c',
        onChange: action('onChange'),
      },
    },
  ),
);
