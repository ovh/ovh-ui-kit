# oui-checkbox

<component-status cx-design="partial" ux="rc"></component-status>

oui-checkbox is a package which provide styles for the checkbox component.

## Installation

```less
  @import 'oui-checkbox/checkbox';
```

## Usage

### Label

```html:preview
<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-1" name="oui-checkbox1-1" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-1">
    <span class="oui-checkbox__label">Checkbox Checked</span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-2" name="oui-checkbox1-2" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-2">
    <span class="oui-checkbox__label">Checkbox Unchecked</span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-3" name="oui-checkbox1-3" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-3">
    <span class="oui-checkbox__label">Checkbox Checked Disabled</span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-4" name="oui-checkbox1-4" type="checkbox" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-4">
    <span class="oui-checkbox__label">
      Checkbox Unchecked Disabled - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_large">
  <input class="oui-checkbox__input" id="oui-checkbox1-5" name="oui-checkbox1-5" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-5">
    <span class="oui-checkbox__label">
      Checkbox Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>
```

### Description

```html:preview
<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-1" name="oui-checkbox-1" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-1">
    <span class="oui-checkbox__label">Checkbox Checked</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-2" name="oui-checkbox-2" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-2">
    <span class="oui-checkbox__label">Checkbox Unchecked</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-3" name="oui-checkbox-3" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox-3">
    <span class="oui-checkbox__label">Checkbox Checked Disabled</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-4" name="oui-checkbox-4" type="checkbox" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox-4">
    <span class="oui-checkbox__label">
      Checkbox Unchecked Disabled - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_large">
  <input class="oui-checkbox__input" id="oui-checkbox-5" name="oui-checkbox-5" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-5">
    <span class="oui-checkbox__label">
      Checkbox Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>
```

### Thumbnail

```html:preview
<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-1" name="oui-checkbox3-1" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-1">
    <span class="oui-checkbox__label">Checkbox Thumbnail</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-2" name="oui-checkbox3-2" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-2">
    <span class="oui-checkbox__label">Checkbox Thumbnail Checked</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-3" name="oui-checkbox3-3" type="checkbox" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-3">
    <span class="oui-checkbox__label">Checkbox Thumbnail Disabled</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-4" name="oui-checkbox3-4" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-4">
    <span class="oui-checkbox__label">Checkbox Thumbnail Checked Disabled</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_large oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-5" name="oui-checkbox3-5" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-5">
    <span class="oui-checkbox__label">
      Checkbox Thumbnail Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>
```

### Success

```html:preview
<div class="oui-checkbox oui-checkbox_success">
  <input class="oui-checkbox__input" id="oui-checkbox4-1" name="oui-checkbox4-1" checked="checked" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox4-1">
    <span class="oui-checkbox__label">Checkbox Success Checked</span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_success">
  <input class="oui-checkbox__input" id="oui-checkbox4-2" name="oui-checkbox4-2" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox4-2">
    <span class="oui-checkbox__label">Checkbox Success Unchecked</span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_success">
  <input class="oui-checkbox__input" id="oui-checkbox4-3" name="oui-checkbox4-3" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox4-3">
    <span class="oui-checkbox__label">Checkbox Success Description</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_large oui-checkbox_thumbnail oui-checkbox_success">
  <input class="oui-checkbox__input" id="oui-checkbox4-4" name="oui-checkbox4-4" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox4-4">
    <span class="oui-checkbox__label">
      Checkbox Success Large Thumbnail
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>
```

### Warning

```html:preview
<div class="oui-checkbox oui-checkbox_warning">
  <input class="oui-checkbox__input" id="oui-checkbox5-1" name="oui-checkbox5-1" checked="checked" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox5-1">
    <span class="oui-checkbox__label">Checkbox Warning Checked</span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_warning">
  <input class="oui-checkbox__input" id="oui-checkbox5-2" name="oui-checkbox5-2" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox5-2">
    <span class="oui-checkbox__label">Checkbox Warning Unchecked</span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_warning">
  <input class="oui-checkbox__input" id="oui-checkbox5-3" name="oui-checkbox5-3" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox5-3">
    <span class="oui-checkbox__label">Checkbox Warning Description</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_large oui-checkbox_thumbnail oui-checkbox_warning">
  <input class="oui-checkbox__input" id="oui-checkbox5-4" name="oui-checkbox5-4" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox5-4">
    <span class="oui-checkbox__label">
      Checkbox Warning Large Thumbnail
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>
```

### Error

```html:preview
<div class="oui-checkbox oui-checkbox_error">
  <input class="oui-checkbox__input" id="oui-checkbox6-1" name="oui-checkbox6-1" checked="checked" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox6-1">
    <span class="oui-checkbox__label">Checkbox Error Checked</span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_error">
  <input class="oui-checkbox__input" id="oui-checkbox6-2" name="oui-checkbox6-2" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox6-2">
    <span class="oui-checkbox__label">Checkbox Error Unchecked</span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_error">
  <input class="oui-checkbox__input" id="oui-checkbox6-3" name="oui-checkbox6-3" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox6-3">
    <span class="oui-checkbox__label">Checkbox Error Description</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_large oui-checkbox_thumbnail oui-checkbox_error">
  <input class="oui-checkbox__input" id="oui-checkbox6-4" name="oui-checkbox6-4" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox6-4">
    <span class="oui-checkbox__label">
      Checkbox Error Large Thumbnail
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. 
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. 
    </span>
    <span class="oui-checkbox__icon">
      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
    </span>
  </label>
</div>
```

## Mixins

```less
@import 'oui-checkbox/_mixins';
```

### .checkbox

Define the base styles for a checkbox.

```less
#oui > .checkbox(oui-checkbox);
```

```less
#oui > .checkbox(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @outline-color: Color,
  @outline-color-hover: Color,
  @outline-color-checked: Color,
  @spacing: Number
);
```

### .checkbox-size

Change the size of a checkbox

```less
#oui > .checkbox-size(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @size: Number,
  @apply-padding-to-description: Boolean // [Optional: true] Apply the same padding than label if true, otherwise padding will be 0
);
```

### .checkbox-label

Change the label properties of a checkbox

```less
#oui > .checkbox-label(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @font-size: Number,
  @line-height: Number
);
```

### .checkbox-thumbnail

Will stylize your checkbox as a thumbnail one.

```less
.checkbox-thumbnail(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @border-color: Color,
  @border-color-hover: Color,
  @border-color-checked: Color,
  @border-color-checked-hover: Color,
  @background: Color,
  @background-hover: Color,
  @background-checked: Color,
  @background-checked-hover: Color,
  @border-size: Color,
  @padding: Number
);
```

### .checkbox-status

Will stylize your checkbox as one in success, warning or error.

```less
.checkbox-status(
  status: Class[]
);
```

## Classes

### Block

The block class is `oui-checkbox` (top-level element).

### Modifier

The provided modifiers are:

| Class                    | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `oui-checkbox_large`     | Make the checkbox looks bigger                 |
| `oui-checkbox_thumbnail` | Make the checkbox looks like a thumbnail       |
| `oui-checkbox_success`   | Make the checkbox looks like one in success    |
| `oui-checkbox_warning`   | Make the checkbox looks like one in warning    |
| `oui-checkbox_error`     | Make the checkbox looks like one in error      |
