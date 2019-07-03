import { storiesOf } from '@storybook/html';

storiesOf('Old|Content/Color', module)
  .add(
    'Usage',
    () => `
    <p class="oui-color-jungle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="oui-color-pomegranate">Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat.</p>
    <p class="oui-color-california">Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu.</p>
    <p class="oui-color-atlantis">Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus.</p>
    `, {
      options: {
        showPanel: true,
      },
    },
  )
  .add(
    'General',
    () => `
    <div class="row">
      <div class="oui-color-badge oui-color-badge_oui-color-mischka">
        <span class="oui-color-badge__prop">.oui-color-mischka</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#d5dae0</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-regent">
        <span class="oui-color-badge__prop">.oui-color-regent</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#818b99</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-shuttle">
        <span class="oui-color-badge__prop">.oui-color-shuttle</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#59697d</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-fiord">
        <span class="oui-color-badge__prop">.oui-color-fiord</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#3f5167</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-rhino">
        <span class="oui-color-badge__prop">.oui-color-rhino</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#273b54</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-zodiac">
        <span class="oui-color-badge__prop">.oui-color-zodiac</span>
        <span class="oui-color-badge__prop">.oui-color-primary</span>
        <span class="oui-color-badge__prop">
          <code>#122844</code>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="oui-color-badge oui-color-badge_oui-color-polar">
        <span class="oui-color-badge__prop">.oui-color-polar</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#f5fcfd</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-foam">
        <span class="oui-color-badge__prop">.oui-color-foam</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#e0f6fd</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-charlotte">
        <span class="oui-color-badge__prop">.oui-color-charlotte</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#c6eff9</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-turquoise">
        <span class="oui-color-badge__prop">.oui-color-turquoise</span>
        <span class="oui-color-badge__prop">.oui-color-secondary</span>
        <span class="oui-color-badge__prop">
          <code>#59d2ef</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-pacific">
        <span class="oui-color-badge__prop">.oui-color-pacific</span>
        <span class="oui-color-badge__prop">.oui-color-tertiary</span>
        <span class="oui-color-badge__prop">
          <code>#00a2bf</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-gothic">
        <span class="oui-color-badge__prop">.oui-color-gothic</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#7991a3</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-sapphire">
        <span class="oui-color-badge__prop">.oui-color-sapphire</span>
        <span class="oui-color-badge__prop">.oui-color-brand</span>
        <span class="oui-color-badge__prop">
          <code>#113f6d</code>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="oui-color-badge oui-color-badge_oui-color-silver">
        <span class="oui-color-badge__prop">.oui-color-silver</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#bbbdbf</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-iron">
        <span class="oui-color-badge__prop">.oui-color-iron</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#cfd0d2</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-ironlight">
        <span class="oui-color-badge__prop">.oui-color-ironlight</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#dddedf</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-concrete">
        <span class="oui-color-badge__prop">.oui-color-concrete</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#f2f2f2</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-alabaster">
        <span class="oui-color-badge__prop">.oui-color-alabaster</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#fafafa</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-affair">
        <span class="oui-color-badge__prop">.oui-color-affair</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#884994</code>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="oui-color-badge oui-color-badge_oui-color-dusty">
        <span class="oui-color-badge__prop">.oui-color-dusty</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#999999</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-nurse">
        <span class="oui-color-badge__prop">.oui-color-nurse</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#e9ebe7</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-nurse2">
        <span class="oui-color-badge__prop">.oui-color-nurse2</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#e1e3df</code>
        </span>
      </div>
    </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  )
  .add(
    'Product',
    () => `
    <div class="row">
      <div class="oui-color-badge oui-color-badge_oui-color-jungle">
        <span class="oui-color-badge__prop">.oui-color-jungle</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#27b9a2</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-dodger">
        <span class="oui-color-badge__prop">.oui-color-dodger</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#32acff</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-pomegranate">
        <span class="oui-color-badge__prop">.oui-color-pomegranate</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#ee4036</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-iceberg">
        <span class="oui-color-badge__prop">.oui-color-iceberg</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#ddf4f2</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-milkpunch">
        <span class="oui-color-badge__prop">.oui-color-milkpunch</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#fff7d8</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-california">
        <span class="oui-color-badge__prop">.oui-color-california</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#ff9803</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-atlantis">
        <span class="oui-color-badge__prop">.oui-color-atlantis</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#88c424</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-flirt">
        <span class="oui-color-badge__prop">.oui-color-flirt</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#ad0067</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-claret">
        <span class="oui-color-badge__prop">.oui-color-claret</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#701447</code>
        </span>
      </div>
    </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  )
  .add(
    'Message',
    () => `
    <div class="row">
      <div class="oui-color-badge oui-color-badge_oui-color-info-dark">
        <span class="oui-color-badge__prop">.oui-color-info-dark</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#3f5167</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-info-medium">
        <span class="oui-color-badge__prop">.oui-color-info-medium</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#7d8da1</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-info-light">
        <span class="oui-color-badge__prop">.oui-color-info-light</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#b3becc</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-info-fade">
        <span class="oui-color-badge__prop">.oui-color-info-fade</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#dfeaf8</code>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="oui-color-badge oui-color-badge_oui-color-success-dark">
        <span class="oui-color-badge__prop">.oui-color-success-dark</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#57710e</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-success-medium">
        <span class="oui-color-badge__prop">.oui-color-success-medium</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#b0ca67</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-success-light">
        <span class="oui-color-badge__prop">.oui-color-success-light</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#b0ca67</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-success-fade">
        <span class="oui-color-badge__prop">.oui-color-success-fade</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#e0eac2</code>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="oui-color-badge oui-color-badge_oui-color-warning-dark">
        <span class="oui-color-badge__prop">.oui-color-warning-dark</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#8a5300</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-warning-medium">
        <span class="oui-color-badge__prop">.oui-color-warning-medium</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#d9ae00</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-warning-light">
        <span class="oui-color-badge__prop">.oui-color-warning-light</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#e3cd4d</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-warning-fade">
        <span class="oui-color-badge__prop">.oui-color-warning-fade</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#faefa0</code>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="oui-color-badge oui-color-badge_oui-color-error-dark">
        <span class="oui-color-badge__prop">.oui-color-error-dark</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#b04020</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-error-medium">
        <span class="oui-color-badge__prop">.oui-color-error-medium</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#e36947</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-error-light">
        <span class="oui-color-badge__prop">.oui-color-error-light</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#eca490</code>
        </span>
      </div>

      <div class="oui-color-badge oui-color-badge_oui-color-error-fade">
        <span class="oui-color-badge__prop">.oui-color-error-fade</span>
        <span class="oui-color-badge__prop">-</span>
        <span class="oui-color-badge__prop">
          <code>#f5e0da</code>
        </span>
      </div>
    </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  );
