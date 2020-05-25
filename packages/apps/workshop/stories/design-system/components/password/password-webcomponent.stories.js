/* eslint-disable max-classes-per-file */
import zxcvbn from 'zxcvbn';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Field from '@ovh-ux/ui-kit.field';
import FormActions from '@ovh-ux/ui-kit.form-actions';
import Password from '@ovh-ux/ui-kit.password';

import readme from '@ovh-ux/ui-kit.password/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'password-webcomponent.stories';
angular.module(moduleName, [
  Password,

  // For examples
  Field,
  FormActions,
]);

export default {
  title: 'Design System/Components/Password/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Normal = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-password
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      placeholder="Password">
    </oui-password>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form name="form" novalidate>
      <oui-field label="Password">
        <oui-password
          disabled="$ctrl.disabled"
          model="$ctrl.model"
          minlength="4"
          maxlength="16"
          pattern="^[a-zA-Z0-9]+$"
          required>
        </oui-password>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

export const PasswordRulesStrength = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form name="form" novalidate>
      <oui-field label="Password">
        <oui-password
          model="$ctrl.model"
          on-change="$ctrl.getPasswordScore(modelValue)"
          required>
          <oui-password-strength score="$ctrl.passwordScore"></oui-password-strength>
          <oui-password-rule validator="$ctrl.checkPasswordLength(modelValue)">Must contain between 8 and 30 characters</oui-password-rule>
          <oui-password-rule pattern="[0-9]+">Have at least one number</oui-password-rule>
          <oui-password-rule pattern="[A-Z]+">Have at least capital letter</oui-password-rule>
        </oui-password>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: new (class {
        constructor() {
          this.minLength = 8;
          this.maxLength = 30;
        }

        getPasswordScore(password) {
          const result = zxcvbn(password);
          this.passwordFeedback = result.feedback.suggestions.join(' ');
          this.passwordScore = result.score;
        }

        checkPasswordLength(password) {
          return (
            angular.isString(password)
            && password.length >= this.minLength
            && password.length <= this.maxLength
          );
        }
      })(),
    },
  ),
);

PasswordRulesStrength.story = {
  name: 'Password rules & strength',
};

export const CustomStrengthFeedback = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form name="form" novalidate>
      <oui-field label="Password">
        <oui-password
          model="$ctrl.model"
          on-change="$ctrl.getPasswordScore(modelValue)"
          required>
          <oui-password-strength score="$ctrl.passwordScore" ng-switch="$ctrl.passwordScore">
            <span ng-switch-when="4">Score 4: Etiam volutpat congue odio imperdiet tincidunt.</span>
            <span ng-switch-when="3">Score 3: Suspendisse vehicula ut nisl non laoreet.</span>
            <span ng-switch-when="2">Score 2: Curabitur malesuada mi lectus, eget pharetra erat malesuada sed.</span>
            <span ng-switch-when="1">Score 1: Vestibulum pulvinar congue lacus sed ultricies.</span>
            <span ng-switch-default="">Score 0: Lorem ipsum dolor sit amet.</span>
          </oui-password-strength>
        </oui-password>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: new (class {
        getPasswordScore(password) {
          const result = zxcvbn(password);
          this.passwordFeedback = result.feedback.suggestions.join(' ');
          this.passwordScore = result.score;
        }
      })(),
    },
  ),
);

CustomStrengthFeedback.story = {
  name: 'Custom strength feedback',
};

export const ConfirmValidation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form name="form" novalidate>
      <oui-field label="Password">
        <oui-password
          model="$ctrl.model1"
          required>
          <oui-password-rule validator="$ctrl.checkPasswordLength(modelValue)">Must contain between 8 and 30 characters</oui-password-rule>
          <oui-password-rule pattern="[0-9]+">Have at least one number</oui-password-rule>
          <oui-password-rule pattern="[A-Z]+">Have at least capital letter</oui-password-rule>
        </oui-password>
      </oui-field>

      <oui-field label="Confirm Password">
        <oui-password
          model="$ctrl.model2"
          confirm="$ctrl.model1"
          required>
        </oui-password>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: new (class {
        constructor() {
          this.minLength = 8;
          this.maxLength = 30;
        }

        checkPasswordLength(password) {
          return (
            angular.isString(password)
            && password.length >= this.minLength
            && password.length <= this.maxLength
          );
        }
      })(),
    },
  ),
);

ConfirmValidation.story = {
  name: 'Confirm validation',
};
