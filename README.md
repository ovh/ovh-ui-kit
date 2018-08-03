# OVH UI Kit (Less)

![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

A css toolkit for the OVH brand.

[![NPM](https://nodei.co/npm/ovh-ui-kit.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ovh-ui-kit/)

![Project status stable](https://img.shields.io/badge/status-stable-blue.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)
[![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux)

## Installation

### Dependencies

These dependency will be installed automatically:

- [less-plugin-remcalc](https://github.com/ovh-ux/less-plugin-remcalc)

### Install with [npm](https://www.npmjs.com/)

```bash
npm install ovh-ui-kit
```

### Install with [yarn](https://yarnpkg.com)

```bash
yarn add ovh-ui-kit
```

### Install with [bower](https://bower.io/) (deprecated)

```bash
bower install --save ovh-ui-kit
```

## Usage

### Integration

#### grunt (grunt-contrib-less)

```less
@import "./node_modules/ovh-ui-kit/packages/oui/stylekit";

// or you can import every component a-la-carte:

@import "./node_modules/ovh-ui-kit/packages/oui-button/button";
@import "./node_modules/ovh-ui-kit/packages/oui-radio/radio";
@import "./node_modules/ovh-ui-kit/packages/oui-formfield/formfield";
```

#### webpack (less-loader)

Webpack provide the `~` prefix for package imports:

```less
@import "~ovh-ui-kit/packages/oui/stylekit.less";

// or a-la-carte:

@import "~ovh-ui-kit/packages/oui-button/button.less";
@import "~ovh-ui-kit/packages/oui-radio/radio.less";
@import "~ovh-ui-kit/packages/oui-formfield/formfield.less";
```

#### bootstrap

For those who want to use **ovh-ui-kit** with **bootstrap** on the same project you need change
the `rem-base` to `10px` otherwise components proportions will not be respected.

```less
@import '~bootstrap/less/bootstrap';

// Sets rem-base to 10px because bootstrap sets font-size: 10px on the html element.
@rem-base: rem-base(10px);

@import "~ovh-ui-kit/packages/oui/stylekit.less";
```

## Documentation

Documentation is available from the `packages/` folder, every package is self-documented throught a `README.md` file.

## License

See [https://github.com/ovh-ux/ovh-ui-kit/blob/master/LICENSE](https://github.com/ovh-ux/ovh-ui-kit/blob/master/LICENSE)
