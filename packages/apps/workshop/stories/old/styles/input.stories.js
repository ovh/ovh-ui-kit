import { storiesOf } from '@storybook/html';

storiesOf('Old/Styles/Input', module)
  .add(
    'Simple',
    () => `
    <input type="text" class="oui-input" value="Input text">
    <input type="text" class="oui-input" placeholder="Input text with placeholder">
    <input type="text" class="oui-input" value="Input text disabled" disabled="disabled">
    <input type="text" class="oui-input" value="Input text disabled with value" disabled="disabled">
    <input type="text" class="oui-input" value="Input text readonly with value" readonly="readonly">
    <input type="text" class="oui-input oui-input_error" value="Input text Error">
    `,
  )
  .add(
    'Inline',
    () => `
    <input type="text" class="oui-input oui-input_inline" value="Inline input">
    `,
  )
  .add(
    'Sizes',
    () => `
    <input type="text" class="oui-input oui-input_xs" value="XS">
    <input type="text" class="oui-input oui-input_s" value="S">
    <input type="text" class="oui-input oui-input_m" value="M">
    <input type="text" class="oui-input oui-input_l" value="L">
    <input type="text" class="oui-input oui-input_xl" value="XL">
    `,
  );
