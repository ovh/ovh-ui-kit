import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import BackButton from '@ovh-ux/ui-kit.back-button';

import readme from '@ovh-ux/ui-kit.back-button/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'back-button-webcomponent.stories';
angular.module(moduleName, [BackButton]);

export default {
  title: 'Legacy/Components/Back Button/WebComponent',

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
    <oui-back-button
      href="#"
      aria-label="Aria label for heading"
      on-click="$ctrl.onClick()">
      {{ $ctrl.text }}
    </oui-back-button>`,
    {
      $ctrl: {
        text: text('Text', 'Lorem ipsum dolor sit amet'),
        onClick: action('onClick'),
      },
    },
  ),
);
