# oui-formfield

<component-status cx-design="complete" ux="prototype"></component-status>

> **IMPORTANT:** The name of this component can still be changed at any moment.

oui-formfield is a package which provides styles for the formfield component.

## Installation

```less
@import 'oui-formfield/formfield';
```

## Usage
### Error display in a formfield
Upon initial loading of the form, the text fields have a normal appearance.
#### Unit validation

* The validation is done when leaving the field and transforms the appearance of the field if it is in error.
* The field label is becomes red (see Color)
* The field has a colored outline and an error icon (X) to the right end.  
* If the unit validation is successful when losing focus, the field returns to its normal appearance.

#### Focusing a field with errors:

* The error message is displayed in a popover. This floats right of the field (except mobile which is found below.)
* The error message contains context-sensitive help if necessary.

### Input

```html:preview
<div class="oui-input-formfield">
  <input type="text" id="text" name="text" class="oui-input" value="Input text" />
  <label for="text" class="oui-label">Label for Input</label>
</div>

<div class="oui-input-formfield">
  <input type="text-disabled" id="text-disabled" name="text-disabled" class="oui-input" value="Input text disabled" disabled />
  <label for="text-disabled" class="oui-label">Label for Input disabled</label>
</div>

<div class="oui-input-formfield">
  <input type="text-error" id="text-error" name="text-error" class="oui-input oui-input_error" value="Input text error" />
  <label for="text-error" class="oui-label">Label for Input error</label>
</div>

<div class="oui-input-group">
  <div class="oui-input-formfield">
    <input type="text" id="text-group" name="text-group" class="oui-input" value="Input text" />
    <label for="text-group" class="oui-label">Label for Input group</label>
  </div>
  <button class="oui-button">Go</button>
</div>
```

### Select

```html:preview
<div class="oui-select-formfield">
  <div class="oui-select">
    <select id="select" name="select" class="oui-select__input">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
    <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
    <label for="select" class="oui-label">Label for Select</label>
  </div>
</div>

<div class="oui-select-formfield">
  <div class="oui-select">
    <select id="select-disabled" name="select-disabled" class="oui-select__input" disabled>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
    <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
    <label for="select-disabled" class="oui-label">Label for Select disabled</label>
  </div>
</div>

<div class="oui-select-formfield">
  <div class="oui-select oui-select_error">
    <select id="select-error" name="select-error" class="oui-select__input">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
    <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
    <label for="select-error" class="oui-label">Label for Select error</label>
  </div>
</div>
```

### Textarea

```html:preview
<div class="oui-textarea-formfield">
  <textarea class="oui-textarea" name="textarea-field" id="textarea-field">Textarea text</textarea>
  <label for="textarea-field" class="oui-label">Label for Textarea</label>
</div>

<div class="oui-textarea-formfield">
  <textarea class="oui-textarea" name="textarea-disabled" id="textarea-disabled" disabled>Textarea text disabled</textarea>
  <label for="textarea-disabled" class="oui-label">Label for Textarea disabled</label>
</div>

<div class="oui-textarea-formfield">
  <textarea class="oui-textarea oui-textarea_error" name="textarea-error" id="textarea-error">Textarea text error</textarea>
  <label for="textarea-error" class="oui-label">Label for Textarea error</label>
</div>
```
