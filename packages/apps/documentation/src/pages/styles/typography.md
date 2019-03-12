# Typography

## Usage

### Headers

```html:preview
<h1>h1. Where no man has gone before</h1>
<h2>h2. Where no man has gone before</h2>
<h3>h3. Where no man has gone before</h3>
<h4>h4. Where no man has gone before</h4>
<h5>h5. Where no man has gone before</h5>
<h6>h6. Where no man has gone before</h6>
```

**Note**: There is also a class helper `oui-heading_*` if needed

```html:preview
<p class="oui-heading_1">h1. Where no man has gone before</p>
<p class="oui-heading_2">h2. Where no man has gone before</p>
<p class="oui-heading_3">h3. Where no man has gone before</p>
<p class="oui-heading_4">h4. Where no man has gone before</p>
<p class="oui-heading_5">h5. Where no man has gone before</p>
<p class="oui-heading_6">h6. Where no man has gone before</p>
```

### Headers underlined

```html:preview
<h1 class="oui-heading_underline">h1. Where no man has gone before</h1>
<h2 class="oui-heading_underline">h2. Where no man has gone before</h2>
<h3 class="oui-heading_underline">h3. Where no man has gone before</h3>
<h4 class="oui-heading_underline">h4. Where no man has gone before</h4>
<h5 class="oui-heading_underline">h5. Where no man has gone before</h5>
<h6 class="oui-heading_underline">h6. Where no man has gone before</h6>
```

```html:preview
<p class="oui-heading_1 oui-heading_underline">h1. Where no man has gone before</p>
<p class="oui-heading_2 oui-heading_underline">h2. Where no man has gone before</p>
<p class="oui-heading_3 oui-heading_underline">h3. Where no man has gone before</p>
<p class="oui-heading_4 oui-heading_underline">h4. Where no man has gone before</p>
<p class="oui-heading_5 oui-heading_underline">h5. Where no man has gone before</p>
<p class="oui-heading_6 oui-heading_underline">h6. Where no man has gone before</p>
```

### Paragraphs

```html:preview
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet tellus enim, vel porttitor nulla pharetra vel.
  Praesent iaculis enim eu lacus dapibus bibendum. Cras in ex aliquam, eleifend arcu et hendrerit quam. Quisque fermentum bibendum lectus.
  Cras purus dolor, fermentum sit amet vulputate id, pretium quis lorem.
</p>
```

**Note**: There is also a class helper `oui-paragraph` if needed

```html:preview
<div class="oui-paragraph">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet tellus enim, vel porttitor nulla pharetra vel.
  Praesent iaculis enim eu lacus dapibus bibendum. Cras in ex aliquam, eleifend arcu et hendrerit quam. Quisque fermentum bibendum lectus.
  Cras purus dolor, fermentum sit amet vulputate id, pretium quis lorem.
</div>
```

### Label
A label gives an indication about the information that is expected, in the related input, from the user. The label can be textual or graphical. The label position is important since it indicates its scope.

The label can be found over its related input field. However, these labels are positioned at the right of the checkboxes and radio buttons.

```html:preview
<label for="text" class="oui-label">Label for Input text</label>
<input type="text" id="text" name="text" class="oui-input" />

<label for="select" class="oui-label">Label for Select</label>
<div class="oui-select">
  <select id="select" name="select" class="oui-select__input">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </select>
  <span class="oui-icon oui-icon-chevron-down"></span>
</div>
```

### Links

```html:preview
<a href="#">The quick brown fox jumps over the lazy dog</a>
```

**Note**: There is also a class helper `oui-link` if needed

```html:preview
<span class="oui-link">The quick brown fox jumps over the lazy dog</span>
```

#### With icon

```html:preview
<a href="#" class="oui-link_icon">
  The quick brown fox jumps over the lazy dog
  <span class="oui-icon oui-icon-external_link" aria-hidden="true"></span>
</a>
```

### Horizontal line

```html:preview
<hr class="oui-horizontal-line">

<hr class="oui-horizontal-line oui-horizontal-line_thin">

<hr class="oui-horizontal-line oui-horizontal-line_dark">
```

### Abreviations and Acronyms

```html:preview
<p>Praesent in congue purus, at <abbr title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">elementum sem</abbr>. Curabitur porta eros volutpat, sodales justo eu, congue metus.</p>
```

**Note**: You can use also the [oui-tooltip](#!/components/tooltip) component to replace the native tooltip

```html:preview
<p>Praesent in congue purus, at elementum sem. <abbr title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" oui-tooltip>Curabitur porta</abbr> eros volutpat, sodales justo eu, congue metus.</p>
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
