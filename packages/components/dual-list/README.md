# Installation

```js
angular.module('myModule', ['oui.dual-list']);
```

# Configuration

The dual list can be globally configured with a provider.

```js
angular.module('myModule', ['oui.dual-list'])
  .config(ouiDualListConfigurationProvider => {
    // default translations
    ouiDualListConfigurationProvider.setTranslations({
      source: {
        heading: 'Items to select',
        placeholder: 'No item to select',
        move: 'Add',
        moveAll: 'Add all',
        search: 'Search in source content'
      },
      target: {
        heading: 'Selected items',
        placeholder: 'No selected item',
        move: 'Remove',
        moveAll: 'Remove all',
        search: 'Search in target content'
      }
    });
  });
```

# API

## Component `oui-dual-list`

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `source`      | array     | =         | no                | n/a               | n/a       | source model bound to component
| `target`      | array     | =         | no                | n/a               | n/a       | target model bound to component
| `property`    | string    | @?        | no                | n/a               | n/a       | property path used to get value from item
| `on-add`      | function  | &         | no                | n/a               | n/a       | handler triggered when an item is added
| `on-remove`   | function  | &         | no                | n/a               | n/a       | handler triggered when an item is removed
| `on-change`   | function  | &         | no                | n/a               | n/a       | handler triggered when items have changed

**Note**: If `source` or `target` attribute are undefined, the loading will be automatically active.

## Component `oui-dual-list-source`

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `heading`     | string    | @?        | yes               | n/a               | n/a       | heading text
| `placeholder` | string    | @?        | yes               | n/a               | n/a       | placeholder text
| `loading`     | boolean   | <?        | no                | `true`, `false`   | `false`   | loading flag
| `searchable`  | boolean   | <?        | no                | `true`, `false`   | `false`   | searchbale flag

## Component `oui-dual-list-target`

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `heading`     | string    | @?        | yes               | n/a               | n/a       | heading text
| `placeholder` | string    | @?        | yes               | n/a               | n/a       | placeholder text
| `loading`     | boolean   | <?        | no                | `true`, `false`   | `false`   | loading flag
| `searchable`  | boolean   | <?        | no                | `true`, `false`   | `false`   | searchbale flag
