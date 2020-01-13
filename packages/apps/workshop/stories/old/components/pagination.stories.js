import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.pagination/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-pagination-stories';
angular.module(moduleName, ['oui.pagination']);

storiesOf('Old/Internal/Pagination', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'One page',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-pagination
      current-offset="1"
      page-size="100"
      total-items="12">
    </oui-pagination>
    `)),
  )
  .add(
    'A few pages',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-pagination
      current-offset="$ctrl.offset"
      total-items="$ctrl.totalItems"
      on-change="$ctrl.onChange($event)">
    </oui-pagination>
    `, {
      $ctrl: {
        offset: 1,
        totalItems: 100,
        onChange: action('onChange'),
      },
    })),
  )
  .add(
    'Lots of pages',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-pagination
      current-offset="$ctrl.offset"
      total-items="$ctrl.totalItems"
      on-change="$ctrl.onChange($event)">
    </oui-pagination>
    `, {
      $ctrl: {
        offset: 1,
        totalItems: 500,
        onChange: action('onChange'),
      },
    })),
  )
  .add(
    'Huge amount of pages',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-pagination
      current-offset="$ctrl.offset"
      total-items="$ctrl.totalItems"
      on-change="$ctrl.onChange($event)">
    </oui-pagination>
    `, {
      $ctrl: {
        offset: 1,
        totalItems: 5000000,
        onChange: action('onChange'),
      },
    })),
  );
