import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Field from '@ovh-ux/ui-kit.field';
import FormActions from '@ovh-ux/ui-kit.form-actions';
import Textarea from '@ovh-ux/ui-kit.textarea';

import readme from '@ovh-ux/ui-kit.textarea/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'textarea-webcomponent.stories';
angular.module(moduleName, [
  Textarea,

  // For examples
  Field,
  FormActions,
]);

export default {
  title: 'Version 4/Components/Textarea/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-textarea
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      on-change="$ctrl.onChange(modelValue)"
      placeholder="Please insert your text..."
      readonly="$ctrl.readonly"
      rows="5">
    </oui-textarea>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        readonly: boolean('Read-only state', false),
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        onChange: action('onChange'),
      },
    },
  ),
);

export const WithMaxlength = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-textarea
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      maxlength="250"
      placeholder="Please insert your text..."
      rows="5">
    </oui-textarea>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        onChange: action('onChange'),
      },
    },
  ),
);

WithMaxlength.story = {
  name: 'With maxlength',
};

export const Inline = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-textarea
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      maxlength="250"
      placeholder="Please insert your text..."
      rows="5"
      inline>
    </oui-textarea>`,
    {
      $ctrl: {
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        <oui-textarea
          name="textarea"
          disabled="$ctrl.disabled"
          model="$ctrl.model"
          maxlength="250"
          placeholder="Please insert your text..."
          rows="5"
          required>
        </oui-textarea>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: {
        model: undefined,
      },
    },
  ),
);
