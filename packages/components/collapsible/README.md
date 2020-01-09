# Installation

```js
angular.module('myModule', ['oui.collapsible']);
```

# API

## Component `oui-collapsible`

| Attribute     | Type      | Binding | One-time binding    | Values          | Default   | Description
| ----          | ----      | ----    | ----                | ----            | ----      | ----
| `heading`     | string    | @       | no                  | n/a             | n/a       | text of the heading
| `group`       | string    | @       | no                  | n/a             | n/a       | group name for the accordion mode
| `aria-label`  | string    | @?      | yes                 | n/a             | n/a       | accessibility label
| `expanded`    | boolean   | <?      | no                  | `true`, `false` | `false`   | initial expanded state
| `loading`     | boolean   | <?      | no                  | `true`, `false` | `false`   | loading state, disable toggle when `true`
| `on-toggle`   | function  | &       | no                  | n/a             | n/a       | on collapsible state changed event handler

### Attribute `group`

If you want to have an accordion mode with multiple collapsible panels, add a group name in the value of this attribute.
When opening a collapsible panel, this will close all others opened panels of the same group.

```html
<oui-collapsible
  heading="Title 1"
  group="foo">
    [...]
</oui-collapsible>
<oui-collapsible
  heading="Title 2"
  group="foo">
    [...]
</oui-collapsible>
```

### Attribute `on-toggle`

If you want to access the parameters inside `on-toggle` callback, you need to use `expanded` variable as below. It will return the corresponding value of the expanded state.

```html
<oui-collapsible
  heading="Title"
  on-toggle="$ctrl.onToggle(expanded)">
    [...]
</oui-collapsible>
```
