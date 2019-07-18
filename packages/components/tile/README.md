# Installation

```js
angular.module('myModule', ['oui.tile']);
```

# API

## Component `oui-tile`

| Attribute         | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `heading`         | string    | @?        | yes               | n/a               | n/a       | tile title
| `description`     | string    | @?        | yes               | n/a               | n/a       | tile description behind title
| `loading`         | boolean   | <?        | no                | `true`, `false`   | `false`   | display loader flag

## Component `oui-tile-button`

| Attribute         | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `href`            | string    | @?        | yes               | n/a               | n/a       | button link url
| `aria-label`      | string    | @?        | no                | n/a               | `null`    | accessibility label
| `disabled`        | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `external`        | boolean   | <?        | yes               | `true`, `false`   | `false`   | open in new tab and display external icon
| `on-click`        | funcion   | &         | no                | n/a               | n/a       | button action callback

## Component `oui-tile-definition`

| Attribute         | Type     | Binding    | One-time Binding  | Values            | Default   | Description
| ----              | ----     | ----       | ----              | ----              | ----      | ----
| `term`            | string   | @?         | yes               | n/a               | n/a       | definition term item
| `term-popover`    | string   | @?         | yes               | n/a               | n/a       | definition term item popover
| `description`     | string   | @?         | yes               | n/a               | n/a       | definition description item

### Transclude slots

| Attribute                   | Description
| ----                        | ----
| `<oui-title-term>`          | definition term slot, override attribute `term`
| `<oui-title-description>`   | definition description slot, override attribute `description`
| `<oui-title-actions>`       | definition actions slot

```html
<oui-title-definition>
    <oui-title-term>Term</oui-title-term>
    <oui-title-description>Descriptions</oui-title-description>
    <oui-title-actions>Actions</oui-title-actions>
<oui-title-definition>
```
