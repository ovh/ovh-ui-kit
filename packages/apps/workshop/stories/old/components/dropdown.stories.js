import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.dropdown/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-dropdown-stories';
angular.module(moduleName, ['oui.dropdown']);

storiesOf('Old|Components/Dropdown', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-dropdown>
      <oui-dropdown-trigger
        disabled="$ctrl.disabled"
        text="Actions">
      </oui-dropdown-trigger>
      <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
          <oui-dropdown-item on-click="$ctrl.onActionClick()">
            Action 1 (button)
          </oui-dropdown-item>
          <oui-dropdown-item href="#">
            Action 2 (link/href)
          </oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
          <oui-dropdown-item disabled>
            Action 3 (disabled)
          </oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item href="#" external>
          External link
        </oui-dropdown-item>
        <oui-dropdown-item href="#" sticky>
          Start guided tour
        </oui-dropdown-item>
      </oui-dropdown-content>
    </oui-dropdown>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onActionClick: action('onActionClick'),
      },
    })),
  )
  .add(
    'Placement',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-dropdown placement="start">
      <oui-dropdown-trigger text="Start"></oui-dropdown-trigger>
      <oui-dropdown-content>
        <oui-dropdown-item href="#">Action 1</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 2</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 3</oui-dropdown-item>
      </oui-dropdown-content>
    </oui-dropdown>

    <oui-dropdown placement="center">
      <oui-dropdown-trigger text="Center"></oui-dropdown-trigger>
      <oui-dropdown-content>
        <oui-dropdown-item href="#">Action 1</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 2</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 3</oui-dropdown-item>
      </oui-dropdown-content>
    </oui-dropdown>

    <oui-dropdown placement="end">
      <oui-dropdown-trigger text="End"></oui-dropdown-trigger>
      <oui-dropdown-content>
        <oui-dropdown-item href="#">Action 1</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 2</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 3</oui-dropdown-item>
      </oui-dropdown-content>
    </oui-dropdown>
    `)),
  )
  .add(
    'With arrow',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-dropdown placement="start" arrow>
      <oui-dropdown-trigger text="Start"></oui-dropdown-trigger>
      <oui-dropdown-content>
        <oui-dropdown-item href="#">Action 1</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 2</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 3</oui-dropdown-item>
      </oui-dropdown-content>
    </oui-dropdown>

    <oui-dropdown placement="center" arrow>
      <oui-dropdown-trigger text="Center"></oui-dropdown-trigger>
      <oui-dropdown-content>
        <oui-dropdown-item href="#">Action 1</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 2</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 3</oui-dropdown-item>
      </oui-dropdown-content>
    </oui-dropdown>

    <oui-dropdown placement="end" arrow>
      <oui-dropdown-trigger text="End"></oui-dropdown-trigger>
      <oui-dropdown-content>
        <oui-dropdown-item href="#">Action 1</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 2</oui-dropdown-item>
        <oui-dropdown-item href="#">Action 3</oui-dropdown-item>
      </oui-dropdown-content>
    </oui-dropdown>
    `)),
  )
  .add(
    'Custom trigger button',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-dropdown>
      <button type="button" class="oui-button oui-button_secondary oui-button_s" oui-dropdown-trigger>
        <span class="oui-icon oui-icon-settings" aria-hidden="true"></span>
      </button>
      <oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
          <oui-dropdown-item on-click="$ctrl.onActionClick()">Action 1 (button)</oui-dropdown-item>
          <oui-dropdown-item href="#">Action 2 (link/href)</oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
          <oui-dropdown-item disabled>Action 3 (disabled)</oui-dropdown-item>
          <oui-dropdown-item state="showcase.oui-angular">Action 4 (link/state)</oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item href="#" external>External link</oui-dropdown-item>
        <oui-dropdown-item href="#" sticky>Start guided tour</oui-dropdown-item>
      </oui-dropdown-content>
    </oui-dropdown>
    `)),
  )
  .add(
    'Custom content menu',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-dropdown>
      <oui-dropdown-trigger text="Custom menu"></oui-dropdown-trigger>
      <div class="oui-dropdown-menu" oui-dropdown-content>
        <oui-dropdown-group label="Lorem ipsum">
          <oui-dropdown-item on-click="$ctrl.onActionClick()">Action 1 (button)</oui-dropdown-item>
          <oui-dropdown-item href="#">Action 2 (link/href)</oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-group label="Dolor sit amet">
          <oui-dropdown-item disabled>Action 3 (disabled)</oui-dropdown-item>
          <oui-dropdown-item state="showcase.oui-angular">Action 4 (link/state)</oui-dropdown-item>
        </oui-dropdown-group>
        <oui-dropdown-divider></oui-dropdown-divider>
        <oui-dropdown-item href="#" external>External link</oui-dropdown-item>
        <oui-dropdown-item href="#" sticky>Start guided tour</oui-dropdown-item>
      </div>
    </oui-dropdown>
    `)),
  );
