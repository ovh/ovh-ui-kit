# oui-button

oui-button is a package which provide styles for the button component.

## Installation

```less
  @import 'oui-button/button';
```

## Usage

### Primary

```html
  <button class="oui-button oui-button_primary">
    Primary Button
  </button>
```

### Secondary

```html
  <button class="oui-button oui-button_secondary">
    Secondary Button
  </button>
```

### Secondary

```html
  <button class="oui-button" disabled>
    Disabled Button
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
#oui > .button-base(@font-color, @font-size, @font-weight);
```

| Parameter | Type | Default Value | Comments |
| --- | --- | --- | --- |
| __@font-color__ | Color | `@button-font-color` | -
| __@font-size__ | Number | `@button-font-size`| -
| __@font-weight__ | Keyword | `@button-font-weight` | -

### .button-filled

Will stylize your button as a filled one.

```less
#oui > .button-filled();
```

```less
#oui > .button-filled(@background-color, @background-color_hover, @background-color_disabled, @font-color_disabled, @box-shadow-color_active)
```
| Parameter | Type | Default Value | Comments |
| --- | --- | --- | --- |
| __@background-color__ | Color | `@button-filled-background-color` | -
| __@background-color_hover__ | Color | `@button-filled-background-color_hover`| -
| __@background-color_disabled__ | Color | `@button-filled-background-color_disabled` | -
| __@font-color_disabled__ | Color | `@button-filled-font-color_disabled` | -
| __@box-shadow-color_active__ | Color | `@button-filled-box-shadow-color_active` | -

### .button-hollow

Will stylize your button as a hollow one.

```less
#oui > .button-hollow();
```

```less
#oui > .button-hollow(@background-color, @background-color_disabled, @border-color, @border-color_hover, @border-color_disabled, @box-shadow-color_active);
```

| Parameter | Type | Default Value | Comments |
| --- | --- | --- | --- |
| __@background-color__ | Color | `@button-hollow-background-color` | -
| __@background-color_disabled__ | Color | `@button-hollow-background-color_disabled` | -
| __@font-color_disabled__ | Color | `@button-hollow-font-color_disabled` | -
| __@border-color_hover__ | Color | `@button-hollow-border-color_hover` | -
| __@border-color_disabled__ | Color | `@button-hollow-border-color_disabled` | -
| __@box-shadow-color_active__ | Color | `@button-hollow-box-shadow-color_active` | -

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
