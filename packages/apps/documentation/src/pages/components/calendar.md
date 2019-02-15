# Calendar

## Usage

**This component needs the CSS file of [flatpickr](https://github.com/flatpickr/flatpickr) to work in your project.**

### Default

```html:preview
<oui-calendar id="foo" name="bar" model="$ctrl.defaultModel">
</oui-calendar>
```

### Placeholder

```html:preview
<oui-calendar model="$ctrl.placeholderModel" placeholder="YYYY-MM-DD">
</oui-calendar>
```

### Disabled

```html:preview
<oui-calendar model="$ctrl.disabledModel" disabled>
</oui-calendar>
```

### Required

**Note**: See [Field example](#!/components/field) for error handling.

```html:preview
<oui-calendar model="$ctrl.requiredModel" required>
</oui-calendar>
```

### Week numbers

```html:preview
<oui-calendar model="$ctrl.weekModel" week-numbers>
</oui-calendar>
```

### Inline

```html:preview
<oui-calendar model="$ctrl.inlineModel" inline>
</oui-calendar>
```

### Min & Max

```html:preview
<oui-calendar model="$ctrl.minMaxModel" min-date="$ctrl.minDate" max-date="$ctrl.maxDate">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>minDate value:</strong> {{$ctrl.minDate | json}}</p>
    <p><strong>maxDate value:</strong> {{$ctrl.maxDate | json}}</p>
</div>
```

### Enabling time

Use `enable-time` to show time selection after a date is selected.

```html:preview
<oui-calendar model="$ctrl.weekModel" format="Y-m-d H:i" enable-time>
</oui-calendar>
```

**Note**: See [Flatpickr documentation](https://flatpickr.js.org/examples/#time-picker) for more information.

### Disabling dates

Use `disable-date` to make certain dates unavailable for selection.

```html:preview
<oui-calendar model="$ctrl.disableDateModel" disable-date="$ctrl.disableDate">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>disableDate value:</strong> {{$ctrl.disableDate | json}}</p>
</div>
```

**Note**: See [Flatpickr documentation](https://flatpickr.js.org/examples/#disabling-dates) for more information.

### Disabling all dates except select few

Use `enable-date` to make certain dates only available for selection.

```html:preview
<oui-calendar model="$ctrl.enableDateModel" enable-date="$ctrl.enableDate">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>enableDate value:</strong> {{$ctrl.enableDate | json}}</p>
</div>
```

**Note**: See [Flatpickr documentation](https://flatpickr.js.org/examples/#disabling-all-dates-except-select-few) for more information.

### Date Formatting

```html:preview
<oui-calendar model="$ctrl.formatModel" format="d-m-Y" alt-format="F j, Y">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.formatModel | json}}</p>
</div>
```

**Note**: See [Formatting Tokens](https://flatpickr.js.org/formatting/) for more information.

### Calendar modes

Use `mode` to set a different selection mode for the calendar

#### `range` mode

```html:preview
<oui-calendar model="$ctrl.rangeModel" mode="range">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.rangeModel | json}}</p>
</div>
```

#### `multiple` mode

```html:preview
<oui-calendar model="$ctrl.multipleModel" mode="multiple">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.multipleModel | json}}</p>
</div>
```

### Events

```html:preview
<oui-calendar
    model="$ctrl.eventsModel"
    format="d-m-Y"
    alt-format="F j, Y"
    on-change="$ctrl.onChange(selectedDates, dateStr)"
    on-close="$ctrl.onClose(selectedDates, dateStr)"
    on-open="$ctrl.onOpen(selectedDates, dateStr)">
</oui-calendar>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.eventsModel | json}}</p>
    <p><strong>onChange values:</strong> {{$ctrl.onChangeValues | json}}</p>
    <p><strong>onOpen values:</strong> {{$ctrl.onOpenValues | json}}</p>
    <p><strong>onClose values:</strong> {{$ctrl.onCloseValues | json}}</p>
</div>
```

**Note**: If you want to access the parameters inside events callback, you need to use `selectedDates` or `dateStr` variables as below.

* `selectedDates` returns an array of Date objects selected by the user. When there are no dates selected, the array is empty.
* `dateStr` returns a string representation of the latest selected Date object by the user. The string is formatted as per the `dateFormat` option.

## Variants

### Timepicker

See <a href="#!/components/timepicker">Action menu component</a>.

```html:preview
<oui-timepicker model="$ctrl.timepickerModel" placeholder="HH:MM"></oui-timepicker>
```

## API

| Attribute         | Type      | Binding   | One-time Binding  | Values                                                                                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                                                                                      | ----      | ----
| `model`           | object    | =         | no                | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | model bound to component
| `id`              | string    | @?        | yes               | n/a                                                                                       | n/a       | id attribute of the field
| `name`            | string    | @?        | yes               | n/a                                                                                       | n/a       | name attribute of the field
| `placeholder`     | string    | @?        | yes               | n/a                                                                                       | n/a       | placeholder text
| `mode`            | string    | @?        | yes               | `single`, `multiple`, `range`                                                             | `single`  | selection mode
| `format`          | string    | @?        | yes               | See [Formatting Tokens](https://flatpickr.js.org/formatting/)                             | `Y-m-d`   | format the date of the model
| `alt-format`      | string    | @?        | yes               | See [Formatting Tokens](https://flatpickr.js.org/formatting/)                             | `Y-m-d`   | format the date of the field. `format` is used if undefined
| `append-to-body`  | boolean   | <?        | yes               | `true`, `false`                                                                           | `false`   | append the calendar to the body of the page
| `inline`          | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | show the calendar below the input
| `static`          | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | position the calendar relatively to the input
| `max-date`        | object    | <?        | yes               | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | specifies the maximum/latest date (inclusively) allowed for selection
| `min-date`        | object    | <?        | yes               | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | specifies the minimum/earliest date (inclusively) allowed for selection
| `disable-date`    | array     | <?        | yes               | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | make certain dates unavailable for selection
| `enable-date`     | array     | <?        | yes               | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | make certain dates only available for selection
| `enable-time`     | boolean   | <?        | yes               | `true`, `false`                                                                           | `false`   | enables time selection
| `week-numbers`    | boolean   | <?        | yes               | `true`, `false`                                                                           | `false`   | week numbers flag
| `options`         | object    | <?        | yes               | See [Options](https://flatpickr.js.org/options/)                                          | n/a       | flatpickr options for more advanced configuration
| `disabled`        | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | disabled flag
| `required`        | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | required flag
| `on-change`       | function  | &         | no                | n/a                                                                                       | n/a       | handler triggered when the user selects a date, or changes the time on a selected date
| `on-close`        | function  | &         | no                | n/a                                                                                       | n/a       | handler triggered when the calendar is closed
| `on-open`         | function  | &         | no                | n/a                                                                                       | n/a       | handler triggered when the calendar is opened

## Configuration

The calendar can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.calendar"
]).config(ouiCalendarConfigurationProvider => {
    ouiCalendarConfigurationProvider.setLocale("en"); // default locale
    ouiCalendarConfigurationProvider.setOptions({ // default options
        altInputClass: "oui-calendar__control_alt",
        allowInput: true,
        dateFormat: "Y-m-d",
        disableMobile: true,
        maxDate: null,
        minDate: null,
        mode: "single",
        nextArrow: '<span class="oui-icon oui-icon-chevron-right"></span>',
        prevArrow: '<span class="oui-icon oui-icon-chevron-left"></span>',
        showMonths: 1
    });
});
```

**Note**: See [Flatpickr Options](https://flatpickr.js.org/options/) for more information about the configuration.
