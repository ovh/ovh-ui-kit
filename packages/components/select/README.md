# Installation

```js
angular.module('myModule', ['oui.select']);
```

# API

## Component `oui-select`

| Attribute         | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `model`           | object    | =         | no                | n/a               | n/a       | model bound to component
| `name`            | string    | @?        | yes               | n/a               | n/a       | name of the form component
| `title`           | string    | @?        | yes               | n/a               | n/a       | title of the form component
| `placeholder`     | string    | @?        | yes               | n/a               | n/a       | placeholder displayed when model is undefined
| `match`           | string    | @?        | no                | n/a               | n/a       | property of item to show as selected item
| `items`           | array     | <         | no                | n/a               | n/a       | array used to populate the list
| `disable-items`   | function  | &         | no                | n/a               | n/a       | predicate to determine items to disable
| `required`        | boolean   | <?        | no                | `true`, `false`   | `false`   | define if the field is required
| `disabled`        | boolean   | <?        | no                | `true`, `false`   | `false`   | define if the field is disabled
| `multiple`        | boolean   | <?        | yes               | `true`, `false`   | `false`   | allow multiple selection
| `group-by`        | function  | <?        | no                | n/a               | n/a       | function taking an item as parameter and returning the group name as as string
| `on-blur`         | function  | &         | no                | n/a               | n/a       | called focus is lost
| `on-focus`        | function  | &         | no                | n/a               | n/a       | called on focus
| `on-change`       | function  | &         | no                | n/a               | n/a       | handler triggered when value has changed

### Attribute `disable-items`

For each `$item` in `items` array, `disable-item` will be called with current `$item` as an argument.
If it returns true, `$item` will be disabled. 

### Attribute `on-change`

Model will not be refreshed until the `on-change` callback hasn't returned.
If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below. 

```html
<oui-select
    model="$ctrl.modal"
    items="$ctrl.countries"
    match="country.name"
    on-change="$ctrl.onChange(modelValue)">
</oui-select>
```

### Custom option template

Template inside `oui-select` component will be used as the content of each option.
You can use `$item` variable to get option value for your template. 

```html
<oui-select name="country"
    model="$ctrl.modelCustomTemplate"
    placeholder="Select a country..."
    items="$ctrl.countries"
    group-by="$ctrl.groupByFirstLetter"
    match="country.name">
    <span ng-bind="$item.country.name" class="d-inline-block text-truncate"></span><br>
    <small>
        Code: <span ng-bind="$item.country.code"></span>
    </small>
</oui-select>
```
