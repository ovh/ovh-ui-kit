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