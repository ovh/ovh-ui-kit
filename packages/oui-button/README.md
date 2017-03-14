# oui-button

<component-status cx-design="partial" ux="rc"></component-status>

oui-button is a package which provide styles for the button component.

## Installation

```less
@import 'oui-button/button';
```

## Usage

```html:preview
<div>
  <button class="oui-button oui-button_primary">
    Primary Button
  </button>
  <button class="oui-button oui-button_secondary">
    Secondary Button
  </button>
  <button class="oui-button oui-button_dropdown">
    Dropdown Button
    <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
  </button>
  <button class="oui-button oui-button_icon-right">
    Button Icon Right
    <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
  <button class="oui-button oui-button_icon-left">
    <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>
    Button Icon Left
  </button>
</div>
<div>
  <button class="oui-button oui-button_primary" disabled>
    Primary Button
  </button>
  <button class="oui-button oui-button_secondary" disabled>
    Secondary Button
  </button>
  <button class="oui-button oui-button_dropdown" disabled>
    Dropdown Button
    <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
  </button>
  <button class="oui-button oui-button_icon-right" disabled>
    Button Icon Right
    <i class="oui-icon oui-icon_circle oui-icon-chevron-right" aria-hidden="true"></i>
  </button>
  <button class="oui-button oui-button_icon-left" disabled>
    <i class="oui-icon oui-icon_circle oui-icon-chevron-left" aria-hidden="true"></i>
    Button Icon Left
  </button>
</div>
```

## Mixins

```less
@import 'oui-button/_mixins';
```

### .button-base

Define the base styles for a button.

```less
#oui > .button-base();
```

```less
#oui > .button-base(
  @oui-font-color: Color,
  @oui-font-size: Number,
  @oui-font-weight: Number
);
```

### .button-filled

Will stylize your button as a filled one.

```less
#oui > .button-filled();
```

```less
#oui > .button-filled(
  @background-color: Color,
  @background-color_hover: Color,
  @background-color_disabled: Color,
  @oui-font-color_disabled: Color,
  @padding: Number
);
```

### .button-hollow

Will stylize your button as a hollow one.

```less
#oui > .button-hollow();
```

```less
#oui > .button-hollow(
  @background-color: Color,
  @border-color: Color,
  @border-color_hover: Color,
  @border-color_disabled: Color,
  @background-color_disabled: Color,
  @font-color_disabled: Color,
  @padding: Number
);
```

### .button-dropdown

Will stylize your button as a dropdown one.

```less
#oui > .button-dropdown();
```

```less
#oui > .button-dropdown(
  @icon-color: Color,
  @icon-color_active: Color,
  @background-color_active: Color,
  @border-color_active: Color,
  @icon-color_disabled: Color,
  @padding: Number
);
```

### .button-icon-base

Define the base styles for a button with an icon.

```less
#oui > .button-icon();
```

```less
#oui > .button-icon(
  @icon-size: Number,
  @icon-color: Color,
  @icon-color_disabled: Color,
  @icon-padding-right: Number,
  @icon-padding-left: Number
);
```

### .button-icon-right

Will stylize your button with an icon on the right.

```less
#oui > .button-icon-right();
```

```less
#oui > .button-icon-right(
  @icon-margin-left: Number,
  @icon-color_disabled: Color
);
```

### .button-icon-left

Will stylize your button with an icon on the left.

```less
#oui > .button-icon-left();
```

```less
#oui > .button-icon-left(
  @icon-margin-right: Number,
  @icon-color_disabled: Color
);
```

## Classes

### Block

The block class is `oui-button` (top-level element).

### Modifier

The provided modifiers are:

| Class                   | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| `oui-button_primary`    | Make the button looks like a primary button                   |
| `oui-button_secondary`  | Make the button looks like a secondary button                 |
| `oui-button_dropdown`   | Make the button looks like a dropdown button                  |
| `oui-button_icon-right` | Make the button looks like a button with an icon on the right |
| `oui-button_icon-left`  | Make the button looks like a button with an icon on the left  |
