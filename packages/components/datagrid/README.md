# Installation

```js
angular.module('myModule', ['oui.datagrid']);
```

# Configuration

The datagrid can be globally configured with a provider.

```js
angular.module('myModule', ['oui.datagrid'])
  config(ouiDatagridConfigurationProvider => {
    // default page size (when page-size attribute is not set)
    ouiDatagridConfigurationProvider.setPageSize(25);

    // default translations
    ouiDatagridConfigurationProvider.setTranslations({
      emptyPlaceholder: 'No data available'
    });
});
```

# API

## Component `oui-datagrid`

| Attribute                         | Type      | Binding   | One-time binding    | Values           | Default      | Description
| ----                              | ----      | ----      | ----                | ----             | ----         | ----
| `id`                              | string    | @?        | no                  | n/a              | n/a          | id of the datagrid
| `page-size`                       | number    | @?        | no                  | n/a              | `25`         | maximum number of rows to show on each pages
| `rows`                            | array     | <?        | yes                 | n/a              | n/a          | local rows to load in the datagrid
| `empty-placeholder`               | string    | @?        | yes                 | n/a              | n/a          | custom placeholder text when there is no data
| `selectable-rows`                 | boolean   | <?        | no                  | `true`, `false`  | `false`      | allow rows to be selected
| `on-criteria-change`              | function  | &         | no                  | n/a              | n/a          | triggered when criteria changed. Use `$criteria` in your callback to get the result
| `on-page-change`                  | function  | &         | no                  | n/a              | n/a          | triggered when pagination is changed
| `on-row-select`                   | function  | &         | no                  | n/a              | n/a          | triggered when a row is selected
| `on-sort-change`                  | function  | &         | no                  | n/a              | n/a          | triggered when sort is triggered. Use `$sort` in your callback to get the result

### Custom cell templates

Template inside `oui-datagrid-column` component will be used as the content of each cell.

You can use:

* `$row` to get values of the current row
* `$rowIndex` to get index of the current row
* `$value` to get value of the cell

And if `selectable-rows` is enabled:

* `$isSelected` to get boolean of the current row selection state
* `$selectedRows` to get values of selected rows

```html
<oui-datagrid rows="$ctrl.data">
    <oui-datagrid-topbar>
      <pre>You have selected {{ $selectedRows.length }} row(s).</pre>
    </oui-datagrid-topbar>
    <oui-datagrid-column title="'Index'">
        {{$rowIndex}}
    </oui-datagrid-column>
    <oui-datagrid-column title="'Name'">
        {{$row.firstName}} {{$row.lastName}}
    </oui-datagrid-column>
    <oui-datagrid-column property="email">
        <a href="mailto:{{$value}}">{{$value}}</a>
    </oui-datagrid-column>
    <oui-datagrid-column property="birth">
        {{$value | date:shortDate}}
    </oui-datagrid-column>
    <oui-action-menu>
      <oui-action-menu-item disabled="$isSelected">Some action</oui-action-menu-item>
    </oui-action-menu>
</oui-datagrid>
```

### Row detail template

Add an element `oui-datagrid-row-detail` to add row detail
The template inside the element will be placed at the bottom of each row

```html
<oui-datagrid rows="$ctrl.data">
    <oui-datagrid-column title="'FirstName'">
        <span ng-bind="$row.firstName"></span>
    </oui-datagrid-column>
    <oui-datagrid-column title="'LastName'">
        <span ng-bind="$row.lastName"></span>
    </oui-datagrid-column>
    <oui-datagrid-row-detail>
        <a href="mailto:{{$row.email}}">{{$row.email}}</a>
    </oui-datagrid-row-detail>
</oui-datagrid>
```

### Attribute `on-row-select`

When `selectable-rows` is provided, you can listen to checkboxes changes with the `on-row-select` event. It provides `$row` as the triggered row and `$rows` as the complete list of rows selected so far.

```html
<oui-datagrid
  rows="$ctrl.data"
  selectable-rows
  on-row-select="$ctrl.onRowSelect($row, $rows)">
  [...]
</oui-datagrid>
```

## Attributes for async/remote data for `oui-datagrid`

| Attribute                         | Type      | Binding   | One-time binding    | Values           | Default      | Description
| ----                              | ----      | ----      | ----                | ----             | ----         | ----
| `rows-loader`                     | function  | &?        | yes                 | n/a              | n/a          | async rows to load in the datagrid (returns a promise with all rows)
| `row-loader`                      | function  | &?        | yes                 | n/a              | n/a          | async row details (returns a promise with details)

