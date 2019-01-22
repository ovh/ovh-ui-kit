# Pagination

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### A few pages

```html:preview
<oui-pagination
    current-offset="$ctrl.pagination1.offset"
    total-items="$ctrl.pagination1.totalItems"
    on-change="$ctrl.onChange('pagination1', $event)">
</oui-pagination>
```

### Lots of pages

```html:preview
<oui-pagination
    current-offset="$ctrl.pagination2.offset"
    page-size="$ctrl.pagination2.pageSize"
    total-items="$ctrl.pagination2.totalItems"
    on-change="$ctrl.onChange('pagination2', $event)">
</oui-pagination>
```

### One page

```html:preview
<oui-pagination
    current-offset="1"
    page-size="100"
    total-items="12">
</oui-pagination>
```

## API

| Attribute         | Type      | Binding   | One-time Binding  | Values    | Default   | Description                                      |
| ----              | ----      | ----      | ----              | ----      | ----      | ----                                             |
| `current-offset`  | number    | <         | no                | n/a       | n/a       | offset of the current page first item            |
| `page-size`       | number    | <?        | no                | n/a       | `25`      | number of items per page                         |
| `page-size-max`   | number    | <?        | no                | n/a       | n/a       | max page size of the page sizes list             |
| `total-items`     | number    | <         | no                | n/a       | n/a       | total number of items                            |
| `on-change`       | function  | &?        | no                | n/a       | n/a       | change callback, called on pagination changes    |

`on-change` callback takes a parameter `$event` containing:

  - `offset`: the new offset
  - `pageSize`: the new page size

## Configuration

The pagination can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.pagination"
]).config(ouiPaginationConfigurationProvider => {
    ouiPaginationConfigurationProvider.setPageSize(25); // default page size (when page-size attribute is not set)
    ouiPaginationConfigurationProvider.setPageSizeList([25, 50, 100, 300]); // List of page sizes
    ouiPaginationConfigurationProvider.setTranslations({ // Translations (double curly braces for placeholders)
        resultsPerPage: "Results per page",
        ofNResults: "of {{totalItems}} results",
        currentPageOfPageCount: "Page {{currentPage}} of {{pageCount}}",
        previousPage: "Previous page",
        nextPage: "Next page"
    });
});
```


