# Installation

```js
angular.module('myModule', ['oui.button']);
```

# API

## Component `oui-button`

| Attribute     | Type      | Binding   | One-time Binding  | Values                            | Default       | Description
| ----          | ----      | ----      | ----              | ----                              | ----          | ----
| `id`          | string    | @?        | yes               | n/a                               | n/a           | id attribute of the button
| `name`        | string    | @?        | yes               | n/a                               | n/a           | name attribute of the button
| `size`        | string    | @?        | no                | `s`, `l`                          | n/a           | size modifier for the button
| `type`        | string    | @?        | yes               | `submit`, `button`, `reset`       | `button`      | type attribute of the button
| `variant`     | string    | @?        | no                | `primary`, `secondary`, `link`    | `secondary`   | modifier for the button
| `variant-nav` | string    | @?        | no                | `next`, `previous`                | n/a           | nav modifier for the button
| `aria-label`  | string    | @?        | yes               | n/a                               | n/a           | accessibility label
| `disabled`    | boolean   | <?        | no                | `true`, `false`                   | `false`       | disabled flag
| `on-click`    | function  | &?        | no                | n/a                               | n/a           | click handler
