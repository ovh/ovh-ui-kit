# OVH UI Kit (Less)

![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

A css toolkit for the OVH brand.

[![NPM](https://nodei.co/npm/ovh-ui-kit.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ovh-ui-kit/)

![Project status stable](https://img.shields.io/badge/status-stable-blue.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)
[![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux)

## Installation

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
<link rel="stylesheet" href="path/to/ovh-ui-kit/dist/oui.min.css">
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
@import "~ovh-ui-kit/packages/oui/stylekit";

// or a-la-carte:

@import "~ovh-ui-kit/packages/oui-button/button";
@import "~ovh-ui-kit/packages/oui-radio/radio";
@import "~ovh-ui-kit/packages/oui-formfield/formfield";
```

#### Use with [bootstrap 3](https://github.com/twbs/bootstrap/tree/v3.3.7)

Be careful when using **bootstrap** with **ovh-ui-kit**, you will need to load **ovh-ui-kit** after **bootstrap**. 
Otherwise components proportions will not be respected.

- Default font-size of **bootstrap** (10px) and **ovh-ui-kit** (16px) are differents.
- All units of **ovh-ui-kit** are in `rem`

For a better UI experience, you can use [ovh-ui-kit-bs](https://github.com/ovh-ux/ovh-ui-kit-bs) instead.

##### HTML

```html
<link rel="stylesheet" href="path/to/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="path/to/ovh-ui-kit/dist/oui.css">
```

##### LESS

```less
@import '~bootstrap/less/bootstrap';
@import "~ovh-ui-kit/packages/oui/stylekit";
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
