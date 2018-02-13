# oui-textarea

<component-status cx-design="complete" ux="rc"></component-status>

oui-textarea is a package which provides styles for the textarea component.

## Installation

```less
  @import 'oui-textarea/textarea';
```

## Usage

### Basic

```html:preview
<div class="oui-textarea">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
</div>
```

### Focused

```html:preview
<div class="oui-textarea oui-textarea_active">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
</div>
```

### Error

```html:preview
<div class="oui-textarea oui-textarea_error">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
</div>
```

### Disabled

```html:preview
<div class="oui-textarea oui-textarea_disabled">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
</div>
```

### Read-only

```html:preview
<div class="oui-textarea oui-textarea_readonly">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
</div>
```

### Footer

```html:preview
<div class="oui-textarea">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
  <div class="oui-textarea__footer">xxx/yyy characters</div>
</div>
```

```html:preview
<div class="oui-textarea oui-textarea_error">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
  <div class="oui-textarea__footer">xxx/yyy characters</div>
</div>
```

### Sizes

```html:preview
<div class="oui-textarea oui-textarea_xl">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
</div>
```

```html:preview
<div class="oui-textarea oui-textarea_l">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
</div>
```

```html:preview
<div class="oui-textarea oui-textarea_m">
  <textarea class="oui-textarea__textarea">Textarea text</textarea>
</div>
```

## Native usage

```html:preview
<textarea class="oui-textarea">Textarea text</textarea>
<textarea class="oui-textarea" placeholder="Textarea text with placeholder"></textarea>
<textarea class="oui-textarea" disabled="disabled">Textarea text disabled</textarea>
<textarea class="oui-textarea" readonly="readonly">Textarea text readonly</textarea>
<textarea class="oui-textarea oui-textarea_error">Textarea text Error</textarea>
```

### Inline textarea

```html:preview
<textarea class="oui-textarea oui-textarea_inline">Textarea inline</textarea>
```

### Sizes

```html:preview
<textarea type="text" class="oui-input oui-input_xs" value="XS"></textarea>
<textarea type="text" class="oui-input oui-input_s" value="S"></textarea>
<textarea type="text" class="oui-input oui-input_m" value="M"></textarea>
<textarea type="text" class="oui-input oui-input_l" value="L"></textarea>
<textarea type="text" class="oui-input oui-input_xl" value="XL"></textarea>
```

## Mixins

```less
  @import 'oui-textarea/_mixins';
```

### .textarea-base

Define the base styles for a textarea. It inherits from `.input-base`.

```less
#oui > .textarea-base();
```

### .textarea-status

Define the styles for textarea warning and textarea error. It inherits from `.input-status`.

```less
#oui > .textarea-status();
```

### .textarea-inline

`.oui-textarea` don't give you an inline element by default. If you want an inlined input, you can use this mixin.

```less
#oui > .textarea-inline();
```

## Classes

### Block

The block class is `oui-textarea` (top-level element).

### Modifier

The provided modifiers are:

| Class                    | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `oui-textarea_warning`   | Make the textarea looks like one in warning    |
| `oui-textarea_error`     | Make the textarea looks like one in error      |
| `oui-textarea_inline`    | Make the textarea inlined                      |
