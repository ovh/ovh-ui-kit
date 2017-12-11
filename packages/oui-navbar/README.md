# oui-navbar

<component-status cx-design="none" ux="prototype"></component-status>

oui-navbar is a package which provide styles for the navbar component.

## Installation

```less
  @import 'oui-navbar/navbar';
```

## Usage

### Simple

```html:preview
<div style="margin-bottom: 15px" class="oui-doc-preview-only-keep-children">
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href="">
    <i class="oui-icon oui-icon-ovh"></i>
  </a>
  <ul class="oui-navbar-list">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary oui-navbar-link_active" href="">Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href="">Dolor sit amet</a>
    </li>
  </ul>
</nav>
</div>
```

### With multiples lists

```html:preview
<div style="margin-bottom: 15px" class="oui-doc-preview-only-keep-children">
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href="">
    <i class="oui-icon oui-icon-ovh"></i>
  </a>
  <ul class="oui-navbar-list">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary oui-navbar-link_active" href="">Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href="">Dolor sit amet</a>
    </li>
  </ul>
  <ul class="oui-navbar-list oui-navbar-list_end">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href="">Consectetur</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href="">Adipiscing elit</a>
    </li>
  </ul>
</nav>
</div>
```

### With links variant

```html:preview
<div style="margin-bottom: 15px" class="oui-doc-preview-only-keep-children">
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href="">
    <i class="oui-icon oui-icon-ovh"></i>
  </a>
  <ul class="oui-navbar-list">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href="">Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_secondary" href="">Dolor sit amet</a>
    </li>
  </ul>
  <ul class="oui-navbar-list oui-navbar-list_end">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_icon" href="">
        <span class="oui-icon oui-icon-help_circle" aria-hidden="true"></span>
        Consectetur
      </a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_icon" href="">
        <span class="oui-icon oui-icon-info_circle" aria-hidden="true"></span>
        Adipiscing elit
      </a>
    </li>
  </ul>
</nav>
</div>
```

### With menus

```html:preview
<div style="height: 140px; margin-bottom: 15px" class="oui-doc-preview-only-keep-children">
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href="">
    <i class="oui-icon oui-icon-ovh"></i>
  </a>
  <ul class="oui-navbar-list oui-navbar-list_end">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href="">Consectetur</a>
    </li>
    <li class="oui-navbar-list__item">
      <button class="oui-navbar-link oui-navbar-link_primary" type="button" aria-haspopup="true" aria-expanded="true">Adipiscing elit</button>
      <div class="oui-navbar-menu oui-navbar-menu_right">
        <ul class="oui-navbar-list">
          <li class="oui-navbar-list__item">
            <a class="oui-navbar-link" href="">Quisque posuere</a>
          </li>
          <li class="oui-navbar-list__item">
            <a class="oui-navbar-link" href="">Semper scelerisque</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</nav>
</div>
```

The menu `.oui-navbar-menu` is open if the attribute `aria-expanded` is `true`, of the previous `.oui-navbar-link` button or link.

### With responsive toggler

```html:preview
<div style="margin-bottom: 15px" class="oui-doc-preview-only-keep-children">
<nav class="oui-navbar" role="navigation">
  <button type="button" class="oui-navbar-toggler" aria-haspopup="true" aria-expanded="false">
    <span class="oui-navbar-toggler__hamburger">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
  <div class="oui-navbar-menu oui-navbar-menu_fixed oui-navbar-menu_toggle">
    <ul class="oui-navbar-list">
      <li class="oui-navbar-list__item">
        <a class="oui-navbar-link oui-navbar-link_active" href="">Lorem ipsum</a>
      </li>
      <li class="oui-navbar-list__item">
        <a class="oui-navbar-link" href="">Dolor sit amet</a>
      </li>
    </ul>
  </div>
  <a class="oui-navbar__brand" href="">
    <i class="oui-icon oui-icon-ovh"></i>
  </a>
  <ul class="oui-navbar-list oui-navbar_desktop-only">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary oui-navbar-link_active" href="">Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href="">Dolor sit amet</a>
    </li>
  </ul>
</nav>
</div>
```

The menu `.oui-navbar-menu_toggle` is open if the attribute `aria-expanded` is `true`, of the `.oui-navbar-toggler` button.

## Mixins

```less
  @import 'oui-navbar/_mixins';
```

### .navbar

Define the base styles for a navbar.

```less
#oui > .navbar();
```

```less
#oui > .navbar(
  @height: Number,
  @font-size: Number,
  @font-color: Color,
  @background-color: Color,
  @z-index: Number,
  @brand-color: Color,
  @brand-padding: Number
);
```

### .navbar-backdrop

Define the base styles of a backdrop for a navbar.

```less
#oui > .navbar-backdrop();
```

```less
#oui > .navbar-backdrop(
  @top: Number,
  @z-index: Number,
  @opacity: Number,
  @background-color: Color
);
```

### .navbar-list

Define the base styles of a list for a navbar.

```less
#oui > .navbar-list();
```

```less
#oui > .navbar-list(
  @flex-direction: Direction,
  @flex-grow: Number,
  @align-items: Flex Alignment,
  @justify-content: Flex Alignment,
  @border-bottom: Border,
  @is-menu-list: Boolean // If true, set `position: static` to .oui-navbar-list__item (default `position: relative`)
);
```

### .navbar-link

Define the base styles of a link for a navbar.

```less
#oui > .navbar-link();
```

