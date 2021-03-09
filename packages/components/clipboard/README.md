# Installation

## Install with [npm](https://www.npmjs.com/)

```bash
npm install clipboard.js@2.0.4
npm install @ovh-ux/ui-kit.css
npm install @ovh-ux/ui-kit.components
```

## Install with [yarn](https://yarnpkg.com)

```bash
yarn add clipboard.js@2.0.4
yarn add @ovh-ux/ui-kit.css
yarn add @ovh-ux/ui-kit.components
```
## Usage

```js
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
import '@ovh-ux/ui-kit.components/dist/js/oui-clipboard';
angular.module('myModule', ['oui.clipboard']);
```

# Configuration

The clipboard can be globally configured with a provider.

```js
angular.module('myModule', ['oui.clipboard'])
  .config(ouiClipboardConfigurationProvider => {
    // default translations
    ouiClipboardConfigurationProvider.setTranslations({
      copyToClipboardLabel: 'Copy to clipboard',
      copiedLabel: 'Copied',
      notSupported: 'Copy to clipboard not supported. Please copy the text manually'
    });
  });
```

# API

## Component `oui-clipboard`

| Attribute | Type      | Binding   | One-time Binding  | Values    | Default   | Description
| ----      | ----      | ----      | ----              | ----      | ----      | ----
| `model`   | object    | =         | no                | n/a       | n/a       | model bound to component
| `id`      | string    | @?        | yes               | n/a       | n/a       | id attribute of the input
| `name`    | string    | @?        | yes               | n/a       | n/a       | name attribute of the input
