# Installation

## Install with [npm](https://www.npmjs.com/)

```bash
npm install bloodhound-js@1.2.3
npm install popper.js@1.16.1
npm install @ovh-ux/ui-kit.css
npm install @ovh-ux/ui-kit.components
```

## Install with [yarn](https://yarnpkg.com)

```bash
yarn add bloodhound-js@1.2.3
yarn add popper.js@1.16.1
yarn add @ovh-ux/ui-kit.css
yarn add @ovh-ux/ui-kit.components
```
## Usage

```js
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
import '@ovh-ux/ui-kit.components/dist/js/oui-autocomplete';
angular.module('myModule', ['oui.autocomplete]);
```

# Configuration

The autocomplete can be globally configured with a provider.

```js
angular.module('myModule', ['oui.autocomplete'])
  .config(ouiAutocompleteConfigurationProvider => {
    // default options
    ouiAutocompleteConfigurationProvider.setOptions({
      debounceDelay: 500,
      minLength: 2
    });
  });
```

# API

## Directive `oui-autocomplete`

| Attribute                     | Type      | Binding   | One-time binding  | Values | Default   | Description
| ----                          | ----      | ----      | ----              | ----   | ----      | ----
| `oui-autocomplete`            | array     | <         | no                | n/a    | n/a       | array of suggestions
| `oui-autocomplete-options`    | object    | <?        | yes               | n/a    | n/a       | options of autocomplete
| `oui-autocomplete-property`   | string    | @?        | no                | n/a    | n/a       | property path used to get value from suggestion
| `oui-autocomplete-on-select`  | function  | &         | no                | n/a    | n/a       | handler triggered when suggestion is selected

### Attribute `oui-autocomplete-on-select`

If you want to access the parameters inside `on-select` callback, you need to use `value` variable as below. It will return the corresponding value from your array of suggestions.

```html
<input
    type="text"
    class="oui-input oui-input_inline" 
    placeholder="Search country name"
    ng-model="$ctrl.modelOnSelect"
    oui-autocomplete="$ctrl.suggestionObjects"
    oui-autocomplete-property="country.name"
    oui-autocomplete-on-select="$ctrl.onSelect(value)">
```
