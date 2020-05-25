import { select, text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Tooltip from '@ovh-ux/ui-kit.tooltip';

import readme from '@ovh-ux/ui-kit.tooltip/README.md';
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

const moduleName = 'tooltip.stories';
angular.module(moduleName, [Tooltip]);

export default {
  title: 'Design System/Directives/Tooltip',

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
        <button class="oui-button oui-button_primary"
          oui-tooltip="${text('Text', 'Lorem ipsum')}"
          oui-tooltip-placement="${select(placement.label, placement.options, placement.default)}">
          focus or hover me
        </button>
      </div>
    </div>`,
  ),
);

export const OnInput = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <div class="doc-centered">
      <div class="doc-centered__content">
        <input class="oui-input oui-input_inline"
          placeholder="focus or hover me"
          type="text"
          oui-tooltip="${text('Text', 'Lorem ipsum')}"
          oui-tooltip-placement="${select(placement.label, placement.options, placement.default)}"></textarea>
      </div>
    </div>`,
  ),
);

export const OnLink = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <div class="doc-centered">
      <div class="doc-centered__content">
        <a class="oui-link"
          href="#"
          oui-tooltip="${text('Text', 'Lorem ipsum')}"
          oui-tooltip-placement="${select(placement.label, placement.options, placement.default)}">
          focus or hover me
        </a>
      </div>
    </div>`,
  ),
);
