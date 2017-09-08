# oui-loader

<component-status cx-design="partial" ux="rc"></component-status>

oui-loader is a package which provide styles for the loader component.

## Installation

```less
@import 'oui-loader/loader';
```

## Usage

### X-Small loader (light background)
Soon.

### X-Small loader (dark background)
Soon.

### Small loader (light background)

```html:preview
<div class="oui-loader oui-loader_s">
  <div class="oui-loader__container">
    <div class="oui-loader__image"></div>
  </div>
</div>
```

### Small loader (dark background)
Soon.

### Large loader (light background)

```html:preview
<div class="oui-loader oui-loader_l">
  <div class="oui-loader__container">
    <div class="oui-loader__image"></div>
  </div>
</div>
```

### Large loader (dark background)
Soon.

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
