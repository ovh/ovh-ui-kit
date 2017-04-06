# oui-radio

<component-status cx-design="partial" ux="rc"></component-status>

oui-radio is a package which provide styles for the input radio component.

## Installation

```less
@import 'oui-radio/radio';
```

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

<div class="oui-radio oui-radio_big">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-5" value="oui-radio-1-5" id="oui-radio-1-5" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-1-5">
    <span class="oui-radio__label">Big [Checked]</span>
  </label>
</div>

<div class="oui-radio oui-radio_big">
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

<div class="oui-radio oui-radio_big">
  <input class="oui-radio__input" type="radio" name="oui-radio-2-3" value="oui-radio-2-3" id="oui-radio-2-3" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-2-3">
    <span class="oui-radio__label">Big [Checked]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_big">
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

<div class="oui-radio oui-radio_big oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-6" value="oui-radio-3-6" id="oui-radio-3-6" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-3-6">
    <span class="oui-radio__label">Thumbnail [Checked]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_big oui-radio_thumbnail">
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

<div class="oui-radio oui-radio_big oui-radio_thumbnail-light">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-12" value="oui-radio-3-12" id="oui-radio-3-12" />
  <label class="oui-radio__label-container" for="oui-radio-3-12">
    <span class="oui-radio__label">
      Thumbnail Big Light - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_big oui-radio_thumbnail-light">
  <input class="oui-radio__input" type="radio" name="oui-radio-3-13" value="oui-radio-3-13" id="oui-radio-3-13" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-3-13">
    <span class="oui-radio__label">Thumbnail Big Light [Checked]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Success

```html:preview
<div class="oui-radio oui-radio_success">
  <input class="oui-radio__input" type="radio" name="oui-radio-4-1" value="oui-radio-4-1" id="oui-radio-4-1" />
  <label class="oui-radio__label-container" for="oui-radio-4-1">
    <span class="oui-radio__label">Success [Unchecked]</span>
  </label>
</div>

<div class="oui-radio oui-radio_success">
  <input class="oui-radio__input" type="radio" name="oui-radio-4-2" value="oui-radio-4-2" id="oui-radio-4-2" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-4-2">
    <span class="oui-radio__label">Success [Checked]</span>
  </label>
</div>

<div class="oui-radio oui-radio_success">
  <input class="oui-radio__input" type="radio" name="oui-radio-4-3" value="oui-radio-4-3" id="oui-radio-4-3" />
  <label class="oui-radio__label-container" for="oui-radio-4-3">
    <span class="oui-radio__label">Success</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail oui-radio_success">
  <input class="oui-radio__input" type="radio" name="oui-radio-4-4" value="oui-radio-4-4" id="oui-radio-4-4" />
  <label class="oui-radio__label-container" for="oui-radio-4-4">
    <span class="oui-radio__label">Thumbnail [Success]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>
```

### Warning

