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
  title: 'Design System/Components/Back Button/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-back-button
      href="#"
      previous-page="{{ $ctrl.previousPage }}"
      aria-label="Aria label for heading"
      on-click="$ctrl.onClick()">
    </oui-back-button>`,
    {
      $ctrl: {
        previousPage: text('Previous Page', 'Lorem ipsum'),
        onClick: action('onClick'),
      },
    },
  ),
);

export const WithHeading = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-back-button
      href="#"
      previous-page="{{ $ctrl.previousPage }}"
      aria-label="Aria label for heading"
      on-click="$ctrl.onClick()">
      {{ $ctrl.title }}
    </oui-back-button>`,
    {
      $ctrl: {
        title: text('Title', 'Lorem ipsum dolor sit amet'),
        previousPage: text('Previous Page', 'Lorem ipsum'),
        onClick: action('onClick'),
      },
    },
  ),
);
