# Installation

## Install with [npm](https://www.npmjs.com/)

```bash
npm install flatpickr@4.6.3
npm install @ovh-ux/ui-kit.css
npm install @ovh-ux/ui-kit.components
```

## Install with [yarn](https://yarnpkg.com)

```bash
yarn add flatpickr@4.6.3
yarn add @ovh-ux/ui-kit.css
yarn add @ovh-ux/ui-kit.components
```
## Usage

```js
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
import '@ovh-ux/ui-kit.components/dist/js/oui-calendar';
angular.module('myModule', ['oui.calendar']);
```

# Configuration

The calendar can be globally configured with a provider.

```js
// Importing your locale from flatpickr library
import 'flatpickr/dist/l10n/fr.js';

angular.module('myModule', ['oui.calendar'])
  .config(ouiCalendarConfigurationProvider => {
    const locale = 'fr';

    // default locale
    ouiCalendarConfigurationProvider.setLocale(locale);

    // default options
    ouiCalendarConfigurationProvider.setOptions({
      altInputClass: 'oui-calendar__control oui-calendar__control_alt',
      allowInput: true,
      dateFormat: 'Y-m-d',
      disableMobile: true,
      maxDate: null,
      minDate: null,
      mode: 'single',
      nextArrow: '<span class="oui-icon oui-icon-chevron-right"></span>',
      prevArrow: '<span class="oui-icon oui-icon-chevron-left"></span>',
      showMonths: 1
    });
  });
```

**Note**: See [Flatpickr Options](https://flatpickr.js.org/options/) for more information about the configuration and [Flatpickr Localization](https://flatpickr.js.org/localization/) for more information about the setup of your locale.

# API

## Component `oui-calendar`

| Attribute         | Type      | Binding   | One-time Binding  | Values                                                                                    | Default   | Description
| ----              | ----      | ----      | ----              | ----                                                                                      | ----      | ----
| `model`           | object    | =         | no                | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | model bound to component
| `id`              | string    | @?        | yes               | n/a                                                                                       | n/a       | id attribute of the field
| `name`            | string    | @?        | yes               | n/a                                                                                       | n/a       | name attribute of the field
| `placeholder`     | string    | @?        | yes               | n/a                                                                                       | n/a       | placeholder text
| `mode`            | string    | @?        | yes               | `single`, `multiple`, `range`                                                             | `single`  | set a different selection mode for the calendar
| `format`          | string    | @?        | yes               | See [Formatting Tokens](https://flatpickr.js.org/formatting/)                             | `Y-m-d`   | format the date of the model
| `alt-format`      | string    | @?        | yes               | See [Formatting Tokens](https://flatpickr.js.org/formatting/)                             | `Y-m-d`   | format the date of the field. `format` is used if undefined
| `append-to-body`  | boolean   | <?        | yes               | `true`, `false`                                                                           | `false`   | append the calendar to the body of the page
| `inline`          | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | show the calendar below the input
| `static`          | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | position the calendar relatively to the input
| `max-date`        | object    | <?        | yes               | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | specifies the maximum/latest date (inclusively) allowed for selection
| `min-date`        | object    | <?        | yes               | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | specifies the minimum/earliest date (inclusively) allowed for selection
| `disable-date`    | array     | <?        | yes               | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | make certain dates unavailable for selection
| `enable-date`     | array     | <?        | yes               | See [Supplying Dates](https://flatpickr.js.org/examples/#supplying-dates-for-flatpickr)   | n/a       | make certain dates only available for selection
| `enable-time`     | boolean   | <?        | yes               | `true`, `false`                                                                           | `false`   | show time selection after a date is selected. See [Time picker examples](https://flatpickr.js.org/examples/#time-picker) for more information.
| `week-numbers`    | boolean   | <?        | yes               | `true`, `false`                                                                           | `false`   | week numbers flag
| `options`         | object    | <?        | yes               | See [Options](https://flatpickr.js.org/options/)                                          | n/a       | flatpickr options for more advanced configuration
| `disabled`        | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | disabled flag
| `required`        | boolean   | <?        | no                | `true`, `false`                                                                           | `false`   | required flag
| `on-change`       | function  | &         | no                | n/a                                                                                       | n/a       | handler triggered when the user selects a date, or changes the time on a selected date
| `on-close`        | function  | &         | no                | n/a                                                                                       | n/a       | handler triggered when the calendar is closed
| `on-open`         | function  | &         | no                | n/a                                                                                       | n/a       | handler triggered when the calendar is opened

### Attributes `on-*`

If you want to access the parameters inside events callback, you need to use `selectedDates` or `dateStr` variables as below.

* `selectedDates` returns an array of Date objects selected by the user. When there are no dates selected, the array is empty.
* `dateStr` returns a string representation of the latest selected Date object by the user. The string is formatted as per the `dateFormat` option.

```html
<oui-calendar
    model="$ctrl.eventsModel"
    on-change="$ctrl.onChange(selectedDates, dateStr)"
    on-close="$ctrl.onClose(selectedDates, dateStr)"
    on-open="$ctrl.onOpen(selectedDates, dateStr)">
</oui-calendar>
```
