# Header tabs

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Normal

```html:preview
<oui-header-tabs>
    <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
    <oui-header-tabs-item text="Page Header" href="/#!/oui-angular/page-header"></oui-header-tabs-item>
    <oui-header-tabs-item text="Header Tabs" href="/#!/oui-angular/header-tabs" active></oui-header-tabs-item>
    <oui-header-tabs-item text="Pagination" href="/#!/oui-angular/pagination"></oui-header-tabs-item>
    <oui-header-tabs-item text="Datagrid" href="/#!/oui-angular/datagrid"></oui-header-tabs-item>
</oui-header-tabs>
```

### With dropdown
```html:preview
<oui-header-tabs>
    <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
    <oui-header-tabs-dropdown text="Form">
        <oui-header-tabs-item text="Field" href="/#!/oui-angular/field"></oui-header-tabs-item>
        <oui-header-tabs-divider></oui-header-tabs-divider>
        <oui-header-tabs-item text="Checkbox" href="#!/oui-angular/checkbox"></oui-header-tabs-item>
        <oui-header-tabs-item text="Radio" href="#!/oui-angular/radio-group"></oui-header-tabs-item>
        <oui-header-tabs-divider></oui-header-tabs-divider>
        <oui-header-tabs-item text="Select" href="/#!/oui-angular/select"></oui-header-tabs-item>
        <oui-header-tabs-item text="Select Picker" href="/#!/oui-angular/select-picker"></oui-header-tabs-item>
    </oui-header-tabs-dropdown>
    <oui-header-tabs-dropdown text="Datagrid">
        <oui-header-tabs-item text="Datagrid" href="/#!/oui-angular/datagrid"></oui-header-tabs-item>
        <oui-header-tabs-item text="Criteria Adder" href="#!/oui-angular/criteria-adder"></oui-header-tabs-item>
    </oui-header-tabs-dropdown>
    <oui-header-tabs-item text="Header Tabs" href="/#!/oui-angular/header-tabs" active></oui-header-tabs-item>
    <oui-header-tabs-item text="Page Header" href="/#!/oui-angular/page-header"></oui-header-tabs-item>
</oui-header-tabs>
```

### Disabled items

```html:preview
<oui-header-tabs>
    <oui-header-tabs-item text="Home" href="/#" disabled></oui-header-tabs-item>
    <oui-header-tabs-dropdown text="Form">
        <oui-header-tabs-item text="Field" href="/#!/oui-angular/field" disabled></oui-header-tabs-item>
        <oui-header-tabs-divider></oui-header-tabs-divider>
        <oui-header-tabs-item text="Checkbox" href="#!/oui-angular/checkbox"></oui-header-tabs-item>
        <oui-header-tabs-item text="Radio" href="#!/oui-angular/radio-group" disabled></oui-header-tabs-item>
        <oui-header-tabs-divider></oui-header-tabs-divider>
        <oui-header-tabs-item text="Select" href="/#!/oui-angular/select"></oui-header-tabs-item>
        <oui-header-tabs-item text="Select Picker" href="/#!/oui-angular/select-picker"></oui-header-tabs-item>
    </oui-header-tabs-dropdown>
    <oui-header-tabs-dropdown text="Datagrid">
        <oui-header-tabs-item text="Datagrid" href="/#!/oui-angular/datagrid" disabled></oui-header-tabs-item>
        <oui-header-tabs-item text="Criteria Adder" href="#!/oui-angular/criteria-adder" disabled></oui-header-tabs-item>
    </oui-header-tabs-dropdown>
    <oui-header-tabs-item text="Page Header" href="/#!/oui-angular/page-header"></oui-header-tabs-item>
    <oui-header-tabs-item text="Header Tabs" href="/#!/oui-angular/header-tabs" active></oui-header-tabs-item>
</oui-header-tabs>
```

### In Page Header

```html:preview
<oui-page-header heading="Title" description="Description">
    <oui-header-tabs>
        <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
        <oui-header-tabs-item text="Page Header" href="/#!/oui-angular/page-header"></oui-header-tabs-item>
        <oui-header-tabs-item text="Header Tabs" href="/#!/oui-angular/header-tabs" active></oui-header-tabs-item>
        <oui-header-tabs-dropdown text="Form">
            <oui-header-tabs-item text="Field" href="/#!/oui-angular/field"></oui-header-tabs-item>
            <oui-header-tabs-divider></oui-header-tabs-divider>
            <oui-header-tabs-item text="Checkbox" href="#!/oui-angular/checkbox"></oui-header-tabs-item>
            <oui-header-tabs-item text="Radio" href="#!/oui-angular/radio-group"></oui-header-tabs-item>
            <oui-header-tabs-divider></oui-header-tabs-divider>
            <oui-header-tabs-item text="Select" href="/#!/oui-angular/select"></oui-header-tabs-item>
            <oui-header-tabs-item text="Select Picker" href="/#!/oui-angular/select-picker"></oui-header-tabs-item>
        </oui-header-tabs-dropdown>
        <oui-header-tabs-item text="Pagination" href="/#!/oui-angular/pagination"></oui-header-tabs-item>
        <oui-header-tabs-item text="Datagrid" href="/#!/oui-angular/datagrid"></oui-header-tabs-item>
    </oui-header-tabs>
</oui-page-header>
```

## API

### oui-header-tabs-item

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `text`        | string    | @         | yes               | n/a               | n/a       | display the menu item with this text
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
