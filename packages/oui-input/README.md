# oui-input

oui-input is a package which provides styles for the input component.

## Installation

```less
  @import 'oui-input/input;
```

## Usage

```html:preview
<input class="oui-input">

<input class="oui-input" placeholder="Input text" disabled="disabled">

<input class="oui-input" value="Input text" readonly="readonly">
```

## Mixins

```less
  @import 'oui-input/_mixins';
```

### .input

Define the base styles for an input.

```less
#oui > .input();
```

```less
#oui > .input(
  @color: Color,
  @font-size: Number,
  @font-weight: Number,
  @margin: Number,
  @padding: Number,
  @border: Color,
);
```

## Classes

### Block

The block class is `oui-input` (top-level element).
