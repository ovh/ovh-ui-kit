# oui-loader

<component-status cx-design="partial" ux="rc"></component-status>

oui-loader is a package which provide styles for the loader component.

## Installation

```less
@import 'oui-loader/loader';
```

## Usage

### X-Small loader 
Guideline: Use the x-small format to demonstrate the loading of a single item.

### Small loader 
Guideline: Use the small format to demonstrate the loading of an element group or block.

```html:preview
<div class="oui-loader oui-loader_s">
  <div class="oui-loader__container">
    <div class="oui-loader__image"></div>
  </div>
</div>
```

### Large loader 
Guideline: Use large format to demonstrate the loading of a full page.

```html:preview
<div class="oui-loader oui-loader_l">
  <div class="oui-loader__container">
    <div class="oui-loader__image"></div>
  </div>
</div>
```

## Mixins

```less
@import 'oui-loader/_mixins';
```

### .loader-base

Define the base styles for a loader.

```less
#oui > .loader-base();
```

### .loader-s

Will stylize your loader as a small one.

```less
#oui > .loader-s();
```

```less
#oui > .loader-s(
  @selector: Class,
  @size: Number,
  @spacing: Number,
  @speed: Number (ms)
);
```

### .loader-l

Will stylize your loader as a large one.

```less
#oui > .loader-l();
```

```less
#oui > .loader-l(
  @selector: Class,
  @size: Number,
  @spacing: Number,
  @speed: Number (ms)
);
```

## Classes

### Block

The block class is `oui-loader` (top-level element).
