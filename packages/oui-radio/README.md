# oui-radio

oui-radio is a package which provide styles for the input radio component.

## Installation

```less
  @import 'oui-radio/radio';
```

## Usage

### Label

```html:preview
  <div class="oui-radio">
    <input class="oui-radio__input" type="radio" name="oui-radio-1" value="oui-radio-1" id="oui-radio-1" checked="checked" />
    <label class="oui-radio__label-container" for="oui-radio-1">
      <span class="oui-radio__label">Checked</span>
    </label>
  </div>

  <div class="oui-radio">
    <input class="oui-radio__input" type="radio" name="oui-radio-2" value="oui-radio-2" id="oui-radio-2" />
    <label class="oui-radio__label-container" for="oui-radio-2">
      <span class="oui-radio__label">Unchecked</span>
    </label>
  </div>

  <div class="oui-radio">
    <input class="oui-radio__input" type="radio" name="oui-radio-3" value="oui-radio-3" id="oui-radio-3" disabled="disabled" checked="checked" />
    <label class="oui-radio__label-container" for="oui-radio-3">
      <span class="oui-radio__label">Disabled [Checked]</span>
    </label>
  </div>

  <div class="oui-radio">
    <input class="oui-radio__input" type="radio" name="oui-radio-4" value="oui-radio-4" id="oui-radio-4" disabled="disabled" />
    <label class="oui-radio__label-container" for="oui-radio-4">
      <span class="oui-radio__label">Disabled [Unchecked]</span>
    </label>
  </div>

  <div class="oui-radio oui-radio_big">
    <input class="oui-radio__input" type="radio" name="oui-radio-5" value="oui-radio-5" id="oui-radio-5" checked="checked" />
    <label class="oui-radio__label-container" for="oui-radio-5">
      <span class="oui-radio__label">Big [Checked]</span>
    </label>
  </div>

  <div class="oui-radio oui-radio_big">
    <input class="oui-radio__input" type="radio" name="oui-radio-6" value="oui-radio-6" id="oui-radio-6" checked="checked" />
    <label class="oui-radio__label-container" for="oui-radio-6">
      <span class="oui-radio__label">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>
```

### Description

```html:preview
  <div class="oui-radio">
    <input class="oui-radio__input" type="radio" name="oui-radio-7" value="oui-radio-7" id="oui-radio-7" checked="checked" />
    <label class="oui-radio__label-container" for="oui-radio-7">
      <span class="oui-radio__label">Checked</span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>

  <div class="oui-radio">
    <input class="oui-radio__input" type="radio" name="oui-radio-8" value="oui-radio-8" id="oui-radio-8" checked="checked" disabled="disabled" />
    <label class="oui-radio__label-container" for="oui-radio-8">
      <span class="oui-radio__label">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>

  <div class="oui-radio oui-radio_big">
    <input class="oui-radio__input" type="radio" name="oui-radio-9" value="oui-radio-9" id="oui-radio-9" checked="checked" />
    <label class="oui-radio__label-container" for="oui-radio-9">
      <span class="oui-radio__label">Big [Checked]</span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>

  <div class="oui-radio oui-radio_big">
    <input class="oui-radio__input" type="radio" name="oui-radio-10" value="oui-radio-10" id="oui-radio-10" checked="checked" disabled="disabled" />
    <label class="oui-radio__label-container" for="oui-radio-10">
      <span class="oui-radio__label">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>
```

### Thumbnail

```html:preview
  <div class="oui-radio oui-radio_thumbnail">
    <input class="oui-radio__input" type="radio" name="oui-radio-11" value="oui-radio-11" id="oui-radio-11" />
    <label class="oui-radio__label-container" for="oui-radio-11">
      <span class="oui-radio__label">Thumbnail</span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>

  <div class="oui-radio oui-radio_thumbnail">
    <input class="oui-radio__input" type="radio" name="oui-radio-12" value="oui-radio-12" id="oui-radio-12" checked="checked" />
    <label class="oui-radio__label-container" for="oui-radio-12">
      <span class="oui-radio__label">Thumbnail [Checked]</span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>

  <div class="oui-radio oui-radio_thumbnail">
    <input class="oui-radio__input" type="radio" name="oui-radio-13" value="oui-radio-13" id="oui-radio-13" disabled="disabled" />
    <label class="oui-radio__label-container" for="oui-radio-13">
      <span class="oui-radio__label">Thumbnail [Disabled]</span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>

  <div class="oui-radio oui-radio_thumbnail">
    <input class="oui-radio__input" type="radio" name="oui-radio-14" value="oui-radio-14" id="oui-radio-14" checked="checked" disabled="disabled" />
    <label class="oui-radio__label-container" for="oui-radio-14">
      <span class="oui-radio__label">Thumbnail [Checked + Disabled]</span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>

  <div class="oui-radio oui-radio_thumbnail">
    <input class="oui-radio__input" type="radio" name="oui-radio-15" value="oui-radio-15" id="oui-radio-15" />
    <label class="oui-radio__label-container" for="oui-radio-15">
      <span class="oui-radio__label">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>

  <div class="oui-radio oui-radio_big oui-radio_thumbnail">
    <input class="oui-radio__input" type="radio" name="oui-radio-16" value="oui-radio-16" id="oui-radio-16" checked="checked" />
    <label class="oui-radio__label-container" for="oui-radio-16">
      <span class="oui-radio__label">Thumbnail [Checked]</span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>

  <div class="oui-radio oui-radio_big oui-radio_thumbnail">
    <input class="oui-radio__input" type="radio" name="oui-radio-17" value="oui-radio-17" id="oui-radio-17" />
    <label class="oui-radio__label-container" for="oui-radio-17">
      <span class="oui-radio__label">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
      <span class="oui-radio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
      </span>
    </label>
  </div>
```

## Mixins

```less
  @import 'oui-radio/radio/_mixins';
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
  @label-font-color: Color,
  @label-font-color_disabled: Color,
  @label-font-color_input-checked: Color,
  @outer-circle-border-: Color,
  @outer-circle-border-color_disabled: Color,
  @outer-circle-border-color_input-checked: Color,
  @outer-circle-background-color: Color,
  @outer-circle-background-color_disabled: Color,
  @outer-circle-border-color_hover: Color,
  @outer-circle-border-color_input-checked-hover: Color,
  @outer-circle-border-color_active: Color,
  @inner-circle-background-color: Color,
  @inner-circle-background-color_active: Color,
  @inner-circle-background-color_input-checked-disabled: Color,
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
.radio-thumbnail (
  @selector: Class, // Class name that will be prefixed on each subclasses
  @border-color: Color,
  @border-hover-color: Color,
  @border-checked-color: Color,
  @background: Color,
  @background-checked: Color,
  @border-size: Number,
  @border-radius: Number,
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
