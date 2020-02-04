import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.textarea/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-textarea-stories';
angular.module(moduleName, ['oui.textarea']);

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
        readonly: boolean('Read-only state', false),
        model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        onChange: action('onChange'),
      },
    },
  ),
);

WithMaxlength.story = {
  name: 'With maxlength',
};
