# oui-button

oui-button is a package which provide styles for the button component.

## Installation

```less
  @import 'oui-button/button';
```

## Usage

<div>
  <button class="oui-button oui-button_primary">
    Primary Button
  </button>

  <button class="oui-button oui-button_secondary">
    Secondary Button
  </button>

  <button class="oui-button oui-button_dropdown">
    Dropdown Button
  </button>

  <button class="oui-button oui-button_star">
    Star Button
  </button>
<div>
<div>
  <button class="oui-button oui-button_primary" disabled>
    Primary Button
  </button>

  <button class="oui-button oui-button_secondary" disabled>
    Secondary Button
  </button>

  <button class="oui-button oui-button_dropdown" disabled>
    Dropdown Button
  </button>

  <button class="oui-button oui-button_star" disabled>
    Star Button
  </button>
</div>

```html
<button class="oui-button oui-button_primary">
  Primary Button
</button>

<button class="oui-button oui-button_secondary">
  Primary Button
</button>

<button class="oui-button oui-button_dropdown">
  Dropdown Button
</button>

<button class="oui-button oui-button_star">
  Star Button
</button>

<button class="oui-button oui-button_primary" disabled>
  Primary Button
</button>

<button class="oui-button oui-button_secondary" disabled>
  Primary Button
</button>

<button class="oui-button oui-button_dropdown" disabled>
  Dropdown Button
</button>

<button class="oui-button oui-button_star" disabled>
  Star Button
</button>
```

## Mixins

```less
  @import 'oui-button/button/_mixins';
```

### .button-base

Define the base styles for a button.

```less
#oui > .button-base();
```

```less
#oui > .button-base(@oui-font-color, @oui-font-size, @oui-font-weight);
```

| Parameter | Type | Default Value | Comments |
| --- | --- | --- | --- |
| __@oui-font-color__ | Color | `@oui-button-font-color` | -
| __@oui-font-size__ | Number | `@oui-button-font-size`| -
| __@oui-font-weight__ | Keyword | `@oui-button-font-weight` | -

### .button-filled

Will stylize your button as a filled one.

```less
#oui > .button-filled();
```

```less
#oui > .button-filled(@background-color, @background-color_hover, @background-color_disabled, @oui-font-color_disabled, @box-shadow-color_active, @padding)
```
| Parameter | Type | Default Value | Comments |
| --- | --- | --- | --- |
| __@background-color__ | Color | `@oui-button-filled-background-color: #54c7e4` | - |
| __@background-color_hover__ | Color | `@oui-button-filled-background-color_hover: #1bbadf`| - |
| __@background-color_disabled__ | Color | `@oui-button-filled-background-color_disabled: #dedede` | - |
| __@oui-font-color_disabled__ | Color | `@oui-button-filled-font-color_disabled: #999` | - |
| __@box-shadow-color_active__ | Color | `@oui-button-filled-box-shadow-color_active: rgba(0, 0, 0, 1/3)` | - |
| __@padding__ | Number | `@oui-button-filled-padding: rem-calc(10) rem-calc(30)` | - |

### .button-hollow

Will stylize your button as a hollow one.

```less
#oui > .button-hollow();
```

```less
#oui > .button-hollow(@background-color, @border-color, @border-color_hover, @border-color_disabled, @background-color_disabled, @font-color_disabled, @box-shadow-color_active, @padding);
```

| Parameter | Type | Default Value | Comments |
| --- | --- | --- | --- |
| __@background-color__ | Color | `@oui-button-hollow-background-color: #fff` | - |
| __@border-color__ | Color | `@oui-button-hollow-border-color: #bbbdbf` | - |
| __@border-color_hover__ | Color | `@oui-button-hollow-border-color_hover: #999` | - |
| __@border-color_disabled__ | Color | `@oui-button-hollow-border-color_disabled: #e6e6e6` | - |
| __@background-color_disabled__ | Color | `@oui-button-hollow-background-color_disabled: #f2f2f2` | - |
| __@font-color_disabled__ | Color | `@oui-button-hollow-font-color_disabled: #b3b3b3` | - |
| __@box-shadow-color_active__ | Color | `@oui-button-hollow-box-shadow-color_active: rgba(0, 0, 0, 0.15)` | - |
| __@padding__ | Number | `@oui-button-filled-padding: rem-calc(9) rem-calc(29)` | - |

### .button-dropdown

Will stylize your button as a dropdown one.

```less
#oui > .button-hollow();
#oui > .button-dropdown();
```

```less
#oui > .button-hollow(@background-color, @border-color, @border-color_hover, @border-color_disabled, @background-color_disabled, @font-color_disabled, @box-shadow-color_active, @padding);
#oui > .button-dropdown(@icon-color, @icon-color_active, @font-color_active, @background-color_active, @border-color_active, @box-shadow-color_active, @icon-color_disabled, @padding);
```

| Parameter | Type | Default Value | Comments |
| --- | --- | --- | --- |
| __@icon-color__ | Color | `@oui-button-dropdown-icon-color: @oui-color-zodiac` | - |
| __@icon-color_active__ | Color | `@oui-button-dropdown-icon-color_active: @oui-color-pacific` | - |
| __@font-color_active__ | Color | `@oui-button-dropdown-font-color_active: @oui-color-zodiac` | - |
| __@background-color_active__ | Color | `@oui-button-dropdown-background-color_active: fade(@oui-color-pacific, 10)` | - |
| __@border-color_active__ | Color | `@oui-button-dropdown-border-color_active:  @oui-color-pacific` | - |
| __@box-shadow-color_active__ | Color | `@oui-button-dropdown-box-shadow-color_active: transparent` | - |
| __@icon-color_disabled__ | Color | `@oui-button-dropdown-icon-color_disabled: #b3b3b3` | - |
| __@padding__ | Number | `@oui-button-dropdown-padding: rem-calc(9) rem-calc(34) rem-calc(9) rem-calc(15)` | - |

### .button-star

Will stylize your button as a star one.

```less
#oui > .button-hollow();
#oui > .button-star();
```

```less
#oui > .button-hollow(@background-color, @border-color, @border-color_hover, @border-color_disabled, @background-color_disabled, @font-color_disabled, @box-shadow-color_active, @padding);
#oui > .button-star(@icon-color, @icon-color_active, @icon-color_disabled, @padding);
```

| Parameter | Type | Default Value | Comments |
| --- | --- | --- | --- |
| __@icon-color__ | Color | `@oui-button-star-icon-color: @oui-color-zodiac` | - |
| __@icon-color_active__ | Color | `@oui-button-star-icon-color_active: @oui-color-pacific` | - |
| __@icon-color_disabled__ | Color | `@oui-button-star-icon-color_disabled: #b3b3b3` | - |
| __@padding__ | Number | `@oui-button-star-padding:  rem-calc(9) rem-calc(18);` | - |

## Classes

### Block

The block class is `oui-button` (top-level element).

### Element

The button component has no inner elements.

### Modifier

The provided modifiers are:

| Class | Description |
| --- | --- |
| `oui-button_primary` | Make the button looks like a primary button. |
| `oui-button_secondary` | Make the button looks like a secondary button. |
| `oui-button_dropdown` | Make the button looks like a dropdown button. |
| `oui-button_star` | Make the button looks like a star button. |