### Remote data

Use `rows-loader` to load remote data. The config of the datagrid is accessible with `$config` argument.

```html
<oui-datagrid rows-loader="$ctrl.loadData($config)">
    <oui-datagrid-column property="firstName"></oui-datagrid-column>
    <oui-datagrid-column property="lastName"></oui-datagrid-column>
    <oui-datagrid-column property="email"></oui-datagrid-column>
    <oui-datagrid-column property="phone"></oui-datagrid-column>
    <oui-datagrid-column property="birth"></oui-datagrid-column>
</oui-datagrid>
```

```js
class YourController {
  loadData ({ offset, pageSize, sort }) {

    // make what you want here

    return fetch('/path/to/your/api', {
      method: 'POST',
      body: { offset, pageSize, sort }
    }).then(response => response.json());
  }
}
```

Your method must:

 * return a promise or a compatible object
 * this promise must resolve a value of this shape:

```js
{
  'data': page, // your data (an array)
  'meta': {
    totalCount // total number of items
  }
}
```

| Attribute         | Type      | Binding   | One-time binding  | Values    | Default   | Description
| ----              | ----      | ----      | ----              | ----      | ----      | ----
| `data`            | array     | <?        | yes               | n/a       | n/a       | rows to show
| `meta`            | object    | n/a       | yes               | n/a       | n/a       | an object containing pagination information { totalCount: X }

### Remote partial data

Sometimes you will have to get remote data, but you want to fill other cell from separate API calls or by calculating these new values.

You can use `row-loader` with the current row as `$row` argument. Your method must return a promise that resolves to the transformed row.

```html
<oui-datagrid
    rows-loader="$ctrl.loadPartialData($config)"
    row-loader="$ctrl.loadRow($row)">
    <oui-datagrid-column property="firstName"></oui-datagrid-column>
    <oui-datagrid-column property="lastName"></oui-datagrid-column>
    <oui-datagrid-column property="email"></oui-datagrid-column>
    <oui-datagrid-column property="phone"></oui-datagrid-column>
    <oui-datagrid-column property="birth"></oui-datagrid-column>
</oui-datagrid>
```

## Attributes for dynamic columns customization for `oui-datagrid`

| Attribute                         | Type      | Binding   | One-time binding    | Values              | Default      | Description
| ----                              | ----      | ----      | ----                | ----                | ----         | ----
| `columns`                         | array     | <?        | no                  | _see example above_ | `undefined`  | columns attributes (see oui-datagrid-column below)
| `columns-parameters`              | array     | <?        | no                  | _see example above_ | `undefined`  | columns customization parameters
| `customizable`                    | boolean   | <?        | no                  | `true`, `false`     | `false`      | display a dropdown menu to select columns to show/hide
| `on-columns-parameters-change`    | function  | &         | no                  | n/a                 | n/a          | triggered on column parameter change when datagrid is customizable

### Attribute `columns`

Columns can be dynamically rendered using the `columns` attribute of datagrid.

Using this attribute, a new property `hidden` is available.

```html
<oui-datagrid
    rows="$ctrl.data"
    columns="[{
      title: 'First name',
      property: 'firstName',
      sortable: 'asc',
      searchable: true,
      filterable: true
    },
    {
      title: 'Last name',
      property: 'lastName',
      sortable: true,
      searchable: true,
      filterable: true
    },
    {
      title: 'Mother',
      property: 'parents.mother.lastName',
      template: '{{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}',
      sortable: true,
      hidden: !showParents
    },
    {
      title: 'Father',
      property: 'parents.father.lastName',
      template: '{{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}',
      sortable: true,
      hidden: !showParents
    }]">
</oui-datagrid>
```

## Attribute `columns-parameters`

`columns-parameters` is an array describing all basic parameters of each column.

```js
const columnsParameters = [{
    name: "column1"
}, {
    name: "column2",
    hidden: true
}];
```

This example shows columns parameters where "column1" column has no particular parameter and "column2" column is hidden.

These parameters override properties defined in `oui-datagrid-column` or `columns` attribute.

**Only `hidden` is supported for now.**

### Attribute `on-columns-parameters-change`

`on-columns-parameters-change` takes 2 parameters:

- `id`: the id of the table
- `columns`: the overrided parameters of each column. This value can be saved and then set in `columns-parameters`

