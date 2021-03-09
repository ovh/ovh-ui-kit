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
import '@ovh-ux/ui-kit.components/dist/js/oui-switch.js';

angular.module('myModule', ['oui.switch']);
```

# API

## Component `oui-switch`

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `model`       | boolean   | =?        | no                | `true`, `false`   | n/a       | model bound to component
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the switch
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the switch
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `required`    | boolean   | <?        | no                | `true`, `false`   | `false`   | required flag
| `on-change`   | function  | &         | no                | n/a               | n/a       | function to call when model changes

### Attribute `on-change`

Model will not be refreshed until the `on-change` callback hasn't returned. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html
<oui-switch
    model="$ctrl.model"
    on-change="$ctrl.onChange(modelValue)">
</oui-switch>
```
