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
import '@ovh-ux/ui-kit.components/dist/js/oui-skeleton.js';

angular.module('myModule', ['oui.skeleton']);
```

# API

## Component `oui-skeleton`

| Attribute     | Type      | Binding | One-time Binding    | Values                    | Default   | Description
| ----          | ----      | ----    | ----                | ----                      | ----      | ----
| `size`        | String    | @?      | yes                 | `xs`, `s`, `m`, `l`, `xl` | `auto`    | Skeleton size
| `randomized`  | Boolean   | <?      | yes                 | `true`, `false`           | `false`   | Randomized width flag
