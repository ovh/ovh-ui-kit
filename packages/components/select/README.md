# Installation

```js
angular.module('myModule', ['oui.select']);
```

# API

## Component `oui-select`

| Attribute           | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----                | ----      | ----      | ----              | ----              | ----      | ----
| `model`             | object    | =         | no                | n/a               | n/a       | model bound to component
| `name`              | string    | @?        | yes               | n/a               | n/a       | name of the form component
| `title`             | string    | @?        | yes               | n/a               | n/a       | title of the form component
| `placeholder`       | string    | @?        | yes               | n/a               | n/a       | placeholder displayed when model is undefined
| `match`             | string    | @?        | no                | n/a               | n/a       | property of item to show as selected item
| `items`             | array     | <?        | no                | n/a               | n/a       | array used to populate the list
| `disable-items`     | function  | &         | no                | n/a               | n/a       | predicate to determine items to disable
| `required`          | boolean   | <?        | no                | `true`, `false`   | `false`   | define if the component is required
| `disabled`          | boolean   | <?        | no                | `true`, `false`   | `false`   | define if the component is disabled
| `searchable`        | boolean   | <?        | no                | `true`, `false`   | `false`   | define if the component is searchable
| `multiple`          | boolean   | <?        | yes               | `true`, `false`   | `false`   | allow multiple selection
| `inline`            | boolean   | <?        | no                | `true`, `false`   | `false`   | enable inline style
| `group-by`          | function  | <?        | no                | n/a               | n/a       | function taking an item as parameter and returning the group name as as string
| `load`              | string    | @?        | no                | n/a               | n/a       | Load items over http using this property
| `load-options`      | object    | <?        | yes               | n/a               | n/a       | Configure the items http call. Options are `global`, `headers`, `method`, `timeout` and `size`
| `on-before-load`    | function  | &?        | no                | n/a               | n/a       | handler triggered just before the items are loaded
| `on-blur`           | function  | &         | no                | n/a               | n/a       | called focus is lost
| `on-focus`          | function  | &         | no                | n/a               | n/a       | called on focus
| `on-change`         | function  | &         | no                | n/a               | n/a       | handler triggered when value has changed
| `on-load`           | function  | &?        | no                | n/a               | n/a       | handler triggered when items have been loaded
| `on-error`          | function  | &?        | no                | n/a               | n/a       | handler triggered if an error occured when loading items
| `on-confirm-remove` | function  | &?        | no                | n/a               | n/a       | handler triggered before removing an item 

### Attribute `disable-items`

For each `$item` in `items` array, `disable-item` will be called with current `$item` as an argument.
If it returns true, `$item` will be disabled. 

### Attribute `on-change`

Model will not be refreshed until the `on-change` callback hasn't returned.
If you want to access the new model inside the `on-change` callback you need to use the `modelValue` variable as below. 

```html
<oui-select
    model="$ctrl.model"
    items="$ctrl.countries"
    match="country.name"
    on-change="$ctrl.onChange(modelValue)">
</oui-select>
```

### Attribute `on-confirm-remove`

When `multiple` is `true`, you may provide this handler before an item is removed from the selection. This handler is passed the item to remove and must return a promise. If the return value of that promise is truthy, the item is removed from the selection, otherwise it is kept.

```html
<oui-select
    model="$ctrl.model"
    items="$ctrl.items"
    multiple="true"
    on-confirm-remove="$ctrl.onConfirmRemove(item)">
</oui-select>
```

```javascript
async onConfirmRemove(item) {
  try {
    const removed = await doSomeAsyncTasksWith(item);
    return removed;
  } catch (e) {
    return false;
  }
}
```

### Custom option template

Template inside `oui-select` component will be used as the content of each option.
You can use `$item` variable to get option value for your template. 

```html
<oui-select name="country"
    model="$ctrl.modelCustomTemplate"
    placeholder="Select a country..."
    items="$ctrl.countries"
    group-by="$ctrl.groupByFirstLetter"
    match="country.name">
    <span ng-bind="$item.country.name" class="d-inline-block text-truncate"></span><br>
    <small>
        Code: <span ng-bind="$item.country.code"></span>
    </small>
</oui-select>
```

### Load items over http using `load`

The items could be loaded over http using the `load` property. To configure or react to the call that is made every time the `load` property changes, you may provide :

- The `load-options` property. An object containing :
  - `global` : properties passed to the $http method
  - `headers` : the http headers
  - `method` : the http method. Default is GET
  - `timeout` : the delay before the http call times out. Default is 30 seconds
  - `size` : the number of items passed as a http header. You can configure this header by injecting `ouiSelectConfiguration`. Default is 25. Set it to 0 to remove the http header
- The `on-before-load` event that is triggered just before the call is made. It is passed the `request` argument which is an object that is then passed as argument to the $http method. You can use this event to change how the whole request behaves. **You must return a new request object from this handler**
- The `on-load` event that is triggered when the call succeed. It is passed two arguments, `request` (the same as `on-before-load`), and `response` the $http response object
- The `on-error` event that is triggered when the call failed. It is passed two arguments, `request` (the same as `on-before-load`), and `error` the $http catched error
  

```html
<oui-select
    model="$ctrl.model"
    load="https://api/path/to/items"
    load-options="{
      global: { data: null },
      headers: { 'X-Custom-Header': 'someValue' },
      method: 'POST',
      timeout: 5000,
      size: 100,
    }"
    on-before-load="$ctrl.onBeforeLoad(request)"
    on-load="$ctrl.onLoad(request, response)"
    on-error="$ctrl.onError(request, error)">
</oui-select>
```

### Paginated items using cursor API

If your api supports a cursor-based pagination, you may want to provide your own headers. To do this, you can inject the `ouiSelectConfiguration` provider and use its `setPaginationHeaders` method, or return a whole new request object from the `on-before-load` event. The documentation for this method is the following

```javascript
/**
 * Set the headers for the pagination cursor api
 * @param {Object} paginationHeaders The http headers
 * @param {string=} paginationHeaders.cursor The cursor pagination header
 * @param {string=} paginationHeaders.nextCursor The next cursor pagination header
 * @param {string=} paginationHeaders.size The size pagination header
 */
setPaginationHeaders(paginationHeaders): void
```

`oui-select` has out of the box support for theses headers and will load the next page once the user hit the bottom of the selection drop down by scrolling it down
