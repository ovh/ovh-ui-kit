import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Field from '@ovh-ux/ui-kit.field';
import FormActions from '@ovh-ux/ui-kit.form-actions';
import Radio from '@ovh-ux/ui-kit.radio';

import readme from '@ovh-ux/ui-kit.radio/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'radio-webcomponent-simple.stories';
angular.module(moduleName, [
  Radio,

  // For examples
  FormActions,
  Field,
]);

export default {
  title: 'Design System/Components/Radio/WebComponent/Simple',

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
    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value1">
      Value A
    </oui-radio>

    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value2">
      Value B
    </oui-radio>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: 'a',
        value1: 'a',
        value2: 'b',
        onChange: action('onChange'),
      },
    },
  ),
);

export const Inline = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value1"
      inline>
      Value A
    </oui-radio>

    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value2"
      inline>
      Value B
    </oui-radio>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: 'a',
        value1: 'a',
        value2: 'b',
        onChange: action('onChange'),
      },
    },
  ),
);

export const WithDescription = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value1">
      <oui-radio-label>Value A</oui-radio-label>
      <oui-radio-description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</oui-radio-description>
    </oui-radio>

    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value2">
      <oui-radio-label>Value B</oui-radio-label>
      <oui-radio-description>Pellentesque euismod magna rutrum lectus gravida semper.</oui-radio-description>
    </oui-radio>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: 'a',
        value1: 'a',
        value2: 'b',
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
        <oui-radio-group
          name="ram"
          model="$ctrl.model"
          on-change="$ctrl.onChange(modelValue)">

          <oui-radio
            disabled="$ctrl.disabled"
            value="$ctrl.value1"
            required>
            32 GB RAM
          </oui-radio>

          <oui-radio
            disabled="$ctrl.disabled"
            value="$ctrl.value2"
            required>
            64 GB RAM
          </oui-radio>

          <oui-radio
            disabled="$ctrl.disabled"
            value="$ctrl.value3"
            required>
            128 GB RAM
            <span class="oui-badge oui-badge_new">New</span>
          </oui-radio>

        </oui-radio-group>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: undefined,
        value1: '32',
        value2: '64',
        value3: '128',
        onChange: action('onChange'),
      },
    },
  ),
);
