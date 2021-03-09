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
import '@ovh-ux/ui-kit.components/dist/js/oui-timepicker.js';

angular.module('myModule', ['oui.timepicker']);
```

# API

## Component `oui-timepicker`

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

### Attributes `on-*`

If you want to access the parameters inside events callback, you need to use `modelValue` variable as below.

```html
<oui-calendar
    model="$ctrl.eventsModel"
    on-change="$ctrl.onChange(modelValue)"
    on-close="$ctrl.onClose(modelValue)"
    on-open="$ctrl.onOpen(modelValue)">
</oui-calendar>
```
