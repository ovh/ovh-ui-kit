# oui-header-tabs

<component-status cx-design="complete" ux="rc"></component-status>


## Installation

```less
@import 'oui-header-tabs/header-tabs';
```

## Usage

### Basic

```html:preview
<ul class="oui-tabs" role="menubar">
    <li class="oui-tabs__tab oui-tabs__tab_active" role="menuitem">
        <a href="#!/ovh-ui-kit/header-tabs">Home</a>
    </li>
    <li class="oui-tabs__tab" role="menuitem">
        <a href="#!/ovh-ui-kit/header-tabs">Dashboard</a>
    </li>
    <li class="oui-tabs__tab" role="menuitem">
        <a href="#!/ovh-ui-kit/header-tabs">Streams</a>
    </li>
</ul>
<div class="oui-doc-preview-only-keep-children" style="margin-bottom: 15px;">
```

### Disabled

```html:preview
<ul class="oui-tabs" role="menubar">
    <li class="oui-tabs__tab" role="menuitem">
        <a href="#!/ovh-ui-kit/header-tabs">Home</a>
    </li>
    <li class="oui-tabs__tab oui-tabs__tab_active" role="menuitem">
        <a href="#!/ovh-ui-kit/header-tabs">Dashboard</a>
    </li>
    <li class="oui-tabs__tab oui-tabs__tab_disabled" role="menuitem">
        <a href="#!/ovh-ui-kit/header-tabs">Streams</a>
    </li>
</ul>
<div class="oui-doc-preview-only-keep-children" style="margin-bottom: 15px;">
```