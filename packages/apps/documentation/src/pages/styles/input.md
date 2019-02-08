# Input

## Usage
Guideline : Any text box must be sized according to the expected length of the field in the database.

*Formatted field*

When entering a formatted field (date, time, phone number, postal code, amount, email address, etc.), no formatting mask will be used.
The field will be formatted at the output (when entered / modified) or displayed (when it is not empty).

```html:preview
<input type="text" class="oui-input" value="Input text">
<input type="text" class="oui-input" placeholder="Input text with placeholder">
<input type="text" class="oui-input" value="Input text disabled" disabled="disabled">
<input type="text" class="oui-input" value="Input text disabled with value" disabled="disabled">
<input type="text" class="oui-input" value="Input text readonly with value" readonly="readonly">
<input type="text" class="oui-input oui-input_error" value="Input text Error">
```

### Inline input

```html:preview
<input type="text" class="oui-input oui-input_inline" value="Inline input">
```

### Sizes

```html:preview
<input type="text" class="oui-input oui-input_xs" value="XS">
<input type="text" class="oui-input oui-input_s" value="S">
<input type="text" class="oui-input oui-input_m" value="M">
<input type="text" class="oui-input oui-input_l" value="L">
<input type="text" class="oui-input oui-input_xl" value="XL">
```
