# Progress

## Usage

### Simple

```html:preview
<oui-progress>
    <oui-progress-bar type="info" value="$ctrl.progressData.value1"></oui-progress-bar>
</oui-progress>

<oui-progress>
    <oui-progress-bar type="success" value="$ctrl.progressData.value2"></oui-progress-bar>
</oui-progress>

<oui-progress>
    <oui-progress-bar type="warning" value="$ctrl.progressData.value3"></oui-progress-bar>
</oui-progress>

<oui-progress>
    <oui-progress-bar type="error" value="$ctrl.progressData.value4"></oui-progress-bar>
</oui-progress>
```

### With custom labels

```html:preview
<oui-progress>
    <oui-progress-bar type="info"
        value="$ctrl.progressData.value1">
        Progress: {{$ctrl.progressData.value1}}%
    </oui-progress-bar>
</oui-progress>
```

### Custom max value

```html:preview
<oui-progress max-value="200">
    <oui-progress-bar type="success"
        value="150">
        Installing components: 150/200
    </oui-progress-bar>
</oui-progress>
```

### Stacked

```html:preview
<oui-progress>
    <oui-progress-bar type="success" value="30"></oui-progress-bar>
    <oui-progress-bar type="error" value="15"></oui-progress-bar>
</oui-progress>
```

### Thresholds

```html:preview
<oui-progress max-value="200">
    <oui-progress-bar type="success"
        value="139">
        Installing components: 139/200
    </oui-progress-bar>
    <oui-progress-threshold value="25"></oui-progress-threshold>
    <oui-progress-threshold value="50"></oui-progress-threshold>
    <oui-progress-threshold value="75"></oui-progress-threshold>
    <oui-progress-threshold value="100"></oui-progress-threshold>
    <oui-progress-threshold value="125"></oui-progress-threshold>
    <oui-progress-threshold value="150"></oui-progress-threshold>
    <oui-progress-threshold value="175"></oui-progress-threshold>
</oui-progress>

<oui-progress>
    <oui-progress-bar type="error" value="60"></oui-progress-bar>
    <oui-progress-threshold value="20"></oui-progress-threshold>
    <oui-progress-threshold value="50"></oui-progress-threshold>
    <oui-progress-threshold value="80"></oui-progress-threshold>
</oui-progress>
```

### Compact mode

```html:preview
<oui-progress compact>
    <oui-progress-bar type="info"
        value="$ctrl.progressData.value1">
        {{$ctrl.progressData.value1}}% complete
    </oui-progress-bar>
</oui-progress>

<oui-progress compact>
    <oui-progress-bar type="success"
        value="$ctrl.progressData.value2">
    </oui-progress-bar>
</oui-progress>

<oui-progress compact>
    <oui-progress-bar type="warning"
        value="$ctrl.progressData.value3">
    </oui-progress-bar>
</oui-progress>

<oui-progress compact>
    <oui-progress-bar type="error"
        value="$ctrl.progressData.value4">
        {{$ctrl.progressData.value4}}% complete
    </oui-progress-bar>
</oui-progress>
```

## API

### oui-progress

| Attribute     | Type      | Binding   | One-time binding  | Values                                | default       | Description
| ----          | ----      | ----      | ----              | ----                                  | ----          | ----
| `min-value`   | number    | @?        | yes               | n/a                                   | `0`           | min value of progress component
| `max-value`   | number    | @?        | yes               | n/a                                   | `100`         | max value of progress component
| `compact`     | boolean   | <?        | yes               | `true`, `false`                       | `false`       | compact mode flag

### oui-progress-bar
| Attribute     | Type      | Binding | One-time binding    | Values                                | default       | Description
| ----          | ----      | ----    | ----                | ----                                  | ----          | ----
| `type`        | string    | @       | yes                 | `info`, `success`, `warning`, `error` | `info`        | type of the progress bar
| `value`       | number    | <       | no                  | n/a                                   | n/a           | current value of progress bar

### oui-progress-threshold

| Attribute     | Type      | Binding | One-time binding    | Values                                | default       | Description
| ----          | ----      | ----    | ----                | ----                                  | ----          | ----
| `value`       | number    | <       | yes                 | n/a                                   | n/a           | value at which the threshold should appear
