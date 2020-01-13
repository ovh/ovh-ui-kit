import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-tooltip-stories';
angular.module(moduleName, ['oui.tooltip']);

storiesOf('Old/Directives/Tooltip', module)
  .add(
    'Static (title attribute)',
    forModule(moduleName).createElement(() => compileTemplate(`
    <p>
      <a href="#" class="oui-link" title="Lorem ipsum" oui-tooltip>focus or hover me</a>
    </p>
    <p>
      <button class="oui-button oui-button_primary" title="Lorem ipsum" oui-tooltip>focus or hover me</button>
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="focus or hover me" title="Lorem ipsum" oui-tooltip>
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
        text: text('Text', 'Lorem ipsum'),
      },
    })),
  )
  .add(
    'Directions',
    forModule(moduleName).createElement(() => compileTemplate(`
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Top Left" oui-tooltip="Lorem ipsum" oui-tooltip-placement="top-start">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Top Center" oui-tooltip="Lorem ipsum" oui-tooltip-placement="top">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Top Right" oui-tooltip="Lorem ipsum" oui-tooltip-placement="top-end">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Bottom Left" oui-tooltip="Lorem ipsum" oui-tooltip-placement="bottom-start">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Bottom Center" oui-tooltip="Lorem ipsum" oui-tooltip-placement="bottom">
    </p>
    <p>
      <input type="text" class="oui-input oui-input_inline" placeholder="Bottom Right" oui-tooltip="Lorem ipsum" oui-tooltip-placement="bottom-end">
    </p>
    `)),
  );
