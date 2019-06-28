# Installation

```js
angular.module('myModule', ['oui.field']);
```

# Configuration

The validation messages can be globally configured with a provider.

```js
angular.module('myModule', ['oui.field'])
  .config(ouiFieldConfigurationProvider => {
    // default translations
    ouiFieldConfigurationProvider.setTranslations({
      errors: {
        required: 'Mandatory.',
        number: 'Invalid number.',
        email: 'Invalid email.',
        min: 'Too low ({{min}} min).',
        max: 'Too high ({{max}} max).',
        minlength: 'Too short ({{minlength}} characters min).',
        maxlength: 'Too high ({{maxlength}} characters max).',
        pattern: 'Invalid format.'
      }
    });
  });
```

# API

## Component `oui-field`

| Attribute         | Type      | Binding   | One-time binding  | Values                            | Default   | Description
| ----              | ----      | ----      | ----              | ----                              | ----      | ----
| `label`           | string    | @?        | no                | n/a                               | n/a       | field label
| `label-popover`   | string    | @?        | no                | n/a                               | n/a       | text to describe the field or give more information
| `help-text`       | string    | @?        | no                | n/a                               | n/a       | text to help fill the form field
| `size`            | string    | @?        | yes               | `xs`, `s`, `m`, `l`, `xl`, `auto` | `auto`    | field size
| `error-messages`  | object    | <?        | no                | n/a                               | n/a       | dictionary to override default messages
