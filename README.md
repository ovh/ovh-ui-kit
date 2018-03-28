[![NPM](https://nodei.co/npm/ovh-ui-kit.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ovh-ui-kit/)

![Project status stable](https://img.shields.io/badge/status-stable-blue.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)
[![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux)

# OVH UI (Less)

A css theme implemented for the OVH brand.

## Installation

```bash
yarn add --dev "https://github.com/ovh-ux/ovh-ui-kit"
```

## Usage

### Dependencies

Those dependencies will be installed automatically by npm:

- [less-plugin-remcalc](https://github.com/ovh-ux/less-plugin-remcalc)

### Integration

#### grunt (grunt-contrib-less)

```less
@import "./node_modules/ovh-ui-kit/packages/oui/stylekit";

// or you can import every component a-la-carte:

@import "./node_modules/ovh-ui-kit/packages/oui-button/button";
@import "./node_modules/ovh-ui-kit/packages/oui-radio/radio";
@import "./node_modules/ovh-ui-kit/packages/oui-formfield/formfield";

[...]
```

#### webpack (less-loader)

Webpack provide the `~` prefix for package imports:

```less
@import "~ovh-ui-kit/packages/oui/stylekit.less";

// or a-la-carte:

@import "~ovh-ui-kit/packages/oui-button/button.less";
@import "~ovh-ui-kit/packages/oui-radio/radio.less";
@import "~ovh-ui-kit/packages/oui-formfield/formfield.less";

[...]
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
