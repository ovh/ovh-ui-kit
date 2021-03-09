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
import '@ovh-ux/ui-kit.components/dist/js/oui-button';
angular.module('myModule', ['oui.button']);
```

# API

## Component `oui-button`

| Attribute     | Type      | Binding   | One-time Binding  | Values                            | Default       | Description
| ----          | ----      | ----      | ----              | ----                              | ----          | ----
| `id`          | string    | @?        | yes               | n/a                               | n/a           | id attribute of the button
| `name`        | string    | @?        | yes               | n/a                               | n/a           | name attribute of the button
| `size`        | string    | @?        | no                | `s`, `l`                          | n/a           | size modifier for the button
| `type`        | string    | @?        | yes               | `submit`, `button`, `reset`       | `button`      | type attribute of the button
| `icon-left`   | string    | @?        | no                | n/a                               | n/a           | classname for the icon on left
| `icon-right`  | string    | @?        | no                | n/a                               | n/a           | classname for the icon on right
| `variant`     | string    | @?        | no                | `primary`, `secondary`, `link`    | `secondary`   | modifier for the button
| `variant-nav` | string    | @?        | no                | `next`, `previous`                | n/a           | nav modifier for the button
| `aria-label`  | string    | @?        | yes               | n/a                               | n/a           | accessibility label
| `block`       | boolean   | <?        | no                | n/a                               | `false`       | block variant flag
| `disabled`    | boolean   | <?        | no                | `true`, `false`                   | `false`       | disabled flag
| `on-click`    | function  | &?        | no                | n/a                               | n/a           | click handler
