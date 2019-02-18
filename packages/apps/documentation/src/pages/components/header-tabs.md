# Header-tabs

## Usage

### Normal

```html:preview
<oui-header-tabs>
    <oui-header-tabs-item href="/#">Home</oui-header-tabs-item>
    <oui-header-tabs-item href="/#!/components/header">Header</oui-header-tabs-item>
    <oui-header-tabs-item href="/#!/components/header-tabs" active>Header Tabs</oui-header-tabs-item>
    <oui-header-tabs-item href="/#!/components/pagination">Pagination</oui-header-tabs-item>
    <oui-header-tabs-item href="/#!/components/datagrid">Datagrid</oui-header-tabs-item>
</oui-header-tabs>
```

### With dropdown
```html:preview
<oui-header-tabs>
    <oui-header-tabs-item href="/#">Home</oui-header-tabs-item>
    <oui-header-tabs-dropdown text="Form">
        <oui-header-tabs-item href="/#!/components/field">Field</oui-header-tabs-item>
        <oui-header-tabs-divider></oui-header-tabs-divider>
        <oui-header-tabs-item href="#!/components/checkbox">Checkbox</oui-header-tabs-item>
        <oui-header-tabs-item href="#!/components/radio-group">Radio</oui-header-tabs-item>
        <oui-header-tabs-divider></oui-header-tabs-divider>
        <oui-header-tabs-item href="/#!/components/select">Select</oui-header-tabs-item>
        <oui-header-tabs-item href="/#!/components/select-picker">Select Picker</oui-header-tabs-item>
    </oui-header-tabs-dropdown>
    <oui-header-tabs-dropdown text="Datagrid">
        <oui-header-tabs-item href="/#!/components/datagrid">Datagrid</oui-header-tabs-item>
        <oui-header-tabs-item href="#!/components/criteria">Criteria</oui-header-tabs-item>
    </oui-header-tabs-dropdown>
    <oui-header-tabs-item href="/#!/components/header-tabs" active>Header Tabs</oui-header-tabs-item>
    <oui-header-tabs-item href="/#!/components/header">Header</oui-header-tabs-item>
</oui-header-tabs>
```

### Disabled items

```html:preview
<oui-header-tabs>
    <oui-header-tabs-item href="/#" disabled>Home</oui-header-tabs-item>
    <oui-header-tabs-dropdown text="Form">
        <oui-header-tabs-item href="/#!/components/field" disabled>Field</oui-header-tabs-item>
        <oui-header-tabs-divider></oui-header-tabs-divider>
        <oui-header-tabs-item href="#!/components/checkbox">Checkbox</oui-header-tabs-item>
        <oui-header-tabs-item href="#!/components/radio-group" disabled>Radio</oui-header-tabs-item>
        <oui-header-tabs-divider></oui-header-tabs-divider>
        <oui-header-tabs-item href="/#!/components/select">Select</oui-header-tabs-item>
        <oui-header-tabs-item href="/#!/components/select-picker">Select Picker</oui-header-tabs-item>
    </oui-header-tabs-dropdown>
    <oui-header-tabs-dropdown text="Datagrid">
        <oui-header-tabs-item href="/#!/components/datagrid" disabled>Datagrid</oui-header-tabs-item>
        <oui-header-tabs-item href="#!/components/criteria" disabled>Criteria</oui-header-tabs-item>
    </oui-header-tabs-dropdown>
    <oui-header-tabs-item href="/#!/components/header">Header</oui-header-tabs-item>
    <oui-header-tabs-item href="/#!/components/header-tabs" active>Header Tabs</oui-header-tabs-item>
</oui-header-tabs>
```

### In Header

```html:preview
<oui-header heading="Title" description="Description">
    <oui-header-tabs>
        <oui-header-tabs-item href="/#">Home</oui-header-tabs-item>
        <oui-header-tabs-item href="/#!/components/header">Header</oui-header-tabs-item>
        <oui-header-tabs-item href="/#!/components/header-tabs" active>Header Tabs</oui-header-tabs-item>
        <oui-header-tabs-dropdown text="Form">
            <oui-header-tabs-item href="/#!/components/field">Field</oui-header-tabs-item>
            <oui-header-tabs-divider></oui-header-tabs-divider>
            <oui-header-tabs-item href="#!/components/checkbox">Checkbox</oui-header-tabs-item>
            <oui-header-tabs-item href="#!/components/radio-group">Radio</oui-header-tabs-item>
            <oui-header-tabs-divider></oui-header-tabs-divider>
            <oui-header-tabs-item href="/#!/components/select">Select</oui-header-tabs-item>
            <oui-header-tabs-item href="/#!/components/select-picker">Select Picker</oui-header-tabs-item>
        </oui-header-tabs-dropdown>
        <oui-header-tabs-item href="/#!/components/pagination">"Pagination</oui-header-tabs-item>
        <oui-header-tabs-item href="/#!/components/datagrid">"Datagrid</oui-header-tabs-item>
    </oui-header-tabs>
</oui-header>
```

## API

### oui-header-tabs-item

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `href`        | string    | @?        | yes               | n/a               | n/a       | href of the menu item
| `state`       | string    | @?        | yes               | n/a               | n/a       | state of the menu item
| `stateParams` | object    | <?        | no                | n/a               | n/a       | state params of the menu item
| `active`      | boolean   | <?        | no                | `true`, `false`   | `false`   | manual active flag
| `disabled`    | boolean   | <?        | yes               | `true`, `false`   | `false`   | disabled flag
| `external`    | boolean   | <?        | yes               | `true`, `false`   | `false`   | external link flag

**Note**: `ui-router` is needed for the attributes `state` and `state-params`.

### oui-header-tabs-dropdown

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `text`        | string    | @         | yes               | n/a               | n/a       | display the dropdown with this text

### oui-header-tabs-divider

Add a separator for the dropdown menu
