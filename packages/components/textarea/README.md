# Installation

```js
angular.module('myModule', ['oui.textarea']);
```

# Configuration

The textarea can be globally configured with a provider.

```js
angular.module('myModule', ['oui.textarea'])
  .config(ouiTextareaConfigurationProvider => {
    // default translations
    ouiTextareaConfigurationProvider.setTranslations({
      lengthCounter: '{{length}}/{{max}} characters'
    });
});
```

# API

## Component `oui-textarea`

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `model`       | string    | =?        | no                | n/a               | n/a       | current value of the textarea
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the textarea
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the textarea
| `placeholder` | string    | @?        | yes               | n/a               | n/a       | placeholder attribute of the textarea
| `rows`        | string    | @?        | yes               | n/a               | n/a       | number of displayed rows without scrolling
| `minlength`   | number    | <?        | no                | n/a               | n/a       | min length of the model value
| `maxlength`   | number    | <?        | no                | n/a               | n/a       | max length of the model value
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `readonly`    | boolean   | <?        | no                | `true`, `false`   | `false`   | readonly flag
| `required`    | boolean   | <?        | no                | `true`, `false`   | `false`   | required flag
| `on-change`   | function  | &?        | no                | n/a               | n/a       | model value change callback

### Attribute `on-change`

Model will not be refreshed until the `on-change` callback hasn't returned. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html
<oui-textarea
    model="$ctrl.model"
    on-change="$ctrl.onChange(modelValue)">
</oui-textarea>
```
