# oui-label

oui-label is a package which provides styles for the label component.

## Installation

```less
@import 'oui-label/label;
```

## Usage

```html:preview
<label for="text" class="oui-label">Label for Input text</label>
<input type="text" id="text" name="text" class="oui-input" />

<label for="select" class="oui-label">Label for Select</label>
<div class="oui-select">
  <select id="select" name="select" class="oui-select__input">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </select>
  <i class="oui-icon oui-icon-chevron-down"></i>
</div>
```

## Mixins

```less
  @import 'oui-label/_mixins';
```

### .label-base

Define the base styles for an label.

```less
#oui > .label();
```

```less
#oui > .label(
  @font-color: Color,
  @font-size: Number,
  @font-weight: Number,
  @padding: Number,
  @margin: Number
);
```

## Classes

### Block

The block class is `oui-label` (top-level element).
