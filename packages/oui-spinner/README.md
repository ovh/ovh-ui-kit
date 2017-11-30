# oui-spinner

<component-status cx-design="partial" ux="rc"></component-status>

oui-spinner is a package which provide styles for the spinner component.

## Installation

```less
@import 'oui-spinner/spinner';
```

## Usage

### Small spinner
Guideline: Use the small format when loading a single item. (ex: link in the left menu, a content in a table cell)

```html:preview
<div class="oui-spinner oui-spinner_s">
  <div class="oui-spinner__container">
    <div class="oui-spinner__image"></div>
  </div>
</div>
```

### Medum spinner
Guideline: Use the medium format when loading a group or block. (ex: box, panel, zone of a page)

```html:preview
<div class="oui-spinner oui-spinner_m">
  <div class="oui-spinner__container">
    <div class="oui-spinner__image"></div>
  </div>
</div>
```

### Large spinner
Guideline: Use large format when loading a whole page.

```html:preview
<div class="oui-spinner oui-spinner_l">
  <div class="oui-spinner__container">
    <div class="oui-spinner__image"></div>
  </div>
</div>
```

## Mixins

```less
@import 'oui-spinner/_mixins';
```

### .spinner-base

Define the base styles for a spinner.

```less
#oui > .spinner-base();
```

### .spinner-s

Will stylize your spinner as a small one.

```less
#oui > .spinner-s();
```

```less
#oui > .spinner-s(
  @selector: Class,
  @size: Number,
  @spacing: Number,
  @speed: Number (ms)
);
```

### .spinner-m

Will stylize your spinner as a medium one.

```less
#oui > .spinner-m();
```

```less
#oui > .spinner-m(
  @selector: Class,
  @size: Number,
  @spacing: Number,
  @speed: Number (ms)
);
```

### .spinner-l

Will stylize your spinner as a large one.

```less
#oui > .spinner-l();
```

```less
#oui > .spinner-l(
  @selector: Class,
  @size: Number,
  @spacing: Number,
  @speed: Number (ms)
);
```

### .spinner-inline

Will stylize your spinner as an inlined one. Typically used for the small one.

```less
#oui > .spinner-inline();
```

## Classes

### Block

The block class is `oui-spinner` (top-level element).
