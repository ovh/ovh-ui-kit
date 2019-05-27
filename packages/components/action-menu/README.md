# Installation

```js
angular.module('myModule', ['oui.action-menu']);
```

# API

## Component `oui-action-menu`

| Attribute         | Type            | Binding | One-time binding | Values                    | Default    | Description
| ----              | ----            | ----    | ----             | ----                      | ----       | ----
| `text`            | string          | @       | yes              | n/a                       | n/a        | button label
| `aria-label`      | string          | @?      | yes              | n/a                       | n/a        | accessibility label
| `placement`       | string          | @?      | yes              | See [Popper placements](https://popper.js.org/popper-documentation.html#Popper.placements)  | `bottom-start`  | placement of the dropdown menu
| `compact`         | boolean         | <?      | yes              | `true`, `false`           | `false`    | use the compact button
| `disabled`        | boolean         | <?      | no               | `true`, `false`           | `false`    | disable flag

## Component `oui-action-menu-item`

| Attribute         | Type            | Binding | One-time binding | Values                    | Default    | Description
| ----              | ----            | ----    | ----             | ----                      | ----       | ----
| `aria-label`      | string          | @?      | no               | n/a                       | n/a        | accessibility label
| `href`            | string          | @?      | yes              | n/a                       | n/a        | hypertext link (link)
| `disabled`        | boolean         | <?      | no               | `true`, `false`           | `false`    | disable (button)
| `external`        | boolean         | @?      | yes              | `true`, `false`           | `false`    | display external icon (link)
| `on-click`        | function        | &?      | no               | n/a                       | n/a        | on-click handler (button)
