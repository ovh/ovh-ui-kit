# Installation

```js
angular.module('myModule', ['oui.numeric']);
```

# API

## Component `oui-numeric`

| Attribute          | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----               | ----      | ----      | ----              | ----              | ----      | ----
| `id`               | string    | @?        | yes               | n/a               | n/a       | id attribute of the input
| `name`             | string    | @?        | yes               | n/a               | n/a       | name attribute of the input
| `model`            | string    | =         | no                | n/a               | n/a       | model bound to component
| `min`              | integer   | <?        | no                | n/a               | `0`       | model lower bound
| `max`              | integer   | <?        | no                | n/a               | `99999`   | model upper bound
| `disabled`         | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `on-change`        | function  | &?        | no                | n/a               | n/a       | handler triggered when model changes
| `step`             | integer   | <?        | no                | n/a               | `1`       | value to be increased/decreased when +/- button is clicked
| `tooltip-increase` | string    | @?        | yes               | n/a               | `1`       | tooltip to display for the + button
| `tooltip-decrease` | string    | @?        | yes               | n/a               | `1`       | tooltip to display for the - button
