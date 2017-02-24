# oui-navbar

oui-navbar is a package which provide styles for the navbar component.

## Installation

```less
  @import 'oui-navbar/navbar';
```

## Usage

```html:preview
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__title-link" href="#">
    <h1 class="oui-navbar__title">
      <i class="oui-icon oui-icon-logo"></i>
      <span class="oui-navbar__title-bold">OVH</span>
      <span class="oui-navbar__title-small">UIKit</span>
    </h1>
  </a>
  <ul class="oui-navbar__items">
    <li class="oui-navbar__item">
      <a class="oui-navbar__link" href="#!/documentation">Documentation</a>
    </li>
    <li class="oui-navbar__item oui-navbar__item_current">
      <a class="oui-navbar__link" href="#!/oui-less">Oui-less</a>
    </li>
    <li class="oui-navbar__item">
      <a class="oui-navbar__link" href="#!/oui-angular">Oui-angular</a>
    </li>
  </ul>
  <div class="oui-navbar__selector">
  <select class="oui-navbar__select">
    <option label="latest" value="string:latest" selected="selected">Latest</option>
    <option label="v1.0.0" value="string:v1.0.0">v1.0.0</option>
  </select>
  </div>   
</nav>
```

## Mixins

```less
  @import 'oui-navbar/navbar/_mixins';
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
