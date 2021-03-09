# Installation

## Install with [npm](https://www.npmjs.com/)

```bash
npm install @ovh-ux/ui-kit.css
npm install @ovh-ux/ui-kit.components
```

## Install with [yarn](https://yarnpkg.com)

```bash
yarn add @ovh-ux/ui-kit.css
yarn add @ovh-ux/ui-kit.components
```
## Usage

```js
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
import '@ovh-ux/ui-kit.components/dist/js/oui-stepper.js';

angular.module('myModule', ['oui.stepper']);
```

# Configuration

The stepper translations can be globally configured with a provider.

```js
angular.module('myModule', ['oui.stepper'])
  .config(ouiStepperConfigurationProvider => {
    // default translations
    ouiStepperConfigurationProvider.setTranslations({
      optionalLabel: '(optional)',
      modifyThisStep: 'Modify this step',
      skipThisStep: 'Skip this step',
      nextButtonLabel: 'Next',
      submitButtonLabel: 'Submit'
    });
  });
```

# API

## Component `oui-stepper`

| Attribute         | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `name`            | string    | @?        | yes               | n/a               | n/a       | stepper name used to identify step
| `id`              | string    | @?        | yes               | n/a               | n/a       | stepper id used to identify step
| `current-index`   | number    | =?        | no                | n/a               | 0         | current step index
| `on-init`         | function  | &         | no                | n/a               | n/a       | initialization function
| `on-finish`       | function  | &         | no                | n/a               | n/a       | submit all steps function

### Attribute `on-finish`

If you want to access the forms inside `on-finish` callback, you need to use the `forms` variable as below.

```html
<oui-stepper
    on-finish="$ctrl.onFinish(forms)">
    [...]
</oui-stepper>
```

## Component `oui-step-form`

| Attribute         | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `name`            | string    | @?        | yes               | n/a               | n/a       | step form name, same as normal form
| `id`              | string    | @?        | yes               | n/a               | n/a       | step form id, same as normal form
| `header`          | string    | @?        | no                | n/a               | n/a       | title of the step
| `description`     | string    | @?        | no                | n/a               | n/a       | description of the step
| `cancel-href`     | string    | @?        | yes               | n/a               | n/a       | link url on cancel
| `cancel-text`     | string    | @?        | yes               | n/a               | n/a       | text for the cancel button
| `submit-text`     | string    | @?        | no                | n/a               | `Submit`  | text for the submit button
| `loading-text`    | string    | @?        | no                | n/a               | n/a       | text for the loading state
| `loading`         | boolean   | <?        | no                | `true`, `false`   | `false`   | display the loading state
| `disabled`        | boolean   | <?        | no                | `true`, `false`   | `false`   | disable the step and shrink it
| `editable`        | boolean   | <?        | no                | `true`, `false`   | `true`    | Define if user can go back on a step and edit it again
| `navigation`      | boolean   | <?        | no                | `true`, `false`   | `true`    | show the navigation buttons
| `skippable`       | boolean   | <?        | no                | `true`, `false`   | `false`   | add button to skip facultative step
| `valid`           | boolean   | <?        | no                | `true`, `false`   | `true`    | custom validation for the form
| `position`        | number    | @?        | no                | n/a               | n/a       | position where to insert step if used with ngIf
| `prevent-next`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disable the "next" button when the form is invalid
| `on-cancel`       | function  | &?        | no                | n/a               | n/a       | cancel step function
| `on-focus`        | function  | &         | no                | n/a               | n/a       | focused step function
| `on-submit`       | function  | &         | no                | n/a               | n/a       | submit step function

### Attribute `valid`

The value of the custom validation attribute doesn't override the angular form validation `form.$valid`. Both are needed to be `true` to enable the submission.

If you set `prevent-next`, the "next" button will stay disabled until both conditions are fulfilled.

### Attribute `on-submit`

If you want to access the form inside `on-submit` callback, you need to use the `form` variable as below.

When the form is submitted the `oui-step-form.submit` event is emitted having `form` as a parameter to allow global actions on form submission

```html:preview
<oui-stepper>
    <oui-step-form
        name="foo"
        header="Events on oui-step-form"
        on-submit="$ctrl.onSubmit(form)">
        [...]
    </oui-step-form>
</oui-stepper>
```
