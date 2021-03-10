# OVHcloud UI Kit CSS

A CSS style framework for the OVHcloud brand. This package contains all base styles, icons, and flags. This is a prerequisite for OVHcloud UI Kit Components package.

## Installation

### Prerequisites

You need to load these dependencies in your project:

- [flatpickr](https://www.npmjs.com/package/flatpickr) (used by [Calendar](./src/less/components/calendar) and [Timepicker](./src/less/components/timepicker))

See `package.json` for more informations.

### Install with [npm](https://www.npmjs.com/)

```bash
npm install @ovh-ux/ui-kit.css
```

### Install with [yarn](https://yarnpkg.com)

```bash
yarn add @ovh-ux/ui-kit.css
```

## Usage

1. In your `index.html`, you need to load `oui.css`:

```html
<link rel="stylesheet" href="path/to/@ovh-ux/ui-kit.css/dist/css/oui.css">
```

### Webpack (import all styles, icons and flags).

In your `index.js`, you need to import the CSS file separately.

```js
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
```

### Webpack (import styles, icons or flags selectively).

In your `index.js`, you need to import the CSS file separately.

```js
import '@ovh-ux/ui-kit.css/dist/css/oui-core.css';
import '@ovh-ux/ui-kit.css/dist/css/oui-icons.css';
import '@ovh-ux/ui-kit.css/dist/css/oui-flags.css';
```

### LESS variables

If you want to use the toekns for your style, you can access it through `_tokens.less`.

```less
@import 'path/to/@ovh-ux/ui-kit.css/dist/less/_tokens';
```

**Note**: Importing `_tokens.less` will import `_colors.less`,  `_globals`, `_icons`, and `_fonts.less` too.

## Develop
[Refer to](./../libs/README.md)

## Icons

## Add new icons

Add new SVG files in the `./src/svg/*` folder.

The filename of each files **must** follows [BEM CSS selector naming convention](https://en.bem.info/methodology/naming-convention/), since it's used as a part of the icon classname (eg. `chevron-right.svg` will become `.oui-icon-chevron-right`).

## Regenerate webfont

When new files has been added, you need to regenerate the font files by launching this script:

```sh
yarn icons
```

It creates all needed files in the `./src/fonts/oui-icons/*` folder for the webfont.

## Flags

## Add new flag

Add new SVG files in the `./src/svg/*` folder.

## Regenerate webfont

When new files has been added, you need to regenerate the font files by launching this script:

```sh
yarn flags
```

## Related links

 * Contribute: [https://github.com/ovh/ovh-ui-kit/blob/master/CONTRIBUTING.md](https://github.com/ovh/ovh-ui-kit/blob/master/CONTRIBUTING.md)
 * Report bugs: [https://github.com/ovh/ovh-ui-kit/issues](https://github.com/ovh/ovh-ui-kit/issues)
 * Get latest version: [https://github.com/ovh/ovh-ui-kit](https://github.com/ovh/ovh-ui-kit)

## Documentation

Documentation is available from the `packages/` folder, every package is self-documented throught a `README.md` file.

## License

See [https://github.com/ovh/ovh-ui-kit/blob/master/LICENSE](https://github.com/ovh/ovh-ui-kit/blob/master/LICENSE)
