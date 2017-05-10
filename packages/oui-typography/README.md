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
<h1 class="oui-header_1">
  [h1] Where no man has gone before
</h1>

<h2 class="oui-header_2">
  [h2] Where no man has gone before
</h2>

<h3 class="oui-header_3">
  [h3] Where no man has gone before
</h3>

<h4 class="oui-header_4">
  [h4] Where no man has gone before
</h4>

<h5 class="oui-header_5">
  [h5] Where no man has gone before
</h5>

<h6 class="oui-header_6">
  [h6] Where no man has gone before
</h6>
```

### Headers underlined

> Only the oui-header_1 can take an underlined style up to now.

> The class oui-header_underline will have no effect on the others headers.

```html:preview
<h1 class="oui-header_1 oui-header_underline">
  [h1 Underlined] Where no man has gone before
</h1>

<h2 class="oui-header_2 oui-header_underline">
  [h2] Where no man has gone before
</h2>

<h3 class="oui-header_3 oui-header_underline">
  [h3] Where no man has gone before
</h3>

<h4 class="oui-header_4 oui-header_underline">
  [h4] Where no man has gone before
</h4>

<h5 class="oui-header_5 oui-header_underline">
  [h5] Where no man has gone before
</h5>

<h6 class="oui-header_6 oui-header_underline">
  [h6] Where no man has gone before
</h6>
```

### Paragraphs

```html:preview
<p class="oui-paragraph">
  [Paragraph] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet tellus enim, vel porttitor nulla pharetra vel.
  Praesent iaculis enim eu lacus dapibus bibendum. Cras in ex aliquam, eleifend arcu et hendrerit quam. Quisque fermentum bibendum lectus.
  Cras purus dolor, fermentum sit amet vulputate id, pretium quis lorem.
</p>
```

### Links

```html:preview
<div>
  <a href="#" class="oui-link">
    [Link] The quick brown fox jumps over the lazy dog
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

Will stylize the headers h1 to h6.

```less
#oui > .headers();
```

### .header-underline

Will stylize the headers underlined.

```less
#oui > .header-underline();
```

```less
#oui > .header-underline(
  @border-width: Number,
  @border-color: Color
);
```

### .link

Will stylize the links.

```less
#oui > .link();
```

```less
#oui > .link(
  @font-color: Color,
  @font-color_hover: Color,
  @text-decoration: Keyword,
  @text-decoration_hover: Keyword
);
```

### .horizontal-line-base

Define the base styles for a horizontal line.

```less
#oui > .horizontal-line-base();
```

```less
#oui > .horizontal-line-base(
  @margin-bottom: Number,
  @width: Number,
  @color: Color,
  @style: Keyword
);
```

### .horizontal-line-dark

Will stylize your horizontal line as a dark one.

```less
#oui > .horizontal-line-dark();
```

```less
#oui > .horizontal-line-dark(
  @color: Color
);
```

### .horizontal-line-thin

Will stylize your horizontal line as a thin one.

```less
#oui > .horizontal-line-thin();
```

```less
#oui > .horizontal-line-thin(
  @width: Number
);
```

## Classes

### Headers

The headers classes are `oui-header_1` `oui-header_2` `oui-header_3` `oui-header_4` `oui-header_5` `oui-header_6` (top-level elements).

#### Modifiers

| Class                      | Description                   |
| -------------------------- | ----------------------------- |
| `oui-header_underline`     | Make the header underlined    |

### Link

The link class is `oui-link` (top-level element).

### Horizontal line

The horizontal line class is `oui-horizontal-line` (top-level element)

#### Modifiers

| Class                      | Description                   |
| -------------------------- | ----------------------------- |
| `oui-horizontal-line_dark` | Make the horizontal line dark |
| `oui-horizontal-line_thin` | Make the horizontal line thin |
