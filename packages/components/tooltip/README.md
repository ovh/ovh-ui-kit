# Installation

```js
angular.module('myModule', ['oui.tooltip']);
```

# API

## Directive `oui-tooltip`

| Attribute                 | Type      | Binding   | One-time Binding  | Values                                                                                        | Default           | Description
| ----                      | ----      | ----      | ----              | ----                                                                                          | ----              | ----
| `oui-tooltip`             | string    | @         | no                | n/a                                                                                           | `title` attribute | tooltip text
| `oui-tooltip-placement`   | string    | @?        | yes               | See [Popper placements](https://popper.js.org/popper-documentation.html#Popper.placements)    | `auto`            | tooltip placement
