import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

// Create mock module for the stories
const moduleName = 'oui-stepper-stories';
angular.module(moduleName, ['oui.field', 'oui.stepper']);

storiesOf('Organisms/Stepper', module)
  .add(
    'Simple stepper ',
    forModule(moduleName).createElement(compile => compile`
      <oui-stepper>
        <oui-step-form header="Step 1" description="This is a description">
          <oui-field label="Email" size="xl">
            <input class="oui-input" type="email" name="email" ng-model="$ctrl.user.email" required>
          </oui-field>
        </oui-step-form>
        <oui-step-form header="Step 2" description="This is a description" skippable>
          <oui-field label="Firstname" size="xl">
            <input class="oui-input" type="text" name="firstname" ng-model="$ctrl.user.firstname" maxlength="32">
          </oui-field>
        </oui-step-form>
        <oui-step-form header="Step 3" description="This is a description" skippable>
          <oui-field label="Lastname" size="xl">
            <input class="oui-input" type="text" name="lastname" ng-model="$ctrl.user.lastname" maxlength="32">
          </oui-field>
        </oui-step-form>
      </oui-stepper>
    `),
  );
