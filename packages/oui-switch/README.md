# oui-switch

<component-status cx-design="partial" ux="rc"></component-status>

oui-switch is a package which provide styles for the switch component.

## Installation

```less
@import 'oui-switch/switch';
```

## Usage
Guidelines : Switches Are for Instantaneous Actions. The switches do not require an action button to apply the changes.

### Default with icons

```html:preview
<label class="oui-switch">
  <input type="checkbox" class="oui-switch__checkbox">
  <div class="oui-switch__slider"></div>
  <i class="oui-icon oui-icon-success" aria-hidden="true"></i>
  <i class="oui-icon oui-icon-error" aria-hidden="true"></i>
</label>
<label class="oui-switch">
  <input type="checkbox" class="oui-switch__checkbox" checked="checked">
  <div class="oui-switch__slider"></div>
  <i class="oui-icon oui-icon-success" aria-hidden="true"></i>
  <i class="oui-icon oui-icon-error" aria-hidden="true"></i>
</label>
```

## Mixins

```less
@import 'oui-switch/_mixins';
```

### .switch

Define the base styles for a switch.

```less
#oui > .switch();
```

```less
#oui > .switch(
  @switch-selector: Class,
  @icon-selector: Class,
  @background-color-on: Color,
  @background-color-off: Color,
  @slider-color: Color,
  @icon-color: Color,
  @width: Number,
  @height: Number,
  @icon-size: Number,
  @border-width: Number
);
```

### .switch-square

Define the base styles for a switch square.

```less
#oui > .switch-square();
```

```less
#oui > .switch-square(
  @switch-selector: Class
);
```
