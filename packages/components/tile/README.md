# Installation

## Install with [npm](https://www.npmjs.com/)

```bash
npm install @ovh-ux/ui-kit.css
npm install @ovh-ux/ui-kit.components
```

## Install with [yarn](https://yarnpkg.com)

```bash
yarn add @ovh-ux/ui-kit.css
yarn add @ovh-ux/ui-kit.components
```
## Usage

```js
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
import '@ovh-ux/ui-kit.components/dist/js/oui-tile.js';

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
| `<oui-tile-term>`          | definition term slot, override attribute `term`
| `<oui-tile-description>`   | definition description slot, override attribute `description`
| `<oui-tile-actions>`       | definition actions slot

```html
<oui-tile-definition>
    <oui-tile-term>Term</oui-tile-term>
    <oui-tile-description>Descriptions</oui-tile-description>
    <oui-tile-actions>Actions</oui-tile-actions>
<oui-tile-definition>
```
