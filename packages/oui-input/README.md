# oui-input

oui-input is a package which provides styles for the input component.

## Installation

```less
  @import 'oui-input/input;
```

## Usage

```html:preview
	<input class="oui-input" value="Input text">

	<input class="oui-input" placeholder="Input text with placeholder">

	<input class="oui-input" value="Input text disabled" disabled="disabled">

	<input class="oui-input" value="Input text disabled with value" disabled="disabled">

	<input class="oui-input" value="Input text readonly with value" readonly="readonly">
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
	@font-color: Color;
	@font-size: Number;
	@font-weight: Number;
	@padding: Number;
	@margin: Number;
	@border-color: Color;
);
```

## Classes

### Block

The block class is `oui-input` (top-level element).
