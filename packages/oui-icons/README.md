# oui-icons

<component-status cx-design="partial" ux="rc"></component-status>

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
  @icon-size: Number,
  @icon-color: Color,
  @spacing: Number,
  @padding: Number
);
```

### .icon-circle

Define the base styles for a circled icon.

```less
#oui > .icon-circle(
  @icon-size: Number
);
```

### .icon-bicolor

Will stylize your icon as a bicolor one.

```less
#oui > .icon-bicolor(
  @icon-char-color: Color
);
```

## Classes

### Block

The block class is `oui-icon` (top-level element).

## Available icons

### Basic Icons

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-ovh" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-ovh" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-close" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-close" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-error_circle" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-error_circle" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-info_circle" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-info_circle" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-success_circle" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-success_circle" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-warning_circle" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-warning_circle" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-eye" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-eye" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-eye-blocked" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-eye-blocked" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-chevron-up" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-chevron-up" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-chevron-right" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>`
  </div>
</div>

### Bicolor Icons

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>`
  </div>
</div>

### Circled Icons

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-close oui-icon_circle" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-close oui-icon_circle" aria-hidden="true"></i>`
  </div>
</div>

### Linear Icons

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-pen" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-pen" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-power" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-power" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-trash" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-trash" aria-hidden="true"></i>`
  </div>
</div>

<div class="oui-icon-badge">
  <div class="oui-icon-badge__preview"><i class="oui-icon oui-icon-chat" aria-hidden="true"></i></div>
  <div class="oui-icon-badge__code">
    `<i class="oui-icon oui-icon-chat" aria-hidden="true"></i>`
  </div>
</div>