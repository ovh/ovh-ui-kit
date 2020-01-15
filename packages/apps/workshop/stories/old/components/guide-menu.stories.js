import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.guide-menu/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-guide-menu-stories';
angular.module(moduleName, [
  'oui.guide-menu',

  // For examples
  'oui.header',
]);

export default {
  title: 'Old/Components/Guide Menu',

  parameters: {
    notes: readme,
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
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
    </oui-guide-menu>`,
    {
      $ctrl: {
        onGuideClick: action('onGuideClick'),
      },
    },
  ),
);

export const WithSections = forModule(moduleName).createElement(
  () => compileTemplate(
    `
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
    </oui-guide-menu>`,
    {
      $ctrl: {
        onGuideClick: action('onGuideClick'),
      },
    },
  ),
);

WithSections.story = {
  name: 'With sections',
};

export const InHeader = forModule(moduleName).createElement(
  () => compileTemplate(
    `
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
    </oui-header>`,
    {
      $ctrl: {
        onGuideClick: action('onGuideClick'),
      },
    },
  ),
);

InHeader.story = {
  name: 'In header',
};
