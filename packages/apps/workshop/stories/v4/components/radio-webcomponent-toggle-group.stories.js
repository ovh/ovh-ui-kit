import { action } from '@storybook/addon-actions';
import { boolean, radios } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Radio from '@ovh-ux/ui-kit.radio';

import readme from '@ovh-ux/ui-kit.radio/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'radio-webcomponent-toggle-group.stories';
angular.module(moduleName, [Radio]);

export default {
  title: 'Version 4/Components/Radio/WebComponent/Toggle Group',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-radio-toggle-group
      direction="{{$ctrl.direction}}"
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
    </oui-radio-toggle-group>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        direction: radios(
          'Direction',
          {
            Column: 'column',
            Row: 'row',
          },
          'row',
        ),
        model: 'a',
        value1: 'a',
        value2: 'b',
        value3: 'c',
        onChange: action('onChange'),
      },
    },
  ),
);
