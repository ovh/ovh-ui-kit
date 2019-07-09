import { storiesOf } from '@storybook/html';

storiesOf('Old|Styles/Button', module)
  .add(
    'With colors',
    () => `
    <p>
      <button class="oui-button oui-button_primary">Primary</button>
      <button class="oui-button oui-button_secondary">Secondary</button>
    </p>
    <p>
      <button class="oui-button oui-button_primary" disabled>Primary</button>
      <button class="oui-button oui-button_secondary" disabled>Secondary</button>
    </p>
    `,
  )
  .add(
    'With icons',
    () => `
    <p>
      <button class="oui-button oui-button_primary oui-button_icon-left">
        <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
        Primary
      </button>
      <button class="oui-button oui-button_secondary oui-button_icon-right">
        Secondary
        <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      </button>
    </p>
    <p>
      <button class="oui-button oui-button_primary oui-button_icon-left" disabled>
        <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
        Primary
      </button>
      <button class="oui-button oui-button_secondary oui-button_icon-right" disabled>
        Secondary
        <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      </button>
    </p>
    `,
  )
  .add(
    'With arrows',
    () => `
    <p>
      <button class="oui-button oui-button_primary oui-button_icon-left">
        <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
        Primary
      </button>
      <button class="oui-button oui-button_secondary oui-button_icon-right">
        Secondary
        <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
      <button class="oui-button oui-button_dropdown">
        Dropdown
        <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
      </button>
    </p>
    <p>
      <button class="oui-button oui-button_primary oui-button_icon-left" disabled>
        <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
        Primary
      </button>
      <button class="oui-button oui-button_secondary oui-button_icon-right" disabled>
        Secondary
        <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
      <button class="oui-button oui-button_dropdown" disabled>
        Dropdown
        <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
      </button>
    </p>
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
      <button class="oui-button oui-button_block oui-button_primary">Primary Button Full width</button>
      <button class="oui-button oui-button_block oui-button_link oui-button_icon-left">
          <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
          Button link Full width Icon left
      </button>
      <button class="oui-button oui-button_block oui-button_icon-left oui-button_primary">
          <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
          Primary Full width Icon left
      </button>
      <button class="oui-button oui-button_block oui-button_icon-left oui-button_secondary">
          <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
          Secondary Full width Icon left
      </button>
    </div>
    <div style="width: 40%; display: inline-block;">
      <button class="oui-button oui-button_block oui-button_secondary">Secondary Button Full width</button>
      <button class="oui-button oui-button_block oui-button_link oui-button_icon-right">
          Button link Full width Icon right
          <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
      <button class="oui-button oui-button_block oui-button_icon-right oui-button_primary">
          Secondary Full width Icon right
          <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
      <button class="oui-button oui-button_block oui-button_icon-right oui-button_secondary">
          Secondary Full width Icon right
          <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
    </div>
    `,
  )
  .add(
    'Small width',
    () => `
    <button class="oui-button oui-button_primary oui-button_s">Ok</button>
    <button class="oui-button oui-button_secondary oui-button_s">
      <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
    </button>
    <button class="oui-button oui-button_secondary oui-button_s">
      <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
    </button>
    `,
  )
  .add(
    'Large height',
    () => `
    <p>
      <button class="oui-button oui-button_l oui-button_primary oui-button_icon-left">
        <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
        Primary
      </button>
      <button class="oui-button oui-button_l oui-button_secondary oui-button_icon-right">
        Secondary
        <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      </button>
    </p>
    <p>
      <button class="oui-button oui-button_l oui-button_primary oui-button_icon-left" disabled>
        <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
        Primary
      </button>
      <button class="oui-button oui-button_l oui-button_secondary oui-button_icon-right" disabled>
        Secondary
        <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      </button>
    </p>
    `,
  )
  .add(
    'In a group',
    () => `
    <p>
      <span class="oui-button-group">
        <button class="oui-button oui-button_secondary oui-button_s">1</button>
        <button class="oui-button oui-button_secondary oui-button_s">2</button>
        <button class="oui-button oui-button_secondary oui-button_s">3</button>
        <button class="oui-button oui-button_secondary oui-button_s">4</button>
        <button class="oui-button oui-button_secondary oui-button_s">5</button>
      </span>
    </p>

    <p>
      <span class="oui-button-group">
        <button class="oui-button oui-button_primary">Button 1</button>
        <button class="oui-button oui-button_secondary">Button 2</button>
      </span>
    </p>

    <p>
      <span class="oui-button-group">
        <button class="oui-button oui-button_secondary">Button 1</button>
        <button class="oui-button oui-button_primary">Button 2</button>
      </span>
    </p>
    `,
  );
