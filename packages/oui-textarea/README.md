# oui-textarea

<component-status cx-design="partial" ux="rc"></component-status>

oui-textarea is a package which provides styles for the textarea component.

## Installation

```less
  @import 'oui-textarea/textarea';
```

## Usage

```html:preview
<textarea class="oui-textarea">Textarea text</textarea>
<textarea class="oui-textarea" placeholder="Textarea text with placeholder"></textarea>
<textarea class="oui-textarea" disabled="disabled">Textarea text disabled</textarea>
<textarea class="oui-textarea" readonly="readonly">Textarea text readonly</textarea>
<textarea class="oui-textarea oui-textarea_warning">Textarea text Warning</textarea>
<textarea class="oui-textarea oui-textarea_error">Textarea text Error</textarea>
```

### Inline textarea

```html:preview
<textarea class="oui-textarea oui-textarea_inline">Textarea inline</textarea>
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
