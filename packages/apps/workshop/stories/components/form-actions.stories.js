import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-form-actions-stories';
angular.module(moduleName, ['oui.form-actions']);

storiesOf('Components/Form Actions', module)
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-form-actions></oui-form-actions>
    `)), {
      notes: 'Cancel button is hidden if there is no `href` or `on-cancel` attributes.',
    },
  )
  .add(
    'Custom naming',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-form-actions
      submit-text="Apply"
      cancel-text="Close"
      on-submit="$ctrl.onSubmitClick()"
      on-cancel="$ctrl.onCancelClick()">
    </oui-form-actions>
    `, {
      $ctrl: {
        onCancelClick: action('onCancelClick'),
        onSubmitClick: action('onSubmitClick'),
      },
    }))
      .add(
        'Disabled submit action',
        forModule(moduleName).createElement(() => compileTemplate(`
      <oui-form-actions
        submit-text="Apply"
        cancel-text="Close"
        on-cancel="$ctrl.onCancelClick()"
        disabled>
      </oui-form-actions>
      `, {
          $ctrl: {
            onCancelClick: action('onCancelClick'),
          },
        })),
      ),
  );
