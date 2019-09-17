import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const state = {
  label: 'State',
  options: {
    Normal: '',
    Disabled: 'disabled',
  },
  default: '',
};

storiesOf('Components|Input/Native', module)
  .add(
    'Default',
    () => `
    <input type="text" class="oui-input" value="Input text" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input" placeholder="Input text with placeholder" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input" value="Input text readonly with value" readonly="readonly" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input oui-input_error" value="Input text Error" ${select(state.label, state.options, state.default)}>
    `,
  )
  .add(
    'Inline',
    () => `
    <input type="text" class="oui-input oui-input_inline" value="Input text" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input oui-input_inline" placeholder="Input text with placeholder" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input oui-input_inline" value="Input text readonly with value" readonly="readonly" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input oui-input_inline oui-input_error" value="Input text Error" ${select(state.label, state.options, state.default)}>
    `,
  )
  .add(
    'Sizes',
    () => `
    <input type="text" class="oui-input oui-input_xs" value="XS" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input oui-input_s" value="S" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input oui-input_m" value="M" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input oui-input_l" value="L" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input oui-input_xl" value="XL" ${select(state.label, state.options, state.default)}>
    <input type="text" class="oui-input oui-input_auto" value="Auto" ${select(state.label, state.options, state.default)}>
    `,
  );
