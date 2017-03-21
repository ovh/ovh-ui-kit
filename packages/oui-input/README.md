# oui-input

<component-status cx-design="partial" ux="rc"></component-status>

oui-input is a package which provides styles for the input component.

## Installation

```less
  @import 'oui-input/input;
```

## Usage

```html:preview
<input type="text" class="oui-input" value="Input text">
<input type="text" class="oui-input" placeholder="Input text with placeholder">
<input type="text" class="oui-input" value="Input text disabled" disabled="disabled">
<input type="text" class="oui-input" value="Input text disabled with value" disabled="disabled">
<input type="text" class="oui-input" value="Input text readonly with value" readonly="readonly">
<input type="text" class="oui-input oui-input_warning" value="Input text Warning">
<input type="text" class="oui-input oui-input_error" value="Input text Error">
```

## Mixins

```less
  @import 'oui-input/_mixins';
```

### .input-base

Define the base styles for an input.

```less
#oui > .input-base();
```

```less
#oui > .input(
  @font-color: Color;
  @font-size: Number;
  @font-weight: Number;
  @padding: Number;
  @margin: Number;
  @border-color: Color
);
```

### .input-status

Define the styles for input warning and input error.

```less
#oui > .input-status();
```

```less
#oui > .input-status(
  status: Class[]
);
```

## Classes

### Block

The block class is `oui-input` (top-level element).

### Modifier

The provided modifiers are:

| Class                 | Description                                 |
| --------------------- | ------------------------------------------- |
| `oui-input_warning`   | Make the input looks like one in warning    |
| `oui-input_error`     | Make the input looks like one in error      |
