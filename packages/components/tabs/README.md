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
import '@ovh-ux/ui-kit.components/dist/js/oui-tabs.js';

angular.module('myModule', ['oui.tabs']);
```

# API

## oui-tabs

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `aria-label`  | string    | @?        | yes               | n/a               | n/a       | accessibility label
| `model`       | object    | =?        | no                | n/a               | n/a       | `id` of the current active tab item

## Component `oui-tabs-item`

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the panel
| `heading`     | string    | @?        | yes               | n/a               | n/a       | heading text of the tab
| `subheading`  | string    | @?        | yes               | n/a               | n/a       | subheading text of the tab
| `variant`     | string    | @?        | no                | `promotion`       | n/a       | variant of the tab
| `aria-label`  | string    | @?        | yes               | n/a               | n/a       | accessibility label
| `on-active`   | function  | &         | no                | n/a               | n/a       | function called when tab is active
