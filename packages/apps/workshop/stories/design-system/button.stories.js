import { storiesOf } from '@storybook/html';

storiesOf('Components|Buttons/Primary', module)
  .add(
    'Normal',
    () => `
    <button class="oui-button oui-button_primary">
      Call to action
    </button>`,
  )
  .add(
    'Normal (Disabled)',
    () => `
    <button class="oui-button oui-button_primary" disabled>
      Call to action
    </button>`,
  )
  .add(
    'Normal + Icon',
    () => `
    <button class="oui-button oui-button_primary oui-button_icon-left">
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>`,
  )
  .add(
    'Normal + Icon (Disabled)',
    () => `
    <button class="oui-button oui-button_primary oui-button_icon-left" disabled>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>`,
  )
  .add(
    'Small',
    () => `
    <button class="oui-button oui-button_s oui-button_primary">
      Call to action
    </button>`,
  )
  .add(
    'Small (Disabled)',
    () => `
    <button class="oui-button oui-button_s oui-button_primary" disabled>
      Call to action
    </button>`,
  )
  .add(
    'Small + Icon',
    () => `
    <button class="oui-button oui-button_s oui-button_primary oui-button_icon-left">
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>`,
  )
  .add(
    'Small + Icon (Disabled)',
    () => `
    <button class="oui-button oui-button_s oui-button_primary oui-button_icon-left" disabled>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>`,
  );
