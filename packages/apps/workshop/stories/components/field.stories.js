import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-field-stories';
angular.module(moduleName, [
  'oui.field',

  // For examples
  'oui.form-actions',
  'oui.checkbox',
  'oui.radio',
  'oui.switch',
  'oui.textarea',
  'oui.select',
  'oui.numeric',
  'oui.calendar',
]);

storiesOf('Components/Field', module)
  .add(
    'Input',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="inputForm">
      <oui-field label="Lastname"
        help-text="At least 3 chars"
        size="xl">
        <input
          class="oui-input"
          type="text"
          id="lastname"
          name="lastname"
          ng-model="$ctrl.user.lastname"
          required
          minlength="3"
          maxlength="32">
      </oui-field>

      <oui-field label="Email" size="xl">
        <input
          class="oui-input"
          type="email"
          id="email"
          name="email"
          ng-model="$ctrl.user.email">
      </oui-field>

      <oui-field label="Username"
        error-messages="{
          pattern: 'Username must be alphabetic with a length between 3 and 8.'
        }"
        size="xl">
        <input
          class="oui-input"
          type="text"
          id="username"
          name="username"
          ng-model="$ctrl.user.username"
          ng-pattern="/^[a-zA-Z]{3,8}$/">
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onActionClick: action('onActionClick'),
      },
    })),
  )
  .add(
    'Label popover',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="inputForm">
      <oui-field label="Lastname"
        help-text="At least 3 chars"
        label-popover="In the LastName field, enter your family name as the family name appears on your passport. The last name is required to complete the application."
        size="xl">
        <input
          class="oui-input"
          type="text"
          id="lastname"
          name="lastname"
          ng-model="$ctrl.model"
          required
          minlength="3"
          maxlength="32">
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>
    `)),
  )
  .add(
    'Checkbox',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="checkboxForm">
      <oui-field label="Server options">
        <oui-checkbox
          name="ssl"
          model="$ctrl.ssl"
          required>
          SSL
        </oui-checkbox>
        <oui-checkbox
          name="hsts"
          model="$ctrl.hsts">
          HSTS
        </oui-checkbox>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>
    `)),
  )
  .add(
    'Radio',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="radioForm">
      <oui-field label="Protocol">
        <oui-radio
          name="protocol"
          model="$ctrl.protocol"
          value="'http'"
          required>
          HTTP
        </oui-radio>
        <oui-radio
          name="protocol"
          model="$ctrl.protocol"
          value="'tcp'"
          required>
          TCP
        </oui-radio>
        <oui-radio
          name="protocol"
          model="$ctrl.protocol"
          value="'udp'"
          required>
          UDP
        </oui-radio>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>
    `)),
  )
  .add(
    'Switch',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="switchForm">
      <oui-field label="Switch options" help-text="Helper text">
        <oui-switch
          name="switch"
          model="$ctrl.model"
          required>
        </oui-switch>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>
    `)),
  )
  .add(
    'Textarea',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="textareaForm">
      <oui-field label="Server description" size="xl">
        <textarea
          class="oui-textarea"
          id="description"
          name="description"
          ng-model="$ctrl.model1"
          required>
        </textarea>
      </oui-field>

      <oui-field label="Cluster description" size="xl">
        <oui-textarea
          model="$ctrl.model2"
          id="description-2"
          name="description-2"
          placeholder="Please insert your text..."
          maxlength="10"
          required>
        </oui-textarea>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>
    `)),
  )
  .add(
    'Select',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="selectForm">
      <oui-field label="OS" size="m">
        <label class="oui-select">
          <select
            id="os"
            name="os"
            ng-model="os"
            class="oui-select__input"
            required>
            <option ng-value="undefined">Select the OS</option>
            <option value="freebsd">FreeBSD</option>
            <option value="linux">Linux</option>
            <option value="osx">OSX</option>
            <option value="windows">Windows</option>
          </select>
          <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
        </label>
      </oui-field>

      <oui-field label="Recovery OS" size="m">
        <oui-select name="recovery_os"
          model="$ctrl.recoveryOs"
          title="Select the recovery OS"
          placeholder="Select the recovery OS..."
          items="$ctrl.osList"
          match="label"
          required>
        </oui-select>
      </oui-field>

      <oui-field label="Recovery OS" size="m">
        <oui-select
          name="recovery_os2"
          model="$ctrl.recoveryOs2"
          title="Select the recovery OS"
          placeholder="Select the recovery OS..."
          items="$ctrl.osList"
          match="label"
          required
          multiple>
        </oui-select>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>
    `, {
      $ctrl: {
        osList: [{
          name: 'freebsd',
          label: 'FreeBSD',
        }, {
          name: 'linux',
          label: 'Linux',
        }, {
          name: 'osx',
          label: 'OSX',
        }, {
          name: 'windows',
          label: 'Windows',
        }],
      },
    })),
  )
  .add(
    'Numeric',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="numericForm">
      <oui-field label="Number of servers"
        help-text="Select the number of servers in your cluster">
        <oui-numeric
          id="serversCount"
          name="serversCount"
          model="$ctrl.serversCount"
          min="1">
        </oui-numeric>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>
    `)),
  )
  .add(
    'Calendar',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="calendarForm">
      <oui-field label="Automatic renewal"
        size="xl">
        <oui-calendar
          id="date"
          name="date"
          model="$ctrl.model"
          required>
        </oui-calendar>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    <form>
    `)),
  );
