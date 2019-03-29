# Installation

```js
angular.module('myModule', ['oui.collapsible']);
```

# API

## Component `oui-collapsible`

| Attribute     | Type      | Binding | One-time binding    | Values    | Default   | Description
| ----          | ----      | ----    | ----                | ----      | ----      | ----
| `heading`     | string    | @       | no                  | n/a       | n/a       | text of the heading
| `aria-label`  | string    | @?      | yes                 | n/a       | n/a       | accessibility label
| `expanded`    | boolean   | <?      | yes                 | n/a       | `false`   | initial expanded state
| `on-toggle`   | function  | &       | no                  | n/a       | n/a       | on collapsible state changed event handler

### Attribute `on-toggle`

If you want to access the parameters inside `on-toggle` callback, you need to use `expanded` variable as below. It will return the corresponding value of the expanded state.

```html
<oui-collapsible
  heading="Title"
  on-toggle="$ctrl.onToggle(expanded)">
    [...]
</oui-collapsible>
```
