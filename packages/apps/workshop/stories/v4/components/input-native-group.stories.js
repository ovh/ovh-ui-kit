import { select } from '@storybook/addon-knobs';

import readme from '@ovh-ux/ui-kit.input/README.md';

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
  title: 'Version 4/Components/Input/Native/Group',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Default = () => `
  <div class="oui-input-group">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary" type="button">Search</button>
  </div>`;

export const Inline = () => `
  <div class="oui-input-group oui-input-group_inline">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary" type="button">Search</button>
  </div>`;

export const Sizes = () => `
  <div class="oui-input-group oui-input-group_xs">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary oui-button_s" type="button" aria-label="Search">
      <span class="oui-icon oui-icon-search"></span>
    </button>
  </div>

  <div class="oui-input-group oui-input-group_s">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary oui-button_s" type="button" aria-label="Search">
      <span class="oui-icon oui-icon-search"></span>
    </button>
  </div>

  <div class="oui-input-group oui-input-group_m">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary" type="button">Search</button>
  </div>

  <div class="oui-input-group oui-input-group_l">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary" type="button">Search</button>
  </div>

  <div class="oui-input-group oui-input-group_xl">
    <input class="oui-input"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary" type="button">Search</button>
  </div>`;

export const Validation = () => `
  <div class="oui-input-group">
    <input class="oui-input oui-input_error"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary" type="button">Search</button>
  </div>

  <div class="oui-input-group">
    <input class="oui-input oui-input_warning"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary" type="button">Search</button>
  </div>

  <div class="oui-input-group">
    <input class="oui-input oui-input_success"
      placeholder="Please insert your text..."
      type="text"
      ${select(state.label, state.options, state.default)}>
    <button class="oui-button oui-button_primary" type="button">Search</button>
  </div>`;
