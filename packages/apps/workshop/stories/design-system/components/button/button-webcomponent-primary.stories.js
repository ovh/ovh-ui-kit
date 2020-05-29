import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Button from '@ovh-ux/ui-kit.button';

import readme from '@ovh-ux/ui-kit.button/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'button-webcomponent-primary.stories';
angular.module(moduleName, [Button]);

export default {
  title: 'Design System/Components/Buttons/WebComponent/Primary',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-button variant="primary" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="primary" icon-left="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="primary" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

export const Large = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-button size="l" variant="primary" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="primary" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="primary" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

export const Small = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-button size="s" variant="primary" disabled="$ctrl.disabled">
      OK
    </oui-button>
    <oui-button size="s" variant="primary" disabled="$ctrl.disabled">
      <span class="oui-icon oui-icon-folder"></span>
    </oui-button>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

export const Block = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-button variant="primary" disabled="$ctrl.disabled" block>
      Call to action
    </oui-button>
    <oui-button variant="primary" icon-left="oui-icon-folder" disabled="$ctrl.disabled" block>
      <span class="oui-icon oui-icon-folder"></span>
      Call to action
    </oui-button>
    <oui-button variant="primary" icon-right="oui-icon-folder" disabled="$ctrl.disabled" block>
      Call to action
      <span class="oui-icon oui-icon-folder"></span>
    </oui-button>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

export const Navigation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-button variant="primary" variant-nav="previous" disabled="$ctrl.disabled">
      Previous
    </oui-button>
    <oui-button variant="primary" variant-nav="next" disabled="$ctrl.disabled">
      Next
    </oui-button>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);
