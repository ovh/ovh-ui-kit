# oui-inline-adder

<component-status cx-design="complete" ux="complete"></component-status>

## Installation

```less
@import 'oui-inline-adder/inline-adder';
```

## Usage

### Normal

```html:preview
<div class="oui-inline-adder">
  <div class="oui-inline-adder__item">
    <div class="oui-inline-adder__row">
      <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
        <label for="text" class="oui-label">Label</label>
        <input type="text" class="oui-input">
      </div>
      <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
        <label for="text" class="oui-label">Label</label>
        <input type="text" class="oui-input">
      </div>
      <div class="oui-inline-adder__cell">
        <label for="text" class="oui-label">Label</label>
        <label class="oui-select oui-select_s">
          <select class="oui-select__input">
            <option>Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
        </label>
      </div>
    </div>
    <div class="oui-inline-adder__actions-container">
      <button class="oui-inline-adder__actions-button oui-button oui-button_secondary oui-button_small-width">
        <i class="oui-icon oui-icon-add" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>
```

### Multiple items

```html:preview
<div class="oui-inline-adder">
  <div class="oui-inline-adder__item">
    <div class="oui-inline-adder__row" disabled="true">
      <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
        <label for="text" class="oui-label">Label</label>
        <input type="text" class="oui-input" disabled>
      </div>
      <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
        <label for="text" class="oui-label">Label</label>
        <input type="text" class="oui-input" disabled>
      </div>
      <div class="oui-inline-adder__cell">
        <label for="text" class="oui-label">Label</label>
        <label class="oui-select oui-select_s">
          <select class="oui-select__input" disabled>
            <option>Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
        </label>
      </div>
    </div>
    <div class="oui-inline-adder__actions-container">
      <button class="oui-inline-adder__actions-button oui-button oui-button_secondary oui-button_small-width">
        <i class="oui-icon oui-icon-trash_line" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="oui-inline-adder__item">
    <div class="oui-inline-adder__row">
      <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
        <label for="text" class="oui-label">Label</label>
        <input type="text" class="oui-input">
      </div>
      <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
        <label for="text" class="oui-label">Label</label>
        <input type="text" class="oui-input">
      </div>
      <div class="oui-inline-adder__cell">
        <label for="text" class="oui-label">Label</label>
        <label class="oui-select oui-select_s">
          <select class="oui-select__input">
            <option>Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
        </label>
      </div>
    </div>
    <div class="oui-inline-adder__actions-container">
      <button class="oui-inline-adder__actions-button oui-button oui-button_secondary oui-button_small-width">
        <i class="oui-icon oui-icon-add" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>
```

### Multiple rows

```html:preview
<div class="oui-inline-adder">
  <div class="oui-inline-adder__item">
    <div class="oui-inline-adder__rows_container">
      <div class="oui-inline-adder__row">
        <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
          <label for="text" class="oui-label">Label</label>
          <input type="text" class="oui-input">
        </div>
        <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
          <label for="text" class="oui-label">Label</label>
          <input type="text" class="oui-input">
        </div>
        <div class="oui-inline-adder__cell">
          <label for="text" class="oui-label">Label</label>
          <label class="oui-select oui-select_s">
            <select class="oui-select__input">
              <option>Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
          </label>
        </div>
      </div>
      <div class="oui-inline-adder__row">
        <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
          <label for="text" class="oui-label">Label</label>
          <input type="text" class="oui-input">
        </div>
        <div class="oui-inline-adder__cell oui-inline-adder__cell_auto-grow">
          <label for="text" class="oui-label">Label</label>
          <input type="text" class="oui-input">
        </div>
        <div class="oui-inline-adder__cell">
          <label for="text" class="oui-label">Label</label>
          <label class="oui-select oui-select_s">
            <select class="oui-select__input">
              <option>Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
          </label>
        </div>
      </div>
    </div>
    <div class="oui-inline-adder__actions-container">
      <button class="oui-inline-adder__actions-button oui-button oui-button_secondary oui-button_small-width">
        <i class="oui-icon oui-icon-add" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>
```
