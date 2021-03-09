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
import '@ovh-ux/ui-kit.components/dist/js/oui-numeric.js';

angular.module('myModule', ['oui.numeric']);
```

# API

## Component `oui-numeric`

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the input
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the input
| `model`       | string    | =         | no                | n/a               | n/a       | model bound to component
| `min`         | integer   | <?        | no                | n/a               | `0`       | model lower bound
| `max`         | integer   | <?        | no                | n/a               | `99999`   | model upper bound
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `on-change`   | function  | &?        | no                | n/a               | n/a       | handler triggered when model changes
