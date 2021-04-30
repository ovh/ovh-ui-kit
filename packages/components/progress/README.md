# Installation

```js
angular.module('myModule', ['oui.progress']);
```

# API

## Component `oui-progress`

| Attribute     | Type      | Binding   | One-time binding  | Values                                | default       | Description
| ----          | ----      | ----      | ----              | ----                                  | ----          | ----
| `size`        | string    | @?        | yes               | `m` (default), `l`                                   | `0`           | min value of progress component
| `min-value`   | number    | @?        | yes               | n/a                                   | `0`           | min value of progress component
| `max-value`   | number    | @?        | yes               | n/a                                   | `100`         | max value of progress component
| `compact`     | boolean   | <?        | yes               | `true`, `false`                       | `false`       | compact mode flag
| `no-labels`   | boolean   | <?        | yes               | `true`, `false`                       | `false`       | compact mode flag

## Component `oui-progress-bar`
| Attribute     | Type      | Binding | One-time binding    | Values                                | default       | Description
| ----          | ----      | ----    | ----                | ----                                  | ----          | ----
| `type`        | string    | @       | yes                 | `info`, `success`, `warning`, `error` | `info`        | type of the progress bar
| `value`       | number    | <       | no                  | n/a                                   | n/a           | current value of progress bar

## Component `oui-progress-threshold`

| Attribute     | Type      | Binding | One-time binding    | Values                                | default       | Description
| ----          | ----      | ----    | ----                | ----                                  | ----          | ----
| `value`       | number    | <       | yes                 | n/a                                   | n/a           | value at which the threshold should appear
