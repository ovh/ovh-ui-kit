# Installation

```js
angular.module('myModule', ['oui.select-picker']);
```

# API

## Component `oui-select-picker`

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `model`       | Object    | =?        | no                | n/a               | n/a       | current value of the radio
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the radio
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the radio
| `label`       | string    | @         | no                | n/a               | n/a       | label text
| `description` | string    | @?        | no                | n/a               | n/a       | description text
| `placeholder` | string    | @?        | no                | n/a               | n/a       | initial label text of the select
| `picture`     | string    | @?        | no                | n/a               | n/a       | picture path or icon class
| `footer`      | string    | @?        | no                | n/a               | n/a       | footer text
| `match`       | string    | @         | no                | n/a               | n/a       | object property matched to label
| `values`      | array     | <         | no                | n/a               | n/a       | value of the radio or values of the select
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `required`    | boolean   | <?        | no                | `true`, `false`   | `false`   | define if the field is required
| `on-change`   | function  | &?        | no                | n/a               | n/a       | handler triggered when value has changed

### Attribute `on-change`

Model will not be refreshed until the `on-change` callback hasn't returned. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html
<oui-select-picker
    label="Value A or B"
    match="name"
    model="$ctrl.model"
    values="[{id:'a', name: 'Value A'}, {id:'b', name: 'Value B'}]"
    on-change="$ctrl.onChange(modelValue)">
</oui-select-picker>
```
