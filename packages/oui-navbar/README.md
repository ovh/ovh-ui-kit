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
      <a class="oui-navbar-link oui-navbar-link_active" href="">Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href="">Dolor sit amet</a>
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
      <a class="oui-navbar-link oui-navbar-link_active" href="">Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href="">Dolor sit amet</a>
    </li>
  </ul>
  <ul class="oui-navbar-list oui-navbar-list_end">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href="">Consectetur</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href="">Adipiscing elit</a>
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
  <ul class="oui-navbar-list">
    <li class="oui-navbar-list__item">
      <button class="oui-navbar-link" type="button" aria-haspopup="true" aria-expanded="true">Lorem ipsum</button>
      <div class="oui-navbar-menu">
        <ul class="oui-navbar-list">
          <li class="oui-navbar-list__item">
            <a class="oui-navbar-link" href="">Vivamus cursus</a>
          </li>
          <li class="oui-navbar-list__item">
            <a class="oui-navbar-link" href="">Condimentum</a>
          </li>
        </ul>
      </div>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href="">Dolor sit amet</a>
    </li>
  </ul>
  <ul class="oui-navbar-list oui-navbar-list_end">
    <li class="oui-navbar-list__item">
      <button class="oui-navbar-link" type="button" aria-haspopup="true" aria-expanded="true">Consectetur</button>
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
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href="">Adipiscing elit</a>
    </li>
  </ul>
</nav>
</div>
```

The menu `.oui-navbar-menu` is open if the attribute `aria-expanded` is `true`, of the previous `.oui-navbar-link` button or link

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
  @padding: Number,
  @font-size: Number,
  @font-color: Color,
  @font-color_active: Color,
  @background-color: Color,
  @background-color_hover: Color,
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
  @height: Number,
  @z-index: Number,
  @opacity: Number
);
```

### .navbar-list

Define the base styles of a list for a navbar.

```less
#oui > .navbar-list();
```

```less
#oui > .navbar-backdrop(
  @flex-direction: Direction,
  @flex-grow: Number,
  @align-items: Flex Alignment,
  @justify-content: Flex Alignment,
  @border-bottom: Border
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
  @height: Number,
  @padding: Number,
  @font-size: Number,
  @font-color: Color,
  @font-color_active: Color,
  @background-color: Color,
  @background-color_hover: Color
);
```

### .navbar-link_variant

Define the variant styles of a link for a navbar.

```less
#oui > .navbar-link_variant();
```

```less
#oui > .navbar-link_variant(
  @width: Number,
  @font-size: Number,
  @font-color: Color,
  @background-color: Color,
  @background-color_hover: Color
);
```

### .navbar-link_icon

Define the styles of a link with an left icon for a navbar.

```less
#oui > .navbar-link_icon();
```

```less
#oui > .navbar-link_icon(
    @icon-size: Number,
    @icon-spacing: Number
);
```

### .navbar-link_arrow

Define the styles of a link with a right arrow for a navbar.

```less
#oui > .navbar-link_arrow();
```

```less
#oui > .navbar-link_arrow(
    @padding: Number,
    @arrow-color: Color
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
  @height: Number,
  @padding: Number,
  @background-color: Color,
  @background-color_hover: Color,
  @border-bottom: Border,
  @box-shadow: Shadow,
  @font-color: Color,
  @font-size: Number,
  @font-size_small: Number,
  @z-index: Number,
  @title-font-color: Color,
  @title-font-size: Number,
  @title-line-height: Number,
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
  @height: Number
);
```

### .navbar-menu-animation_opacity

Define the display animation of a menu for a navbar, with an opacity effect.

```less
#oui > .navbar-menu-animation_opacity();
```

### .navbar-menu-animation_slide

Define the display animation of a menu for a navbar, with a slide effect.

```less
#oui > .navbar-menu-animation_slide();
```

### .navbar-toggler

Define the base styles of a toggler button for a navbar.

```less
#oui > .navbar-toggler();
```

```less
#oui > .navbar-toggler(
  @background-color_active: Color,
  @font-color: Color,
  @font-color_active: Color,
  @font-size: Number,
  @hamburger-size: Number,
  @hamburger-bar-size: Number
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

| Class                         | Description                                                             |
| ----------------------------- | ----------------------------------------------------------------------- |
| `oui-navbar_fixed`            | Make the navbar fixed on top                                            |
| `oui-navbar_desktop-only`     | Make the navbar element displayed only on desktop (> 1024px)            |
| `oui-navbar_mobile-only`      | Make the navbar element displayed only on mobile and tablet (<= 1024px) |
| `oui-navbar-list_end`         | Make the navbar list align to the right                                 |
| `oui-navbar-link_active`      | Make the navbar link active                                             |
| `oui-navbar-link_secondary`   | Make the navbar link secondary                                          |
| `oui-navbar-menu_right`       | Make the navbar menu positioning to the right                           |
| `oui-navbar-menu_toggle`      | Make the navbar menu linked to the toggler                              |
| `oui-navbar-backdrop_active`  | Make the navbar backdrop displayed                                      |
