import { storiesOf } from '@storybook/html';

storiesOf('Styles/Button', module)
  .add(
    'With colors',
    () => `
    <button class="oui-button oui-button_primary">Primary</button>
    <button class="oui-button oui-button_primary" disabled>Primary disabled</button>
    <button class="oui-button oui-button_secondary">Secondary</button>
    <button class="oui-button oui-button_secondary" disabled>Secondary disabled</button>
    `,
  )
  .add(
    'Full width',
    () => `
    <button class="oui-button oui-button_primary oui-button_full-width">I take a looooooooot of spaaaaaace!</button>
    `,
  )
  .add(
    'Large height',
    () => `
    <button class="oui-button oui-button_primary oui-button_large-height">I'm so high</button>
    <button class="oui-button oui-button_secondary oui-button_large-height">
      <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
      Back
    </button>
    <button class="oui-button oui-button_secondary oui-button_large-height">
      Next
      <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
    </button>
    `,
  )
  .add(
    'Small width',
    () => `
    <button class="oui-button oui-button_primary oui-button_small-width">Ok</button>
    <button class="oui-button oui-button_secondary oui-button_small-width">
      <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
    </button>
    <button class="oui-button oui-button_secondary oui-button_small-width">
      <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
    </button>
    `,
  )
  .add(
    'With arrows',
    () => `
    <button class="oui-button oui-button_primary oui-button_icon-left">
      <span class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></span>
      Point your finger to the left!
    </button>
    <button class="oui-button oui-button_secondary oui-button_icon-right">
      Point your finger to the right!
      <span class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></span>
    </button>
    <button class="oui-button oui-button_dropdown">
      I have something to hide...
      <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
    </button>
    `,
  )
  .add(
    'As links',
    () => `
    <button class="oui-button oui-button_link">Click me to get more information</button>
    <button class="oui-button oui-button_link oui-button_icon-left">
      <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
      Previous page
    </button>
    <button class="oui-button oui-button_link oui-button_icon-right">
      Next page
      <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
    </button>
    `,
  )
  .add(
    'Icon alone',
    () => `
    <button type="button" class="oui-button oui-button_icon-alone">
      <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
    </button>
    `,
  );
