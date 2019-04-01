# Installation

```js
angular.module('myModule', ['oui.back-button']);
```

# API

## Component `oui-back-button`

| Attribute                 | Type      | Binding   | One-time binding  | Values | Default   | Description
| ----                      | ----      | ----      | ----              | ----   | ----      | ----
| `id`                      | string    | @?        | yes               | n/a    | n/a       | id attribute of the button/link
| `name`                    | string    | @?        | yes               | n/a    | n/a       | name attribute of the button/link
| `aria-label`              | string    | @?        | yes               | n/a    | n/a       | accessibility label of the button/link
| `href`                    | string    | @?        | yes               | n/a    | n/a       | url of the return link
| `state`                   | string    | @?        | yes               | n/a    | n/a       | state of the return link
| `state-params`            | object    | <?        | no                | n/a    | n/a       | state params of the return link
| `on-click`                | function  | &?        | no                | n/a    | n/a       | callback on component click
