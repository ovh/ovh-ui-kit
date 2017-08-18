# oui-dropdown

<component-status cx-design="partial" ux="prototype"></component-status>

oui-dropdown is a package which provides styles for the dropdown component.

## Installation

```less
@import 'oui-dropdown/dropdown';
```

## Usage

<div class="oui-message oui-message_warning" role="alert">
  <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">
    Left middle and right middle dropdowns are not recommended with more convenient positioning which can be made with some Javascript.
  </p>
</div>

### Top

```html:preview
<div style="text-align: center">
  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_top-left oui-dropdown-menu_visible">
      .oui-dropdown-menu_top-left
    </div>
  </div>

  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_top-middle oui-dropdown-menu_visible">
      .oui-dropdown-menu_top-middle
    </div>
  </div>

  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_top-right oui-dropdown-menu_visible">
      .oui-dropdown-menu_top-right
    </div>
  </div>
</div>
```

### Bottom

```html:preview
<div style="text-align: center">
  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_bottom-left oui-dropdown-menu_visible">
      .oui-dropdown-menu_bottom-left
    </div>
  </div>

  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_bottom-middle oui-dropdown-menu_visible">
      .oui-dropdown-menu_bottom-middle
    </div>
  </div>

  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_bottom-right oui-dropdown-menu_visible">
      .oui-dropdown-menu_bottom-right
    </div>
  </div>
</div>
```

### Left

```html:preview
<div style="text-align: center; margin-bottom: 60px;">
  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_left-top oui-dropdown-menu_visible">
      .oui-dropdown-menu_left-top
    </div>
  </div>
</div>
<div style="text-align: center; margin-bottom: 60px;">
  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_left-middle oui-dropdown-menu_visible">
      .oui-dropdown-menu_left-middle
    </div>
  </div>
</div>
<div style="text-align: center">
  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_left-bottom oui-dropdown-menu_visible">
      .oui-dropdown-menu_left-bottom
    </div>
  </div>
</div>
```

### Right

```html:preview
<div style="text-align: center; margin-bottom: 60px;">
  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_right-top oui-dropdown-menu_visible">
      .oui-dropdown-menu_right-top
    </div>
  </div>
</div>
<div style="text-align: center; margin-bottom: 60px;">
  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_right-middle oui-dropdown-menu_visible">
      .oui-dropdown-menu_right-middle
    </div>
  </div>
</div>
<div style="text-align: center">
  <div class="oui-dropdown">
    <div class="oui-button oui-button_secondary">Clic</div>
    <div class="oui-dropdown-menu oui-dropdown-menu_right-bottom oui-dropdown-menu_visible">
      .oui-dropdown-menu_right-bottom
    </div>
  </div>
</div>
```

## Mixins

```less
  @import 'oui-dropdown/_mixins';
```

### .dropdown-base

Define the base styles for a dropdown container.

```less
#oui > .dropdown-base();
```

### .dropdown-menu-base

Define the base styles for a dropdown menu.

```less
#oui > .dropdown-menu-base();
```

### Modifier

The provided position modifiers are:

| Class                              | Dropdown position   | Arrow position       |
| ---------------------------------- | ------------------------------------------ |
| `oui-dropdown-menu_top-left`       | Top                 | Left                 |
| `oui-dropdown-menu_top-middle`     | Top                 | Middle (center)      |
| `oui-dropdown-menu_top-right`      | Top                 | Right                |
| `oui-dropdown-menu_bottom-left`    | Bottom              | Left                 |
| `oui-dropdown-menu_bottom-middle`  | Bottom              | Middle (center)      |
| `oui-dropdown-menu_bottom-right`   | Bottom              | Right                |
| `oui-dropdown-menu_left-top`       | Left                | Top                  |
| `oui-dropdown-menu_left-middle`    | Left                | Middle               |
| `oui-dropdown-menu_left-bottom`    | Left                | Bottom               |
| `oui-dropdown-menu_right-top`      | Right               | Top                  |
| `oui-dropdown-menu_right-middle`   | Right               | Middle               |
| `oui-dropdown-menu_right-bottom`   | Right               | Bottom               |
