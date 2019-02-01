# Switch

## Usage

### Basic

```html:preview
<oui-switch id="switch" name="switch-name"
model="false">
</oui-switch>
<oui-switch id="switch2" name="switch-name"
  model="true">
</oui-switch>
```

### Disabled

```html:preview
<oui-switch
  model="false"
  disabled>
</oui-switch>
<oui-switch
  model="true"
  disabled>
</oui-switch>
```

### On change

**Note**: Model will not be refreshed until the `on-change` callback hasn't returned. If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below.

```html:preview
<div style="margin-bottom: 5px;">
  <oui-switch
    model="$ctrl.onChangeValue"
    on-change="$ctrl.lastOnChangeValue = modelValue">
  </oui-switch>
</div>
<span>Last onChange value: {{ $ctrl.lastOnChangeValue || ($ctrl.lastOnChangeValue === false && "false") || "undefined" }}</span>
```

### Validation in form

```html:preview
<form name="switchForm">
  <div ng-init="$ctrl.agree = false">
    <oui-switch
      model="$ctrl.agree"
      required>
    </oui-switch>
  </div>
  Is this form valid? : {{ switchForm.$valid ? "yes" : "no" }}
</form>
```

## API

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `model`       | boolean   | =?        | no                | `true`, `false`   | n/a       | model bound to component
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the switch
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the switch
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `required`    | boolean   | <?        | no                | `true`, `false`   | `false`   | required flag
| `on-change`   | function  | &         | no                | n/a               | n/a       | function to call when model changes
