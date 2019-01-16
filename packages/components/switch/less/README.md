# oui-switch

<component-status cx-design="partial" ux="rc"></component-status>

## Installation

```less
@import "oui-switch/switch";
```

## Usage
Guidelines : Switches Are for Instantaneous Actions. The switches do not require an action button to apply the changes.

### Default

```html:preview
<div class="oui-switch">
  <label class="oui-switch__label-container">
    <input type="checkbox" class="oui-switch__checkbox">
    <span class="oui-switch__slider" aria-hidden="true"></span>
  </label>
</div>
<div class="oui-switch">
  <label class="oui-switch__label-container">
    <input type="checkbox" class="oui-switch__checkbox" checked="checked">
    <span class="oui-switch__slider" aria-hidden="true"></span>
  </label>
</div>
```

### Disabled
```html:preview
<div class="oui-switch">
  <label class="oui-switch__label-container">
    <input type="checkbox" class="oui-switch__checkbox" disabled>
    <span class="oui-switch__slider" aria-hidden="true"></span>
  </label>
</div>
<div class="oui-switch">
  <label class="oui-switch__label-container">
    <input type="checkbox" class="oui-switch__checkbox" checked="checked" disabled>
    <span class="oui-switch__slider" aria-hidden="true"></span>
  </label>
</div>
```

### Error
```html:preview
<div class="oui-switch oui-switch_error">
  <label class="oui-switch__label-container">
    <input type="checkbox" class="oui-switch__checkbox">
    <span class="oui-switch__slider" aria-hidden="true"></span>
  </label>
</div>
<div class="oui-switch oui-switch_error">
  <label class="oui-switch__label-container">
    <input type="checkbox" class="oui-switch__checkbox" checked="checked">
    <span class="oui-switch__slider" aria-hidden="true"></span>
  </label>  
</div>
```

### Inline
```html:preview
<div class="oui-switch oui-switch_inline">
  <label class="oui-switch__label-container">
    <input type="checkbox" class="oui-switch__checkbox">
    <span class="oui-switch__slider" aria-hidden="true"></span>
  </label>
</div>
<div class="oui-switch oui-switch_inline">
  <label class="oui-switch__label-container">
    <input type="checkbox" class="oui-switch__checkbox" checked="checked">
    <span class="oui-switch__slider" aria-hidden="true"></span>
  </label>
</div>
```
