# oui-icons

oui-icons is a package which provide styles for the icons.

## Installation

```less
  @import 'oui-icons/icons';
```

## Usage

### Icon

```html:preview
  <i class="oui-icon oui-icon-close"></i>
  <i class="oui-icon oui-icon-error_circle"></i>
  <i class="oui-icon oui-icon-info_circle"></i>
  <i class="oui-icon oui-icon-success_circle"></i>
  <i class="oui-icon oui-icon-warning_circle"></i>
```

### Bicolor

```html:preview
  <i class="oui-icon oui-icon-error_circle oui-icon_bicolor"></i>
  <i class="oui-icon oui-icon-info_circle oui-icon_bicolor"></i>
  <i class="oui-icon oui-icon-success_circle oui-icon_bicolor"></i>
  <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor"></i>
```

## Mixins

```less
  @import 'oui-icons/icons/_mixins';
```

### .icon

Define the base styles for an icon.

```less
#oui > .icon();
```

```less
#oui > .icon (
  @icon-size,
  @icon-color,
  @spacing,
  @padding
);
```

| Parameter       | Type   | Default Value                  |
| --------------- | ------ | ------------------------------ |
| __@icon-size__  | Number | `@oui-icon-size: rem-calc(24)` |
| __@icon-color__ | Color  | `@oui-icon-color`              |
| __@spacing__    | Number | `@oui-icon-spacing: 0`         |
| __@padding__    | Number | `@oui-icon-padding: 0`         |

### .icon-bicolor

Will stylize your icon as a bicolor one.

```less
#oui > .icon-bicolor();
```

## Classes

### Block

The block class is `oui-icon` (top-level element).

## Available icons

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-ovh"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-ovh"></i>`
    </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-close"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-close"></i>`
  </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-error_circle"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-error_circle"></i>`
    </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-error_circle oui-icon_bicolor"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-error_circle oui-icon_bicolor"></i>`
    </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-info_circle"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-info_circle"></i>`
    </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-info_circle oui-icon_bicolor"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-info_circle oui-icon_bicolor"></i>`
    </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-success_circle"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-success_circle"></i>`
    </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-success_circle oui-icon_bicolor"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-success_circle oui-icon_bicolor"></i>`
    </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-warning_circle"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-warning_circle"></i>`
    </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-warning_circle oui-icon_bicolor"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-warning_circle oui-icon_bicolor"></i>`
    </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-logo"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-logo"></i>`

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-eye"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-eye"></i>`
    </div>
</div>

<div class="oui-icon-badge">
    <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-eye-blocked"></i></div>
    <div class="oui-icon-badge__code">
      `<i class="oui-icon oui-icon-eye-blocked"></i>`
    </div>
</div>