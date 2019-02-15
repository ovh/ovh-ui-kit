# Checkbox

## Usage

### Unchecked

```html:preview
<oui-checkbox>Normal</oui-checkbox>
<oui-checkbox disabled>Disabled</oui-checkbox>
```

### Checked

```html:preview
<div ng-init="$ctrl.checked = true">
  <oui-checkbox model="$ctrl.checked">Normal</oui-checkbox>
  <oui-checkbox model="$ctrl.checked" disabled>Disabled</oui-checkbox>
</div>
```

### Indeterminate

```html:preview
<div ng-init="$ctrl.indeterminate = null">
  <oui-checkbox model="$ctrl.indeterminate">Normal</oui-checkbox>
  <oui-checkbox model="$ctrl.indeterminate" disabled>Disabled</oui-checkbox>
</div>
```

### Validation

```html:preview
<form name="form">
  <div ng-init="$ctrl.agreements = false">
    <oui-checkbox model="$ctrl.agreements" name="agreements" required>Agreements</oui-checkbox>
  </div>
  Is this form valid? : {{ form.$valid ? "yes" : "no" }}
</form>
```

### Description

```html:preview
<div ng-init="$ctrl.indeterminate = null">
  <oui-checkbox description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">Normal</oui-checkbox>
  <oui-checkbox description="Pellentesque euismod magna rutrum lectus gravida semper." disabled>Disabled</oui-checkbox>
</div>
```

### On change

**Note**: Model will not be refreshed until the `on-change` callback hasn't returned. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html:preview
<oui-checkbox
  model="$ctrl.onChangeValue"
  on-change="$ctrl.lastOnChangeValue = modelValue"
>Normal</oui-checkbox>

<span>Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## API

| Attribute     | Type                    | Binding | One-time Binding  | Values                   | Default    | Description
| ----          | ----                    | ----    | ----              | ----                     | ----       | ----
| `model`       | boolean &#124; null     | =?      | no                | `true`, `false`, `null`  | n/a        | current value of the checkbox and null is considered as `indeterminate`
| `id`          | string                  | @?      | yes               | n/a                      | n/a        | id attribute of the checkbox
| `name`        | string                  | @?      | yes               | n/a                      | n/a        | name attribute of the checkbox
| `description` | string                  | @?      | no                | n/a                      | n/a        | description text
| `disabled`    | boolean                 | <?      | no                | `true`, `false`          | `false`    | disabled flag
| `required`    | boolean                 | <?      | no                | `true`, `false`          | `false`    | required flag
| `on-change`   | function                | &       | no                | n/a                      | n/a        | handler triggered when value has changed
