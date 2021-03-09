# OVHcloud UI Kit Components

AngularJs components for the OVHcloud brand.

## Installation

### Prerequisites

This library has been tested with AngularJS 1.6+.

You need to load these mandatory dependencies in your project:

- [@ovh-ux/ui-kit.css](https://github.com/ovh/ovh-ui-kit/blob/master/packages/css/README)
- [angular](https://www.npmjs.com/package/angular)
- [angular-aria](https://www.npmjs.com/package/angular-aria)
- [angular-sanitize](https://www.npmjs.com/package/angular-sanitize)

You need to load these optional dependencies in your project depending on component used:

- [bloodhound-js](https://www.npmjs.com/package/bloodhound-js) (used by [Autocomplete](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/autocomplete/README))
- [clipboard](https://www.npmjs.com/package/clipboard) (used by [Clipboard](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/clipboard/README))
- [flatpickr](https://www.npmjs.com/package/flatpickr) (used by [Calendar](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/calendar/README) and [Timepicker](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/timepicker/README))
- [popper.js](https://www.npmjs.com/package/popper.js) (used by 
[Popover](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/popover/README) and 
[Tooltip](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/tooltip/README) and
[Dropdown](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/dropdown/README) and 
[Autocomplete](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/autocomplete/README))
- [ui-select](https://www.npmjs.com/package/ui-select) (used by [Select](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/select/README) and [Select Picker](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/select-picker/README))

### Install with [npm](https://www.npmjs.com/)

```bash
npm install @ovh-ux/ui-kit.components
```

### Install with [yarn](https://yarnpkg.com)

```bash
yarn add @ovh-ux/ui-kit.components
```

## Usage

1. In your `index.html`, you need to load the component and its dependencies.

```html
<link rel="stylesheet" href="path/to/@ovh-ux/ui-kit.css/dist/css/oui.css">

<script src="path/to/@ovh-ux/ui-kit.components/dist/js/oui-{componentName}.js" type="text/javascript"></script>
```

2. You need to add `{componentName}` in your angular module dependencies like:

```js
angular.module('myAwesomeApp', ['{componentName}']);
```

Note: Replace {componentName} with actual component like 'oui-button' for button component.

Refer to component README file for more details.

### Webpack

In your `index.js`, you need to import the component, with CSS and other dependencies separately.

```js
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
import ouiComponent from  '@ovh-ux/ui-kit.components/dist/js/oui-{componentName}.js';
angular.module('myAwesomeApp', ['ouiComponent']);
```

Note: Replace {componentName} with actual component like 'button' for button component.

Refer to component README file for more details.

## Documentation

Documentation is available in each component folder, every component is self-documented throught a `README.md` file. For example, use below URL to access button component documentation.

[oui-button](https://github.com/ovh/ovh-ui-kit/blob/master/packages/components/button/README) 

## License

See [https://github.com/ovh/ovh-ui-kit/blob/master/LICENSE](https://github.com/ovh/ovh-ui-kit/blob/master/LICENSE)


# Component status

| Composant         | Docs                  | LESS                  | JS                    | Tests                 | Atomic Design
| ----              | ----                  | ----                  | ----                  | ----                  | ----
| action-menu       | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| autocomplete      | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| back-button       | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| box               | :white_check_mark:    | :white_check_mark:    | n/a                   | n/a                   | atom
| button            | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | atom
| calendar          | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| checkbox          | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | atom
| chips             | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| clipboard         | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| collapsible       | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| criteria          | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | organism
| datagrid          | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | organism
| dropdown          | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| dual-list         | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | organism
| field             | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| file              | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| form-actions      | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| guide-menu        | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| header            | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | organism
| inline-adder      | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| input             | :white_check_mark:    | :white_check_mark:    | n/a                   | n/a                   | atom
| message           | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| modal             | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | organism
| navbar            | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | organism
| numeric           | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| pagination        | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | organism
| password          | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| popover           | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| progress          | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| progress-tracker  | :white_check_mark:    | :white_check_mark:    | n/a                   | n/a                   | organism
| radio             | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | atom
| search            | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| select            | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| select-picker     | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| sidebar           | :white_check_mark:    | :white_check_mark:    | n/a                   | n/a                   | organism
| skeleton          | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | atom
| slideshow         | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | organism
| spinner           | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | atom
| status            | :white_check_mark:    | :white_check_mark:    | n/a                   | n/a                   | atom
| stepper           | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | organism
| switch            | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | atom
| tabs              | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| textarea          | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | atom
| tile              | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| timepicker        | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | molecule
| tooltip           | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | atom
