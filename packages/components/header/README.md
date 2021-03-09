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
import '@ovh-ux/ui-kit.components/dist/js/oui-header.js';

angular.module('myModule', ['oui.header']);
```

# API

## Component `oui-header`

| Attribute     | Type     | Binding    | One-time Binding  | Values    | Default   | Description
| ----          | ----     | ----       | ----              | ----      | ----      | ----
| `heading`     | string   | @?         | yes               | n/a       | n/a       | title of the header
| `description` | string   | @?         | yes               | n/a       | n/a       | subtitle of the header

## Component `oui-header-tabs-item`

| Attribute       | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----            | ----      | ----      | ----              | ----              | ----      | ----
| `href`          | string    | @?        | yes               | n/a               | n/a       | href of the menu item
| `state`         | string    | @?        | yes               | n/a               | n/a       | state of the menu item
| `state-params`  | object    | <?        | no                | n/a               | n/a       | state params of the menu item
| `active`        | boolean   | <?        | no                | `true`, `false`   | `false`   | manual active flag
| `disabled`      | boolean   | <?        | yes               | `true`, `false`   | `false`   | disabled flag
| `external`      | boolean   | <?        | yes               | `true`, `false`   | `false`   | external link flag
| `on-click`      | function  | &         | no                | n/a               | n/a       | click handler

**Note**: `@uirouter/angularjs` is needed for the attributes `state` and `state-params`.

## Component `oui-header-tabs-dropdown`

| Attribute       | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----            | ----      | ----      | ----              | ----              | ----      | ----
| `text`          | string    | @         | yes               | n/a               | n/a       | display the dropdown with this text

## Component `oui-header-tabs-divider`

Add a separator in the tab dropdown menu
