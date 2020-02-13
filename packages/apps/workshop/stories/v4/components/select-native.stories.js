import { select } from '@storybook/addon-knobs';

import readme from '@ovh-ux/ui-kit.input/README.md';

const state = {
  label: 'State',
  options: {
    Normal: '',
    Disabled: 'disabled',
  },
  default: '',
};

export default {
  title: 'Version 4/Components/Select/Native',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Default = () => `
  <label class="oui-select">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
      <option value="Option 4">Option 4</option>
      <option value="Option 5">Option 5</option>
      <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>`;

export const Inline = () => `
  <label class="oui-select oui-select_inline">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
      <option value="Option 4">Option 4</option>
      <option value="Option 5">Option 5</option>
      <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>`;

export const Groups = () => `
  <label class="oui-select">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
      <optgroup label="Group 1">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </optgroup>
      <optgroup label="Group 2">
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
      </optgroup>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>`;

export const Multiple = () => `
  <label class="oui-select">
    <select class="oui-select__input"
      multiple
      ${select(state.label, state.options, state.default)}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>`;

export const Sizes = () => `
  <label class="oui-select oui-select_xs">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
      <option>XS</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>

  <label class="oui-select oui-select_s">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
      <option>S</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>

  <label class="oui-select oui-select_m">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
      <option>M</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>

  <label class="oui-select oui-select_l">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
      <option>L</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>

  <label class="oui-select oui-select_xl">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
      <option>XL</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>`;

export const Validation = () => `
  <label class="oui-select oui-select_error">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>

  <label class="oui-select oui-select_warning">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>

  <label class="oui-select oui-select_success">
    <select class="oui-select__input"
      ${select(state.label, state.options, state.default)}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
    </select>
    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
  </label>`;
