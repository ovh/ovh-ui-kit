import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.radio/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-radio-stories';
angular.module(moduleName, ['oui.radio']);

export default {
  title: 'Version 4/Components/Radio/WebComponent/Simple',

  parameters: {
    notes: readme,
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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value1">
      Value A
    </oui-radio>

    <oui-radio
      description="Pellentesque euismod magna rutrum lectus gravida semper."
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

WithDescription.story = {
  name: 'With description',
};
