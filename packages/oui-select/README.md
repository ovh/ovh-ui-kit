# oui-select

oui-select is a package which provides styles for the select component.

## Installation

```less
  @import 'oui-select/select';
```

## Usage

```html:preview
<label class="oui-select">
  <select id="select" name="select" class="oui-select__input">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </select>
  <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
</label>

<label class="oui-select">
  <select id="select-disabled" name="select-disabled" class="oui-select__input" disabled>
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </select>
  <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
</label>

<label class="oui-select oui-select_warning">
  <select id="select-warning" name="select-warning" class="oui-select__input">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </select>
  <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
</label>

<label class="oui-select oui-select_error">
  <select id="select-error" name="select-error" class="oui-select__input">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </select>
  <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
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

### .select-status

Define the styles for select warning and select error.

```less
#oui > .select-status();
```

```less
#oui > .select-status(
  @icon-selector: Class
);
```

## Classes

### Block

The block class is `oui-select` (top-level element).
