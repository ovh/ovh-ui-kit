# OVH UI Kit

![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

A component framework for the OVH brand.

[![npm version](https://badgen.net/npm/v/@ovh-ux/ui-kit)](https://www.npmjs.com/package/@ovh-ux/ui-kit)

## Installation

### Prerequisites

This library has been tested with AngularJS 1.6+.

You need to load these dependencies in your project:

- [angular](https://www.npmjs.com/package/angular)
- [angular-aria](https://www.npmjs.com/package/angular-aria)
- [angular-sanitize](https://www.npmjs.com/package/angular-sanitize)
- [bloodhound-js](https://www.npmjs.com/package/bloodhound-js) (used by [Autocomplete](./packages/components/autocomplete))
- [clipboard](https://www.npmjs.com/package/clipboard) (used by [Clipboard](./packages/components/clipboard))
- [flatpickr](https://www.npmjs.com/package/flatpickr) (used by [Calendar](./packages/components/calendar) and [Timepicker](./packages/components/timepicker))
- [popper.js](https://www.npmjs.com/package/popper.js) (used by [Popover](./packages/components/popover) and [Tooltip](./packages/components/tooltip))
- [ui-select](https://www.npmjs.com/package/ui-select) (used by [Select](./packages/components/select) and [Select Picker](./packages/components/select-picker))

See `package.json` for more informations.

[![Dependencies](https://badgen.net/david/dep/ovh-ux/ovh-ui-kit/packages/libs/ui-kit)](https://npmjs.com/package/@ovh-ux/ui-kit?activeTab=dependencies)
[![Dev Dependencies](https://badgen.net/david/dev/ovh-ux/ovh-ui-kit/packages/libs/ui-kit)](https://npmjs.com/package/@ovh-ux/ui-kit?activeTab=dependencies)
[![Peer Dependencies](https://badgen.net/david/peer/ovh-ux/ovh-ui-kit/packages/libs/ui-kit)](https://npmjs.com/package/@ovh-ux/ui-kit?activeTab=dependencies)

### Install with [npm](https://www.npmjs.com/)

```bash
npm install @ovh-ux/ui-kit
```

### Install with [yarn](https://yarnpkg.com)

```bash
yarn add @ovh-ux/ui-kit
```

## Usage

1. In your `index.html`, you need to load `oui.css` and `oui.js`:

```html
<link rel="stylesheet" href="path/to/@ovh-ux/ui-kit/dist/css/oui.css">

<script src="path/to/@ovh-ux/ui-kit/dist/js/oui.js" type="text/javascript"></script>
```

2. You need to add `oui` in your angular module dependencies like that:

```js
angular.module('myAwesomeApp', ['oui']);
```

### Webpack

In your `index.js`, you need to import the library, with its CSS file separately.

```js
import '@ovh-ux/ui-kit/dist/css/oui.css';
import oui from '@ovh-ux/ui-kit';

angular.module('myAwesomeApp', [oui]);
```

### LESS variables

If you want to use the variables for your style, you can access it through `_variables.less`.

```less
@import 'path/to/@ovh-ux/ui-kit/dist/less/_variables';
```

**Note**: Importing `_variables.less` will import `_constants.less` and `_icons.less` too.

## Develop

### Run in development mode

1. Clone and install `ovh-ui-kit`

```bash
git clone https://github.com/ovh/ovh-ui-kit.git
cd ovh-ui-kit
yarn install
```

2. Run `ovh-ui-kit` in the Workshop

```bash
yarn start
```

This will open [Storybook](https://storybook.js.org/) in your default browser

### Hot reload

Once you have `yarn start`-ed the project, you can edit anything with an automatic browser refresh as a result.

### Contributing

You've developed a new cool feature? Fixed an annoying bug? We'd be happy
to hear from you!

see [CONTRIBUTING](https://github.com/ovh/ovh-ui-kit/blob/master/CONTRIBUTING.md)

## Related links

 * Contribute: [https://github.com/ovh/ovh-ui-kit/blob/master/CONTRIBUTING.md](https://github.com/ovh/ovh-ui-kit/blob/master/CONTRIBUTING.md)
 * Report bugs: [https://github.com/ovh/ovh-ui-kit/issues](https://github.com/ovh/ovh-ui-kit/issues)
 * Get latest version: [https://github.com/ovh/ovh-ui-kit](https://github.com/ovh/ovh-ui-kit)

## Documentation

Documentation is available from the `packages/` folder, every package is self-documented throught a `README.md` file.

## License

See [https://github.com/ovh/ovh-ui-kit/blob/master/LICENSE](https://github.com/ovh/ovh-ui-kit/blob/master/LICENSE)
