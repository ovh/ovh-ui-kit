import { storiesOf } from '@storybook/html';

storiesOf('Styles/Input Group', module)
  .add(
    'Simple',
    () => `
    <div class="oui-input-group">
      <input class="oui-input" placeholder="Email">
      <button class="oui-button" type="button">Find</button>
    </div>

    <div class="oui-input-group">
      <input class="oui-input" placeholder="Email" disabled>
      <button class="oui-button" type="button" disabled>Find</button>
    </div>

    <div class="oui-input-group">
      <button class="oui-button oui-button_small-width" type="button">-</button>
      <input class="oui-input oui-input_number" type="number" placeholder="vCores">
      <button class="oui-button oui-button_small-width" type="button">+</button>
    </div>

    <div class="oui-input-group">
      <input class="oui-input" placeholder="nickhandle">
      <button class="oui-button" type="button">Weird action here</button>
      <input class="oui-input" value="ovh.com" disabled>
    </div>

    <div class="oui-input-group oui-input-group_button">
      <input class="oui-input" id="password" name="password" type="password" placeholder="Password with icon eye">
      <button class="oui-button" id="togglePassword" type="button" aria-label="Show password">
        <span class="oui-icon oui-icon-eye"></span>
      </button>
    </div>

    <div class="oui-input-group oui-input-group_button">
      <input class="oui-input oui-input_error" id="passwordError" name="passwordError" type="text" placeholder="Password Error with icon eye blocked">
      <button class="oui-button" id="togglePasswordError" type="button" aria-label="Hide password">
        <span class="oui-icon oui-icon-eye-blocked"></span>
      </button>
    </div>
    `,
  )
  .add(
    'Inline',
    () => `
    <div class="oui-input-group oui-input-group_inline">
      <input class="oui-input" placeholder="Email">
      <button class="oui-button" type="button">Find</button>
    </div>
    `,
  )
  .add(
    'Sizes',
    () => `
    <div class="oui-input-group oui-input-group_xs">
      <input class="oui-input" placeholder="XS">
      <button class="oui-button oui-button_small-width" type="button">
        <span class="oui-icon oui-icon-search"></span>
      </button>
    </div>
    <div class="oui-input-group oui-input-group_s">
      <input class="oui-input" placeholder="S">
      <button class="oui-button oui-button_small-width" type="button">
        <span class="oui-icon oui-icon-search"></span>
      </button>
    </div>
    <div class="oui-input-group oui-input-group_m">
      <input class="oui-input" placeholder="M">
      <button class="oui-button" type="button">Find</button>
    </div>
    <div class="oui-input-group oui-input-group_l">
      <input class="oui-input" placeholder="L">
      <button class="oui-button" type="button">Find</button>
    </div>
    <div class="oui-input-group oui-input-group_xl">
      <input class="oui-input" placeholder="XL">
      <button class="oui-button" type="button">Find</button>
    </div>
    `,
  );
