import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

const moduleName = 'oui-tooltip-stories';
angular.module(moduleName, ['oui.tooltip']);

storiesOf('Directives/Tooltip', module)
  .add(
    'Static (title attribute)',
    forModule(moduleName).createElement(() => compileTemplate(`
    <p>
      <a href="#" class="oui-link" title="This is an awesome tooltip content" oui-tooltip>focus or hover me</a>
    </p>
    <p>
      <button class="oui-button oui-button_primary" title="This is an awesome tooltip content" oui-tooltip>focus or hover me</button>
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="focus or hover me" title="This is an awesome tooltip content" oui-tooltip>
    </p>
    `)),
  )
  .add(
    'Dynamic (oui-tooltip attribute)',
    forModule(moduleName).createElement(() => compileTemplate(`
    <p>
      <a href="#" class="oui-link" oui-tooltip="{{ $ctrl.text }}">focus or hover me</a>
    </p>
    <p>
      <button class="oui-button oui-button_primary" oui-tooltip="{{ $ctrl.text }}">focus or hover me</button>
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="focus or hover me" oui-tooltip="{{ $ctrl.text }}">
    </p>
    `, {
      $ctrl: {
        text: text('Text', 'This is an awesome tooltip content'),
      },
    })),
  )
  .add(
    'Directions',
    forModule(moduleName).createElement(() => compileTemplate(`
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Top Left" oui-tooltip="This is an awesome tooltip content" oui-tooltip-placement="top-start">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Top Center" oui-tooltip="This is an awesome tooltip content" oui-tooltip-placement="top">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Top Right" oui-tooltip="This is an awesome tooltip content" oui-tooltip-placement="top-end">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Bottom Left" oui-tooltip="This is an awesome tooltip content" oui-tooltip-placement="bottom-start">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Bottom Center" oui-tooltip="This is an awesome tooltip content" oui-tooltip-placement="bottom">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Bottom Right" oui-tooltip="This is an awesome tooltip content" oui-tooltip-placement="bottom-end">
    </p>
    `)),
  );
