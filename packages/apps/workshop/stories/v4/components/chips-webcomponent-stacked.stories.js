import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.chips/README.md';
import { compileTemplate } from '../../../src/utils';

import { items } from '../../_data/chips.data.json';

// Create mock module for the stories
const moduleName = 'oui-chips-stories';
angular.module(moduleName, ['oui.chips']);

export default {
  title: 'Version 4/Components/Chips/WebComponent/Stacked',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-chips items="$ctrl.items" stacked></oui-chips>`,
    {
      $ctrl: {
        items,
      },
    },
  ),
);

export const Closable = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-chips items="$ctrl.items" stacked on-remove="$ctrl.onRemove(items, removed)" closable></oui-chips>`,
    {
      $ctrl: {
        items,
        onRemove: action('onRemove'),
      },
    },
  ),
);
