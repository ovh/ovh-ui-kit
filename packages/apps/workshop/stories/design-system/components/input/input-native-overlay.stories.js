import { select } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Popover from '@ovh-ux/ui-kit.popover';
import Tooltip from '@ovh-ux/ui-kit.tooltip';

import readme from '@ovh-ux/ui-kit.input/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'input-native-overlay.stories';
angular.module(moduleName, [
  // For examples
  Popover,
  Tooltip,
]);

const state = {
  label: 'State',
  options: {
    Normal: '',
    Disabled: 'disabled',
    ReadOnly: 'readonly',
  },
  default: '',
};

export default {
  title: 'Design System/Components/Input/Native/Overlay',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Default = () => `
  <div class="oui-input-overlay">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-help-circle"></span>
  </div>`;

export const Inline = () => `
  <div class="oui-input-overlay oui-input-overlay_inline">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-help-circle"></span>
  </div>`;

export const Sizes = () => `
  <div class="oui-input-overlay oui-input-overlay_xs">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-help-circle"></span>
  </div>

  <div class="oui-input-overlay oui-input-overlay_s">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-help-circle"></span>
  </div>

  <div class="oui-input-overlay oui-input-overlay_m">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-help-circle"></span>
  </div>

  <div class="oui-input-overlay oui-input-overlay_l">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-help-circle"></span>
  </div>

  <div class="oui-input-overlay oui-input-overlay_xl">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-help-circle"></span>
  </div>`;

export const Validation = () => `
  <div class="oui-input-overlay">
    <input class="oui-input oui-input_error"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-error-circle"></span>
  </div>

  <div class="oui-input-overlay">
    <input class="oui-input oui-input_warning"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-warning-circle"></span>
  </div>

  <div class="oui-input-overlay">
    <input class="oui-input oui-input_success"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <span class="oui-icon oui-icon-success-circle"></span>
  </div>`;

export const WithTooltip = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <div class="oui-input-overlay">
      <input class="oui-input"
        placeholder="Please insert your text..."
        type="text"
        ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-help-circle"
        title="Lorem ipsum dolor sit amet"
        oui-tooltip>
      </span>
    </div>`,
  ),
);

export const WithPopover = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <div class="oui-input-overlay">
      <input class="oui-input"
        placeholder="Please insert your text..."
        type="text"
        ${select(state.label, state.options, state.default)}>
      <button class="oui-button oui-button_primary" type="button"
        title="Lorem ipsum dolor sit amet"
        oui-popover
        oui-popover-placement="left-start"
        ${select(state.label, state.options, state.default)}>
        <span class="oui-icon oui-icon-help-circle"></span>
      </button>
    </div>`,
  ),
);
