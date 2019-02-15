# Header

## Usage

### Default

```html:preview
<oui-header heading="My title"></oui-header>
```

```html:preview
<oui-header heading="My title" description="My subtitle"></oui-header>
```


### With guide

```html:preview
<oui-header heading="My title" description="My subtitle">à
    <oui-guide-menu text="Guides">
        <oui-guide-menu-group label="Section 1">
            <oui-guide-menu-item href="#">Guide 1 (link)</oui-guide-menu-item>
            <oui-guide-menu-item on-click="$ctrl.onActionClick()">Guide 2 (button)</oui-guide-menu-item>
        </oui-guide-menu-group>
        <oui-guide-menu-group label="Section 2">
            <oui-guide-menu-item href="#">Guide 1 (link)</oui-guide-menu-item>
            <oui-guide-menu-item on-click="$ctrl.onActionClick()">Guide 2 (button)</oui-guide-menu-item>
        </oui-guide-menu-group>
        <oui-guide-menu-divider></oui-guide-menu-divider>
        <oui-guide-menu-item href="#" external>External link</oui-guide-menu-item>
    </oui-guide-menu>
</oui-header>
```


### With tabs

```html:preview
<oui-header heading="My title" description="My subtitle">
    <oui-header-tabs>
        <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
        <oui-header-tabs-item text="Header" href="/#!/components/header" active></oui-header-tabs-item>
        <oui-header-tabs-item text="Header Tabs" href="/#!/components/header-tabs"></oui-header-tabs-item>
        <oui-header-tabs-dropdown text="Form">
            <oui-header-tabs-item text="Field" href="/#!/components/field"></oui-header-tabs-item>
            <oui-header-tabs-divider></oui-header-tabs-divider>
            <oui-header-tabs-item text="Checkbox" href="#!/components/checkbox"></oui-header-tabs-item>
            <oui-header-tabs-item text="Radio" href="#!/components/radio-group"></oui-header-tabs-item>
        </oui-header-tabs-dropdown>
        <oui-header-tabs-item text="Pagination" href="/#!/components/pagination"></oui-header-tabs-item>
        <oui-header-tabs-item text="Datagrid" href="/#!/components/datagrid"></oui-header-tabs-item>
    </oui-header-tabs>
</oui-header>
```


## API

| Attribute     | Type     | Binding    | One-time Binding  | Values    | Default   | Description
| ----          | ----     | ----       | ----              | ----      | ----      | ----
| `heading`     | string   | @?         | yes               | n/a       | n/a       | title of the header
| `description` | string   | @?         | yes               | n/a       | n/a       | subtitle of the header
