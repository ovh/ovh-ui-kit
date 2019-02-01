# Radio

## Usage

### Label

```html:preview
<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-1" value="oui-radio-1-1" id="oui-radio-1-1" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-1-1">
    <span class="oui-radio__label">Checked</span>
  </label>
</div>

<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-2" value="oui-radio-1-2" id="oui-radio-1-2" />
  <label class="oui-radio__label-container" for="oui-radio-1-2">
    <span class="oui-radio__label">Unchecked</span>
  </label>
</div>

<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-3" value="oui-radio-1-3" id="oui-radio-1-3" disabled="disabled" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-1-3">
    <span class="oui-radio__label">Disabled [Checked]</span>
  </label>
</div>

<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-4" value="oui-radio-1-4" id="oui-radio-1-4" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-1-4">
    <span class="oui-radio__label">Disabled [Unchecked]</span>
  </label>
</div>

<div class="oui-radio oui-radio_m">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-5" value="oui-radio-1-5" id="oui-radio-1-5" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-1-5">
    <span class="oui-radio__label">M [Checked]</span>
  </label>
</div>

<div class="oui-radio oui-radio_m">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-8" value="oui-radio-1-8" id="oui-radio-1-8" />
  <label class="oui-radio__label-container" for="oui-radio-1-8">
    <span class="oui-radio__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
    </span>
  </label>
</div>
```

### Description

```html:preview
<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-2-1" value="oui-radio-2-1" id="oui-radio-2-1" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-2-1">
    <span class="oui-radio__label">Checked</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-2-2" value="oui-radio-2-2" id="oui-radio-2-2" checked="checked" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-2-2">
    <span class="oui-radio__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_m">
  <input class="oui-radio__input" type="radio" name="oui-radio-2-3" value="oui-radio-2-3" id="oui-radio-2-3" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-2-3">
    <span class="oui-radio__label">M [Checked]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_m">
  <input class="oui-radio__input" type="radio" name="oui-radio-2-4" value="oui-radio-2-4" id="oui-radio-2-4" checked="checked" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-2-4">
    <span class="oui-radio__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Thumbnail

```html:preview
<div class="oui-radio oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-1" value="oui-radio-3-1" id="oui-radio-3-1" />
  <label class="oui-radio__label-container" for="oui-radio-3-1">
    <span class="oui-radio__label">Thumbnail</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-2" value="oui-radio-3-2" id="oui-radio-3-2" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-3-2">
    <span class="oui-radio__label">Thumbnail [Checked]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-3" value="oui-radio-3-3" id="oui-radio-3-3" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-3-3">
    <span class="oui-radio__label">Thumbnail [Disabled]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-4" value="oui-radio-3-4" id="oui-radio-3-4" checked="checked" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-3-4">
    <span class="oui-radio__label">Thumbnail [Checked + Disabled]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-5" value="oui-radio-3-5" id="oui-radio-3-5" />
  <label class="oui-radio__label-container" for="oui-radio-3-5">
    <span class="oui-radio__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_m oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-6" value="oui-radio-3-6" id="oui-radio-3-6" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-3-6">
    <span class="oui-radio__label">Thumbnail [Checked]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_m oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-7" value="oui-radio-3-7" id="oui-radio-3-7" />
  <label class="oui-radio__label-container" for="oui-radio-3-7">
    <span class="oui-radio__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Thumbnail-light

```html:preview
<div class="oui-radio oui-radio_thumbnail-light">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-8" value="oui-radio-3-8" id="oui-radio-3-8" />
  <label class="oui-radio__label-container" for="oui-radio-3-8">
    <span class="oui-radio__label">Thumbnail Light</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail-light">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-9" value="oui-radio-3-9" id="oui-radio-3-9" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-3-9">
    <span class="oui-radio__label">Thumbnail Light [Checked]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail-light">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-10" value="oui-radio-3-10" id="oui-radio-3-10" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-3-10">
    <span class="oui-radio__label">Thumbnail Light [Disabled]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail-light">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-11" value="oui-radio-3-11" id="oui-radio-3-11" checked="checked" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-3-11">
    <span class="oui-radio__label">Thumbnail Light [Checked + Disabled]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_m oui-radio_thumbnail-light">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-12" value="oui-radio-3-12" id="oui-radio-3-12" />
  <label class="oui-radio__label-container" for="oui-radio-3-12">
    <span class="oui-radio__label">
      Thumbnail M Light - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_m oui-radio_thumbnail-light">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-13" value="oui-radio-3-13" id="oui-radio-3-13" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-3-13">
    <span class="oui-radio__label">Thumbnail M Light [Checked]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Error

```html:preview
<div class="oui-radio oui-radio_error">
  <input class="oui-radio__input" type="radio" name="oui-radio-6-1" value="oui-radio-6-1" id="oui-radio-6-1" />
  <label class="oui-radio__label-container" for="oui-radio-6-1">
    <span class="oui-radio__label">Error [Unchecked]</span>
  </label>
</div>

<div class="oui-radio oui-radio_error">
  <input class="oui-radio__input" type="radio" name="oui-radio-6-2" value="oui-radio-6-2" id="oui-radio-6-2" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-6-2">
    <span class="oui-radio__label">Error [Checked]</span>
  </label>
</div>

<div class="oui-radio oui-radio_error">
  <input class="oui-radio__input" type="radio" name="oui-radio-6-3" value="oui-radio-6-3" id="oui-radio-6-3" />
  <label class="oui-radio__label-container" for="oui-radio-6-3">
    <span class="oui-radio__label">Error</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail oui-radio_error">
  <input class="oui-radio__input" type="radio" name="oui-radio-6-4" value="oui-radio-6-4" id="oui-radio-6-4" />
  <label class="oui-radio__label-container" for="oui-radio-6-4">
    <span class="oui-radio__label">Thumbnail [Error]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Inline

```html:preview
<div class="oui-radio oui-radio_inline">
  <input class="oui-radio__input" type="radio" name="oui-radio-inline" value="oui-radio-inline-1" id="oui-radio-inline-1" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-inline-1">
    <span class="oui-radio__label">Checked</span>
  </label>
</div>
<div class="oui-radio oui-radio_inline">
  <input class="oui-radio__input" type="radio" name="oui-radio-inline" value="oui-radio-inline-2" id="oui-radio-inline-2" />
  <label class="oui-radio__label-container" for="oui-radio-inline-2">
    <span class="oui-radio__label">Unchecked</span>
  </label>
</div>
```
