# oui-modal

<component-status cx-design="partial" ux="rc"></component-status>

oui-modal is a package which provide styles for the `oui-modal` component.

## Installation

```less
  @import 'oui-modal/modal';
```

## Usage

### Error

```html:preview
<div class="oui-modal oui-modal_shadow">
  <div class="oui-modal__header">
    <button class="oui-icon oui-icon-close_thin oui-modal__close-button" type="button" aria-label="Exit"></button>
  </div>
  <div class="oui-modal__body">
    <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
    <h2 class="oui-modal__title">Error</h2>
    <p class="oui-modal__text">An error occurred.</p>
  </div>
  <div class="oui-modal__footer">
    <button class="oui-button oui-button_secondary" type="button">
      Cancel
    </button>
    <button class="oui-button oui-button_primary" type="button">
      Exit
    </button>
  </div>
</div>
```

### Warning

```html:preview
<div class="oui-modal oui-modal_shadow">
  <div class="oui-modal__header">
    <button class="oui-icon oui-icon-close_thin oui-modal__close-button" type="button" aria-label="Exit"></button>
  </div>
  <div class="oui-modal__body">
    <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
    <div class="oui-modal__body-text">
      <h2 class="oui-modal__title">Warning</h2>
      <p class="oui-modal__text">The current order is not finished.</p>
      <p class="oui-modal__text">
        <strong>Are you sure you want to exit and return to the home page?</strong>
      </p>
    </div>
  </div>
  <div class="oui-modal__footer">
    <button class="oui-button oui-button_secondary" type="button">
      Cancel
    </button>
    <button class="oui-button oui-button_primary" type="button">
      Exit
    </button>
  </div>
</div>
```

### Info

```html:preview
<div class="oui-modal oui-modal_shadow">
  <div class="oui-modal__header">
    <button class="oui-icon oui-icon-close_thin oui-modal__close-button" type="button" aria-label="Exit"></button>
  </div>
  <div class="oui-modal__body">
    <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
    <div class="oui-modal__body-text">
      <h2 class="oui-modal__title">Info</h2>
      <p class="oui-modal__text">The current order is not finished.</p>
      <p class="oui-modal__text">
        <strong>Are you sure you want to exit and return to the home page?</strong>
      </p>
    </div>
  </div>
  <div class="oui-modal__footer">
    <button class="oui-button oui-button_secondary" type="button">
      Cancel
    </button>
    <button class="oui-button oui-button_primary" type="button">
      Exit
    </button>
  </div>
</div>
```

### Confirmation or question

```html:preview
<div class="oui-modal oui-modal_shadow">
  <div class="oui-modal__header">
    <button class="oui-icon oui-icon-close_thin oui-modal__close-button" type="button" aria-label="Exit"></button>
  </div>
  <div class="oui-modal__body">
    <i class="oui-icon oui-icon-help_circle oui-icon_bicolor" aria-hidden="true"></i>
    <div class="oui-modal__body-text">
      <h2 class="oui-modal__title">Confirmation</h2>
      
      <p class="oui-modal__text">
        <strong>Are you sure you want to delete this item?</strong>
      </p>
    </div>
  </div>
  <div class="oui-modal__footer">
    <button class="oui-button oui-button_secondary" type="button">
      Cancel
    </button>
    <button class="oui-button oui-button_primary" type="button">
      Delete
    </button>
  </div>
</div>
```

### Success

```html:preview
<div class="oui-modal oui-modal_shadow">
  <div class="oui-modal__header">
    <button class="oui-icon oui-icon-close_thin oui-modal__close-button" type="button" aria-label="Exit"></button>
  </div>
  <div class="oui-modal__body">
    <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
    <div class="oui-modal__body-text">
      <h2 class="oui-modal__title">The dynHost was successfully created</h2>
      <p class="oui-modal__text">In order to be able to update a DynHOST field from a software external to the client space, a DynHOST identifier is required.</p>
    </div>
  </div>
  <div class="oui-modal__footer">
    <button class="oui-button oui-button_secondary" type="button">
      Create an identifier
    </button>
    <button class="oui-button oui-button_primary" type="button">
      Later
    </button>
  </div>
</div>
```

### No icon

```html:preview
<div class="oui-modal oui-modal_shadow">
  <div class="oui-modal__header">
    <button class="oui-icon oui-icon-close_thin oui-modal__close-button" type="button" aria-label="Exit"></button>
  </div>
  <div class="oui-modal__body oui-modal__body_no-icon">
    <div class="oui-modal__body-text">
      <h2 class="oui-modal__title">Storage creation</h2>
      <p class="oui-modal__text">A new storage will be added to your account.</p>
    </div>
    <label for="text" class="oui-label">Label for Input text</label>
    <input type="text" id="text" name="text" class="oui-input" />

    <label for="select" class="oui-label">Label for Select</label>
    <div class="oui-select">
      <select id="select" name="select" class="oui-select__input">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <i class="oui-icon oui-icon-chevron-down"></i>
    </div>
  </div>
  <div class="oui-modal__footer">
  <button class="oui-button oui-button_secondary" type="button">
      Cancel
    </button>
    <button class="oui-button oui-button_primary" type="button">
      Save
    </button>
  </div>
</div>
```

> **Important:** It can also be combined with *Bootstrap* modal classes

## Mixins

```less
@import 'oui-modal/_mixins';
```

### .modal-base

Define the base styles for a modal.

```less
#oui > .modal-base();
```

```less
.modal-base(
  @button-selector: Class, // Class name that will be prefixed on each subclasses
  @body-padding: Number,
  @close-button-width: Number,
  @close-button-height: Number,
  @close-button-color: Color,
  @close-button-font-size: Number,
  @close-button-padding: Number,
  @oui-modal-font-size,
  @font-size: Number
)
```

### .modal-shadow

Will stylize your modal with a shadow around it.

```less
#oui > .modal-shadow();
```

### .modal-success

Will stylize your modal as a success one.

```less
#oui > .modal-success();
```

### .modal-error

Will stylize your modal as a error one.

```less
#oui > .modal-error();
```

### .modal-warning

Will stylize your modal as a warning one.

```less
#oui > .modal-warning();
```

### .modal-info

Will stylize your modal as a info one.

```less
#oui > .modal-info();
```

### .modal-help

Will stylize your modal as a help one.

```less
#oui > .modal-help();
```

## Classes

### Block

The block class is `oui-modal` (top-level element).

### Element

The modal component can take 6 to 7 inner elements:
* An inline element class `oui-modal__header` which contains header elements
* An inline element class `oui-modal__body` which contains body elements
* An inline element class `oui-modal__body-text` which contains body texts
* An inline element class `oui-modal__title` which contains the modal title
* An inline element class `oui-modal__text` which contains the modal text
* An inline element class `oui-modal__footer` which contains footer elements
* An optional button class `oui-modal__close-button` which provides the possibility to close the modal

### Modifiers

The provided modifiers are:

| Class                                      | Description                        |
| ------------------------------------------ | ---------------------------------- |
| `oui-modal_shadow`                         | Adds a shadow to the modal         |
| `oui-modal__body_no-icon`                  | Stylize the modal with no icon     |
