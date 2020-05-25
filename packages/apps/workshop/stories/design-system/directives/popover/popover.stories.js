import { select, text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Popover from '@ovh-ux/ui-kit.popover';

import readme from '@ovh-ux/ui-kit.popover/README.md';
import { compileTemplate } from '../../../../src/utils';

const placement = {
  label: 'Placement',
  options: {
    Default: '',
    'Top Start': 'top-start',
    Top: 'top',
    'Top End': 'top-end',
    'Right Start': 'right-start',
    Right: 'right',
    'Right End': 'right-end',
    'Left Start': 'left-start',
    Left: 'left',
    'Left End': 'left-end',
    'Bottom Start': 'bottom-start',
    Bottom: 'bottom',
    'Bottom End': 'bottom-end',
  },
  default: '',
};

const moduleName = 'popover.stories';
angular.module(moduleName, [Popover]);

export default {
  title: 'Design System/Directives/Popover',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const OnButton = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <div class="doc-centered">
      <div class="doc-centered__content">
        <button type="button"
          class="oui-button oui-button_primary"
          oui-popover="${text('Text', 'This is an awesome popover content.')}"
          oui-popover-placement="${select(placement.label, placement.options, placement.default)}">
          Click to toggle popover
        </button>
      </div>
    </div>`,
  ),
);

export const OnHelpButton = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <div class="doc-centered">
      <div class="doc-centered__content">
        <button type="button" class="oui-popover-button"
          oui-popover="${text('Text', 'This is an awesome popover content.')}"
          oui-popover-placement="right">
        </button>
    </div>
  </div>`,
  ),
);
