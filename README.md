![OVH component](githubBanner.png)

![Project statuc alpha](https://img.shields.io/badge/status-alpha-blue.svg) [![Github tag](https://img.shields.io/github/tag/ovh-ux/ovh-ui-kit.svg)]() ![Maintenance](https://img.shields.io/maintenance/yes/2017.svg) [![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux)

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
@import "./node_modules/ovh-ui-kit/packages/oui-field/field";

[...]
```

#### webpack (less-loader)

Webpack provide the `~` prefix for package imports:

```less
@import "~ovh-ui-kit/packages/oui/stylekit.less";

// or a-la-carte:

@import "~ovh-ui-kit/packages/oui-button/button.less";
@import "~ovh-ui-kit/packages/oui-radio/radio.less";
@import "~ovh-ui-kit/packages/oui-field/field.less";

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

## Publish a new version

When publishing a new version npm or yarn will execute some common tasks:

1. Build the project (if the build fail, publish is aborted)
2. Change the version inside the `package.json` to the new version
3. Commit the new `package.json`
4. Create a new tag like `v<version>`
5. Changes and tags are pushed to the remote server

### npm

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

### yarn

```bash
yarn version --new-version <version>
```

## Documentation

Documentation is available from the `packages/` folder, every package is self-documented throught a `README.md` file.

## Browser Support

- Chrome (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Opera (last 2 versions)
- Edge (last 2 versions)
- Internet Explorer (10 only)
