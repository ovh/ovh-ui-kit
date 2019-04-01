# Installation

```js
angular.module('myModule', ['oui.modal']);
```

# API

## Component `oui-modal`

| Attribute             | Type      | Binding   | One-time Binding | Values                         | Default   | Description
| ----                  | ----      | ----      | ----             | ----                           | ----      | ----
| `heading`             | string    | @         | yes              | n/a                            | n/a       | modal title
| `type`                | string    | @?        | yes              | `warning`, `success`, `info`   | n/a       | modal type
| `loading`             | boolean   | <?        | no               | `true`, `false`                | `false`   | display loader flag
| `primary-label`       | string    | @?        | yes              | n/a                            | n/a       | confirmation label
| `primary-action`      | function  | &         | no               | n/a                            | n/a       | confirmation callback
| `primary-disabled`    | boolean   | <?        | no               | `true`, `false`                | `false`   | disable the primary button
| `secondary-label`     | string    | @?        | yes              | n/a                            | n/a       | cancellation label
| `secondary-action`    | function  | &         | no               | n/a                            | n/a       | cancellation callback
| `secondary-disabled`  | boolean   | <?        | no               | `true`, `false`                | `false`   | disable the secondary button
| `on-dismiss`          | function  | &         | no               | n/a                            | n/a       | dismiss callback
