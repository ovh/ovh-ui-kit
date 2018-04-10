# oui-typography

<component-status cx-design="complete" ux="rc"></component-status>

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
    The quick brown fox jumps over the lazy dog
  </a>
</div>
```

```html:preview
<div>
  <a href="#" class="oui-link oui-link_icon">
    The quick brown fox jumps over the lazy dog
    <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
  </a>
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
