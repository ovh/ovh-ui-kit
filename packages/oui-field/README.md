# oui-field

<component-status cx-design="complete" ux="rc"></component-status>

oui-field is a package which provides styles for form fields.

## Installation

```less
  @import 'oui-form/form';
```

## Rules

### Error display in a field

Upon initial loading of the form, the fields have a normal appearance.

#### Validation

* The validation is done when leaving the field and transforms the appearance of the field if it is in error.
* The field has a colored outline and an error icon (X).  
* If the validation is successful when losing focus, the field returns to its normal appearance.

## Usage

### Basic

```html:preview
<div class="oui-field">
  <label for="text-1" class="oui-field__label oui-label">VLAN ID</label>
  <div class="oui-field__control">
    <input type="text" id="text-1" name="text-1" class="oui-input" value="1" />
  </div>
</div>
```

### Help text

```html:preview
<div class="oui-field">
  <label for="text-2" class="oui-field__label oui-label">IP range</label>
  <div class="oui-field__control">
    <input type="text" id="text-2" name="text-2" class="oui-input" />
  </div>
  <div class="oui-field__helper">Ex: 192.168.0.1-192.168.0.50 or 192.168.0.0/24</div>
</div>
```

### Error

```html:preview
<div class="oui-field oui-field_error">
  <label for="text-3" class="oui-field__label oui-label">IP range</label>
  <div class="oui-field__control">
    <input type="text" id="text-3" name="text-3" class="oui-input oui-input_error" />
  </div>
  <div class="oui-field__error">
    <span role="alert">
      <i class="oui-icon oui-icon-error" aria-hidden="true"></i>
      <span>This is not a valid IP range.</span>
    </span>
  </div>
</div>
```

### Help text + Error

```html:preview
<div class="oui-field oui-field_error">
  <label for="text-4" class="oui-field__label oui-label">IP range</label>
  <div class="oui-field__control">
    <input type="text" id="text-4" name="text-4" class="oui-input oui-input_error" />
  </div>
  <div class="oui-field__error">
    <span role="alert">
      <i class="oui-icon oui-icon-error" aria-hidden="true"></i>
      <span>This is not a valid IP range.</span>
    </span>
  </div>
  <div class="oui-field__helper">Ex: 192.168.0.1-192.168.0.50 or 192.168.0.0/24</div>
</div>
```

### Sizes

There are 5 different sizes. The default size is `m`.

```html:preview
<div class="oui-field">
  <label for="text-5" class="oui-field__label oui-label">Label</label>
  <div class="oui-field__control oui-field__control_xs">
    <input type="text" id="text-5" name="text-5" class="oui-input" value="xs" />
  </div>
</div>

<div class="oui-field">
  <label for="text-6" class="oui-field__label oui-label">Label</label>
  <div class="oui-field__control oui-field__control_s">
    <input type="text" id="text-6" name="text-6" class="oui-input" value="s" />
  </div>
</div>

<div class="oui-field">
  <label for="text-7" class="oui-field__label oui-label">Label</label>
  <div class="oui-field__control oui-field__control_m">
    <input type="text" id="text-7" name="text-7" class="oui-input" value="m" />
  </div>
</div>

<div class="oui-field">
  <label for="text-8" class="oui-field__label oui-label">Label</label>
  <div class="oui-field__control oui-field__control_l">
    <input type="text" id="text-8" name="text-8" class="oui-input" value="l" />
  </div>
</div>

<div class="oui-field">
  <label for="text-9" class="oui-field__label oui-label">Label</label>
  <div class="oui-field__control oui-field__control_xl">
    <input type="text" id="text-9" name="text-9" class="oui-input" value="xl" />
  </div>
</div>
```
