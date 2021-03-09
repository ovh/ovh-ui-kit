# Installation

## Install with [npm](https://www.npmjs.com/)

```bash
npm install popper.js@1.16.1
npm install @ovh-ux/ui-kit.css
npm install @ovh-ux/ui-kit.components
```

## Install with [yarn](https://yarnpkg.com)

```bash
yarn add popper.js@1.16.1
yarn add @ovh-ux/ui-kit.css
yarn add @ovh-ux/ui-kit.components
```
## Usage

```js
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
import '@ovh-ux/ui-kit.components/dist/js/oui-tooltip.js';

angular.module('myModule', ['oui.tooltip']);
```

# API

## Directive `oui-tooltip`

| Attribute                 | Type      | Binding   | One-time Binding  | Values                                                                                        | Default           | Description
| ----                      | ----      | ----      | ----              | ----                                                                                          | ----              | ----
| `oui-tooltip`             | string    | @         | no                | n/a                                                                                           | `title` attribute | tooltip text
| `oui-tooltip-placement`   | string    | @?        | yes               | See [Popper placements](https://popper.js.org/popper-documentation.html#Popper.placements)    | `auto`            | tooltip placement
