import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../src/utils';

// Create mock module for the stories
const moduleName = 'oui-modal-stories';
angular.module(moduleName, ['oui.modal', 'oui.field', 'oui.password']);

storiesOf('Organisms/Modal', module)
  .add(
    'Open a modal',
    forModule(moduleName).createElement(() => compileTemplate(`
      <oui-modal heading="Settings for MyServer01"
                primary-label="Save"
                primary-action="$ctrl.confirm = true"
                secondary-label="Cancel"
                secondary-action="$ctrl.cancel = true"
                on-dismiss="$ctrl.cancel = true">
        <form novalidate name="serverAccessForm">
          <oui-field label="Server name" size="xl" error-messages="{
              pattern: 'Name must be alphabetic with a length between 3 and 8.'
            }">
            <input class="oui-input"
                  type="text"
                  placeholder="Name of the server"
                  name="name"
                  ng-model="$ctrl.name"
                  ng-pattern="/^[a-zA-Z]{3,8}$/"
                  required>
          </oui-field>
          <oui-field label="Server password" size="xl">
            <oui-password placeholder="Password to access the server"
                          model="$ctrl.password">
          </oui-field>
        </form>
      </oui-modal>
    `,
    {
      $ctrl: {
        name: 'MyServer01',
        password: 'zxcvbn',
      },
    })),
  );
