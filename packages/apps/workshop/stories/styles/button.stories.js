import { storiesOf } from '@storybook/html';

storiesOf('Styles/Button', module)
  .add(
    'With colors',
    () => `
    <div>
      <button class="oui-button oui-button_primary">Primary</button>
      <button class="oui-button oui-button_secondary">Secondary</button>
    </div>
    <div>
      <button class="oui-button oui-button_primary" disabled>Primary</button>
      <button class="oui-button oui-button_secondary" disabled>Secondary</button>
    </div>
    `,
  )
  .add(
    'With arrows',
    () => `
    <div>
      <button class="oui-button oui-button_primary oui-button_icon-left">
        <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
        Point your finger to the left!
      </button>
      <button class="oui-button oui-button_secondary oui-button_icon-right">
        Point your finger to the right!
        <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
      <button class="oui-button oui-button_dropdown">
        I have something to hide...
        <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
      </button>
    </div>
    <div>
      <button class="oui-button oui-button_primary oui-button_icon-left" disabled>
        <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
        Point your finger to the left!
      </button>
      <button class="oui-button oui-button_secondary oui-button_icon-right" disabled>
        Point your finger to the right!
        <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
      <button class="oui-button oui-button_dropdown" disabled>
        I have something to hide...
        <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
      </button>
    </div>
    `,
  )
  .add(
    'As links',
    () => `
    <div>
      <button class="oui-button oui-button_link">Click me to get more information</button>
      <button class="oui-button oui-button_link oui-button_icon-left">
        <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
        Previous page
      </button>
      <button class="oui-button oui-button_link oui-button_icon-right">
        Next page
        <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
    </div>
    <div>
      <button class="oui-button oui-button_link" disabled>Click me to get more information</button>
      <button class="oui-button oui-button_link oui-button_icon-left" disabled>
        <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
        Previous page
      </button>
      <button class="oui-button oui-button_link oui-button_icon-right" disabled>
        Next page
        <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
    </div>
    `,
  )
  .add(
    'Full width',
    () => `
    <div style="width: 40%; display: inline-block;">
      <button class="oui-button oui-button_full-width oui-button_primary">Primary Button Full width</button>
      <button class="oui-button oui-button_full-width oui-button_link oui-button_icon-left">
          <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
          Button link Full width Icon left
      </button>
      <button class="oui-button oui-button_full-width oui-button_icon-left oui-button_primary">
          <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
          Primary Full width Icon left
      </button>
      <button class="oui-button oui-button_full-width oui-button_icon-left oui-button_secondary">
          <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
          Secondary Full width Icon left
      </button>
    </div>
    <div style="width: 40%; display: inline-block;">
      <button class="oui-button oui-button_full-width oui-button_secondary">Secondary Button Full width</button>
      <button class="oui-button oui-button_full-width oui-button_link oui-button_icon-right">
          Button link Full width Icon right
          <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
      <button class="oui-button oui-button_full-width oui-button_icon-right oui-button_primary">
          Secondary Full width Icon right
          <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
      <button class="oui-button oui-button_full-width oui-button_icon-right oui-button_secondary">
          Secondary Full width Icon right
          <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
    </div>
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
    'In a group',
    () => `
    <div>
      <div class="oui-button-group">
        <button class="oui-button oui-button_secondary oui-button_small-width">1</button>
        <button class="oui-button oui-button_secondary oui-button_small-width">2</button>
        <button class="oui-button oui-button_secondary oui-button_small-width">3</button>
        <button class="oui-button oui-button_secondary oui-button_small-width">4</button>
        <button class="oui-button oui-button_secondary oui-button_small-width">5</button>
      </div>
    </div>

    <div>
      <div class="oui-button-group">
        <button class="oui-button oui-button_primary">Button 1</button>
        <button class="oui-button oui-button_secondary">Button 2</button>
      </div>
    </div>

    <div>
      <div class="oui-button-group">
        <button class="oui-button oui-button_secondary">Button 1</button>
        <button class="oui-button oui-button_primary">Button 2</button>
      </div>
    </div>
    `,
  );