```less
#oui > .navbar-link(
  @min-width: Number,
  @min-height: Number,
  @line-height: Number,
  @padding: Number
);
```

### .navbar-link_variant

Define the variant styles of a link for a navbar.

```less
#oui > .navbar-link_variant();
```

```less
#oui > .navbar-link_variant(
  @background-color: Color,
  @font-color: Color,
  @font-size: Number,
  @font-weight: Number
);
```

### .navbar-link_icon

Define the styles of a link with an left icon for a navbar.

```less
#oui > .navbar-link_icon();
```

```less
#oui > .navbar-link_icon(
  @icon-line-height: Number,
  @icon-size: Number,
  @icon-spacing: Number,
  @icon-color: Color
);
```

### .navbar-link_menu

Define the styles of a link with an arrow for Menus.

```less
#oui > .navbar-link_menu();
```

```less
#oui > .navbar-link_menu(
  @arrow-color: Color,
  @arrow-padding: Number,
  @arrow-size: Number,
  @arrow-spacing: Number
);
```

### .navbar-menu

Define the base styles of a menu for a navbar.

```less
#oui > .navbar-menu();
```

```less
#oui > .navbar-menu(
  @width: Number,
  @padding: Number,
  @background-color: Color,
  @background-color_active: Color,
  @border-bottom: Border,
  @box-shadow: Shadow,
  @font-color: Color,
  @font-size: Number,
  @z-index: Number,
  @header-background-color: Color,
  @header-border-bottom: Border,
  @header-padding: Number,
  @title-line-height: Number,
  @title-font-color: Color,
  @title-font-size: Number,
  @title-font-weight: Number,
  @back-color: Color,
  @back-padding: Number
);
```

### .navbar-menu_fixed

Define the styles of a menu for a navbar with `position: fixed`.

```less
#oui > .navbar-menu_fixed();
```

```less
#oui > .navbar-menu_fixed(
  @width: Number,
  @height: Number,
  @box-shadow: Shadow
);
```

__Note:__ The classname `.oui-navbar-menu_fixed` use this mixin, but for mobile and tablet only.

### .navbar-menu-animation_opacity

Define the display animation of a menu for a navbar, with an opacity effect.

```less
#oui > .navbar-menu-animation_opacity();
```

```less
#oui > .navbar-menu-animation_opacity(
  @opacity: Number
);
```

### .navbar-menu-animation_slide

Define the display animation of a menu for a navbar, with a slide effect.

```less
#oui > .navbar-menu-animation_slide();
```

```less
#oui > .navbar-menu-animation_slide(
  @origin: left|right
);
```

### .navbar-toggler

Define the base styles of a toggler button for a navbar.

```less
#oui > .navbar-toggler();
```

```less
#oui > .navbar-toggler(
  @line-height: Number,
  @padding: Number,
  @margin-right: Number,
  @background-color_active: Color,
  @hamburger-width: Number,
  @hamburger-height: Number,
  @hamburger-bar-size: Number,
  @hamburger-bar-color: Color
);
```

### .navbar-helpers

Define the base styles of responsive helpers for a navbar.

```less
#oui > .navbar-helpers();
```

## Classes

### Block

The block classes are:
- `oui-navbar`
- `oui-navbar-list`
- `oui-navbar-link`
- `oui-navbar-menu`
- `oui-navbar-toggler`
- `oui-navbar-backdrop`

### Element

Inner elements:

| Element                   | Class                           |
| ------------------------- | ------------------------------- |
| __a__                     | `oui-navbar__brand`             |
| __button__                | `oui-navbar-toggler`            |
|   span                    | `oui-navbar-toggler__hamburger` |
| __ul__                    | `oui-navbar-list`               |
|   li                      | `oui-navbar-list__item`         |
|     a,button              | `oui-navbar-link`               |
| __div__                   | `oui-navbar-menu`               |
|   header                  | `oui-navbar-menu__header`       |
|     oui-back-button       | `oui-navbar-menu__back`         |
|     span                  | `oui-navbar-menu__breadcrumb`   |
|     h1,h2,h3              | `oui-navbar-menu__title`        |
|   div                     | `oui-navbar-menu__item`         |
| __div__                   | `oui-navbar-backdrop`           |

### Modifier

The provided modifiers are:

| Class                          | Description                                                                 |
| ------------------------------ | --------------------------------------------------------------------------- |
| `oui-navbar_fixed`             | Make the navbar fixed on top                                                |
| `oui-navbar_desktop-only`      | Make the navbar element displayed only on desktop (> 1024px)                |
| `oui-navbar_mobile-only`       | Make the navbar element displayed only on mobile and tablet (<= 1024px)     |
| `oui-navbar-list_end`          | Make the navbar list align to the right                                     |
| `oui-navbar-link_active`       | Make the navbar link active                                                 |
| `oui-navbar-link_primary`      | Make the navbar link primary                                                |
| `oui-navbar-link_secondary`    | Make the navbar link secondary                                              |
| `oui-navbar-link_icon`         | Make the navbar link with an icon on the left                               |
| `oui-navbar-menu_right`        | Make the navbar menu positioning to the right                               |
| `oui-navbar-menu_toggle`       | Make the navbar menu linked to the toggler                                  |
| `oui-navbar-menu_fixed`        | Make the navbar menu with a position fixed, __for mobile and tablet only__  |
| `oui-navbar-menu__item_active` | Make the navbar menu item active                                            |
| `oui-navbar-backdrop_active`   | Make the navbar backdrop displayed                                          |
