import { storiesOf } from '@storybook/html';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-stepper-stories';
angular.module(moduleName, [
  'oui.stepper',

  // For examples
  'oui.button',
  'oui.field',
  'oui.select',
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
    'Step form states',
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
  )
  .add(
    'Disable next button',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-stepper>
      <oui-step-form
        header="Favorite ice cream flavor"
        valid="$ctrl.favorite === 'Vanilla'"
        prevent-next>
        <oui-field label="Select Vanilla! That's the best.">
          <oui-select required
                      placeholder="My favorite ice cream flavor is..."
                      items="['Chocolate', 'Strawberry', 'Vanilla', 'Coconut']"
                      model="$ctrl.favorite">
          </oui-select>
        </oui-field>
      </oui-step-form>
    </oui-stepper>
    `, {
      $ctrl: {
        favorite: null,
      },
    })),
  )
  .add(
    'Controlling opened step index',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-stepper
      current-index="$ctrl.currentStep">
      <oui-step-form
        header="Step 1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet libero ut justo molestie, iaculis accumsan metus sollicitudin. Nulla fermentum ultricies scelerisque. Vestibulum luctus mi eu porttitor dapibus. In sit amet tempor neque. Nullam vehicula sodales elit ac lacinia. Nulla quis feugiat enim. Curabitur nec diam vel enim ornare consequat. Nulla rhoncus felis quis tortor varius blandit. Nam non justo id quam sagittis gravida tincidunt et dolor. Nullam id est ac lectus efficitur venenatis sed eu erat. Pellentesque vel massa at dui sollicitudin luctus. In mi tortor, facilisis eu gravida vel, commodo nec augue. Nullam elit magna, porttitor vel dui sed, congue blandit mauris.</p>
      </oui-step-form>
      <oui-step-form
        header="Step 2">
        <p>Proin ullamcorper ullamcorper imperdiet. Ut vel diam iaculis, tristique nunc fermentum, ultrices lorem. In ultricies lacinia venenatis. Etiam sed risus interdum, pharetra tellus id, lobortis erat. Ut quis ex nibh. Pellentesque euismod condimentum ipsum id dapibus. Ut vitae felis id sapien sollicitudin tincidunt sed et mauris. Nullam facilisis, ex vel elementum porttitor, nisl metus blandit nunc, vel rhoncus tortor leo ac sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </oui-step-form>
      <oui-step-form
        header="Step 3">
        <oui-button variant="link" on-click="$ctrl.currentStep = 0">
          <span>Go to Step 1</span>
        </oui-button>
        <p>Cras sagittis felis enim, ut pharetra arcu ultrices non. Aliquam iaculis magna eget nibh laoreet, ac dapibus diam rutrum. Donec vel vehicula quam. Pellentesque at justo ut quam molestie rutrum in eget orci. Sed mollis nisl ac massa tristique, egestas pellentesque libero sodales. Morbi luctus iaculis mauris eu lobortis. Vestibulum nec aliquam metus. Sed mollis risus ipsum, vel consequat nulla aliquam sed. Phasellus tempor nunc at purus interdum euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse a fringilla elit. Etiam blandit turpis risus, sit amet sodales leo auctor ac.</p>
      </oui-step-form>
    </oui-stepper>
    `, {
      $ctrl: {
        currentStep: number('Opened step index', 1),
      },
    })),
  );
