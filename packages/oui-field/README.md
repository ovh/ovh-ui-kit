# oui-field

<component-status cx-design="partial" ux="beta"></component-status>

oui-field is a package which provides styles for form fields.

## Installation

```less
  @import 'oui-form/form';
```

## Usage
### Error display in a field
Upon initial loading of the form, the text fields have a normal appearance.
#### Unit validation

* The validation is done when leaving the field and transforms the appearance of the field if it is in error.
* The field label is becomes red (see Color)
* The field has a colored outline and an error icon (X) to the right end.  
* If the unit validation is successful when losing focus, the field returns to its normal appearance.

#### Focusing a field with errors:

* The error message is displayed in a popover. This floats right of the field (except mobile which is found below.)
* The error message contains context-sensitive help if necessary.

## Standard sizes
### Size 1
Use it for very short fields like postal code. Field content less than 8 characters.

<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">VLAN ID</label>
  <div class="oui-field__control oui-field-control_xs">
    <input type="text" id="text-1" name="text-1" class="oui-input" value="2588" />
  </div>
  <div class="oui-field__helper">An input with oui-field-control_xs class</div>
</div>

<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">VLAN ID</label>
  <div class="oui-field__control oui-field-control_xs">
    <input type="text" id="text-1" name="text-1" class="oui-input" value="2588" />
  </div>
  <div class="oui-field__helper">An input with oui-field-control_xs class</div>
</div>

<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">VLAN ID</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_xs">
      <input type="text" id="text-1" name="text-1" class="oui-input" value="2588" />
    </div>
    <div class="oui-field-helper">An input with oui-field-control_xs class</div>
  </div>
</div>


```html:preview
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">VLAN ID</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_xs">
      <input type="text" id="text-1" name="text-1" class="oui-input" value="2588" />
    </div>
    <div class="oui-field-helper">An input with oui-field-control_xs class</div>
  </div>
</div>
<div class="oui-field"> 
  <label for="text" class="oui-field__label oui-label">Postal Code</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_xs">
       <input type="text" id="text" name="text" class="oui-input" value="A9A 9A9" />
    </div>
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
<div class="oui-field"> 
  <label for="text" class="oui-field__label oui-label">Postal Code</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_2">
       <input type="text" id="text" name="text" class="oui-input" value="A9A 9A9" />
    </div>
  </div>
</div>
```
### Size 2
Use it for short fields like : amount, phone number. Field contents between 9 to 20 characters.

```html:preview
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">Phone number</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_s">
      <input type="text" id="text" name="text" class="oui-input" value="123 456-7890" />
    </div>
      <div class="oui-field-helper">An input with oui-field-control_s class</div>
  </div>
</div>
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">Amount of RAM</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_s">
      <label class="oui-select">
        <select id="select-2" name="select-2" class="oui-select__input">
          <option value="Option 1">Choose...</option>
          <option value="Option 2">512MB</option>
          <option value="Option 3">1024MB</option>
           <option value="Option 4">2048MB</option>
        </select>
        <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
      </label>
    </div>
    <div class="oui-field-helper">A select box with oui-field-control_s class.</div>
  </div>
</div>
```

### Size 3
Use it for fields like : email, username, password, IPv4. Fields contents between 21 and 50 characters.
```html:preview
<div class="oui-field">
  <label for="domain-3" class="oui-field__label oui-label">Domain Name</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_m">
      <div class="oui-input-group">
        <input class="oui-input" id="domain-3" name="domain-3" type="text" placeholder="Search">
        <button class="oui-button">Find</button>
      </div>
    </div>
  </div>
</div>
<div class="oui-field">
  <label for="text" class="oui-field__label oui-label">Email</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_m">
      <input type="text" id="text" name="text" class="oui-input" value="" />
    </div>
      <div class="oui-field-helper">An input with oui-field-control_m class</div>
  </div>
</div>
```
### Size 4

```html:preview
<div class="oui-field">
  <label for="textarea-4" class="oui-field__label oui-label">Input size l</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_l">
      <textarea class="oui-textarea" id="textarea-4" name="textarea-4">Textarea text</textarea>
    </div>
    <div class="oui-field-helper oui-field-helper_top">A textarea with oui-field-control_l class</div>
  </div>
</div>
```
### Size 5

```html:preview
<div class="oui-field">
  <label for="select-5" class="oui-field__label oui-label">Input size xl</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_xl">
      <label class="oui-select">
        <select id="select-5" name="select-5" class="oui-select__input">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
      </label>
    </div>
    <div class="oui-field-helper">A select box with oui-field-control_xl class</div>
  </div>
</div>
```

### Errors

```html:preview
<div class="oui-field oui-field_error">
  <label for="text" class="oui-field__label oui-label">Input size m with error</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_m">
      <input type="text" id="text" name="text" class="oui-input oui-input_error" value="Input text" />
    </div>
  </div>
</div>
<div class="oui-field oui-field-error">
  <label for="text" class="oui-field__label oui-label">Input size xl with error</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_xl">
      <label class="oui-select">
        <select id="select" name="select" class="oui-select__input">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</div>
```

