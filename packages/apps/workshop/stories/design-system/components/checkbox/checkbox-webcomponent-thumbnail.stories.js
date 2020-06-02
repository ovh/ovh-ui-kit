import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Checkbox from '@ovh-ux/ui-kit.checkbox';
import Field from '@ovh-ux/ui-kit.field';
import FormActions from '@ovh-ux/ui-kit.form-actions';

import readme from '@ovh-ux/ui-kit.checkbox/README.md';
import { compileTemplate } from '../../../../src/utils';

const moduleName = 'checkbox-webcomponent-thumbnail.stories';
angular.module(moduleName, [
  Checkbox,

  // For examples
  Field,
  FormActions,
]);

export default {
  title: 'Design System/Components/Checkbox/WebComponent/Thumbnail',

  parameters: {
    notes: readme,
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
      value="$ctrl.value1"
      thumbnail>
      Value A
    </oui-checkbox>

    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model2"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)"
      thumbnail>
      <oui-checkbox-label>Value B</oui-checkbox-label>
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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      disabled="$ctrl.disabled"
      model="$ctrl.model1"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)"
      thumbnail>
      Value A
    </oui-checkbox>

    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model2"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)"
      thumbnail>
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

export const WithFooter = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model1"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)"
      thumbnail>
      <oui-checkbox-label>Value A</oui-checkbox-label>
      <oui-checkbox-footer>Lorem ipsum dolor sit amet</oui-checkbox-footer>
    </oui-checkbox>

    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model2"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)"
      thumbnail>
      <oui-checkbox-label>Value B</oui-checkbox-label>
      <oui-checkbox-footer>Pellentesque habitant morbi tristique</oui-checkbox-footer>
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

WithFooter.story = {
  name: 'With footer',
};

export const FullExample = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model1"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)"
      thumbnail>
      <oui-checkbox-label>Value A</oui-checkbox-label>
      <oui-checkbox-description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</oui-checkbox-description>
      <oui-checkbox-footer>Lorem ipsum dolor sit amet</oui-checkbox-footer>
    </oui-checkbox>

    <oui-checkbox
      disabled="$ctrl.disabled"
      model="$ctrl.model2"
      name="oui-checkbox-1"
      on-change="$ctrl.onChange(modelValue)"
      thumbnail>
      <oui-checkbox-label>Value B</oui-checkbox-label>
      <oui-checkbox-description>Pellentesque euismod magna rutrum lectus gravida semper.</oui-checkbox-description>
      <oui-checkbox-footer>Pellentesque habitant morbi tristique</oui-checkbox-footer>
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

FullExample.story = {
  name: 'Full example',
};

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form novalidate name="form">
      <oui-field>

          <oui-checkbox
            name="oui-checkbox-1"
            model="$ctrl.model1"
            disabled="$ctrl.disabled"
            thumbnail
            required>
            <oui-checkbox-label>32 GB RAM</oui-checkbox-label>
            <oui-checkbox-footer>Pellentesque habitant morbi tristique</oui-checkbox-footer>
          </oui-checkbox>

          <oui-checkbox
            name="oui-checkbox-2"
            model="$ctrl.model2"
            disabled="$ctrl.disabled"
            thumbnail
            required>
            <oui-checkbox-label>64 GB RAM</oui-checkbox-label>
            <oui-checkbox-footer>Pellentesque habitant morbi tristique</oui-checkbox-footer>
          </oui-checkbox>

          <oui-checkbox
            name="oui-checkbox-3"
            model="$ctrl.model3"
            disabled="$ctrl.disabled"
            thumbnail
            required>
            <oui-checkbox-label>
              128 GB RAM
              <span class="oui-badge oui-badge_new">New</span>
            </oui-checkbox-label>
            <oui-checkbox-footer>Pellentesque habitant morbi tristique</oui-checkbox-footer>
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
