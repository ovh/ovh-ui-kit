# OVH UI Kit (AngularJS)

![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

A set of maintainable components for the OVH ecosystem (AngularJS).

[![NPM](https://nodei.co/npm/ovh-ui-angular.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ovh-ui-angular/)

![Project status stable](https://img.shields.io/badge/status-stable-blue.svg)
[![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)]()
[![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux)

## Installation

### Prerequisites

This library has been tested with AngularJS 1.6+.

You will also need these dependencies in your project:

- [angular-aria](https://www.npmjs.com/package/angular-aria)
- [angular-sanitize](https://www.npmjs.com/package/angular-sanitize)
- [flatpickr](https://www.npmjs.com/package/flatpickr) for _Calendar_ component
- [ovh-ui-kit](https://github.com/ovh-ux/ovh-ui-kit)

Follow the [guide](https://github.com/ovh-ux/ovh-ui-kit) for _ovh-ui-kit_, because you need to integrate it by _yourself_.

### Install with [npm](https://www.npmjs.com/)

```bash
npm install ovh-ui-angular
```

### Install with [yarn](https://yarnpkg.com)

```bash
yarn add ovh-ui-angular
```

## Usage

### Integration

1. In your `index.html`, you need to load `oui-angular.min.js`:

```html
    ...
    <script src="ovh-ui-angular/dist/oui-angular.min.js" type="text/javascript"></script>
    ...
```

2. You need to add `oui` in your angular module dependencies like that:

```javascript
angular.module("myAwesomeApp", [
    ...
    "oui"
    ...
]);
```

## Develop

### Run in development mode

1. Clone and install `ovh-ui-angular`

```bash
git clone https://github.com/ovh-ux/ovh-ui-angular.git
cd ovh-ui-angular
yarn install
yarn link
```

2. Run `ovh-ui-angular` with [ovh-ui-kit-documentation](https://github.com/ovh-ux/ovh-ui-kit-documentation)

```bash
git clone https://github.com/ovh-ux/ovh-ui-kit-documentation.git
cd ovh-ui-kit-documentation
yarn install
yarn link ovh-ui-angular
yarn start
```

### Hot reload

Once you have `yarn start`-ed the project, you can edit anything with an automatic browser refresh as a result.

### Contributing

You've developed a new cool feature? Fixed an annoying bug? We'd be happy
to hear from you!

see [CONTRIBUTING](https://github.com/ovh-ux/ovh-ui-angular/blob/master/CONTRIBUTING.md)

And read this [quick start](https://github.com/ovh-ux/ovh-ui-kit-documentation).

## Related links

 * Contribute: [https://github.com/ovh-ux/ovh-ui-angular/blob/master/CONTRIBUTING.md](https://github.com/ovh-ux/ovh-ui-angular/blob/master/CONTRIBUTING.md)
 * Report bugs: [https://github.com/ovh-ux/ovh-ui-angular/issues](https://github.com/ovh-ux/ovh-ui-angular/issues)
 * Get latest version: [https://github.com/ovh-ux/ovh-ui-angular](https://github.com/ovh-ux/ovh-ui-angular)

## Documentation

Documentation is available from the `packages/` folder, every package is self-documented throught a `README.md` file. But you can also check bellow.

## License

See [https://github.com/ovh-ux/ovh-ui-angular/blob/master/LICENSE](https://github.com/ovh-ux/ovh-ui-angular/blob/master/LICENSE)
