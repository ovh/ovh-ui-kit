# Installation

```js
angular.module('myModule', ['oui.slideshow']);
```

# API

## Component `oui-slideshow`

| Attribute         | Type      | Binding   | One-time Binding  | Values                  | Default       | Description
| ----              | ----      | ----      | ----              | ----                    | ----          | ----
| `theme`           | string    | @?        | yes               | n/a                     | `onboarding`  | add specific theme to component
| `loading`         | boolean   | <?        | no                | `true`, `false`         | `false`       | display loader flag
| `loop`            | boolean   | <?        | no                | `true`, `false`         | `false`       | whether the component should cycle continuously
| `on-dismiss`      | function  | &         | no                | n/a                     | n/a           | dismiss callback
| `on-panel-change` | function  | &         | no                | direction, index        | n/a           | handler triggered when on click of next slide

### Attribute `on-change`

**Note**: If you want to access the parameters inside `on-panel-change` callback, you need to use `direction` and `index` variables as below.

* `direction` returns string of `prev` or `next`
* `index` returns index of current slide

```html
<oui-slideshow on-panel-change="$ctrl.onPanelChange(direction, index)">
    [...]
</oui-slideshow>
```

## Component `oui-slideshow-panel`

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `heading`     | string    | @?        | yes               | n/a               | n/a       | heading of the panel
| `picture`     | string    | @?        | yes               | n/a               | n/a       | picture/illustration of the panel
| `label`       | string    | @?        | yes               | n/a               | n/a       | label of the link
| `href`        | string    | @?        | yes               | n/a               | n/a       | href of the link
| `external`    | boolean   | <?        | yes               | `true`, `false`   | `false`   | external link flag
| `on-click`    | function  | &?        | no                | n/a               | n/a       | on-click handler
