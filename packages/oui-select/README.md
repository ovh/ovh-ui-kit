# oui-select

oui-select is a package which provides styles for the select component.

## Installation

```less
  @import 'oui-select/select';
```

## Usage

```html:preview
<div class="oui-select">
  <svg class="oui-select__caret" data-name="oui-select-caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6"><title>Oui-Select-Caret</title><path d="M5,6a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,1.71.29L5,3.59,8.29.29A1,1,0,0,1,9.71,1.71l-4,4A1,1,0,0,1,5,6Z" fill="#59697d"/></svg>
  <select class="oui-select__group" type="select" name="oui-select"/>
    <option value="Amérique USA">Amérique USA</option>
    <option value="Canada">Canada</option>
    <option value="France" selected>France</option>
  </select>
</div>
```
## Mixins

```less
  @import 'oui-select/_mixins';
```

### .select

Define the base styles for a select.

```less
#oui > .select();
```

```less
#oui > .select(
  @padding: Number,
  @border-color: Color,
  @font-size: Number,
  @font-weight: Number
);
```

## Classes

### Block

The block class is `oui-select` (top-level element).

Inner elements:

| Element               | Class                           |
| --------------------- | ------------------------------- |
| __select__            | `oui-select__group`             |
| __span__              | `oui-select__caret`             |
