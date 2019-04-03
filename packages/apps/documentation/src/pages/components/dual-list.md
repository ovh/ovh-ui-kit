# Dual List

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Basic

#### Array of strings

```html:preview
<oui-dual-list 
    source="$ctrl.sourceStrings"
    target="$ctrl.targetStrings">
    <oui-dual-list-source searchable></oui-dual-list-source>
    <oui-dual-list-target></oui-dual-list-target>
</oui-dual-list>
```

#### Array of objects

```html:preview
<oui-dual-list 
    source="$ctrl.sourceObjects"
    target="$ctrl.targetObjects"
    property="name">
    <oui-dual-list-source searchable></oui-dual-list-source>
    <oui-dual-list-target></oui-dual-list-target>
</oui-dual-list>
```

#### Array of objects (deep nested property)

```html:preview
<oui-dual-list 
    source="$ctrl.sourceNestedObjects"
    target="$ctrl.targetNestedObjects"
    property="name.firstName">
    <oui-dual-list-source searchable></oui-dual-list-source>
    <oui-dual-list-target></oui-dual-list-target>
</oui-dual-list>
```

### Loading state

**Note**: If `source` or `target` attribute are undefined, the loading will be automatically active.

```html:preview
<div class="oui-doc-preview-only">
    <p>
        <button class="oui-button oui-button_primary" type="button" ng-class="{
                'oui-button_primary': $ctrl.togglerSourceLoading,
                'oui-button_secondary': !$ctrl.togglerSourceLoading
            }" ng-click="$ctrl.togglerSourceLoading = !$ctrl.togglerSourceLoading">
            Toggle source loading
        </button>
        <button class="oui-button oui-button_primary" type="button" ng-class="{
                'oui-button_primary': $ctrl.togglerTargetLoading,
                'oui-button_secondary': !$ctrl.togglerTargetLoading
            }" ng-click="$ctrl.togglerTargetLoading = !$ctrl.togglerTargetLoading">
            Toggle target loading
        </button>
    </p>
</div>
<oui-dual-list 
    source="$ctrl.sourceLoading"
    target="$ctrl.targetLoading">
    <oui-dual-list-source loading="$ctrl.togglerSourceLoading" searchable></oui-dual-list-source>
    <oui-dual-list-target loading="$ctrl.togglerTargetLoading"></oui-dual-list-target>
</oui-dual-list>
```

### Events

**Note**: Bulk actions `Add all` and `Remove all` will trigger callbacks for each moved items.

```html:preview
<oui-dual-list 
    source="$ctrl.sourceEvents"
    target="$ctrl.targetEvents"
    on-add="$ctrl.onAdd(item)"
    on-remove="$ctrl.onRemove(item)"
    on-change="$ctrl.onChange(item)">
    <oui-dual-list-source searchable></oui-dual-list-source>
    <oui-dual-list-target></oui-dual-list-target>
</oui-dual-list>
<div class="oui-doc-preview-only" style="margin-top: 15px;">
    <p><strong>onAdd ({{$ctrl.onAddCount}}):</strong> {{$ctrl.onAddItem | json}}</p>
    <p><strong>onRemove ({{$ctrl.onRemoveCount}}):</strong> {{$ctrl.onRemoveItem | json}}</p>
    <p><strong>onChange ({{$ctrl.onChangeCount}}):</strong> {{$ctrl.onChangeItem | json}}</p>
</div>
```

## API

### oui-dual-list

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `source`      | array     | =         | no                | n/a               | n/a       | source model bound to component
| `target`      | array     | =         | no                | n/a               | n/a       | target model bound to component
| `property`    | string    | @?        | no                | n/a               | n/a       | property path used to get value from item
| `on-add`      | function  | &         | no                | n/a               | n/a       | handler triggered when an item is added
| `on-remove`   | function  | &         | no                | n/a               | n/a       | handler triggered when an item is removed
| `on-change`   | function  | &         | no                | n/a               | n/a       | handler triggered when items have changed

### oui-dual-list-source

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `heading`     | string    | @?        | yes               | n/a               | n/a       | heading text
| `placeholder` | string    | @?        | yes               | n/a               | n/a       | placeholder text
| `loading`     | boolean   | <?        | no                | `true`, `false`   | `false`   | loading flag
| `searchable`  | boolean   | <?        | no                | `true`, `false`   | `false`   | searchable flag

### oui-dual-list-target

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `heading`     | string    | @?        | yes               | n/a               | n/a       | heading text
| `placeholder` | string    | @?        | yes               | n/a               | n/a       | placeholder text
| `loading`     | boolean   | <?        | no                | `true`, `false`   | `false`   | loading flag
| `searchable`  | boolean   | <?        | no                | `true`, `false`   | `false`   | searchable flag

## Configuration

The dual list can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.dual-list"
]).config(ouiDualListConfigurationProvider => {
    ouiDualListConfigurationProvider.setTranslations({ // default translations
        source: {
            heading: "Items to select",
            placeholder: "No item to select",
            move: "Add",
            moveAll: "Add all",
            search: "Search in source content"
        },
        target: {
            heading: "Selected items",
            placeholder: "No selected item",
            move: "Remove",
            moveAll: "Remove all",
            search: "Search in target content"
        }
    });
});
```
