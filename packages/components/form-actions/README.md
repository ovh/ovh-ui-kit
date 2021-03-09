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
import '@ovh-ux/ui-kit.components/dist/js/oui-form-actions.js';

angular.module('myModule', ['oui.form-actions']);
```

# Configuration

The form actions can be globally configured with a provider.

```js
angular.module('myModule', ['oui.form-actions'])
  .config(ouiFormActionsConfigurationProvider => {
    // default translations
    ouiFormActionsConfigurationProvider.setTranslations({
      submit: 'Submit',
      cancel: 'Cancel'
    });
});
```

# API

## Component `oui-form-actions`

| Attribute     | Type      | Binding   | One-time Binding  | Values    | Default   | Description
| ----          | ----      | ----      | ----              | ----      | ----      | ----
| `submit-text` | string    | @?        | yes               | n/a       | `Submit`  | submit button text
| `cancel-text` | string    | @?        | yes               | n/a       | `Cancel`  | cancel button text
| `href`        | string    | @?        | yes               | n/a       | n/a       | link url on cancel
| `disabled`    | boolean   | <?        | yes               | `true` `false`       | `false`       | should submit action be disabled
| `on-submit`   | function  | &         | no                | n/a       | n/a       | button submit click handler
| `on-cancel`   | function  | &?        | no                | n/a       | n/a       | button cancel click handler

**Note**: Cancel button is hidden if there is no `href` or `on-cancel` attributes.
