import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Field from '@ovh-ux/ui-kit.field';
import FormActions from '@ovh-ux/ui-kit.form-actions';
import Switch from '@ovh-ux/ui-kit.switch';

import readme from '@ovh-ux/ui-kit.switch/README.md';
import { compileTemplate } from '../../../../src/utils';

const moduleName = 'switch-webcomponent.stories';
angular.module(moduleName, [
  Switch,

  // For examples
  Field,
  FormActions,
]);

export default {
  title: 'Design System/Components/Switch/WebComponent',

  parameters: {
    docs: { iframeHeight: 200 },
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-switch
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      on-change="$ctrl.onChange(modelValue)">
    </oui-switch>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: boolean('Checked state', false),
        onChange: action('onClick'),
      },
    },
  ),
);

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form novalidate name="form">
      <oui-field label="Label">

        <oui-switch
          disabled="$ctrl.disabled"
          model="$ctrl.model"
          name="oui-switch"
          on-change="$ctrl.onChange(modelValue)"
          required>
        </oui-switch>

      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: boolean('Checked state', false),
        onChange: action('onChange'),
      },
    },
  ),
);
