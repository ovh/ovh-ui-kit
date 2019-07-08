import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-guide-menu-stories';
angular.module(moduleName, [
  'oui.guide-menu',

  // For examples
  'oui.header',
]);

storiesOf('Components/Guide Menu', module)
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-guide-menu text="Guides">
      <oui-guide-menu-item on-click="$ctrl.onGuideClick()">
        Guide 2 (button)
      </oui-guide-menu-item>
      <oui-guide-menu-item on-click="$ctrl.onGuideClick()" href="#">
        Guide 1 (link)
      </oui-guide-menu-item>
      <oui-guide-menu-divider></oui-guide-menu-divider>
      <oui-guide-menu-item on-click="$ctrl.onGuideClick()" href="#" external>
        External link
      </oui-guide-menu-item>
    </oui-guide-menu>
    `, {
      $ctrl: {
        onGuideClick: action('onGuideClick'),
      },
    })),
  )
  .add(
    'With sections',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-guide-menu text="Guides">
      <oui-guide-menu-group label="Section 1">
        <oui-guide-menu-item on-click="$ctrl.onGuideClick()">
          Guide 2 (button)
        </oui-guide-menu-item>
        <oui-guide-menu-item on-click="$ctrl.onGuideClick()" href="#">
          Guide 1 (link)
        </oui-guide-menu-item>
      </oui-guide-menu-group>
      <oui-guide-menu-group label="Section 2">
        <oui-guide-menu-item on-click="$ctrl.onGuideClick()">
          Guide 2 (button)
        </oui-guide-menu-item>
        <oui-guide-menu-item on-click="$ctrl.onGuideClick()" href="#">
          Guide 1 (link)
        </oui-guide-menu-item>
      </oui-guide-menu-group>
      <oui-guide-menu-divider></oui-guide-menu-divider>
      <oui-guide-menu-item on-click="$ctrl.onGuideClick()" href="#" external>
        External link
      </oui-guide-menu-item>
    </oui-guide-menu>
    `, {
      $ctrl: {
        onGuideClick: action('onGuideClick'),
      },
    })),
  )
  .add(
    'In header',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-header heading="My title" description="My subtitle">
      <oui-guide-menu text="Guides">
        <oui-guide-menu-group label="Section 1">
          <oui-guide-menu-item on-click="$ctrl.onGuideClick()">
            Guide 2 (button)
          </oui-guide-menu-item>
          <oui-guide-menu-item on-click="$ctrl.onGuideClick()" href="#">
            Guide 1 (link)
          </oui-guide-menu-item>
        </oui-guide-menu-group>
        <oui-guide-menu-group label="Section 2">
          <oui-guide-menu-item on-click="$ctrl.onGuideClick()">
            Guide 2 (button)
          </oui-guide-menu-item>
          <oui-guide-menu-item on-click="$ctrl.onGuideClick()" href="#">
            Guide 1 (link)
          </oui-guide-menu-item>
        </oui-guide-menu-group>
        <oui-guide-menu-divider></oui-guide-menu-divider>
        <oui-guide-menu-item on-click="$ctrl.onGuideClick()" href="#" external>
          External link
        </oui-guide-menu-item>
      </oui-guide-menu>
    </oui-header>
    `, {
      $ctrl: {
        onGuideClick: action('onGuideClick'),
      },
    })),
  );
