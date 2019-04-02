import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../src/utils';

// Create mock module for the stories
const moduleName = 'oui-action-menu-stories';
angular.module(moduleName, ['oui.action-menu']);

storiesOf('Components/Action Menu', module)
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
      <oui-action-menu text="Actions" disabled="$ctrl.disabled">
        <oui-action-menu-item href="#">Action 1 (link)</oui-action-menu-item>
        <oui-action-menu-item on-click="$ctrl.onActionClick()">Action 2 (button)</oui-action-menu-item>
        <oui-action-menu-item disabled>Action 3 (disabled)</oui-action-menu-item>
        <oui-action-menu-divider></oui-action-menu-divider>
        <oui-action-menu-item href="#" external>External link</oui-action-menu-item>
      </oui-action-menu>
    `,
    {
      $ctrl: {
        disabled: boolean('Disabled', false),
      },
    })),
  )
  .add(
    'Compact',
    forModule(moduleName).createElement(() => compileTemplate(`
      <oui-action-menu compact disabled="$ctrl.disabled">
        <oui-action-menu-item href="#">Action 1 (link)</oui-action-menu-item>
        <oui-action-menu-item on-click="$ctrl.onActionClick()">Action 2 (button)</oui-action-menu-item>
        <oui-action-menu-item disabled>Action 3 (disabled)</oui-action-menu-item>
        <oui-action-menu-divider></oui-action-menu-divider>
        <oui-action-menu-item href="#" external>External link</oui-action-menu-item>
      </oui-action-menu>
    `,
    {
      $ctrl: {
        disabled: boolean('Disabled', false),
      },
    })),
  );
