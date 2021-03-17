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
  title: 'Design System/Components/Input/Native/Simple',

  parameters: {
    docs: { iframeHeight: 200 },
    notes: readme,
  },
};

export const Default = () => `
  <input class="oui-input"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>`;

export const Inline = () => `
  <input class="oui-input oui-input_inline"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>`;

export const Sizes = () => `
  <input class="oui-input oui-input_xs"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>
  <input class="oui-input oui-input_s"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>
  <input class="oui-input oui-input_m"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>
  <input class="oui-input oui-input_l"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>
  <input class="oui-input oui-input_xl"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>`;

export const Validation = () => `
  <input class="oui-input oui-input_error"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>
  <input class="oui-input oui-input_warning"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>
  <input class="oui-input oui-input_success"
    placeholder="Please insert your text..."
    type="text"
    value="Lorem ipsum dolor sit amet"
    ${select(state.label, state.options, state.default)}>`;
