# oui-navbar

<component-status cx-design="none" ux="prototype"></component-status>

oui-navbar is a package which provide styles for the navbar component.

## Installation

```less
  @import 'oui-navbar/navbar';
```

## Usage

```html:preview
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href="">
    <i class="oui-icon oui-icon-ovh"></i>
  </a>
  <ul class="oui-navbar__list">
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link oui-navbar__link_active" href="">Lorem ipsum</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link" href="">Dolor sit amet</a>
    </li>
  </ul>
</nav>
```

```html:preview
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href="">
    <i class="oui-icon oui-icon-ovh"></i>
  </a>
  <ul class="oui-navbar__list">
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link oui-navbar__link_active" href="">Lorem ipsum</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link" href="">Dolor sit amet</a>
    </li>
  </ul>
  <ul class="oui-navbar__list oui-navbar__list_end">
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link" href="">Consectetur</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link" href="">Adipiscing elit</a>
    </li>
  </ul>
</nav>
```

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
  @background-color: @oui-navbar-background-color;
  @font-color: @oui-navbar-font-color;
  @icon-color: @oui-navbar-icon-color;
);
```

| Parameter             | Type    | Default Value                                       |
| --------------------- | ------- | --------------------------------------------------- |
| __@background-color__ | Color   | `@oui-navbar-background-color: @oui-color-zodiac;`  |
| __@font-color__       | Color   | `@oui-navbar-font-color: #fff;`                     |
| __@icon-color__       | Color   | `@oui-navbar-icon-color: @oui-color-fiord;`         |

## Classes

### Block

The block class is `oui-navbar` (top-level element).

### Element

Inner elements:

| Element                   | Class                                            |
| ------------------------- | ------------------------------------------------ |
| __a__                     | `oui-navbar__title-link`                         |
|   h1                      | `oui-navbar__title`                              |
|     i                     | `oui-icon oui-icon-logo`                         |
|     span                  | `oui-navbar__title-bold`                         |
|     span                  | `oui-navbar__title-small`                        |
| __ul__                    | `oui-navbar__items`                              |
|   li                      | `oui-navbar__item`                               |
|     a                     | `oui-navbar__link`                               |
| __div__                   | `oui-navbar__selector`                           |
|   select                  | `oui-navbar__select`                             |
