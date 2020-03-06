import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Numeric from '@ovh-ux/ui-kit.numeric';

import readme from '@ovh-ux/ui-kit.numeric/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'numeric-webcomponent.stories';
angular.module(moduleName, [Numeric]);

export default {
  title: 'Legacy/Components/Numeric/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-numeric
      model="$ctrl.model"
      disabled="$ctrl.disabled"
      on-change="$ctrl.onChange(modelValue)">
    </oui-numeric>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
      },
    },
  ),
);

export const Limits = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-numeric
      min="2"
      max="8"
      model="$ctrl.model">
    </oui-numeric>`,
  ),
);
