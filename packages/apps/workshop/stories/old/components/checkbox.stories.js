import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.checkbox/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-checkbox-stories';
angular.module(moduleName, [
  'oui.checkbox',

  // For examples
  'oui.field',
  'oui.radio',
]);

export default {
  title: 'Old/Components/Checkbox',

  parameters: {
    notes: readme,
  },
};

export const SimpleCheckbox = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox
      aria-label="Allow ponies in your server"
      model="$ctrl.model2"
      on-change="$ctrl.onChange(modelValue)">
      Allow ponies in your server
    </oui-checkbox>

    <oui-checkbox
      aria-label="Track ponies"
      model="$ctrl.model3"
      on-change="$ctrl.onChange(modelValue)">
      Track ponies
    </oui-checkbox>`,
    {
      $ctrl: {
        onChange: action('onChange'),
      },
    },
  ),
);

SimpleCheckbox.story = {
  name: 'Simple checkbox',
};

export const EnablingContentWithCheckboxes = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox aria-label="Enable rainbows" model="$ctrl.checked">Enable rainbows</oui-checkbox>
    <oui-field label="Rainbow amount">
      <oui-radio-toggle-group model="$ctrl.amount">
        <oui-radio value="small" disabled="!$ctrl.checked">A subtle pinch</oui-radio>
        <oui-radio value="medium" disabled="!$ctrl.checked">A moderate amount</oui-radio>
        <oui-radio value="large" disabled="!$ctrl.checked">Everywhere!</oui-radio>
      </oui-radio-toggle-group>
    </oui-field>`,
    {
      $ctrl: {
        checked: boolean('Checked state', true),
      },
    },
  ),
);

EnablingContentWithCheckboxes.story = {
  name: 'Enabling content with checkboxes',
};

export const IndeterminateState = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox model="$ctrl.model">Normal</oui-checkbox>
    <oui-checkbox model="$ctrl.model" disabled>Disabled</oui-checkbox>`,
    {
      $ctrl: {
        model: null,
      },
    },
  ),
);

IndeterminateState.story = {
  name: 'Indeterminate state',
};

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form name="form">
      <oui-checkbox model="$ctrl.agreements" name="agreements" required>Agreements</oui-checkbox>
      Is this form valid? : {{ form.$valid ? "yes" : "no" }}
    </form>`,
  ),
);

export const WithDescription = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." model="$ctrl.model1">Normal</oui-checkbox>
    <oui-checkbox description="Pellentesque euismod magna rutrum lectus gravida semper." model="$ctrl.model2" disabled>Disabled</oui-checkbox>`,
  ),
);

WithDescription.story = {
  name: 'With description',
};

export const Thumbnails = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." model="$ctrl.model1" thumbnail>Thumbnail</oui-checkbox>
    <oui-checkbox description="Pellentesque euismod magna rutrum lectus gravida semper." model="$ctrl.model2" variant="light" thumbnail>Thumbnail Light</oui-checkbox>`,
  ),
);

export const WithFooter = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." footer="Lorem ipsum dolor sit amet" model="$ctrl.model1" disabled="$ctrl.disabled" thumbnail>Thumbnail</oui-checkbox>
    <oui-checkbox description="Pellentesque euismod magna rutrum lectus gravida semper." footer="Lorem ipsum dolor sit amet" model="$ctrl.model2" disabled="$ctrl.disabled" variant="light" thumbnail>Thumbnail Light</oui-checkbox>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

export const Size = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox description="Pellentesque euismod magna rutrum lectus gravida semper." model="$ctrl.model2" size="m">Medium</oui-checkbox>
    <oui-checkbox description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." model="$ctrl.model1" size="m" thumbnail>Thumbnail</oui-checkbox>
    <oui-checkbox description="Pellentesque euismod magna rutrum lectus gravida semper." model="$ctrl.model2" size="m" variant="light" thumbnail>Thumbnail Light</oui-checkbox>`,
  ),
);
