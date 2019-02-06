# Select-picker

## Usage

### Basic

```html:preview
<div ng-init="$ctrl.value1 = {id:'a', name: 'Value A'}">
<oui-select-picker name="ouiSelectPicker1"
    match="name"
    model="$ctrl.value1"
    label="Value A or B"
    values="[{id:'a', name: 'Value A'}, {id:'b', name: 'Value B'}]"></oui-select-picker>
<oui-select-picker name="ouiSelectPicker1"
    match="name"
    model="$ctrl.value1"
    label="Value C"
    values="[{id:'c', name: 'Value C'}]"></oui-select-picker>
<oui-select-picker name="ouiSelectPicker1"
    match="name"
    model="$ctrl.value1"
    placeholder="Select"
    label="Value D, E or F"
    values="[{id:'d', name: 'Value D'}, {id:'e', name: 'Value E'}, {id:'f', name: 'Value F'}]"></oui-select-picker>
</div>
```

### Description

```html:preview
<oui-select-picker label="Checked"
    match="name"
    description="Checked select picker"></oui-select-picker>
<oui-select-picker label="Disabled"
    match="name"
    description="Disabled select picker"
    disabled></oui-select-picker>
```

### Sections using `oui-select-picker-section`

```html:preview
<oui-select-picker label="Checked"
    match="name"
    description="Checked select picker">
    <oui-select-picker-section>Section 1</oui-select-picker-section>
    <oui-select-picker-section>Section 2</oui-select-picker-section>
</oui-select-picker>
<oui-select-picker label="Disabled"
    match="name"
    description="Disabled select picker"
    disabled>
    <oui-select-picker-section>Section 1</oui-select-picker-section>
    <oui-select-picker-section>Section 2</oui-select-picker-section>
</oui-select-picker>
```

### Sections using `span`

```html:preview
<oui-select-picker label="Checked"
    match="name"
    description="Checked select picker">
    <span class="oui-select-picker__section">Section 1</span>
    <span class="oui-select-picker__section">Section 2</span>
</oui-select-picker>
<oui-select-picker label="Disabled"
    match="name"
    description="Disabled select picker"
    disabled>
    <span class="oui-select-picker__section">Section 1</span>
    <span class="oui-select-picker__section">Section 2</span>
</oui-select-picker>
```

**Note**: This use is **deprecated** and will be removed in the next major version

### On change

```html:preview
<div ng-init="$ctrl.value2 = {id:'a', name: 'Value A'}">
    <oui-select-picker label="Value A or B"
        name="ouiSelectPicker2"
        match="name"
        model="$ctrl.value2"
        values="[{id:'a', name: 'Value A'}, {id:'b', name: 'Value B'}]"
        on-change="$ctrl.lastOnChangeValue = modelValue"></oui-select-picker>
    <oui-select-picker label="Value C"
        name="ouiSelectPicker2"
        match="name"
        model="$ctrl.value2"
        values="[{id:'c', name: 'Value C'}]"
        on-change="$ctrl.lastOnChangeValue = modelValue"></oui-select-picker>
</div>

<span>Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

### Variant

```html:preview
<div ng-init="$ctrl.value3 = {id:'a', name: 'Value A'}">
<oui-select-picker name="ouiSelectPicker5"
    match="name"
    model="$ctrl.value3"
    label="Value A or B"
    values="[{id:'a', name: 'Value A'}, {id:'b', name: 'Value B'}]"
    variant="light"></oui-select-picker>
<oui-select-picker name="ouiSelectPicker5"
    match="name"
    model="$ctrl.value3"
    label="Value C"
    values="[{id:'c', name: 'Value C'}]"
    variant="light"></oui-select-picker>
<oui-select-picker name="ouiSelectPicker5"
    match="name"
    model="$ctrl.value3"
    placeholder="Select"
    label="Value D, E or F"
    values="[{id:'d', name: 'Value D'}, {id:'e', name: 'Value E'}, {id:'f', name: 'Value F'}]"
    variant="light"></oui-select-picker>
</div>
```

## API

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `model`       | Object    | =?        | no                | n/a               | n/a       | current value of the radio
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the radio
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the radio
| `label`       | string    | @         | no                | n/a               | n/a       | label text
| `description` | string    | @?        | no                | n/a               | n/a       | description text
| `placeholder` | string    | @?        | no                | n/a               | n/a       | initial label text of the select
| `picture`     | string    | @?        | no                | n/a               | n/a       | picture path or icon class
| `match`       | string    | @         | no                | n/a               | n/a       | object property matched to label
| `values`      | array     | <         | no                | n/a               | n/a       | value of the radio or values of the select
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `required`    | boolean   | <?        | no                | `true`, `false`   | `false`   | define if the field is required
| `on-change`   | function  | &?        | no                | n/a               | n/a       | handler triggered when value has changed
| `variant`     | string    | @?        | yes               | `default`, `light`| `default` | define specific style

#### Deprecated

* `text`: Replaced by `label` attribute
