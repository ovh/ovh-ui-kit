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
import '@ovh-ux/ui-kit.components/dist/js/oui-message.js';

angular.module('myModule', ['oui.message']);
```

# API

## Component `oui-message`

| Attribute                 | Type      | Binding   | One-time binding  | Values                                | Default   | Description
| ----                      | ----      | ----      | ----              | ----                                  | ----      | ----
| `type`                    | string    | @         | yes               | `info`, `success`, `warning`, `error` | n/a       | message type
| `aria-close-button-label` | string    | @?        | yes               | n/a                                   | n/a       | accessibility label for close button
| `dismissable`             | boolean   | <?        | yes               | `true`, `false`                       | `false`   | dismissable flag for close button
| `on-dismiss`              | function  | &?        | no                | n/a                                   | n/a       | dismiss callback
