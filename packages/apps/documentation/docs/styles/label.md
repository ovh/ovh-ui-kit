# oui-label

<component-status cx-design="complete" ux="rc"></component-status>

## Installation

```less
@import 'oui-label/label';
```

## Usage
*Guidelines:*
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
