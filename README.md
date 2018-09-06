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

#### Use in HTML file

```html
    ...
  <link rel="stylesheet" href="path/to/ovh-ui-kit/dist/oui.css">
    ...
```

#### Use with [grunt](https://github.com/gruntjs/grunt) and [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)

```less
@import "path/to/ovh-ui-kit/packages/oui/stylekit";

// or you can import every component a-la-carte:

@import "path/to/ovh-ui-kit/packages/oui-button/button";
@import "path/to/ovh-ui-kit/packages/oui-radio/radio";
@import "path/to/ovh-ui-kit/packages/oui-formfield/formfield";
```

#### Use with [webpack](https://github.com/webpack/webpack) and [less-loader](https://github.com/webpack-contrib/less-loader)

Webpack provide the `~` prefix for package imports:

```less
@import "~ovh-ui-kit/packages/oui/stylekit.less";

// or a-la-carte:

@import "~ovh-ui-kit/packages/oui-button/button.less";
@import "~ovh-ui-kit/packages/oui-radio/radio.less";
@import "~ovh-ui-kit/packages/oui-formfield/formfield.less";
```

#### Use with [bootstrap 3](https://github.com/twbs/bootstrap/tree/v3.3.7)

For those who want to use **ovh-ui-kit** with **bootstrap** on the same project you need change
the `rem-base` to `10px` otherwise components proportions will not be respected.

```less
@import '~bootstrap/less/bootstrap';

// Sets rem-base to 10px because bootstrap sets font-size: 10px on the html element.
@rem-base: rem-base(10px);

@import "~ovh-ui-kit/packages/oui/stylekit.less";
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
yarn link ovh-ui-kit
yarn start
```

### Hot reload

Once you have `yarn start`-ed the project, you can edit anything with an automatic browser refresh as a result.

### Contributing

You've developed a new cool feature? Fixed an annoying bug? We'd be happy
to hear from you!

see [CONTRIBUTING](https://github.com/ovh-ux/ovh-ui-kit/blob/master/CONTRIBUTING.md)

And read this [quick start](https://github.com/ovh-ux/ovh-ui-kit-documentation).

## Related links

 * Contribute: [https://github.com/ovh-ux/ovh-ui-kit/blob/master/CONTRIBUTING.md](https://github.com/ovh-ux/ovh-ui-kit/blob/master/CONTRIBUTING.md)
 * Report bugs: [https://github.com/ovh-ux/ovh-ui-kit/issues](https://github.com/ovh-ux/ovh-ui-kit/issues)
 * Get latest version: [https://github.com/ovh-ux/ovh-ui-kit](https://github.com/ovh-ux/ovh-ui-kit)

## Documentation

Documentation is available from the `packages/` folder, every package is self-documented throught a `README.md` file.

## License

See [https://github.com/ovh-ux/ovh-ui-kit/blob/master/LICENSE](https://github.com/ovh-ux/ovh-ui-kit/blob/master/LICENSE)
