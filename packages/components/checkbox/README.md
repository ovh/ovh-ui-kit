# Installation

```js
angular.module('myModule', ['oui.checkbox']);
```

# API

## Component `oui-checkbox`

| Attribute     | Type                    | Binding | One-time Binding  | Values                   | Default    | Description
| ----          | ----                    | ----    | ----              | ----                     | ----       | ----
| `model`       | boolean &#124; null     | =?      | no                | `true`, `false`, `null`  | n/a        | current value of the checkbox and null is considered as `indeterminate`
| `id`          | string                  | @?      | yes               | n/a                      | n/a        | id attribute of the checkbox
| `name`        | string                  | @?      | yes               | n/a                      | n/a        | name attribute of the checkbox
| `description` | string                  | @?      | no                | n/a                      | n/a        | description text
| `disabled`    | boolean                 | <?      | no                | `true`, `false`          | `false`    | disabled flag
| `required`    | boolean                 | <?      | no                | `true`, `false`          | `false`    | required flag
| `on-change`   | function                | &       | no                | n/a                      | n/a        | handler triggered when value has changed

### Attribute `on-change`

Model will not be refreshed until the `on-change` callback hasn't returned. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html
<oui-checkbox
    model="$ctrl.model"
    on-change="$ctrl.onChange(modelValue)">
</oui-checkbox>
```
