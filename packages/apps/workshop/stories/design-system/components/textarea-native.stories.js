import { select } from '@storybook/addon-knobs';

import readme from '@ovh-ux/ui-kit.button/README.md';

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
  title: 'Design System/Components/Textarea/Native',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Default = () => `
  <textarea class="oui-textarea"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>`;

export const Inline = () => `
  <textarea class="oui-textarea oui-textarea_inline"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>`;

export const Sizes = () => `
  <textarea class="oui-textarea oui-textarea_xs"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
  <textarea class="oui-textarea oui-textarea_s"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
  <textarea class="oui-textarea oui-textarea_m"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
  <textarea class="oui-textarea oui-textarea_l"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
  <textarea class="oui-textarea oui-textarea_xl"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>`;

export const Validation = () => `
  <textarea class="oui-textarea oui-textarea_error"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
  <textarea class="oui-textarea oui-textarea_warning"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>
  <textarea class="oui-textarea oui-textarea_success"
    placeholder="Please insert your text..."
    rows="5"
    ${select(state.label, state.options, state.default)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</textarea>`;
