# Installation

```js
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

| Attribute        | Type      | Binding   | One-time binding  | Values            | Default                   | Description
| ----             | ----      | ----      | ----              | ----              | ----                      | ----
| `on-add`         | function  | &         | no                | n/a               | n/a                       | handler triggered when a row is added
| `on-remove`      | function  | &         | no                | n/a               | n/a                       | handler triggered when a row is removed
| `on-change`      | function  | &         | no                | n/a               | n/a                       | handler triggered when rows have changed
| `tooltip-add`    | string    | @?        | yes               | n/a               | n/a                       | tooltip to display for the add button
| `tooltip-delete` | string    | @?        | yes               | n/a               | n/a                       | tooltip to display for the delete button
| `rows-limit`     | integer   | <?        | yes               | n/a               | `Number.MAX_SAFE_INTEGER` | maximum number of oui-inline-adder-rows

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
