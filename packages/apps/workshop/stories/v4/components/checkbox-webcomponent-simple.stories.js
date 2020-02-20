import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Checkbox from '@ovh-ux/ui-kit.checkbox';
import Field from '@ovh-ux/ui-kit.field';
import FormActions from '@ovh-ux/ui-kit.form-actions';

import readme from '@ovh-ux/ui-kit.checkbox/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'checkbox-webcomponent-simple.stories';
angular.module(moduleName, [
  Checkbox,

  // For examples
  Field,
  FormActions,
]);

export default {
  title: 'Version 4/Components/Checkbox/WebComponent/Simple',

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
    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model1"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value1">
      Value A
    </oui-checkbox>

    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model2"
      name="oui-checkbox-2"
      on-change="$ctrl.onChange(modelValue)">
      Value B
    </oui-checkbox>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model1: true,
        model2: undefined,
        onChange: action('onChange'),
      },
    },
  ),
);

export const Indeterminate = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model1"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)">
      Value A
    </oui-checkbox>

    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model2"
      name="oui-checkbox-2"
      on-change="$ctrl.onChange(modelValue)">
      Value B
    </oui-checkbox>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model1: null,
        model2: undefined,
        onChange: action('onChange'),
      },
    },
  ),
);

export const Inline = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model1"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)"
      inline>
      Value A
    </oui-checkbox>

    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model2"
      name="oui-checkbox-2"
      on-change="$ctrl.onChange(modelValue)"
      inline>
      Value B
    </oui-checkbox>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model1: true,
        model2: undefined,
        onChange: action('onChange'),
      },
    },
  ),
);

export const WithDescription = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model1"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)">
      <oui-checkbox-label>Value A</oui-checkbox-label>
      <oui-checkbox-description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</oui-checkbox-description>
    </oui-checkbox>

    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model2"
      name="oui-checkbox-2"
      on-change="$ctrl.onChange(modelValue)">
      <oui-checkbox-label>Value B</oui-checkbox-label>
      <oui-checkbox-description>Pellentesque euismod magna rutrum lectus gravida semper.</oui-checkbox-description>
    </oui-checkbox>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model1: true,
        model2: undefined,
        onChange: action('onChange'),
      },
    },
  ),
);

WithDescription.story = {
  name: 'With description',
};

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form novalidate name="form">
      <oui-field label="Label">

        <oui-checkbox
          name="oui-checkbox-1"
          disabled="$ctrl.disabled"
          model="$ctrl.model1"
          required>
          32 GB RAM
        </oui-checkbox>

        <oui-checkbox
          name="oui-checkbox-2"
          disabled="$ctrl.disabled"
          model="$ctrl.model2"
          required>
          64 GB RAM
        </oui-checkbox>

        <oui-checkbox
          name="oui-checkbox-3"
          disabled="$ctrl.disabled"
          model="$ctrl.model3"
          required>
          128 GB RAM
          <span class="oui-badge oui-badge_new">New</span>
        </oui-checkbox>

      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model1: true,
        model2: undefined,
        model3: undefined,
        onChange: action('onChange'),
      },
    },
  ),
);
