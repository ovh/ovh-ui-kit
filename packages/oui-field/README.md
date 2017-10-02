# oui-field

<component-status cx-design="partial" ux="beta"></component-status>

oui-field is a package which provides styles for form fields.

## Installation

```less
  @import 'oui-form/form';
```

## Usage

### Standard sizes
#### Size 1
Use it for very short fields like postal code. Field content less than 8 characters.

```html:preview
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">VLAN ID</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_1">
      <input type="text" id="text" name="text" class="oui-input" value="2588" />
    </div>
    <div class="oui-field-helper">An input with oui-field-control_1 class</div>
  </div>
</div>
<div class="oui-field"> 
  <label for="text" class="oui-field__label oui-label">Postal Code</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_1">
       <input type="text" id="text" name="text" class="oui-input" value="A9A 9A9" />
    </div>
  </div>
</div>
```
#### Size 2
Use it for short fields like : amount, phone number. Field contents between 9 to 20 characters.

```html:preview
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">Phone number</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_2">
      <input type="text" id="text" name="text" class="oui-input" value="123 456-7890" />
    </div>
      <div class="oui-field-helper">An input with oui-field-control_2 class</div>
  </div>
</div>
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">Input size 2</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_2">
      <label class="oui-select">
        <select id="select" name="select" class="oui-select__input">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
      </label>
    </div>
    <div class="oui-field-helper">A select box with oui-field-control_2 class.</div>
  </div>
</div>
```

#### Size 3
```html:preview
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">Input size 3 (no helper)</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_3">
      <div class="oui-input-group">
        <input class="oui-input" placeholder="Email">
        <button class="oui-button">Find</button>
      </div>
    </div>
  </div>
</div>
```
#### Size 4
```html:preview
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">Input size 4</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_4">
      <textarea class="oui-textarea">Textarea text</textarea>
    </div>
    <div class="oui-field-helper oui-field-helper_top">A textarea with oui-field-control_4 class</div>
  </div>
</div>
```
#### Size 5

```html:preview
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">Input size 5</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_5">
      <label class="oui-select">
        <select id="select" name="select" class="oui-select__input">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
      </label>
    </div>
    <div class="oui-field-helper">A select box with oui-field-control_5 class</div>
  </div>
</div>
```
#### Size 6

```html:preview
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">Input size 6</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_6">
      <textarea class="oui-textarea">Textarea text</textarea>
    </div>
    <div class="oui-field-helper oui-field-helper_top">A textarea with oui-field-control_6 class</div>
  </div>
</div>
```

### Errors

```html:preview
<div class="oui-field oui-field_warning">
  <label for="text" class="oui-field__label oui-label">Input size 4 with warning</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_4">
      <input type="text" id="text" name="text" class="oui-input oui-input_warning" value="Input text" />
    </div>
    <div class="oui-field-helper">A warning input</div>
  </div>
</div>

<div class="oui-field oui-field_error">
  <label for="text" class="oui-field__label oui-label">Input size 4 with error</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_4">
      <input type="text" id="text" name="text" class="oui-input oui-input_error" value="Input text" />
    </div>
    <div class="oui-field-helper">An error input</div>
  </div>
</div>
```
