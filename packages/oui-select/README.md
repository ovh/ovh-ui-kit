# oui-select

oui-select is a package which provides styles for the select component.

## Installation

```less
  @import 'oui-select/select';
```

## Usage

```html:preview
  <label class="oui-select">
    <select class="oui-select__input">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
    <i class="oui-icon oui-icon-chevron-down"></i>
  </label>
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
    @border-color: Color,
    @font-color: Color,
    @font-size: Number,
    @font-weight: Number,
    @icon-size: Number,
    @icon-position-right: Number,
    @padding: Number
  );
```

## Classes

### Block

The block class is `oui-select` (top-level element).

Inner elements:

| Element               | Class                            |
| --------------------- | -------------------------------- |
| __label__             | `oui-select`                     |
| __select__            | `oui-select__input`              |
| __i__                 | `oui-icon oui-icon-chevron-down` |
