# Installation

## Install with [npm](https://www.npmjs.com/)

```bash
npm install @ovh-ux/ui-kit.css
npm install @ovh-ux/ui-kit.components
```

## Install with [yarn](https://yarnpkg.com)

```bash
yarn add @ovh-ux/ui-kit.css
yarn add @ovh-ux/ui-kit.components
```
## Usage

```js
import '@ovh-ux/ui-kit.css/dist/css/oui.css';
import '@ovh-ux/ui-kit.components/dist/js/oui-pagination.js';

angular.module('myModule', ['oui.pagination']);
```

# Configuration

The pagination can be globally configured with a provider.

```js
angular.module('myModule', ['oui.pagination'])
  .config(ouiPaginationConfigurationProvider => {
    // default page size (when page-size attribute is not set)
    ouiPaginationConfigurationProvider.setPageSize(25);

    // default list of page sizes
    ouiPaginationConfigurationProvider.setPageSizeList([25, 50, 100, 300]);

    // default translations (double curly braces for placeholders)
    ouiPaginationConfigurationProvider.setTranslations({
      resultsPerPage: 'Results per page',
      ofNResults: 'of {{totalItems}} results',
      currentPageOfPageCount: 'Page {{currentPage}} of {{pageCount}}',
      previousPage: 'Previous page',
      nextPage: 'Next page'
    });
  });
```

# API

## Component `oui-pagination`

| Attribute         | Type      | Binding   | One-time Binding  | Values    | Default   | Description
| ----              | ----      | ----      | ----              | ----      | ----      | ----
| `current-offset`  | number    | <         | no                | n/a       | n/a       | offset of the current page first item
| `page-size`       | number    | <?        | no                | n/a       | `25`      | number of items per page
| `page-size-max`   | number    | <?        | no                | n/a       | n/a       | max page size of the page sizes list
| `total-items`     | number    | <         | no                | n/a       | n/a       | total number of items
| `on-change`       | function  | &?        | no                | n/a       | n/a       | change callback, called on pagination changes

### Attribute `on-change`

`on-change` callback takes a parameter `$event` containing:

  - `offset`: the new offset
  - `pageSize`: the new page size
