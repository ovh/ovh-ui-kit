import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.chips/README.md';
import { compileTemplate } from '../../src/utils';

import { items } from '../_data/chips.data.json';

// Create mock module for the stories
const moduleName = 'oui-chips-stories';
angular.module(moduleName, ['oui.chips']);

storiesOf('Components/Chips/Inline', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-chips items="$ctrl.items"></oui-chips>
    `, {
      $ctrl: {
        items,
      },
    })),
  )
  .add(
    'Closable',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-chips items="$ctrl.items" on-remove="$ctrl.onRemove(items, removed)" closable></oui-chips>
    `, {
      $ctrl: {
        items,
        onRemove: action('onRemove'),
      },
    })),
  );

storiesOf('Components/Chips/Stacked', module)
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-chips items="$ctrl.items" stacked></oui-chips>
    `, {
      $ctrl: {
        items,
      },
    })),
  )
  .add(
    'Closable',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-chips items="$ctrl.items" stacked on-remove="$ctrl.onRemove(items, removed)" closable></oui-chips>
    `, {
      $ctrl: {
        items,
        onRemove: action('onRemove'),
      },
    })),
  );
