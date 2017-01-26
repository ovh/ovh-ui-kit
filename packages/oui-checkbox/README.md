# oui-checkbox

oui-checkbox is a package which provide styles for the checkbox component.

## Installation

```less
  @import 'oui-checkbox/checkbox';
```

## Usage

### Checkbox

```html
<oui-checkbox label="Checked" checked></oui-checkbox>
<oui-checkbox label="Unchecked"></oui-checkbox>
<oui-checkbox label="Disabled [checked]" checked disabled></oui-checkbox>
<oui-checkbox label="Disabled [unchecked]" disabled></oui-checkbox>
```

## One-way binding properties

### Checked

```html
<oui-checkbox on-change="$ctrl.checked = $event.value" label="Click to check/uncheck the test checkbox"></oui-checkbox>
<oui-checkbox label="Test" checked="$ctrl.checked" disabled></oui-checkbox>
```

### Disabled

```html
<oui-checkbox on-change="$ctrl.disabled = $event.value" label="Click to disable the test checkbox"></oui-checkbox>

<oui-checkbox checked disabled="$ctrl.disabled">
    <oui-checkbox-label>Test</oui-checkbox-label>
</oui-checkbox>
```

## Events

### On-change

```html
<oui-checkbox on-change="$ctrl.showCurrentValueInPopup($event.value)">
    <oui-checkbox-label>Click here to show a popup with the current value</oui-checkbox-label>
</oui-checkbox>
```

## Mixins

```less
  @import 'oui-checkbox/checkbox/_mixins';
```

### .checkbox

Define the base styles for a checkbox.

```less
#oui > .checkbox();
```

```less
#oui > .checkbox(@outline-color, @outline-color_hover, @outline-color_checked, @outline-color_checked-hover, @spacing);
```

| Parameter | Type | Default Value | Comments |
| --- | --- | --- | --- |
| __@outline-color__ | Color | `@oui-checkbox-outline-color` | -
| __@outline-color_hover__ | Color | `@oui-checkbox-outline-color_hover`| -
| __@outline-color_checked__ | Color | `@oui-checkbox-outline-color_checked` | -
| __@outline-color_checked-hover__ | Color | `@oui-checkbox-outline-color_checked-hover`| -
| __@spacing__ | Number | `@oui-checkbox-spacing` | -

## Classes

### Block

The block class is `oui-checkbox` (top-level element).

### Element

Inner elements:

| Element | Class |
| --- | --- |
| __input[type=checkbox]__ | `oui-checkbox__input` |
| __span__ | `oui-checkbox__label` |
| __svg__ | `oui-checkbox__facade` |
| path | `oui-checkbox__false-bottom` |
| path | `oui-checkbox__outline oui-checkbox__outline_unchecked` |
| path | `oui-checkbox__outline oui-checkbox__outline_checked` |
| path | `oui-checkbox__checkmark` |

### Modifier

The checkbox component has no modifier elements.