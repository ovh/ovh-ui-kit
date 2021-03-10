import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import '@ovh-ux/ui-kit/dist/js/oui-button';

import readme from '@ovh-ux/ui-kit.button/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'button-webcomponent-ghost.stories';
angular.module(moduleName, ['oui.button']);

export default {
  title: 'Design System/Components/Buttons/WebComponent/Ghost',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-button variant="link" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="link" icon-left="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="link" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
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
    <oui-button size="l" variant="link" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="link" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="link" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
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
    <oui-button size="s" variant="link" disabled="$ctrl.disabled">
      OK
    </oui-button>
    <oui-button size="s" variant="link" disabled="$ctrl.disabled">
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
    <oui-button variant="link" disabled="$ctrl.disabled" block>
      Call to action
    </oui-button>
    <oui-button variant="link" icon-left="oui-icon-folder" disabled="$ctrl.disabled" block>
      <span class="oui-icon oui-icon-folder"></span>
      Call to action
    </oui-button>
    <oui-button variant="link" icon-right="oui-icon-folder" disabled="$ctrl.disabled" block>
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
    <oui-button variant="link" variant-nav="previous" disabled="$ctrl.disabled">
      Previous
    </oui-button>
    <oui-button variant="link" variant-nav="next" disabled="$ctrl.disabled">
      Next
    </oui-button>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);
