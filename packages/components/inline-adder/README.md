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
import '@ovh-ux/ui-kit.components/dist/js/oui-inline-adder.js';

angular.module('myModule', ['oui.inline-adder']);
```

# Configuration

The inline adder can be globally configured with a provider.

```js
angular.module('myModule', ['oui.inline-adder'])
  .config(ouiInlineAdderConfigurationProvider => {
    // default translations
    ouiInlineAdderConfigurationProvider.setTranslations({
      ariaAddItem: 'Add Item',
      ariaRemoveItem: 'Remove Item'
    });
});
```

# API

## Component `oui-inline-adder`

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `on-add`      | function  | &         | no                | n/a               | n/a       | handler triggered when a row is added
| `on-remove`   | function  | &         | no                | n/a               | n/a       | handler triggered when a row is removed
| `on-change`   | function  | &         | no                | n/a               | n/a       | handler triggered when rows have changed

### Attributes `on-*`

If you want to access the parameters inside events callback, you need to use `form` variable as below.

```html
<oui-inline-adder
    on-add="$ctrl.onAdd(form)"
    on-remove="$ctrl.onRemove(form)"
    on-change="$ctrl.onChange(forms)">
    <oui-inline-adder-row>
        <oui-inline-adder-field>
            [...]
        </oui-inline-adder-field>
    </oui-inline-adder-row>
</oui-inline-adder>
```

## Component `oui-inline-adder-field`

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `adaptive`    | boolean   | <?        | yes               | `true`, `false`   | `false`   | field adapts its size regarding the content
