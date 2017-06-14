# oui-tile

<component-status cx-design="partial" ux="prototype"></component-status>

oui-tile is a package which provide styles for the `oui-tile` component.

## Installation

```less
@import 'oui-tile/tile';
```

## Usage

### Buttons

```html:preview
<div class="oui-tile">
  <h4 class="oui-header_4 oui-tile__title">Buttons</h4>
  <div class="oui-tile__body">
    <div class="oui-tile__item oui-tile__item_button">
      <button class="oui-tile__button oui-button oui-button_link oui-button_icon-right oui-button_full-width">
        Button 1
        <i class="oui-icon oui-icon-chevron-right"></i>
      </button>
    </div>
    <div class="oui-tile__item oui-tile__item_button">
      <button class="oui-tile__button oui-button oui-button_link oui-button_icon-right oui-button_full-width">Button 2</button>
    </div>
  </div>
</div>
```

### List definition

```html:preview
<div class="oui-tile">
  <h4 class="oui-header_4 oui-tile__title">List definition</h4>
  <div class="oui-tile__body">
    <div class="oui-tile__item">
      <dl class="oui-tile__definition">
        <dt class="oui-tile__term">Foo</dt>
        <dd class="oui-tile__description">bar</dd>
      </dl>
    </div>
    <div class="oui-tile__item">
      <dl class="oui-tile__definition">
        <dt class="oui-tile__term">Baz</dt>
        <dd class="oui-tile__description">
          qux
          <small>(quux)</small>
        </dd>
      </dl>
    </div>
  </div>
</div>
```

## Mixins

```less
@import 'oui-tile/_mixins';
```

### .tile

Define the base styles for a tile.

```less
#oui > .tile();
```
