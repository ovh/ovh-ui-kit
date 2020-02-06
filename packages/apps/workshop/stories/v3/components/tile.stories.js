import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import ActionMenu from '@ovh-ux/ui-kit.action-menu';
import Tile from '@ovh-ux/ui-kit.tile';

import readme from '@ovh-ux/ui-kit.tile/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-tile-stories';
angular.module(moduleName, [
  Tile,

  // For examples
  ActionMenu,
]);

export default {
  title: 'Version 3/Components/Tile',

  parameters: {
    notes: readme,
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-tile
      heading="An awesome title for an awesome tile"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      loading="$ctrl.loading">
      Sed tempus sapien erat, et molestie magna tristique non.
      Sed tincidunt eu augue tempor consectetur. Nullam iaculis,
      nibh mollis vulputate elementum, neque est iaculis nisi,
      et gravida turpis erat non dui. Nunc eget tortor et enim
      interdum euismod sed eget purus. Integer in metus ultrices,
      ultricies lacus in, fermentum nisi. Cras sed neque id dui
      fermentum faucibus. Mauris mollis arcu justo, eget convallis
      massa volutpat ac.
    </oui-tile>`,
    {
      $ctrl: {
        loading: boolean('Loading state', false),
      },
    },
  ),
);

export const WithButtons = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-tile heading="Title" description="Lorem dolor sit amet" loading="$ctrl.loading">
      <oui-tile-button on-click="$ctrl.onClick()">Button 1</oui-tile-button>
      <oui-tile-button href="#">Button 2</oui-tile-button>
      <oui-tile-button aria-label="access to .." href="#" external>Button 3</oui-tile-button>
      <oui-tile-button disabled>Button 4 (disabled)</oui-tile-button>
      <oui-tile-button href="#" disabled>Button 5 (disabled)</oui-tile-button>
    </oui-tile>`,
    {
      $ctrl: {
        loading: boolean('Loading state', false),
        onClick: action('onClick'),
      },
    },
  ),
);

WithButtons.story = {
  name: 'With buttons',
};

export const DefinitionList = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-tile heading="Title" description="Lorem dolor sit amet" loading="$ctrl.loading">
      <oui-tile-definition
        term="Term"
        description="This is a description that use the attribute">
      </oui-tile-definition>
      <oui-tile-definition
        term="Term"
        term-popover="This is a popover text"
        description="This is a description">
      </oui-tile-definition>
      <oui-tile-definition
        term="Term"
        description="This is a description with an action menu">
        <oui-action-menu compact>
          <oui-action-menu-item>Action 1</oui-action-menu-item>
        </oui-action-menu>
      </oui-tile-definition>
      <oui-tile-definition>
        <oui-tile-term>Term</oui-tile-term>
        <oui-tile-description>This is a definition that use transcludes</oui-tile-description>
        <oui-tile-actions>
          <oui-dropdown placement="end">
            <oui-dropdown-trigger text="Actions"></oui-dropdown-trigger>
            <oui-dropdown-content>
              <oui-dropdown-item href="#">Action 1</oui-dropdown-item>
              <oui-dropdown-item href="#">Action 2</oui-dropdown-item>
              <oui-dropdown-item href="#">Action 3</oui-dropdown-item>
            </oui-dropdown-content>
          </oui-dropdown>
        </oui-tile-actions>
      </oui-tile-definition>
      <oui-tile-definition
        term="Progress">
        <oui-tile-description>
          <progress class="oui-progress oui-progress_success" value="10" max="100"></progress>
        </oui-tile-description>
      </oui-tile-definition>
    </oui-tile>`,
    {
      $ctrl: {
        loading: boolean('Loading state', false),
      },
    },
  ),
);

DefinitionList.story = {
  name: 'Definition list',
};
