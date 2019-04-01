# Installation

```js
angular.module('myModule', ['oui.search']);
```

# API

## Component `oui-search`

| Attribute                 | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----                      | ----      | ----      | ----              | ----              | ----      | ----
| `model`                   | object    | =         | no                | n/a               | n/a       | model bound to component
| `id`                      | string    | @?        | yes               | n/a               | n/a       | id attribute of the button
| `name`                    | string    | @?        | yes               | n/a               | n/a       | name attribute of the button
| `placeholder`             | string    | @?        | yes               | n/a               | n/a       | placeholder text
| `aria-label`              | string    | @?        | yes               | n/a               | n/a       | accessibility label
| `debounce`                | number    | <?        | no                | n/a               | n/a       | debounce of the model value
| `minlength`               | number    | <?        | no                | n/a               | n/a       | min length of the model value
| `maxlength`               | number    | <?        | no                | n/a               | n/a       | max length of the model value
| `disabled`                | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `on-change`               | function  | &         | no                | n/a               | n/a       | handler triggered when model has changed
| `on-reset`                | function  | &         | no                | n/a               | n/a       | handler triggered when form is reseted
| `on-submit`               | function  | &         | no                | n/a               | n/a       | handler triggered when form is submitted

### Attributes `on-change` and `on-submit`

If you want to access the model inside `on-change` and `on-submit` callbacks, you need to use the `modelValue` variable as below.

```html
<oui-search
    model="$ctrl.modelValue"
    on-change="$ctrl.onChange(modelValue)"
    on-submit="$ctrl.onSubmit(modelValue)">
</oui-search>
```

### Attributes using `oui-autocomplete` for `oui-search`

See [Autocomplete](../autocomplete/README.md) directive for more informations.

| Attribute                 | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----                      | ----      | ----      | ----              | ----              | ----      | ----
| `autocomplete`            | array     | <         | no                | n/a               | n/a       | array of suggestions
| `autocomplete-options`    | object    | <?        | yes               | n/a               | n/a       | options of autocomplete
| `autocomplete-property`   | string    | @?        | no                | n/a               | n/a       | property path used to get value from suggestion
| `autocomplete-on-select`  | function  | &         | no                | n/a               | n/a       | handler triggered when suggestion is selected
