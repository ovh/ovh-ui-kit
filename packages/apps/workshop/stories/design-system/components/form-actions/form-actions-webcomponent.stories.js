import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import '@ovh-ux/ui-kit.form-actions';

import readme from '@ovh-ux/ui-kit.form-actions/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'form-actions-webcomponent.stories';
angular.module(moduleName, ['oui.form-actions']);

export default {
  title: 'Design System/Components/Form Actions/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-form-actions disabled="$ctrl.disabled"></oui-form-actions>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

export const CustomNaming = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-form-actions
      submit-text="Apply"
      cancel-text="Close"
      on-submit="$ctrl.onSubmitClick()"
      on-cancel="$ctrl.onCancelClick()"
      disabled="$ctrl.disabled">
    </oui-form-actions>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onCancelClick: action('onCancelClick'),
        onSubmitClick: action('onSubmitClick'),
      },
    },
  ),
);

CustomNaming.storyName = 'Custom naming';
