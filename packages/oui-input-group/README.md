# oui-input-group

<component-status cx-design="partial" ux="prototype"></component-status>

> **Important:** This component is broken on IE9, IE10 and IE11


## Installation

```less
  @import 'oui-input-group/input-group';
```

## Usage

```html:preview
<div class="oui-input-group">
  <input class="oui-input" placeholder="Email">
  <button class="oui-button" type="button">Find</button>
</div>

<div class="oui-input-group">
  <input class="oui-input" placeholder="Email" disabled>
  <button class="oui-button" type="button" disabled>Find</button>
</div>

<div class="oui-input-group">
  <button class="oui-button" type="button">-</button>
  <input class="oui-input oui-input_number" type="number" placeholder="vCores">
  <button class="oui-button" type="button">+</button>
</div>

<div class="oui-input-group">
  <input class="oui-input" placeholder="nickhandle">
  <button class="oui-button" type="button">Weird action here</button>
  <input class="oui-input" value="ovh.com" disabled>
</div>

<div class="oui-input-group">
  <div class="oui-input-formfield">
    <input type="text" id="text" name="text" class="oui-input" value="Input text" />
    <label for="text" class="oui-label">Label for Input group</label>
  </div>
  <button class="oui-button">Go</button>
</div>

<div class="oui-input-group oui-input-group_button">
  <input class="oui-input" id="password" name="password" type="password" placeholder="Password with icon eye" />
  <button class="oui-button" id="togglePassword" type="button" aria-label="Show password">
    <i class="oui-icon oui-icon-eye"></i>
  </button>
</div>

<div class="oui-input-group oui-input-group_button">
  <input class="oui-input oui-input_error" id="passwordError" name="passwordError" type="text" placeholder="Password Error with icon eye blocked" />
  <button class="oui-button" id="togglePasswordError" type="button" aria-label="Hide password">
    <i class="oui-icon oui-icon-eye-blocked"></i>
  </button>
</div>
```

### Inline input group

```html:preview
<div class="oui-input-group oui-input-group_inline">
  <input class="oui-input" placeholder="Email">
  <button class="oui-button" type="button">Find</button>
</div>
```

### Sizes

```html:preview
<div class="oui-input-group oui-input-group_xs">
  <input class="oui-input" placeholder="XS">
  <button class="oui-button oui-button_small-width" type="button">🔍</button>
</div>
<div class="oui-input-group oui-input-group_s">
  <input class="oui-input" placeholder="S">
  <button class="oui-button oui-button_small-width" type="button">🔍</button>
</div>
<div class="oui-input-group oui-input-group_m">
  <input class="oui-input" placeholder="M">
  <button class="oui-button" type="button">Find</button>
</div>
<div class="oui-input-group oui-input-group_l">
  <input class="oui-input" placeholder="L">
  <button class="oui-button" type="button">Find</button>
</div>
<div class="oui-input-group oui-input-group_xl">
  <input class="oui-input" placeholder="XL">
  <button class="oui-button" type="button">Find</button>
</div>
```

### Numeric

```html:preview
<div class="oui-input-group oui-input-group_numeric">
  <button class="oui-button oui-button_icon-only oui-button_small-width" type="button">
    <i class="oui-icon oui-icon-remove" aria-hidden="true"></i>
  </button>
  <input class="oui-input oui-input_number" type="number" value="0">
  <button class="oui-button oui-button_icon-only oui-button_small-width" type="button">
    <i class="oui-icon oui-icon-add" aria-hidden="true"></i>
  </button>
</div>

<div class="oui-input-group oui-input-group_numeric">
  <button class="oui-button oui-button_icon-only oui-button_small-width" type="button" disabled>
    <i class="oui-icon oui-icon-remove" aria-hidden="true"></i>
  </button>
  <input class="oui-input oui-input_number" type="number" value="0" disabled>
  <button class="oui-button oui-button_icon-only oui-button_small-width" type="button" disabled>
    <i class="oui-icon oui-icon-add" aria-hidden="true"></i>
  </button>
</div>
```

### Clipboard

```html:preview
<div class="oui-input-group oui-input-group_clipboard">
    <div oui-tooltip="Copy this clipboard" class="oui-input-group_clipboard-container">
        <input class="oui-input text-truncate"
            type="text"
            value="Copy this text"
            readonly>
        <button class="oui-button"><i class="oui-icon oui-icon-copy-normal" aria-hidden="true"></i></button>
    </div>
</div>
```
