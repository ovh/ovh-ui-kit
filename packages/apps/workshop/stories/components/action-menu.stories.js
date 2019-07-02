import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-action-menu-stories';
angular.module(moduleName, ['oui.action-menu']);

storiesOf('Documentation|Components/Action Menu', module)
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
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
      </oui-action-menu>
    `,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onActionClick: action('onActionClick'),
      },
    })),
  )
  .add(
    'Compact',
    forModule(moduleName).createElement(() => compileTemplate(`
      <oui-action-menu compact disabled="$ctrl.disabled">
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
      </oui-action-menu>
    `,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onActionClick: action('onActionClick'),
      },
    })),
  );
