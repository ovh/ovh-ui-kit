# Installation

```js
angular.module('myModule', ['oui.password']);
```

# Configuration

The password translations can be globally configured with a provider.

```js
angular.module('myModule', ['oui.password'])
  .config(ouiPasswordConfigurationProvider => {
    // default translations
    ouiPasswordConfigurationProvider.setTranslations({
      allRulesValidLabel: 'All password rules are met.',
      ariaHidePasswordLabel: 'Hide password',
      ariaShowPasswordLabel: 'Show password',
      ariaValidRuleLabel: 'Valid rule.',
      ariaInvalidRuleLabel: 'Invalid rule.',
      riskyPasswordLabel: 'Risky password.',
      badPasswordLabel: 'Bad password.',
      weakPasswordLabel: 'Weak password.',
      goodPasswordLabel: 'Good password.',
      strongPasswordLabel: 'Strong password.'
    });
});
```

# API

## Component `oui-password`

| Attribute     | Type                  | Binding   | One-time binding  | Values                | Default   | Description
| ----          | ----                  | ----      | ----              | ----                  | ----      | ----
| `model`       | string                | =         | no                | n/a                   | n/a       | model bound to component
| `id`          | string                | @?        | yes               | n/a                   | n/a       | id attribute of the input
| `name`        | string                | @?        | yes               | n/a                   | n/a       | name attritebu of the input
| `placeholder` | string                | @?        | yes               | `true`, `false`       | `false`   | placeholder text
| `disabled`    | boolean               | <?        | no                | n/a                   | n/a       | disabled flag
| `maxlength`   | number                | <?        | yes               | n/a                   | n/a       | max length of the model value
| `minlength`   | number                | <?        | yes               | n/a                   | n/a       | min length of the model value
| `pattern`     | string&lt;regexp&gt;  | @?        | yes               | n/a                   | n/a       | pattern of the model value
| `confirm`     | string                | <?        | no                | n/a                   | n/a       | an expression, used to confirm password, which should match with the model value 
| `required`    | boolean               | <?        | no                | `true`, `false`       | `false`   | required flag
| `on-change`   | function              | &         | no                | n/a                   | n/a       | handler triggered when value has changed

## Component `oui-password-rule`

| Attribute     | Type                  | Binding   | One-time binding  | Values                | Default   | Description
| ----          | ----                  | ----      | ----              | ----                  | ----      | ----
| `pattern`     | string&lt;regexp&gt;  | @?        | no                | n/a                   | n/a       | pattern of the model value
| `validator`   | function              | &         | no                | n/a                   | n/a       | validator function to test the password value; should return a boolean

## Component `oui-password-strength`

| Attribute     | Type                  | Binding   | One-time binding  | Values                | Default   | Description
| ----          | ----                  | ----      | ----              | ----                  | ----      | ----
| `score`       | number                | <?        | no                | See **Score scale**   | n/a       | score provided by a password strength estimator

**Note**: The component doesn't include any password strength estimator.
You can use one like <a href='https://github.com/dropbox/zxcvbn'>zxcvbn</a> to provide a score, like in this example.

### Strength's Score scale

`oui-password-strength`'s score scale is based on <a href='https://github.com/dropbox/zxcvbn#usage'>zxcvbn</a> scale:

* `0`: Risky password,
* `1`: Bad password,
* `2`: Weak password,
* `3`: Good password,
* `4`: Strong password
