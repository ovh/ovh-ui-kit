# Installation

```js
angular.module('myModule', ['oui.message']);
```

# API

## Component `oui-message`

| Attribute                 | Type      | Binding   | One-time binding  | Values                                | Default   | Description
| ----                      | ----      | ----      | ----              | ----                                  | ----      | ----
| `type`                    | string    | @         | yes               | `info`, `success`, `warning`, `error` | n/a       | message type
| `aria-close-button-label` | string    | @?        | yes               | n/a                                   | n/a       | accessibility label for close button
| `dismissable`             | boolean   | <?        | yes               | `true`, `false`                       | `false`   | dismissable flag for close button
| `on-dismiss`              | function  | &?        | no                | n/a                                   | n/a       | dismiss callback
