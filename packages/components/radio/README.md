# Installation

```js
angular.module('myModule', ['oui.radio']);
```

# API

## Component `oui-radio`

| Attribute     | Type      | Binding   | One-time Binding  | Values              | Default   | Description
| ----          | ----      | ----      | ----              | ----                | ----      | ----
| `model`       | object    | =?        | no                | n/a                 | n/a       | current value of the radio
| `id`          | string    | @?        | yes               | n/a                 | n/a       | id attribute of the radio
| `name`        | string    | @?        | yes               | n/a                 | n/a       | name attribute of the radio
| `description` | string    | @?        | no                | n/a                 | n/a       | description text
| `footer`      | string    | @?        | no                | n/a                 | n/a       | footer text
| `value`       | object    | <         | no                | n/a                 | n/a       | value of the radio
| `disabled`    | boolean   | <?        | no                | `true`, `false`     | `false`   | disabled flag
| `required`    | boolean   | <?        | no                | `true`, `false`     | `false`   | required flag
| `inline`      | boolean   | <?        | no                | `true`, `false`     | `false`   | inline style of the radio
| `thumbnail`   | boolean   | <?        | no                | `true`, `false`     | `false`   | thumbnail style of the radio
| `on-change`   | function  | &?        | no                | n/a                 | n/a       | handler triggered when value has changed

### Attribute `on-change`

Model will not be refreshed until the `on-change` callback hasn't returned. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html
<oui-radio
    model="$ctrl.model"
    on-change="$ctrl.onChange(modelValue)">
</oui-radio>
```

### Transclude slots

| Attribute                 | Description
| ----                      | ----
| `<oui-radio-label>`       | definition label slot
| `<oui-radio-description>` | definition description slot, override attribute `description`
| `<oui-radio-footer>`      | definition footer slot

```html
<oui-radio>
    <oui-radio-label>Label</oui-radio-label>
    <oui-radio-description>Description</oui-radio-description>
    <oui-radio-footer>Footer</oui-radio-footer>
<oui-radio>
```

## Component `oui-radio-group`

| Attribute     | Type      | Binding   | One-time Binding  | Values  | Default | Description
| ----          | ----      | ----      | ----              | ----    | ----    | ----
| `model`       | Object    | =?        | no                | n/a     | n/a     | current value of the radio
| `name`        | string    | @?        | yes               | n/a     | n/a     | name attribute of the radio
| `on-change`   | function  | &         | no                | n/a     | n/a     | handler triggered when model has changed

### Attribute `on-change`

Model will not be refreshed until the `on-change` callback hasn't returned. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html
<oui-radio-group
    model="$ctrl.model"
    on-change="$ctrl.onChange(modelValue)">
    <oui-radio value="'first'">First</oui-radio>
    <oui-radio value="'second'">Second</oui-radio>
    <oui-radio value="'third'">Third</oui-radio>
</oui-radio-group>
```

## Component `oui-radio-toggle-group`

| Attribute     | Type      | Binding   | One-time Binding  | Values          | Default | Description
| ----          | ----      | ----      | ----              | ----            | ----    | ----
| `model`       | Object    | =?        | no                | n/a             | n/a     | current value of the radio
| `direction`   | string    | @?        | no                | `row`, `column` | `row`   | flex direction of the radio
| `name`        | string    | @?        | yes               | n/a             | n/a     | name attribute of the radio
| `on-change`   | function  | &         | no                | n/a             | n/a     | handler triggered when model has changed

### Attribute `on-change`

Model will not be refreshed until the `on-change` callback hasn't returned. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html
<oui-radio-toggle-group
    model="$ctrl.model"
    on-change="$ctrl.onChange(modelValue)">
    <oui-radio value="'first'">First</oui-radio>
    <oui-radio value="'second'">Second</oui-radio>
    <oui-radio value="'third'">Third</oui-radio>
</oui-radio-toggle-group>
```
