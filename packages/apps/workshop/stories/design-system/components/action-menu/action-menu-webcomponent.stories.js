import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import '@ovh-ux/ui-kit/dist/js/oui-action-menu';

import readme from '@ovh-ux/ui-kit.action-menu/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'action-menu-webcomponent.stories';
angular.module(moduleName, ['oui.action-menu']);

export default {
  title: 'Design System/Components/Action Menu/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-action-menu text="Actions" disabled="$ctrl.disabled">
      <oui-action-menu-item on-click="$ctrl.onActionClick('Action 1')">
        Action 1 (button)
      </oui-action-menu-item>
      <oui-action-menu-item on-click="$ctrl.onActionClick('Action 2')" href="#">
        Action 2 (link)
      </oui-action-menu-item>
      <oui-action-menu-item disabled>
        Action 3 (disabled)
      </oui-action-menu-item>
      <oui-action-menu-divider></oui-action-menu-divider>
      <oui-action-menu-item on-click="$ctrl.onActionClick('External link')" href="#" external>
        External link
      </oui-action-menu-item>
    </oui-action-menu>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onActionClick: action('onActionClick'),
      },
    },
  ),
);

export const Compact = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-action-menu aria-label="Actions" compact disabled="$ctrl.disabled">
      <oui-action-menu-item on-click="$ctrl.onActionClick('Action 1')">
        Action 1 (button)
      </oui-action-menu-item>
      <oui-action-menu-item on-click="$ctrl.onActionClick('Action 2')" href="#">
        Action 2 (link)
      </oui-action-menu-item>
      <oui-action-menu-item disabled>
        Action 3 (disabled)
      </oui-action-menu-item>
      <oui-action-menu-divider></oui-action-menu-divider>
      <oui-action-menu-item on-click="$ctrl.onActionClick('External link')" href="#" external>
        External link
      </oui-action-menu-item>
    </oui-action-menu>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onActionClick: action('onActionClick'),
      },
    },
  ),
);
