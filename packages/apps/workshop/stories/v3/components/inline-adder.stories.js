import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import Field from '@ovh-ux/ui-kit.field';
import InlineAdder from '@ovh-ux/ui-kit.inline-adder';
import Numeric from '@ovh-ux/ui-kit.numeric';

import readme from '@ovh-ux/ui-kit.inline-adder/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-inline-adder-stories';
angular.module(moduleName, [
  InlineAdder,

  // For examples
  Field,
  Numeric,
]);

export default {
  title: 'Version 3/Components/Inline Adder',

  parameters: {
    notes: readme,
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-inline-adder
      on-add="$ctrl.onAdd(form)"
      on-change="$ctrl.onChange(form)"
      on-remove="$ctrl.onRemove(form)">
      <oui-inline-adder-row>
        <oui-inline-adder-field>
          <oui-field label="Field 1">
            <input type="text" class="oui-input" name="field1" ng-model="field1" required>
          </oui-field>
        </oui-inline-adder-field>
        <oui-inline-adder-field adaptive>
          <oui-field label="Field 2" size="m">
            <label class="oui-select">
              <select name="field2" ng-model="field2" class="oui-select__input" required>
                <option value="" disabled selected>Select the OS</option>
                <option value="freebsd">FreeBSD</option>
                <option value="linux">Linux</option>
                <option value="osx">OSX</option>
                <option value="windows">Windows</option>
              </select>
              <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
            </label>
          </oui-field>
        </oui-inline-adder-field>
        <oui-inline-adder-field adaptive>
          <oui-field label="Field 3">
            <oui-numeric name="field3" model="field3"></oui-numeric>
          </oui-field>
        </oui-inline-adder-field>
      </oui-inline-adder-row>
    </oui-inline-adder>`,
    {
      $ctrl: {
        onAdd: action('onAdd'),
        onChange: action('onChange'),
        onRemove: action('onRemove'),
      },
    },
  ),
);

export const MultipleRows = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-inline-adder
      on-add="$ctrl.onAdd(form)"
      on-change="$ctrl.onChange(form)"
      on-remove="$ctrl.onRemove(form)">
      <oui-inline-adder-row>
        <oui-inline-adder-field>
          <oui-field label="Field 1">
            <input type="text" class="oui-input" name="field1" ng-model="field1" required>
          </oui-field>
        </oui-inline-adder-field>
        <oui-inline-adder-field>
          <oui-field label="Field 2">
            <input type="text" class="oui-input" name="field2" ng-model="field2">
          </oui-field>
        </oui-inline-adder-field>
      </oui-inline-adder-row>
      <oui-inline-adder-row>
        <oui-inline-adder-field>
          <oui-field label="Field 3">
            <input type="text" class="oui-input" name="field3" ng-model="field3" required>
          </oui-field>
        </oui-inline-adder-field>
        <oui-inline-adder-field>
          <oui-field label="Field 4">
            <input type="text" class="oui-input" name="field4" ng-model="field4">
          </oui-field>
        </oui-inline-adder-field>
      </oui-inline-adder-row>
    </oui-inline-adder>`,
    {
      $ctrl: {
        onAdd: action('onAdd'),
        onChange: action('onChange'),
        onRemove: action('onRemove'),
      },
    },
  ),
);

MultipleRows.story = {
  name: 'Multiple rows',
};
