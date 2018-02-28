# oui-select-picker

<component-status cx-design="complete" ux="beta"></component-status>

oui-select-picker is a package which provides styles for the select-picker component.

## Installation

```less
  @import 'oui-select-picker/select-picker';
```

## Usage

```html:preview
<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-1-1" value="oui-select-picker-1-1" id="oui-select-picker-1-1" checked />
  <label class="oui-select-picker__label-container" for="oui-select-picker-1-1">
    <span class="oui-select-picker__label">Checked</span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>

<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-1-2" value="oui-select-picker-1-2" id="oui-select-picker-1-2" />
  <label class="oui-select-picker__label-container" for="oui-select-picker-1-2">
    <span class="oui-select-picker__label">Unchecked</span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>

<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-1-3" value="oui-select-picker-1-3" id="oui-select-picker-1-3" checked disabled />
  <label class="oui-select-picker__label-container" for="oui-select-picker-1-3">
    <span class="oui-select-picker__label">Disabled [Checked]</span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>

<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-1-4" value="oui-select-picker-1-4" id="oui-select-picker-1-4" disabled />
  <label class="oui-select-picker__label-container" for="oui-select-picker-1-4">
    <span class="oui-select-picker__label">Disabled [Unchecked]</span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>
```

## Multi

```html:preview
<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-2-1" value="oui-select-picker-2-1" checked />
  <label class="oui-select-picker__label-container" for="oui-select-picker-2-1">
    <span class="oui-select-picker__label">Multi [Checked]</span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select">
        <select id="oui-select-picker-2-1" name="oui-select-picker-2-1" class="oui-select__input ui-select-match">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
      </span>
    </span
  </label>
</div>

<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-2-2" value="oui-select-picker-2-2" />
  <label class="oui-select-picker__label-container" for="oui-select-picker-2-2">
    <span class="oui-select-picker__label">Multi [Unchecked]</span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select">
        <select id="oui-select-picker-2-3" name="oui-select-picker-2-2" class="oui-select__input ui-select-match">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
      </span>
    </span
  </label>
</div>

<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-2-3" value="oui-select-picker-2-3" disabled />
  <label class="oui-select-picker__label-container" for="oui-select-picker-2-3">
    <span class="oui-select-picker__label">Multi Disabled [Unchecked]</span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select">
        <select id="oui-select-picker-2-3" name="oui-select-picker-2-3" class="oui-select__input ui-select-match" disabled>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
      </span>
    </span
  </label>
</div>
```

### Description

```html:preview
<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-3-1" value="oui-select-picker-3-1" id="oui-select-picker-3-1" checked />
  <label class="oui-select-picker__label-container" for="oui-select-picker-3-1">
    <span class="oui-select-picker__label">Checked</span>
    <span class="oui-select__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>

<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-3-2" value="oui-select-picker-3-2" id="oui-select-picker-3-2" />
  <label class="oui-select-picker__label-container" for="oui-select-picker-3-2">
    <span class="oui-select-picker__label">Unchecked</span>
    <span class="oui-select__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-select-picker__value-container">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>

<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-3-3" value="oui-select-picker-3-3" id="oui-select-picker-3-3" checked disabled />
  <label class="oui-select-picker__label-container" for="oui-select-picker-3-3">
    <span class="oui-select-picker__label">Disabled [Checked]</span>
    <span class="oui-select__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>

<div class="oui-select-picker">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-3-4" value="oui-select-picker-3-4" id="oui-select-picker-3-4" disabled />
  <label class="oui-select-picker__label-container" for="oui-select-picker-3-4">
    <span class="oui-select-picker__label">Disabled [Unchecked]</span>
    <span class="oui-select__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>
```

### Error

```html:preview
<div class="oui-select-picker oui-select-picker_error">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-4-1" value="oui-select-picker-4-1" id="oui-select-picker-4-1" />
  <label class="oui-select-picker__label-container" for="oui-select-picker-4-1">
    <span class="oui-select-picker__label">Error [Unchecked]</span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>

<div class="oui-select-picker oui-select-picker_error">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-4-2" value="oui-select-picker-4-2" id="oui-select-picker-4-2" checked />
  <label class="oui-select-picker__label-container" for="oui-select-picker-4-2">
    <span class="oui-select-picker__label">Error [Checked]</span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>

<div class="oui-select-picker oui-select-picker_error">
  <input class="oui-select-picker__input" type="radio" name="oui-select-picker-4-3" value="oui-select-picker-4-3" id="oui-select-picker-4-3" />
  <label class="oui-select-picker__label-container" for="oui-select-picker-4-3">
    <span class="oui-select-picker__label">Error</span>
    <span class="oui-select__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
    <span class="oui-select-picker__value-container oui-select-picker__section">
      <span class="oui-select-picker__value">Value</span>
    </span>
  </label>
</div>
```

## Mixins

```less
@import 'oui-select-picker/_mixins';
```

### .select-picker

Define the base styles for a select-picker.

```less
#oui > .select-picker();
```

```less
#oui > .select-picker(
  @selector: Class
);
```

### .select-picker-status

Will stylize your select-picker as one in success, warning or error.

```less
.select-picker-status(
  status: Class[]
);
```

## Classes

### Block

The block class is `oui-select-picker` (top-level element).

### Element

Inner elements:

| Element               | Class                                    |
| --------------------- | ---------------------------------------- |
| __input[type=radio]__ | `oui-select-picker__input`               |
| __label__             | `oui-select-picker__label-container`     |
| __span__              | `oui-select-picker__label`               |
| __span__              | `oui-select-picker__description`         |
| __span__              | `oui-select-picker__section`             |
| __span__              | `oui-select-picker__value-container`     |
| __span__              | `oui-select-picker__value`               |

### Modifier

The provided modifiers are:

| Class                       | Description                                 |
| --------------------------- | ------------------------------------------- |
| `oui-select-picker_success` | Make the selector looks like one in success |
| `oui-select-picker_warning` | Make the selector looks like one in warning |
| `oui-select-picker_error`   | Make the selector looks like one in error   |
