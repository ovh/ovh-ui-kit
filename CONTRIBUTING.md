# Contributing to project ovh-ui-kit

This project accepts contributions. In order to contribute, you should
pay attention to a few things:

1. your code must follow the coding style rules
2. your code must be documented
3. your work must be signed (see below)
4. you may contribute through GitHub Pull Requests

All contributions are welcome. However, keeping in mind the primary goal
of this project, which is to provide a stylekit for the _OVH_ brand, we
**strongly recommend** that you submit a RFC pull request or reach out
to the [UX team on Gitter](https://gitter.im/ovh/ux) to discuss your
proposal first.

# Coding style rules

* Use the [BEM CSS selector naming convention](https://en.bem.info/methodology/naming-convention/).
* Lint your code with stylelint: `npm run lint`.
* Test your build: `npm run build`.

# Submitting Modifications

The contributions should be submitted through Github Pull Requests.

# Licensing for new files

ovh-ui-kit is licensed under a modified BSD-3-Clause license. Anything
contributed to ovh-ui-kit must be released under this license.

When introducing a new file into the project, please make sure it has a
copyright header making clear under which license it's being released.

# Setup your environment

**ovh-ui-kit-documentation** showcases **ovh-ui-kit**'s components and
doubles as a development environment. This section provides a guide to
a local development installation.

## Yarn

### ovh-ui-kit

1. Start from your workspace directory
    example:`~/workspace`
2. `git clone` the **ovh-ui-less** repository locally
3. Move to the `ovh-ui-less` directory
4. Link `ovh-ui-less` to yarn links

```
cd <your workspace directory>
git clone <ovh-ui-less repository>
cd ovh-ui-kit
yarn link
```

### ovh-ui-kit-documentation

1. Start from your workspace directory
    example:`~/workspace`
2. `git clone` the **ovh-ui-kit-documentation** repository locally
3. Move to the `ovh-ui-kit` directory
4. Install external dependencies
5. Use your local `ovh-ui-kit` repository instead of the remote dependency
6. Launch `ovh-ui-kit` in watch mode

```
cd <your workspace directory>
git clone <ovh-ui-kit-documentation repository>
cd ovh-ui-kit-documentation
yarn install
yarn link ovh-ui-kit
yarn start
```

## NPM

For those using npm instead of yarn here is a list of equivalences: <https://yarnpkg.com/en/docs/migrating-from-npm>

## Commits

All commits in this project must follow this specific message convention: <https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit>
