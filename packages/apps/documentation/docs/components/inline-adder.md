# Inline-adder

## Usage

### Basic

```html:preview
<oui-inline-adder>
    <oui-inline-adder-row>
        <oui-inline-adder-field>
            <oui-field label="Field 1">
                <input type="text" class="oui-input" name="field1" ng-model="field1" required>
            </oui-field>
        </oui-inline-adder-field>
        <oui-inline-adder-field ng-hide="$ctrl.togglerLoading">
            <oui-field label="Field 2">
                <input type="text" class="oui-input" name="field2" ng-model="field2" required>
            </oui-field>
        </oui-inline-adder-field>
    </oui-inline-adder-row>
</oui-inline-adder>
```

### Multiple rows

```html:preview
<oui-inline-adder>
    <oui-inline-adder-row>
        <oui-inline-adder-field>
            <oui-field label="Field 1">
                <input type="text" class="oui-input" name="field1" ng-model="field1" required>
            </oui-field>
        </oui-inline-adder-field>
        <oui-inline-adder-field>
            <oui-field label="Field 2">
                <input type="text" class="oui-input" name="field2" ng-model="field2">
            </oui-field>
        </oui-inline-adder-field>
    </oui-inline-adder-row>
    <oui-inline-adder-row>
        <oui-inline-adder-field>
            <oui-field label="Field 3">
                <input type="text" class="oui-input" name="field3" ng-model="field3" required>
            </oui-field>
        </oui-inline-adder-field>
        <oui-inline-adder-field>
            <oui-field label="Field 4">
                <input type="text" class="oui-input" name="field4" ng-model="field4">
            </oui-field>
        </oui-inline-adder-field>
    </oui-inline-adder-row>
</oui-inline-adder>
```

### Adaptive fields

**Note**: Fields with `adaptive` attribute will adapt their size to their content.

```html:preview
<oui-inline-adder>
    <oui-inline-adder-row>
        <oui-inline-adder-field>
            <oui-field label="Field 1">
                <input type="text" class="oui-input" name="field1" ng-model="field1" required>
            </oui-field>
        </oui-inline-adder-field>
        <oui-inline-adder-field adaptive>
            <oui-field label="Field 2" size="m">
                <label class="oui-select">
                    <select name="field2" ng-model="field2" class="oui-select__input" required>
                        <option value="" disabled selected>Select the OS</option>
                        <option value="freebsd">FreeBSD</option>
                        <option value="linux">Linux</option>
                        <option value="osx">OSX</option>
                        <option value="windows">Windows</option>
                    </select>
                    <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
                </label>
            </oui-field>
        </oui-inline-adder-field>
        <oui-inline-adder-field adaptive>
            <oui-field label="Field 3">
                <oui-numeric name="field3" model="field3"></oui-numeric>
            </oui-field>
        </oui-inline-adder-field>
    </oui-inline-adder-row>
</oui-inline-adder>
```

### Events

#### `on-add`

**Note**: If you want to access the form inside `on-add` callback, you need to use the `form` variable as below.

```html:preview
<oui-inline-adder on-add="$ctrl.onAdd(form)">
    <oui-inline-adder-row>
        <oui-inline-adder-field>
            <oui-field label="Field 1">
                <input type="text" class="oui-input" name="field1" ng-model="field1" required>
            </oui-field>
        </oui-inline-adder-field>
    </oui-inline-adder-row>
</oui-inline-adder>
<div class="oui-doc-preview-only">
    <p>On Add</p>
    <pre class="oui-doc-code oui-doc-code_json">{{$ctrl.addedForm | json}}</pre>
</div>
```

#### `on-remove`

**Note**: If you want to access the form inside `on-remove` callback, you need to use the `form` variable as below.

```html:preview
<oui-inline-adder on-remove="$ctrl.onRemove(form)">
    <oui-inline-adder-row>
        <oui-inline-adder-field>
            <oui-field label="Field 1">
                <input type="text" class="oui-input" name="field1" ng-model="field1" required>
            </oui-field>
        </oui-inline-adder-field>
    </oui-inline-adder-row>
</oui-inline-adder>
<div class="oui-doc-preview-only">
    <p>On Remove</p>
    <pre class="oui-doc-code oui-doc-code_json">{{$ctrl.removedForm | json}}</pre>
</div>
```

#### `on-change`

**Note**: If you want to access the forms array inside `on-change` callback, you need to use the `forms` variable as below.

```html:preview
<oui-inline-adder on-change="$ctrl.onChange(forms)">
    <oui-inline-adder-row>
        <oui-inline-adder-field>
            <oui-field label="Field 1">
                <input type="text" class="oui-input" name="field1" ng-model="field1" required>
            </oui-field>
        </oui-inline-adder-field>
    </oui-inline-adder-row>
</oui-inline-adder>
<div class="oui-doc-preview-only">
    <p>On Change</p>
    <pre class="oui-doc-code oui-doc-code_json">{{$ctrl.changedForms | json}}</pre>
</div>
```

## API

### oui-inline-adder

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `on-add`      | function  | &         | no                | n/a               | n/a       | handler triggered when a row is added
| `on-remove`   | function  | &         | no                | n/a               | n/a       | handler triggered when a row is removed
| `on-change`   | function  | &         | no                | n/a               | n/a       | handler triggered when rows have changed

### oui-inline-adder-field

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `adaptive`    | boolean   | <?        | yes               | `true`, `false`   | `false`   | adaptive field flag

## Configuration

The inline adder can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.inline-adder"
]).config(ouiInlineAdderConfigurationProvider => {
    ouiInlineAdderConfigurationProvider.setTranslations({ // default translations
        ariaAddItem: "Add Item",
        ariaRemoveItem: "Remove Item"
    });
});
```
