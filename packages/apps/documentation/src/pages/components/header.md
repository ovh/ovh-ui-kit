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
<oui-header heading="My title" description="My subtitle">
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
        <oui-header-tabs-item href="/#">Home</oui-header-tabs-item>
        <oui-header-tabs-item href="/#!/components/header" active>Header</oui-header-tabs-item>
        <oui-header-tabs-item href="/#!/components/header-tabs">Header Tabs</oui-header-tabs-item>
        <oui-header-tabs-dropdown text="Form">
            <oui-header-tabs-item href="/#!/components/field">Field</oui-header-tabs-item>
            <oui-header-tabs-divider></oui-header-tabs-divider>
            <oui-header-tabs-item href="#!/components/checkbox">Checkbox</oui-header-tabs-item>
            <oui-header-tabs-item href="#!/components/radio-group">Radio</oui-header-tabs-item>
        </oui-header-tabs-dropdown>
        <oui-header-tabs-item href="/#!/components/pagination">Pagination</oui-header-tabs-item>
        <oui-header-tabs-item href="/#!/components/datagrid">Datagrid</oui-header-tabs-item>
    </oui-header-tabs>
</oui-header>
```


## API

| Attribute     | Type     | Binding    | One-time Binding  | Values    | Default   | Description
| ----          | ----     | ----       | ----              | ----      | ----      | ----
| `heading`     | string   | @?         | yes               | n/a       | n/a       | title of the header
| `description` | string   | @?         | yes               | n/a       | n/a       | subtitle of the header
