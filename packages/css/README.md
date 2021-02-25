This package contains all base styles, icons and utils for the components packages.

# Icons

## Add new icons

Add new SVG files in the `./src/svg/*` folder.

The filename of each files **must** follows [BEM CSS selector naming convention](https://en.bem.info/methodology/naming-convention/), since it's used as a part of the icon classname (eg. `chevron-right.svg` will become `.oui-icon-chevron-right`).

## Regenerate webfont

When new files has been added, you need to regenerate the font files by launching this script:

```sh
yarn icons
```

It creates all needed files in the `./src/fonts/oui-icons/*` folder for the webfont.
