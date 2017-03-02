# oui-typography

<component-status cx-design="partial" ux="rc"></component-status>

oui-typography is a package which provides tools as constants and mixins for managing typography.

## Installation

```less
  @import 'oui-typography/_constants';
  @import 'oui-typography/_mixins';
```

## Usage

### Headers
```html:preview
  <h1 class="oui-heading">
      [h1] Lorem ipsum dolor sit amet
  </h1>

  <h2 class="oui-heading">
      [h2] Donec vitae metus tellus
  </h2>

  <h3 class="oui-heading">
      [h3] Nam aliquam neque ac nisi egestas dapibus
  </h3>

  <h4 class="oui-heading">
      [h4] Where no man has gone before.
  </h4>

  <h5 class="oui-heading">
      [h5] Where no man has gone before.
  </h5>

  <h6 class="oui-heading">
      [h6] Where no man has gone before.
  </h6>
```

### Paragraphs
```html:preview
  <p class="oui-paragraph">
    [Paragraph] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet tellus enim, vel porttitor nulla pharetra vel. Praesent iaculis enim eu lacus dapibus bibendum. Cras in ex aliquam, eleifend arcu et hendrerit quam. Quisque fermentum bibendum lectus. Cras purus dolor, fermentum sit amet vulputate id, pretium quis lorem.
  </p>
```

### Links
```html:preview
  <div>
    <a href="#" class="oui-link">
      [Link] The quick brown fox jumps over the lazy dog.
    </a>
  </div>

  <div>
    <button class="oui-link">
      [Button Link]
    </button>
  </div>
```

### Horizontal line

```html:preview
  <hr class="oui-horizontal-line">

  <hr class="oui-horizontal-line oui-horizontal-line_thin">

  <hr class="oui-horizontal-line oui-horizontal-line_dark">
```

## Constants

| Constant                | Value | Preview                                                 |
| ----------------------- | ----- | ------------------------------------------------------- |
| @oui-font-extra-light   | 200   | <span style="font-weight: 200;">Font extra light</span> |
| @oui-font-light         | 300   | <span style="font-weight: 300;">Font light</span>       |
| @oui-font-regular       | 400   | <span style="font-weight: 400;">Font regular</span>     |
| @oui-font-semibold      | 600   | <span style="font-weight: 600;">Font semibold</span>    |
| @oui-font-bold          | 700   | <span style="font-weight: 700;">Font bold</span>        |
| @oui-font-black         | 900   | <span style="font-weight: 900;">Font black</span>       |

## Mixins

```less
  @import 'oui-typography/_mixins';
```

### .base-font

Define the base style for the typography.

```less
  #oui > .base-font();
```

### .headers

Will stylize the headlines h1 to h6.

```less
  #oui > .headers();
```

### .link

Will stylize the links.

```less
  #oui > .link();
```

```less
  #oui > .link(
    @font-color,
    @font-color_hover,
    @text-decoration,
    @text-decoration_hover
  );
```

| Parameter                       | Type      | Default Value                                                     |
| ------------------------------- | --------- | ----------------------------------------------------------------- |
| __@font-color__                 | Color     | `@oui-link-font-color: @oui-color-sapphire`                       |
| __@font-color_hover__           | Color     | `@oui-link-font-color_hover: #007e9b`                             |
| __@text-decoration__            | Keyword   | `@oui-link-text-decoration: underline`                            |
| __@text-decoration_hover__      | Keyword   | `@oui-link-text-decoration_hover: @oui-link-text-decoration`      |

### .horizontal-line-base

Define the base styles for a horizontal line.

```less
  #oui > .horizontal-line-base();
```

```less
  #oui > .horizontal-line-base(@oui-margin-bottom, @oui-width, @oui-color, @oui-style);
```

| Parameter                | Type   | Default Value                          |
| ------------------------ | ------ | -------------------------------------- |
| __@oui-margin-bottom__   | Number | `@oui-horizontal-line-margin-bottom`   |
| __@oui-width__           | Number | `@oui-horizontal-line-width`           |
| __@oui-color__           | Color  | `@oui-horizontal-line-color`           |
| __@oui-style__           | Style  | `@oui-horizontal-line-style`           |

### .horizontal-line-dark

Will stylize your horizontal line as a dark one.

```less
  #oui > .horizontal-line-dark();
```

```less
  #oui > .horizontal-line-dark(@oui-color)
```
| Parameter        | Type  | Default Value                       |
| ---------------- | ----- | ----------------------------------- |
| __@oui-color__   | Color | `@oui-horizontal-line-dark-color`   |

### .horizontal-line-thin

Will stylize your horizontal line as a thin one.

```less
  #oui > .horizontal-line-thin();
```

```less
  #oui > .horizontal-line-thin(@oui-width)
```
| Parameter        | Type  | Default Value                       |
| ---------------- | ----- | ----------------------------------- |
| __@oui-width__   | Color | `@oui-horizontal-line-thin-width`   |

## Classes

### Headers

The headers class is `oui-heading` (top-level element).

### Link

The link class is `oui-link` (top-level element).

### Horizontal line

The horizontal line class is `oui-horizontal-line` (top-level element)

#### Modifiers

| Class                      | Description                   |
| -------------------------- | ----------------------------- |
| `oui-horizontal-line_dark` | Make the horizontal line dark |
| `oui-horizontal-line_thin` | Make the horizontal line thin |
