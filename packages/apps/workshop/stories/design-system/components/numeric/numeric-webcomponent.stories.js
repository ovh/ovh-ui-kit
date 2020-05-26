import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Field from '@ovh-ux/ui-kit.field';
import FormActions from '@ovh-ux/ui-kit.form-actions';
import Numeric from '@ovh-ux/ui-kit.numeric';

import readme from '@ovh-ux/ui-kit.numeric/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'numeric-webcomponent.stories';
angular.module(moduleName, [
  Numeric,

  // For examples
  Field,
  FormActions,
]);

export default {
  title: 'Design System/Components/Numeric/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-numeric
      model="$ctrl.model"
      disabled="$ctrl.disabled"
      on-change="$ctrl.onChange(modelValue)">
    </oui-numeric>`,
    {
      $ctrl: {
        model: 0,
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
      },
    },
  ),
);

export const Limits = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-numeric
      min="$ctrl.min"
      max="$ctrl.max"
      model="$ctrl.model"
      disabled="$ctrl.disabled"
      on-change="$ctrl.onChange(modelValue)">
    </oui-numeric>`,
    {
      $ctrl: {
        min: number('Min', 2),
        max: number('Max', 8),
        model: 5,
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
      },
    },
  ),
);

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form novalidate name="form">
      <oui-field label="Label">

        <oui-numeric
          name="oui-numeric"
          model="$ctrl.model"
          disabled="$ctrl.disabled"
          on-change="$ctrl.onChange(modelValue)">
        </oui-numeric>

      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
      },
    },
  ),
);
