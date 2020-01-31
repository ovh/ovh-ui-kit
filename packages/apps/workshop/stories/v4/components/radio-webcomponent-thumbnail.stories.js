import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.radio/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-radio-stories';
angular.module(moduleName, ['oui.radio']);

export default {
  title: 'Version 4/Components/Radio/WebComponent/Thumbnail',

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
      value="$ctrl.value1"
      thumbnail>
      Value A
    </oui-radio>

    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value2"
      thumbnail>
      <oui-radio-label>Value B</oui-radio-label>
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
      value="$ctrl.value1"
      thumbnail>
      Value A
    </oui-radio>

    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value2"
      thumbnail>
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

export const WithFooter = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value1"
      thumbnail>
      <oui-radio-label>Value A</oui-radio-label>
      <oui-radio-footer>Lorem ipsum dolor sit amet</oui-radio-footer>
    </oui-radio>

    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value2"
      thumbnail>
      <oui-radio-label>Value B</oui-radio-label>
      <oui-radio-footer>Pellentesque habitant morbi tristique</oui-radio-footer>
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

WithFooter.story = {
  name: 'With footer',
};

export const FullExample = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value1"
      thumbnail>
      <oui-radio-label>Value A</oui-radio-label>
      <oui-radio-description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</oui-radio-description>
      <oui-radio-footer>Lorem ipsum dolor sit amet</oui-radio-footer>
    </oui-radio>

    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value2"
      thumbnail>
      <oui-radio-label>Value B</oui-radio-label>
      <oui-radio-description>Pellentesque euismod magna rutrum lectus gravida semper.</oui-radio-description>
      <oui-radio-footer>Pellentesque habitant morbi tristique</oui-radio-footer>
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

FullExample.story = {
  name: 'Full example',
};
