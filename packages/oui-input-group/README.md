# oui-input-group

<component-status cx-design="partial" ux="prototype"></component-status>

> **Important:** This component is broken on IE9, IE10 and IE11

oui-input-group is a package which provide styles to group inputs together.

## Installation

```less
  @import 'oui-input-group/input-group';
```

## Usage

```html:preview
<div class="oui-input-group">
  <input class="oui-input" placeholder="Email">
  <button class="oui-button">Find</button>
</div>

<div class="oui-input-group">
  <input class="oui-input" placeholder="Email" disabled>
  <button class="oui-button" disabled>Find</button>
</div>

<div class="oui-input-group">
  <button class="oui-button">-</button>
  <input class="oui-input" placeholder="vCores">
  <button class="oui-button">+</button>
</div>

<div class="oui-input-group">
  <input class="oui-input" placeholder="nickhandle">
  <button class="oui-button">Weird action here</button>
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
  <button class="oui-button" id="togglePassword" type="button" aria-label="Show password" />
    <i class="oui-icon oui-icon-eye"></i>
  </button>
</div>

<div class="oui-input-group oui-input-group_button">
  <input class="oui-input oui-input_error" id="passwordError" name="passwordError" type="text" placeholder="Password Error with icon eye blocked" />
  <button class="oui-button" id="togglePasswordError" type="button" aria-label="Hide password" />
    <i class="oui-icon oui-icon-eye-blocked"></i>
  </button>
</div>
```

## Mixins

```less
  @import 'oui-input-group/_mixins';
```

### .input-group-base

Define the base styles for an input-group.

```less
#oui > .input-group-base(
  @oui-input-selector,
  @oui-button-selector
);
```

```less
#oui > .input-group-base(
  @button-background-color: Color,
  @button-padding: Number
);
```

### .input-group-button

Define the base styles for an input-group with a button.

```less
#oui > .input-group-button(
  @oui-input-selector,
  @oui-button-selector,
  @oui-icon-selector
);
```

```less
#oui > .input-group-button();
```
