import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';
import { number, select } from '@storybook/addon-knobs';

import '@ovh-ux/ui-kit/dist/js/oui-pagination';

import readme from '@ovh-ux/ui-kit.pagination/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'pagination-webcomponent.stories';
angular.module(moduleName, ['oui.pagination']);

const mode = {
  label: 'Mode',
  options: {
    Button: 'button',
    Select: 'select',
    Input: 'input',
  },
  default: '',
};

export default {
  title: 'Design System/Components/Pagination/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-pagination
      current-offset="${number('Current offset', 1)}"
      total-items="${number('Total items', 100)}">
    </oui-pagination>`,
  ),
);

export const PageSize = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-pagination
      current-offset="${number('Current offset', 1)}"
      page-size="${number('Page size', 50)}"
      page-size-max="${number('Page size max', 100)}"
      total-items="${number('Total items', 100)}">
    </oui-pagination>`,
  ),
);

export const Modes = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-pagination
      mode="${select(mode.label, mode.options, mode.default)}"
      current-offset="$ctrl.offset"
      total-items="$ctrl.totalItems"
      on-change="$ctrl.onChange($event)">
    </oui-pagination>`,
    {
      $ctrl: {
        offset: number('Current offset', 1),
        totalItems: number('Total items', 100),
        onChange: action('onChange'),
      },
    },
  ),
);
