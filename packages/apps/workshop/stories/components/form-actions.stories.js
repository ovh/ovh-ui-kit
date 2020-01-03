import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.form-actions/README.md';
import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-form-actions-stories';
angular.module(moduleName, ['oui.form-actions']);

storiesOf('Components/Form Actions', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-form-actions disabled="$ctrl.disabled"></oui-form-actions>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Custom naming',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-form-actions
      submit-text="Apply"
      cancel-text="Close"
      on-submit="$ctrl.onSubmitClick()"
      on-cancel="$ctrl.onCancelClick()"
      disabled="$ctrl.disabled">
    </oui-form-actions>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onCancelClick: action('onCancelClick'),
        onSubmitClick: action('onSubmitClick'),
      },
    })),
  );
