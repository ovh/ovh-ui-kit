import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-popover-stories';
angular.module(moduleName, ['oui.popover']);

export default {
  title: 'Version 3/Directives/Popover',
};

export const StaticTitleAttribute = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <button type="button"
      class="oui-button oui-button_primary"
      title="This is an awesome popover content."
      oui-popover>
      Click to toggle popover
    </button>`,
  ),
);

StaticTitleAttribute.story = {
  name: 'Static (title attribute)',
};

export const DynamicOuiPopoverAttribute = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <button type="button"
      class="oui-button oui-button_primary"
      oui-popover="{{$ctrl.text}}">
      Click to toggle popover
    </button>`,
    {
      $ctrl: {
        text: text('Text', 'This is an awesome popover content'),
      },
    },
  ),
);

DynamicOuiPopoverAttribute.story = {
  name: 'Dynamic (oui-popover attribute)',
};

export const HelpButton = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <button type="button" class="oui-popover-button"
      oui-popover="This is an awesome popover content.">
    </button>`,
  ),
);

HelpButton.story = {
  name: 'Help button',
};

export const OpenFromAnotherTrigger = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <p>
      <span
        title="This is an awesome popover content."
        oui-popover
        oui-popover-open="$ctrl.isOpen"
        oui-popover-on-close="$ctrl.isOpen = false">
        This is an awesome text
      </span>
    </p>
    <button
      type="button"
      class="oui-button oui-button_primary"
      ng-click="$ctrl.isOpen = !$ctrl.isOpen">
      Click to toggle popover
    </button>`,
    {
      $ctrl: {
        isOpen: true,
      },
    },
  ),
);

OpenFromAnotherTrigger.story = {
  name: 'Open from another trigger',
};

export const UsingATemplate = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <input type="text" class="oui-input oui-input_inline"
      ng-init="$ctrl.awesome = 'awesome'"
      ng-model="$ctrl.awesome">
    <button type="button"
      class="oui-button oui-button_primary"
      oui-popover
      oui-popover-scope="$ctrl"
      oui-popover-template="popover.html">
      Click to toggle popover
    </button>

    <script type="text/ng-template" id="popover.html">
    <p>This is an <strong ng-bind="$ctrl.awesome"></strong> popover content.</p>
    <p><a href="#">The quick brown fox jumps over the lazy dog</a></p>
    </script>`,
  ),
);

UsingATemplate.story = {
  name: 'Using a template',

  parameters: {
    notes:
      'This method use `ngInclude` to add the template in a popover and create an **isolated** scope. Use `oui-popover-scope` to extend the isolated scope and `$ctrl` to access thoses values.',
  },
};

export const Directions = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <button type="button" class="oui-button oui-button_primary"
      oui-popover="This is an awesome popover content."
      oui-popover-placement="right">
      Popover on right
    </button>

    <button type="button" class="oui-button oui-button_primary"
      oui-popover="This is an awesome popover content."
      oui-popover-placement="top">
      Popover on top
    </button>

    <button type="button" class="oui-button oui-button_primary"
      oui-popover="This is an awesome popover content."
      oui-popover-placement="bottom">
      Popover on bottom
    </button>

    <button type="button" class="oui-button oui-button_primary"
      oui-popover="This is an awesome popover content."
      oui-popover-placement="left">
      Popover on left
    </button>`,
  ),
);

export const Alignments = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <button type="button" class="oui-button oui-button_primary"
      oui-popover="This is an awesome popover content."
      oui-popover-placement="top-start">
      Align start
    </button>

    <button type="button" class="oui-button oui-button_primary"
      oui-popover="This is an awesome popover content."
      oui-popover-placement="bottom-end">
      Align end
    </button>`,
  ),
);
