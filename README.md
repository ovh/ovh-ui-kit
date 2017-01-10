<p align="center"><img src="http://i.imgur.com/JJYWgLD.png" alt="ovh"/></p>

<hr>

# OVH UI (Less)

A stylekit for the OVH brand.

> Project status: **mvp**

## Installation

```
yarn add --dev "git+ssh://git@stash.ovh.net:7999/~guillaume.coguiec/oui-less.git"
```

## Usage

### grunt (grunt-contrib-less)

To help you prevent `node_modules` from being present in your sources, you may want to configure the stylekit as an include path:

```js
less: {
    [...],
    options: {
        paths: [
            "./node_modules/oui-less/packages"
        ]
    }
}
```

the whole tool will be available for import globally:

```less
@import "oui/stylekit";

// or you can import every component a-la-carte:

@import "oui-button/button";
@import "oui-radio/radio";
@import "oui-field/field";

[...]
```

### webpack (less-loader)

Webpack provide the `~` prefix for package imports:

```less
@import "~oui-less/packages/oui/stylekit.less";

// or a-la-carte:

@import "~oui-less/packages/oui-button/button.less";
@import "~oui-less/packages/oui-radio/radio.less";
@import "~oui-less/packages/oui-field/field.less";

[...]
```
## Documentation

Documentation is available from the `packages/` folder, every package is self-documented throught a `README.md` file.

## Browser Support

- Chrome (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Opera (last 2 versions)
- Edge (last 2 versions)
- Internet Explorer (11 only)
