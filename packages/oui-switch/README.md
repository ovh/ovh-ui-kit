# oui-switch

<component-status cx-design="partial" ux="rc"></component-status>

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