```html:preview
<div class="oui-radio oui-radio_warning">
  <input class="oui-radio__input" type="radio" name="oui-radio-5-1" value="oui-radio-5-1" id="oui-radio-5-1" />
  <label class="oui-radio__label-container" for="oui-radio-5-1">
    <span class="oui-radio__label">Warning [Unchecked]</span>
  </label>
</div>

<div class="oui-radio oui-radio_warning">
  <input class="oui-radio__input" type="radio" name="oui-radio-5-2" value="oui-radio-5-2" id="oui-radio-5-2" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-5-2">
    <span class="oui-radio__label">Warning [Checked]</span>
  </label>
</div>

<div class="oui-radio oui-radio_warning">
  <input class="oui-radio__input" type="radio" name="oui-radio-5-3" value="oui-radio-5-3" id="oui-radio-5-3" />
  <label class="oui-radio__label-container" for="oui-radio-5-3">
    <span class="oui-radio__label">Warning</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail oui-radio_warning">
  <input class="oui-radio__input" type="radio" name="oui-radio-5-4" value="oui-radio-5-4" id="oui-radio-5-4" />
  <label class="oui-radio__label-container" for="oui-radio-5-4">
    <span class="oui-radio__label">Thumbnail [Warning]</span>
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
    <span class="oui-radio__label">Error [Unchecked]</span>
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
## Mixins

```less
@import 'oui-radio/_mixins';
```

### .radio

Define the base styles for a radio.

```less
#oui > .radio();
```

```less
#oui > .radio(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @label-font-size: Number,
  @label-color-disabled: Color,
  @label-color-input-checked: Color,
  @outer-circle-border-: Color,
  @outer-circle-border-color-disabled: Color,
  @outer-circle-border-color-input-checked: Color,
  @outer-circle-background-color: Color,
  @outer-circle-background-color-disabled: Color,
  @outer-circle-border-color-hover: Color,
  @outer-circle-border-color-input-checked-hover: Color,
  @outer-circle-border-color-active: Color,
  @inner-circle-background-color: Color,
  @inner-circle-background-color-active: Color,
  @inner-circle-background-color-input-checked-disabled: Color,
  @spacing: Number,
  @outer-circle-size: Number,
  @outer-circle-top: Number,
  @outer-circle-left: Number,
  @inner-circle-size: Number,
  @inner-circle-top: Number,
  @inner-circle-left: Number,
  @label-padding-left: Number
);
```

### .radio-position

Change the position of a radio

```less
#oui > .radio-position(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @outer-circle-top: Number,
  @outer-circle-left: Number,
  @inner-circle-top: Number,
  @inner-circle-left: Number
)
```

### .radio-size

Change the size of a radio

```less
#oui > .radio-size(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @outer-circle-size: Number,
  @inner-circle-size: Number,
  @padding-left: Number,
  @apply-padding-to-description: Boolean // [Optional: true] Apply the same padding than label if true, otherwise padding will be 0
)
```

### .radio-label

Change the label properties of a radio

```less
#oui > .radio-label(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @font-size: Number,
  @line-height: Number
)
```

### .radio-thumbnail

Will stylize your radio as a thumbnail one.

```less
.radio-thumbnail(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @border-color: Color,
  @border-color-hover: Color,
  @border-color-checked: Color,
  @border-color-checked-hover: Color,
  @background: Color,
  @background-hover: Color,
  @background-checked: Color,
  @background-checked-hover: Color,
  @border-size: Number,
  @padding: Number,
  @label-padding-left: Number,
  @outer-circle-size: Number,
  @outer-circle-top: Number,
  @outer-circle-left: Number,
  @inner-circle-size: Number,
  @inner-circle-top: Number,
  @inner-circle-left: Number
)
```

### .radio-thumbnail-light

Will stylize your radio as a light thumbnail one.

```less
.radio-thumbnail(
  @selector: Class,
  @border-color: Color,
  @border-color-hover: Color,
  @background: Color,
  @background-hover: Color,
  @border-size: Number
)
```

### .radio-status

Will stylize your radio as one in success, warning or error.

```less
.radio-status(
  status: Class[]
);
```
## Classes

### Block

The block class is `oui-radio` (top-level element).

### Element

Inner elements:

| Element               | Class                           |
| --------------------- | ------------------------------- |
| __input[type=radio]__ | `oui-checkbox__input`           |
| __label__             | `oui-radio__label-container`    |
| __span__              | `oui-radio__label`              |
| __span__              | `oui-radio__description`        |

### Modifier

The provided modifiers are:

| Class                 | Description                                 |
| --------------------- | ------------------------------------------- |
| `oui-radio_big`       | Make the radio looks bigger                 |
| `oui-radio_thumbnail` | Make the radio looks like a thumbnail       |
| `oui-radio_success`   | Make the radio looks like one in success    |
| `oui-radio_warning`   | Make the radio looks like one in warning    |
| `oui-radio_error`     | Make the radio looks like one in error      |
