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
  <div class="oui-collapsible__header">
    <div class="oui-collapsible__header-text">
      Title
    </div>    
    <button type="button" class="oui-collapsible__toggle-button" aria-pressed="false" aria-label="Action">
      <i class="oui-icon oui-icon-chevron-down oui-collapsible__toggle-icon" aria-hidden="true"></i>
    </button>
  </div>
  <div class="oui-collapsible__body">
    Collapsible body
  </div>
</div>
```

### Expanded

```html:preview
<div class="oui-collapsible oui-collapsible_open">
  <div class="oui-collapsible__header">
    <div class="oui-collapsible__header-text">
      Title
    </div>    
    <button type="button" class="oui-collapsible__toggle-button" aria-pressed="true" aria-label="Action">
      <i class="oui-icon oui-icon-chevron-down oui-collapsible__toggle-icon" aria-hidden="true"></i>
    </button>
  </div>
  <div class="oui-collapsible__body">
      Collapsible body
  </div>
</div>
```
