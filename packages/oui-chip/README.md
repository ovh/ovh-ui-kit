# oui-chip

<component-status cx-design="complete" ux="rc"></component-status>

## Installation

```less
@import 'oui-chip/chip';
```

## Usage

### Basic

```html:preview
<div class="oui-doc-preview-only-keep-children" style="margin-bottom: 15px;">
<span class="oui-chip">Lorem</span>
<span class="oui-chip">Ipsum dolor</span>
<span class="oui-chip">Sit amet</span>
</div>
```

### With container

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<div class="oui-chip__container">
    <span class="oui-chip">Lorem</span>
    <span class="oui-chip">Ipsum dolor</span>
    <span class="oui-chip">Sit amet</span>
    <span class="oui-chip">Consectetur adipiscing elit</span>
    <span class="oui-chip">Quisque sed massa quis turpis euismod commodo et lacus</span>
</div>
</div>
```

### Full width

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<div class="oui-chip__container">
    <span class="oui-chip oui-chip_full-width">Lorem</span>
    <span class="oui-chip oui-chip_full-width">Ipsum dolor</span>
    <span class="oui-chip oui-chip_full-width">Sit amet</span>
    <span class="oui-chip oui-chip_full-width">Consectetur adipiscing elit</span>
    <span class="oui-chip oui-chip_full-width">Quisque sed massa quis turpis euismod commodo et lacus</span>
</div>
</div>
```

### Closable

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<div class="oui-chip__container">
    <span class="oui-chip oui-chip_closable">
      Lorem
      <button type="button" class="oui-chip__close">
        <span class="oui-icon oui-icon-close_thin" aria-hidden="true"></span>
      </button>
    </span>
    <span class="oui-chip oui-chip_closable">
      Ipsum dolor
      <button type="button" class="oui-chip__close">
        <span class="oui-icon oui-icon-close_thin" aria-hidden="true"></span>
      </button>
    </span>
    <span class="oui-chip oui-chip_closable">
      Sit amet
      <button type="button" class="oui-chip__close">
        <span class="oui-icon oui-icon-close_thin" aria-hidden="true"></span>
      </button>
    </span>
    <span class="oui-chip oui-chip_closable">
      Consectetur adipiscing elit
      <button type="button" class="oui-chip__close">
        <span class="oui-icon oui-icon-close_thin" aria-hidden="true"></span>
      </button>
    </span>
    <span class="oui-chip oui-chip_closable">
      Quisque sed massa quis turpis euismod commodo et lacus
      <button type="button" class="oui-chip__close">
        <span class="oui-icon oui-icon-close_thin" aria-hidden="true"></span>
      </button>
    </span>
</div>
</div>
```
