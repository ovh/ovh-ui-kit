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
import '@ovh-ux/ui-kit.components/dist/js/oui-spinner.js';

angular.module('myModule', ['oui.spinner']);
```

# API

## Component `oui-spinner`

| Attribute | Type      | Binding   | One-time binding  | Values        | Default   | Description
| ----      | ----      | ----      | ----              | ----          | ----      | ----
| `size`    | string    | @?        | yes               | `s`, `m`, `l` | `m`       | Spinner size
