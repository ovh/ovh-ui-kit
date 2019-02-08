# Timepicker

## Usage

### Basic

```html:preview
<oui-timepicker model="$ctrl.basicModel"></oui-timepicker>
```

### Placeholder

```html:preview
<oui-timepicker model="$ctrl.placeholderModel" placeholder="HH:MM"></oui-timepicker>
```

### Disabled

```html:preview
<oui-timepicker model="$ctrl.disabledModel" disabled></oui-timepicker>
```

### Enabling seconds

Use `enable-seconds` to show seconds selector.

```html:preview
<oui-timepicker model="$ctrl.secondsEnabledModel" format="H:i:S" enable-seconds></oui-timepicker>
```

### Enabling AM/PM

Use `enable-am-pm` to show AM/PM selector.

```html:preview
<oui-timepicker model="$ctrl.amPmEnabledModel" format="h:i K" enable-am-pm></oui-timepicker>
```

### Time formatting

<oui-message type="info" dismissable="false">
    See <a href="https://flatpickr.js.org/formatting/">Formatting Tokens</a> for more information.
</oui-message>

```html:preview
<oui-timepicker model="$ctrl.formatModel" format="H:i" alt-format="h:i K" enable-am-pm>
</oui-timepicker>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.formatModel | json}}</p>
</div>
```

### Inline

```html:preview
<div>
    <oui-timepicker model="$ctrl.inlineModel" inline></oui-timepicker>
</div>
<div>
    <oui-timepicker model="$ctrl.inlineModel" inline enable-seconds></oui-timepicker>
</div>
<div>
    <oui-timepicker model="$ctrl.inlineModel" inline enable-am-pm></oui-timepicker>
</div>
<div>
    <oui-timepicker model="$ctrl.inlineModel" inline enable-seconds enable-am-pm></oui-timepicker>
</div>
```

### Events

<oui-message type="info" dismissable="false">
    If you want to access the model inside callbacks, you need to use the <code class="oui-doc-codespan">modelValue</code> variable as below.
</oui-message>

```html:preview
<oui-timepicker
    model="$ctrl.eventsModel"
    format="H:i"
    alt-format="h:i K"
    enable-am-pm
    on-change="$ctrl.onChange(modelValue)"
    on-close="$ctrl.onClose(modelValue)"
    on-open="$ctrl.onOpen(modelValue)">
</oui-timepicker>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.eventsModel | json}}</p>
    <p><strong>onChange values:</strong> {{$ctrl.onChangeValue | json}}</p>
    <p><strong>onOpen values:</strong> {{$ctrl.onOpenValue | json}}</p>
    <p><strong>onClose values:</strong> {{$ctrl.onCloseValue | json}}</p>
</div>
```

## API

| Attribute         | Type      | Binding   | One-time Binding  | Values                                                                                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                                                                                      | ----      | ----
| `model`           | object    | =         | no                | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | model bound to component
| `id`              | string    | @?        | yes               | n/a                                                                                       | n/a       | id attribute of the field
| `name`            | string    | @?        | yes               | n/a                                                                                       | n/a       | name attribute of the field
| `placeholder`     | string    | @?        | yes               | n/a                                                                                       | n/a       | placeholder text
| `format`          | string    | @?        | yes               | See [Formatting Tokens](https://flatpickr.js.org/formatting/)                             | `H:i`     | format the date of the model
| `alt-format`      | string    | @?        | yes               | See [Formatting Tokens](https://flatpickr.js.org/formatting/)                             | `H:i`     | format the date of the field. `format` is used if undefined
| `append-to-body`  | boolean   | <?        | yes               | `true`, `false`                                                                           | `false`   | append the timepicker to the body of the page
| `inline`          | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | show the timepicker below the input
| `static`          | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | position the timepicker relatively to the input
| `enable-seconds`  | boolean   | <?        | yes               | `true`, `false`                                                                           | `false`   | enables seconds selection
| `enable-am-pm`    | boolean   | <?        | yes               | `true`, `false`                                                                           | `false`   | enables am/pm selection
| `disabled`        | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | disabled flag
| `required`        | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | required flag
| `on-change`       | function  | &         | no                | n/a                                                                                       | n/a       | handler triggered when the user change the selected time
| `on-close`        | function  | &         | no                | n/a                                                                                       | n/a       | handler triggered when the timepicker is closed
| `on-open`         | function  | &         | no                | n/a                                                                                       | n/a       | handler triggered when the timepicker is opened
