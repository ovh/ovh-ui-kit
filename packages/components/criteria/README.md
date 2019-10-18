# Installation

```js
angular.module('myModule', ['oui.criteria']);
```

# Configuration

The pagination can be globally configured with a provider.

```js
angular.module('myModule', ['oui.criteria'])
  .config(ouiCriteriaAdderConfigurationProvider => {
    // default operators by type
    ouiCriteriaAdderConfigurationProvider.setOperatorsByType({
      'boolean': ['is', 'isNot'],
      'date': ['is', 'isAfter', 'isBefore'],
      'number': ['is', 'smaller', 'bigger'],
      'options': ['is', 'isNot'],
      'string': ['contains', 'containsNot', 'startsWith', 'endsWith', 'is', 'isNot']
    });

    // default translations
    ouiCriteriaAdderConfigurationProvider.setTranslations({
      filter_label: 'Filter',
      column_label: 'Column',
      operator_label: 'Operator',

      operator_boolean_is: 'is',
      operator_boolean_isNot: 'is not',

      operator_string_contains: 'contains',
      operator_string_containsNot: 'does not contain',
      operator_string_startsWith: 'starts with',
      operator_string_endsWith: 'ends with',
      operator_string_is: 'is',
      operator_string_isNot: 'is not',

      operator_number_is: 'is',
      operator_number_smaller: 'is smaller than',
      operator_number_bigger: 'is bigger than',

      operator_date_is: 'is',
      operator_date_isBefore: 'is before',
      operator_date_isAfter: 'is after',

      operator_options_is: 'is',
      operator_options_isNot: 'is not',

      true_label: 'Yes',
      false_label: 'No',

      value_label: 'Value',
      submit_label: 'Add'
    });
  });
```

# API

## Component `oui-criteria`

| Attribute       | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----            | ----      | ----      | ----              | ----                      | ----      | ----
| `model`         | object    | =         | no                | n/a                       | n/a       | model bound to component
| `properties`    | array     | <?        | no                | n/a                       | n/a       | array of objects with columns informations
| `disabled`      | boolean   | <?        | no                | `true`, `false`           | `false`   | disabled flag
| `searchable`    | boolean   | <?        | no                | `true`, `false`           | `false`   | searchable flag
| `on-change`     | function  | &         | no                | n/a                       | n/a       | handler triggered when model has changed

## Component `oui-criteria-adder`

| Attribute       | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----            | ----      | ----      | ----              | ----                      | ----      | ----
| `id`            | string    | @?        | yes               | n/a                       | n/a       | id attribute of the component
| `name`          | string    | @         | yes               | n/a                       | n/a       | name attribute of the component
| `placement`     | string    | @?        | yes               | `start`, `center`, `end`  | `center`  | placement of the dropdown menu
| `properties`    | array     | <         | no                | n/a                       | n/a       | array of objects with columns informations
| `on-submit`     | function  | &         | no                | n/a                       | n/a       | handler triggered when form is submitted

### Attribute `properties`

`properties` is an array of objects defined as this:

| Attribute                   | Type      | Description
| ----                        | ----      | -----
| `name`                      | string    | Property to filter (can be a nested one)
| `title`                     | string    | Human readeable title for the property
| `type`                      | string    | Data type
| `typeOptions`               | object    | Specific options
| `typeOptions.hideOperators` | boolean   | Hide operators field. If `true`, The first entry of the operators will be applied when submitted.
