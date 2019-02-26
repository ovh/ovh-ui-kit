# Radio

## Usage

### Basic

```html:preview
<div ng-init="$ctrl.value1 = 'a'" class="oui-doc-preview-only-keep-children">
<oui-radio name="oui-radio-1"
    model="$ctrl.value1"
    value="'a'">
    Value A
</oui-radio>
<oui-radio name="oui-radio-1"
    model="$ctrl.value1"
    value="'b'">
    Value B
</oui-radio>
<oui-radio name="oui-radio-1"
    model="$ctrl.value1"
    value="'c'"
    disabled>
    Value C
</oui-radio>
</div>
```

### Description

```html:preview
<oui-radio description="Checked radio">Checked</oui-radio>
<oui-radio description="Disabled radio" disabled>Disabled</oui-radio>
```

### Thumbnail

```html:preview
<oui-radio thumbnail>Checked</oui-radio>
<oui-radio description="Disabled radio" disabled thumbnail="true">Disabled</oui-radio>
```

### Thumbnail Variant

```html:preview
<oui-radio thumbnail variant="light">Checked</oui-radio>
<oui-radio description="Disabled radio" disabled thumbnail="true" variant="light">Disabled</oui-radio>
```

### On change

```html:preview
<div ng-init="$ctrl.value2 = 'a'" class="oui-doc-preview-only-keep-children">
<oui-radio id="radio2"
    name="oui-radio-2"
    model="$ctrl.value2"
    value="'a'"
    on-change="$ctrl.lastOnChangeValue = modelValue">
    Value A
</oui-radio>
<oui-radio name="oui-radio-2"
    model="$ctrl.value2"
    value="'b'"
    on-change="$ctrl.lastOnChangeValue = modelValue">
    Value B
</oui-radio>
</div>
<span class="oui-doc-preview-only">Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## Group

### Basic

```html:preview
<div ng-init="$ctrl.groupValue = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-group model="$ctrl.groupValue">
    <oui-radio value="'first'">First</oui-radio>
    <oui-radio value="'second'">Second</oui-radio>
    <oui-radio value="'third'">Third</oui-radio>
</oui-radio-group>
</div>
```

### Disabled

```html:preview
<div ng-init="$ctrl.groupValue2 = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-group model="$ctrl.groupValue2">
    <oui-radio value="'first'" disabled>First</oui-radio>
    <oui-radio value="'second'" disabled>Second</oui-radio>
    <oui-radio value="'third'" disabled>Third</oui-radio>
</oui-radio-toggle>
</div>
```

### On change

```html:preview
<div ng-init="$ctrl.groupValue3 = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-group model="$ctrl.groupValue3" on-change="$ctrl.lastOnChangeValue = modelValue">
    <oui-radio value="'first'">First</oui-radio>
    <oui-radio value="'second'">Second</oui-radio>
    <oui-radio value="'third'">Third</oui-radio>
</oui-radio-group>
</div>
<span class="oui-doc-preview-only">Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## Toggle Group

### Default

```html:preview
<div ng-init="$ctrl.groupValue = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-toggle-group model="$ctrl.groupValue">
    <oui-radio value="'first'">First</oui-radio>
    <oui-radio value="'second'">Second</oui-radio>
    <oui-radio value="'third'">Third</oui-radio>
</oui-radio-toggle-group>
</div>
```

### Disabled

```html:preview
<div ng-init="$ctrl.groupValue2 = 'second'" class="oui-doc-preview-only-keep-children">
<oui-radio-toggle-group model="$ctrl.groupValue2">
    <oui-radio value="'first'" disabled>First</oui-radio>
    <oui-radio value="'second'" disabled>Second</oui-radio>
    <oui-radio value="'third'" disabled>Third</oui-radio>
</oui-radio-toggle-group>
</div>
```

### On change

```html:preview
<div ng-init="$ctrl.groupValue3 = 'third'" class="oui-doc-preview-only-keep-children">
<oui-radio-toggle-group model="$ctrl.groupValue3" on-change="$ctrl.lastOnChangeValue = modelValue">
    <oui-radio value="'first'">First</oui-radio>
    <oui-radio value="'second'">Second</oui-radio>
    <oui-radio value="'third'">Third</oui-radio>
</oui-radio-toggle-group>
</div>
<span class="oui-doc-preview-only">Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

## API

### oui-radio

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `model`       | object    | =?        | no                | n/a               | n/a       | current value of the radio
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the radio
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the radio
| `description` | string    | @?        | no                | n/a               | n/a       | description text
| `variant`     | string    | @?        | yes               | `default`, `light`| `default` | used in conjunction with `thumbnail`. Defines specific style for the thumbnail
| `value`       | object    | <         | no                | n/a               | n/a       | value of the radio
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `required`    | boolean   | <?        | no                | `true`, `false`   | `false`   | required flag
| `thumbnail`   | boolean   | <?        | no                | `true`, `false`   | `false`   | thumbnail style of the radio
| `on-change`   | function  | &?        | no                | n/a               | n/a       | handler triggered when value has changed

### oui-radio-group

| Attribute     | Type      | Binding   | One-time Binding  | Values    | Default   | Description
| ----          | ----      | ----      | ----              | ----      | ----      | ----
| `model`       | Object    | =?        | no                | n/a       | n/a       | current value of the radio
| `name`        | string    | @?        | yes               | n/a       | n/a       | name attribute of the radio
| `on-change`   | function  | &         | no                | n/a       | n/a       | handler triggered when model has changed

### oui-radio-toggle-group

| Attribute     | Type      | Binding   | One-time Binding  | Values    | Default   | Description
| ----          | ----      | ----      | ----              | ----      | ----      | ----
| `model`       | Object    | =?        | no                | n/a       | n/a       | current value of the radio
| `name`        | string    | @?        | yes               | n/a       | n/a       | name attribute of the radio
| `on-change`   | function  | &         | no                | n/a       | n/a       | handler triggered when model has changed
