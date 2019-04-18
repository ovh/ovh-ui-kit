import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-stepper-stories';
angular.module(moduleName, [
  'oui.stepper',

  // For examples
  'oui.field',
]);

storiesOf('Components/Stepper', module)
  .add(
    'Simple ',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-stepper
      on-init="$ctrl.onInit()"
      on-finish="$ctrl.onFinish(forms)">
      <oui-step-form
        header="Step 1"
        description="This is a description"
        on-cancel="$ctrl.onCancel()"
        on-focus="$ctrl.onFocus()"
        on-submit="$ctrl.onSubmit(form)">
        <oui-field label="Email" size="xl">
          <input class="oui-input" type="email" name="email" ng-model="$ctrl.user.email" required>
        </oui-field>
      </oui-step-form>

      <oui-step-form
        header="Step 2"
        description="This is a description"
        on-cancel="$ctrl.onCancel()"
        on-focus="$ctrl.onFocus()"
        on-submit="$ctrl.onSubmit(form)"
        skippable>
        <oui-field label="Firstname" size="xl">
          <input class="oui-input" type="text" name="firstname" ng-model="$ctrl.user.firstname" maxlength="32">
        </oui-field>
      </oui-step-form>

      <oui-step-form
        header="Step 3"
        description="This is a description"
        on-cancel="$ctrl.onCancel()"
        on-focus="$ctrl.onFocus()"
        on-submit="$ctrl.onSubmit(form)"
        skippable>
        <oui-field label="Lastname" size="xl">
          <input class="oui-input" type="text" name="lastname" ng-model="$ctrl.user.lastname" maxlength="32">
        </oui-field>
      </oui-step-form>
    </oui-stepper>
    `, {
      $ctrl: {
        onCancel: action('onCancel'),
        onFinish: action('onFinish'),
        onFocus: action('onFocus'),
        onInit: action('onInit'),
        onSubmit: action('onSubmit'),
      },
    })),
  )
  .add(
    'States ',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-stepper>
      <oui-step-form
        header="States"
        disabled="$ctrl.disabled"
        loading="$ctrl.loading"
        loading-text="Loading text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat.
          Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu.
          Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus.
          Aenean elementum vel odio quis rutrum. In quis tellus in neque vulputate
          rhoncus vitae ut justo. Ut dignissim varius est in consequat.
          Donec nisi mauris, pellentesque condimentum congue in, blandit ut arcu.
          In et elit ipsum.
        </p>
      </oui-step-form>
    </oui-stepper>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        loading: boolean('Loading state', true),
      },
    })),
  );
