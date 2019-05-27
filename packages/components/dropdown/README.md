# Installation

```js
angular.module('myModule', ['oui.dropdown']);
```

# API

## Component `oui-dropdown`

| Attribute         | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                      | ----      | ----
| `placement`       | string    | @?        | yes               |  See [Popper placements](https://popper.js.org/popper-documentation.html#Popper.placements)  | `bottom-start`  | placement of the dropdown menu
| `arrow`           | boolean   | <?        | no                | `true`, `false`           | `false`   | display the dropdown arrow
| `persistent`      | boolean   | <?        | no                | `true`, `false`           | `false`   | prevent dropdown to close on click

## Component `oui-dropdown-trigger`

| Attribute         | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                      | ----      | ----
| `text`            | string    | @         | yes               | n/a                       | n/a       | display the default dropdown with this text
| `aria-label`      | string    | @?        | yes               | n/a                       | n/a       | accessibility label
| `disabled`        | boolean   | <?        | no                | `true`, `false`           | `false`   | disabled flag

**Note**: It can be used as a `component` or as an `attribute`.

```html
<oui-dropdown>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width" oui-dropdown-trigger>
        <span class="oui-icon oui-icon-gear_line" aria-hidden="true"></span>
    </button>
    <oui-dropdown-content>
        [...]
    </oui-dropdown-content>
</oui-dropdown>
```

## Component `oui-dropdown-content`

**Note**: It can be used as a `component` or an `attribute`.

```html
<oui-dropdown>
    <oui-dropdown-trigger text="Custom menu"></oui-dropdown-trigger>
    <div class="oui-dropdown-menu" oui-dropdown-content>
        [...]
    </div>
</oui-dropdown>
```

## Component `oui-dropdown-group`

| Attribute         | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                      | ----      | ----
| `label`           | string    | @         | yes               | n/a                       | n/a       | dropdown group label

## Component `oui-dropdown-item`

| Attribute         | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                      | ----      | ----
| `aria-label`      | string    | @?        | yes               | n/a                       | n/a       | accessibility label
| `href`            | string    | @?        | yes               | n/a                       | n/a       | href of the item
| `state`           | string    | @?        | yes               | n/a                       | n/a       | state of the item
| `state-params`    | object    | <?        | no                | n/a                       | n/a       | state-params of the item
| `disabled`        | boolean   | <?        | no                | `true`, `false`           | `false`   | disabled flag
| `external`        | boolean   | <?        | yes               | `true`, `false`           | `false`   | external flag
| `on-click`        | function  | &         | no                | n/a                       | n/a       | callback on component click

**Note**: `ui-router` is needed for the attributes `state` and `state-params`.

## Component `oui-dropdown-divider`

Add a separator in the dropdown menu
