# OVH UI (Less)

A stylekit for the OVH brand.

## Installation

```
yarn add --dev "git+ssh://git@stash.ovh.net:7999/UXCOMPONENTS/oui-less.git"
```

## Usage

### Dependencies

Follow guides for those dependencies, because you need to integrate them by yourself:

- [ux.tools/less-plugin-remcalc](#!/documentation/less-plugin-remcalc)

### Integration

#### grunt (grunt-contrib-less)

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

#### webpack (less-loader)

Webpack provide the `~` prefix for package imports:

```less
@import "~oui-less/packages/oui/stylekit.less";

// or a-la-carte:

@import "~oui-less/packages/oui-button/button.less";
@import "~oui-less/packages/oui-radio/radio.less";
@import "~oui-less/packages/oui-field/field.less";

[...]
```

#### bootstrap

For those who want to use **oui-less** with **bootstrap** on the same project you need change
the `rem-base` to `10px` otherwise components proportions will not be respected.

```less
@import '~bootstrap/less/bootstrap';

// Sets rem-base to 10px because bootstrap sets font-size: 10px on the html element.
@rem-base: rem-base(10px);

@import "~oui-less/packages/oui/stylekit.less";
```

## Publish a new version

When publishing a new version npm or yarn will execute some common tasks:

1. Build the project (if the build fail, publish is aborted)
2. Change the version inside the `package.json` to the new version
3. Commit the new `package.json`
4. Create a new tag like `v<version>`
5. Changes and tags are pushed to the remote server

### npm

```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

### yarn

```
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
- Internet Explorer (11 only)
