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
import '@ovh-ux/ui-kit.components/dist/js/oui-modal.js';

angular.module('myModule', ['oui.modal']);
```

# API

## Component `oui-modal`

| Attribute             | Type      | Binding   | One-time Binding | Values                                         | Default   | Description
| ----                  | ----      | ----      | ----             | ----                                           | ----      | ----
| `heading`             | string    | @         | yes              | n/a                                            | n/a       | modal title
| `type`                | string    | @?        | yes              | `info`, `help`, `success`, `warning`, `error`  | n/a       | modal type
| `loading`             | boolean   | <?        | no               | `true`, `false`                                | `false`   | display loader flag
| `primary-label`       | string    | @?        | yes              | n/a                                            | n/a       | confirmation label
| `primary-action`      | function  | &         | no               | n/a                                            | n/a       | confirmation callback
| `primary-disabled`    | boolean   | <?        | no               | `true`, `false`                                | `false`   | disable the primary button
| `secondary-label`     | string    | @?        | yes              | n/a                                            | n/a       | cancellation label
| `secondary-action`    | function  | &         | no               | n/a                                            | n/a       | cancellation callback
| `secondary-disabled`  | boolean   | <?        | no               | `true`, `false`                                | `false`   | disable the secondary button
| `on-dismiss`          | function  | &         | no               | n/a                                            | n/a       | dismiss callback
