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
import '@ovh-ux/ui-kit.components/dist/js/oui-chips';
angular.module('myModule', ['oui.chips']);
```

# API

## Component `oui-chips`

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `items`       | object    | =         | no                | n/a               | n/a       | items bound to component
| `closable`    | boolean   | <?        | yes               | `true`, `false`   | `false`   | closable flag
| `stacked`     | boolean   | <?        | yes               | `true`, `false`   | `false`   | stacked flag
| `on-remove`   | function  | &         | no                | n/a               | n/a       | handler triggered when items are removed

### Attribute `on-remove`

If you want to access the parameters inside `on-remove` callback, you need to use `items` or `removed` variables as below.

* `items` return the new array
* `removed` return the removed part

```html
<oui-chips
    items="$ctrl.itemsValue"
    on-remove="$ctrl.onRemove(items, removed)"
    closable>
</oui-chips>
```
