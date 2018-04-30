# oui-collapsible

<component-status cx-design="complete" ux="complete"></component-status>

## Installation

```less
@import 'oui-collapsible/collapsible';
```

## Usage

### Collapsed

```html:preview
<div class="oui-collapsible">
  <button class="oui-button oui-button_full-width oui-collapsible__header-button"
    aria-label="Action"
    aria-expanded="false"
    aria-controls="collapsible-1">
    Title
    <i class="oui-icon oui-icon-chevron-down oui-collapsible__toggle-icon" aria-hidden="true"></i>
  </button>
  <div id="collapsible-1" class="oui-collapsible__body">
    Collapsible body
  </div>
</div>
```

### Expanded

```html:preview
<div class="oui-collapsible oui-collapsible_open">
  <button class="oui-button oui-button_full-width oui-collapsible__header-button"
    aria-label="Action"
    aria-expanded="true"
    aria-controls="collapsible-2">
    Title
    <i class="oui-icon oui-icon-chevron-down oui-collapsible__toggle-icon" aria-hidden="true"></i>
  </button>
  <div id="collapsible-2" class="oui-collapsible__body">
      Collapsible body
  </div>
</div>
```
