# Prerequisites

This component has been tested with AngularJS 1.8+.

You need to load these dependencies in your project:

- [angular](https://www.npmjs.com/package/angular)
- [ui-kit.css](@ovh-ux/ui-kit.css)

## Install prerequisites with [npm](https://www.npmjs.com/)

```bash
npm install angular
npm install @ovh-ux/ui-kit.css
```

## Install prerequisites with [yarn](https://yarnpkg.com)

```bash
yarn add angular
yarn add @ovh-ux/ui-kit.css
```

# Install with [npm](https://www.npmjs.com/)

```bash
npm install @ovh-ux/ui-kit.components
```

## Install prerequisites with [yarn](https://yarnpkg.com)

```bash
yarn add @ovh-ux/ui-kit.components
```

# Usage

```js
// import component
import ouiButton from '@ovh-ux/ui-kit.components';
// import styles
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
angular.module('myModule', [ouiButton]);
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
