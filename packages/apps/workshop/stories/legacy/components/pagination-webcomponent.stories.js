import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import Pagination from '@ovh-ux/ui-kit.pagination';

import readme from '@ovh-ux/ui-kit.pagination/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'pagination-webcomponent.stories';
angular.module(moduleName, [Pagination]);

export default {
  title: 'Legacy/Components/Pagination/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const OnePage = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-pagination
      current-offset="1"
      page-size="100"
      total-items="12">
    </oui-pagination>`,
  ),
);

OnePage.story = {
  name: 'One page',
};

export const AFewPages = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-pagination
      current-offset="$ctrl.offset"
      total-items="$ctrl.totalItems"
      on-change="$ctrl.onChange($event)">
    </oui-pagination>`,
    {
      $ctrl: {
        offset: 1,
        totalItems: 100,
        onChange: action('onChange'),
      },
    },
  ),
);

AFewPages.story = {
  name: 'A few pages',
};

export const LotsOfPages = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-pagination
      current-offset="$ctrl.offset"
      total-items="$ctrl.totalItems"
      on-change="$ctrl.onChange($event)">
    </oui-pagination>`,
    {
      $ctrl: {
        offset: 1,
        totalItems: 500,
        onChange: action('onChange'),
      },
    },
  ),
);

LotsOfPages.story = {
  name: 'Lots of pages',
};

export const HugeAmountOfPages = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-pagination
      current-offset="$ctrl.offset"
      total-items="$ctrl.totalItems"
      on-change="$ctrl.onChange($event)">
    </oui-pagination>`,
    {
      $ctrl: {
        offset: 1,
        totalItems: 5000000,
        onChange: action('onChange'),
      },
    },
  ),
);

HugeAmountOfPages.story = {
  name: 'Huge amount of pages',
};