```html
<oui-datagrid
    id="customizableDatagrid"
    rows="$ctrl.data"
    customizable
    columns-parameters="$ctrl.datagridParameters['customizableDatagrid']"
    on-columns-parameters-change="$ctrl.onColumnsParametersChange(id, columns)">

    <!-- A column can be tagged with "prevent-customization". -->
    <oui-datagrid-column title="'First name'" property="firstName" sortable="asc" type="string" searchable filterable prevent-customization></oui-datagrid-column>
    <oui-datagrid-column title="'Last name'" property="lastName" sortable type="string" searchable filterable></oui-datagrid-column>
    <oui-datagrid-column title="'Mother'" property="parents.mother.lastName" sortable>
      {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
    </oui-datagrid-column>
    <oui-datagrid-column title="'Father'" property="parents.father.lastName" sortable>
      {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
    </oui-datagrid-column>
    <oui-datagrid-column title="'Email'" property="email" sortable type="string" searchable filterable>
      <a href="mailto:{{$value}}">{{$value}}</a>
    </oui-datagrid-column>

    <!-- To be customizable, a column without property (needed to be sortable, filterable, ...),
        must have a name. -->
    <oui-datagrid-column name="birth" title="'Named column'">
        Birth: {{$row.birth}}
    </oui-datagrid-column>

    <!-- A column without property nor name is not customizable. -->
    <oui-datagrid-column title="'Not named column'">
        Phone: {{$row.phone}}
    </oui-datagrid-column>
</oui-datagrid>
```

## Component `oui-datagrid-column`

| Attribute               | Type            | Binding  | One-time binding  | Values            | Default   | Description
| ----                    | ----            | ----     | ----              | ----              | ----      | ----
| `title`                 | string          | n/a      | yes               | n/a               | n/a       | column title put in header
| `property`              | string          | n/a      | yes               | n/a               | `null`    | property path used to get value from value
| `sortable`              | string          | n/a      | yes               | `asc`, `desc`     | `asc`     | makes a column sortable and gives the order
| `type`                  | string          | n/a      | no                | See below         | `string`  | define a column type
| `filterable`            | n/a             | n/a      | no                | n/a               | n/a       | define a filterable column
| `searchable`            | n/a             | n/a      | no                | n/a               | n/a       | define a searchable column
| `type-options`          | object          | n/a      | no                | See below         | `{}`      | define options related to column type (see below)
| `hidden`                | boolean         | n/a      | no                | `true`, `false`   | `false`   | if the column is hidden by default
| `prevent-customization` | n/a             | n/a      | no                | n/a               | n/a       | prevent a column to be customizable

### Attribute `type-options`

`type-options` is used to give options to feed criteria values. Example:

```js
const typeOptions = {
  trueValue: 'Running', // displayed value for true value when type = boolean
  falseValue: 'Down', // displayed value for false value when type = boolean
  values: { // displayed values when type = options)
    nw: 'Network',
    db: 'Database',
    other: 'Other'
  },
  operators: [ // constraint operators list for this field
    'is'
  ]
};
```

### Types

Types are associated to operators. Here's the list of all availables types and operators:

```js
{
  'boolean': ['is', 'isNot'],
  'date': ['is', 'isAfter', 'isBefore'],
  'number': ['is', 'smaller', 'bigger'],
  'options': ['is', 'isNot'],
  'string': ['contains', 'containsNot', 'startsWith', 'endsWith', 'is', 'isNot']
}
```

## Service `ouiDatagridService`

### refresh()

Datagrid with local data can be refreshed by simply mutate `rows` value.

To refresh asynchronous data, you need to define an id for the datagrid and use `ouiDatagridService` to refresh it.

```html
<oui-button
    click="$ctrl.refreshDatagrid('foo', true)">
    Refresh datagrid with spinner
</oui-button>

<oui-datagrid
    id="foo"
    rows="$ctrl.data"
    row-loader="$ctrl.loadRandom($row)">
    [...]
</oui-datagrid>
```

```js
class YourController {
  constructor(ouiDatagridService) {
    this.ouiDatagridService = ouiDatagridService;
  }

  refreshDatagrid (datagridId, showSpinner) {
    this.ouiDatagridService.refresh(datagridId, showSpinner);
  }
}
```

| Argument      | Type      | Default       | Description
| ----          | ----      | ----          | ----
| `datagridId`  | string    | (mandatory)   | the `id` of the datagrid
| `showSpinner` | boolean   | `false`       | if you want to show the spinner while `rows-loader` is executed (like a first load)
