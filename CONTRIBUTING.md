# Setup your environment

**oui-kit** allows to show **oui-less**'s components and is also used as a development environment.

## Yarn

### oui-less

1. Start from your workspace directory     
    example:`~/workspace`
2. `git clone` the **oui-less** repository locally
3. Move to the `oui-less` directory
4. Link `oui-less` to yarn links

```
cd <your workspace directory>
git clone <oui-less repository>
cd oui-less
yarn link
```
    
### oui-kit

1. Start from your workspace directory     
    example:`~/workspace`
2. `git clone` the oui-kit repository locally
3. Move to the `oui-less` directory
4. Install external dependencies
5. Use your local `oui-less` repository instead of the remote dependency
6. Launch `oui-kit` in watch mode

```
cd <your workspace directory>
git clone <oui-kit repository>
cd oui-kit
yarn install
yarn link oui-less
yarn start
```
    
> **Important:** All changes made in **oui-angular**'s js files will be automatically updated in **oui-kit**.

## NPM

For those using npm instead of yarn here is a list of equivalences: <https://yarnpkg.com/en/docs/migrating-from-npm>

## Commits

All commits in this project must follow this specific message convention: <https://gist.github.com/stephenparish/9941e89d80e2bc58a153>

