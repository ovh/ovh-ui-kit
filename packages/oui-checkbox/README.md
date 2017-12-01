# oui-checkbox

<component-status cx-design="complete" ux="rc"></component-status>

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
    <span class="oui-checkbox__label">
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-2" name="oui-checkbox1-2" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-2">
    <span class="oui-checkbox__label">Checkbox Checked
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-3" name="oui-checkbox1-3" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-3">
    <span class="oui-checkbox__label">Checkbox Unchecked
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-4" name="oui-checkbox1-4" type="checkbox" data-indeterminate>
  <label class="oui-checkbox__label-container" for="oui-checkbox1-4">
    <span class="oui-checkbox__label">Checkbox Indeterminated
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-5" name="oui-checkbox1-5" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-5">
    <span class="oui-checkbox__label">Checkbox Checked Disabled
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-6" name="oui-checkbox1-6" type="checkbox" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-6">
    <span class="oui-checkbox__label">
      Checkbox Unchecked Disabled - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox1-7" name="oui-checkbox1-7" type="checkbox" checked="checked" disabled="disabled" data-indeterminate>
  <label class="oui-checkbox__label-container" for="oui-checkbox1-7">
    <span class="oui-checkbox__label">Checkbox Indeterminate Disabled
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_m">
  <input class="oui-checkbox__input" id="oui-checkbox1-8" name="oui-checkbox1-8" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox1-8">
    <span class="oui-checkbox__label">
      Checkbox M - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>
```

### Description

```html:preview
<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-1" name="oui-checkbox-1" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-1">
    <span class="oui-checkbox__label">Checkbox Checked
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-2" name="oui-checkbox-2" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-2">
    <span class="oui-checkbox__label">Checkbox Unchecked
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-3" name="oui-checkbox-3" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox-3">
    <span class="oui-checkbox__label">Checkbox Checked Disabled
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-4" name="oui-checkbox-4" type="checkbox" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox-4">
    <span class="oui-checkbox__label">
      Checkbox Unchecked Disabled - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_m">
  <input class="oui-checkbox__input" id="oui-checkbox-5" name="oui-checkbox-5" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-5">
    <span class="oui-checkbox__label">
      Checkbox M - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Thumbnail

```html:preview
<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-1" name="oui-checkbox3-1" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-1">
    <span class="oui-checkbox__label">Checkbox Thumbnail
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-2" name="oui-checkbox3-2" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-2">
    <span class="oui-checkbox__label">Checkbox Thumbnail Checked
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-3" name="oui-checkbox3-3" type="checkbox" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-3">
    <span class="oui-checkbox__label">Checkbox Thumbnail Disabled
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-4" name="oui-checkbox3-4" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-4">
    <span class="oui-checkbox__label">Checkbox Thumbnail Checked Disabled
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_m oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox3-5" name="oui-checkbox3-5" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-5">
    <span class="oui-checkbox__label">
      Checkbox Thumbnail M - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Thumbnail-light

```html:preview
<div class="oui-checkbox oui-checkbox_thumbnail-light">
  <input class="oui-checkbox__input" id="oui-checkbox3-6" name="oui-checkbox3-6" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-6">
    <span class="oui-checkbox__label">Checkbox Thumbnail Light
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail-light">
  <input class="oui-checkbox__input" id="oui-checkbox3-7" name="oui-checkbox3-7" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-7">
    <span class="oui-checkbox__label">Checkbox Thumbnail Light Checked
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail-light">
  <input class="oui-checkbox__input" id="oui-checkbox3-8" name="oui-checkbox3-8" type="checkbox" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-8">
    <span class="oui-checkbox__label">Checkbox Thumbnail Light Disabled
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail-light">
  <input class="oui-checkbox__input" id="oui-checkbox3-9" name="oui-checkbox3-9" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-9">
    <span class="oui-checkbox__label">Checkbox Thumbnail Light Checked Disabled
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_m oui-checkbox_thumbnail-light">
  <input class="oui-checkbox__input" id="oui-checkbox3-10" name="oui-checkbox3-10" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox3-10">
    <span class="oui-checkbox__label">
      Checkbox Thumbnail M Light - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Error

```html:preview
<div class="oui-checkbox oui-checkbox_error">
  <input class="oui-checkbox__input" id="oui-checkbox6-1" name="oui-checkbox6-1" checked="checked" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox6-1">
    <span class="oui-checkbox__label">Checkbox Error Checked
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_error">
  <input class="oui-checkbox__input" id="oui-checkbox6-2" name="oui-checkbox6-2" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox6-2">
    <span class="oui-checkbox__label">Checkbox Error Unchecked
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_error">
  <input class="oui-checkbox__input" id="oui-checkbox6-3" name="oui-checkbox6-3" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox6-3">
    <span class="oui-checkbox__label">Checkbox Error Description
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_m oui-checkbox_thumbnail oui-checkbox_error">
  <input class="oui-checkbox__input" id="oui-checkbox6-4" name="oui-checkbox6-4" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox6-4">
    <span class="oui-checkbox__label">
      Checkbox Error M Thumbnail
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Inline

```html:preview
<div class="oui-checkbox oui-checkbox_inline">
  <input class="oui-checkbox__input" id="oui-checkbox-inline-1" name="oui-checkbox-inline-1" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-inline-1">
    <span class="oui-checkbox__label">Checkbox 1
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
    </span>
  </label>
</div>
<div class="oui-checkbox oui-checkbox_inline">
  <input class="oui-checkbox__input" id="oui-checkbox-inline-2" name="oui-checkbox-inline-2" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-inline-2">
    <span class="oui-checkbox__label">Checkbox 2
      <span class="oui-checkbox__icon">
        <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
        <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
      </span>
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

### .checkbox-thumbnail-light

Will stylize your checkbox as a light thumbnail one.

```less
.checkbox-thumbnail(
  @selector: Class,
  @border-color: Color,
  @border-color-hover: Color,
  @background: Color,
  @background-hover: Color,
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

### .checkbox-inline

`.oui-checkbox` don't give you an inline element by default. If you want an inlined input, you can use this mixin.

```less
.checkbox-inline();
```

## Classes

### Block

The block class is `oui-checkbox` (top-level element).

### Modifier

The provided modifiers are:

| Class                    | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `oui-checkbox_m`         | Make the checkbox looks medium sized           |
| `oui-checkbox_thumbnail` | Make the checkbox looks like a thumbnail       |
| `oui-checkbox_success`   | Make the checkbox looks like one in success    |
| `oui-checkbox_warning`   | Make the checkbox looks like one in warning    |
| `oui-checkbox_error`     | Make the checkbox looks like one in error      |
| `oui-checkbox_inline`    | Make the checkbox inlined                      |
