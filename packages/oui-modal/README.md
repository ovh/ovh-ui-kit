# oui-modal

<component-status cx-design="partial" ux="rc"></component-status>

## Installation

```less
  @import 'oui-modal/modal';
```

## Usage

### With icon

#### Confirmation or question

The confirmation modal is used to ask the user to confirm (action verb) or cancel.
The X to close is equivalent to the Cancel button.
There is no possibility to click outside the modal to close it (user must take action).
The modal disappears when a button is clicked.

```html:preview
<div class="oui-doc-preview-only-keep-children oui-modal-backdrop"
  style="padding: 80px;">
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
</div>
```

#### Warning

The alert modal is used to inform the user of a possible action.
It displays a message and action buttons to remedy or close.
The X to close is equivalent to the Cancel button.
It is possible to click outside the modal to close it (equivalent to the Cancel button).
The dialog modal disappears when a button is clicked.

```html:preview
<div class="oui-doc-preview-only-keep-children oui-modal-backdrop"
  style="padding: 80px;">
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
</div>
```
#### Success

Note: This modal is used only when there is a complementary step.
It displays a success message and 2 buttons, primary action to close the modal and a secondary action to complete.
It is possible to click outside the modal to close it or click X (equivalent to the primary action).

```html:preview
<div class="oui-doc-preview-only-keep-children oui-modal-backdrop"
  style="padding: 80px;">
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
</div>
```

### No icon
The no icon modal can contain a short form (4 to 5 inputs) in a single section.

```html:preview
<div class="oui-doc-preview-only-keep-children oui-modal-backdrop"
  style="padding: 80px;">
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
</div>
```
