# Chips

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<oui-chips items="$ctrl.items"></oui-chips>
</div>
```

### Stacked

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<oui-chips items="$ctrl.items" stacked></oui-chips>
</div>
```

### Closable

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<oui-chips items="$ctrl.items" closable></oui-chips>
</div>
```

### Events

**Note**: If you want to access the parameters inside `on-remove` callback, you need to use `items` or `removed` variables as below.

* `items` return the new array
* `removed` return the removed part

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<oui-chips items="$ctrl.itemsValue" on-remove="$ctrl.onRemove(items, removed)" closable></oui-chips>
</div>
<div class="oui-doc-preview-only">
    <button class="oui-button oui-button_primary" type="button" ng-click="$ctrl.addItem()">Add item</button>
    <p><strong>Items value:</strong> {{$ctrl.itemsValue | json}}</p>
    <p><strong>onRemove 'items' value:</strong> {{$ctrl.changedValue | json}}</p>
    <p><strong>onRemove 'removed' value:</strong> {{$ctrl.removedValue | json}}</p>
</div>
```

## API

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `items`       | object    | =         | no                | n/a               | n/a       | items bound to component
| `closable`    | boolean   | <?        | yes               | `true`, `false`   | `false`   | closable flag
| `stacked`     | boolean   | <?        | yes               | `true`, `false`   | `false`   | stacked flag
| `on-remove`   | function  | &         | no                | n/a               | n/a       | handler triggered when items are removed
