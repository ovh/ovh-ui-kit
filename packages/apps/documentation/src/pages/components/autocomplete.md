# Autocomplete

## Usage

### Basic

#### Array of strings

```html:preview
<input type="text" class="oui-input oui-input_inline" 
    placeholder="Search country name"
    ng-model="$ctrl.modelStrings"
    oui-autocomplete="$ctrl.suggestionStrings">
```

#### Array of objects

```html:preview
<input type="text" class="oui-input oui-input_inline" 
    placeholder="Search country name"
    ng-model="$ctrl.modelObjects"
    oui-autocomplete="$ctrl.suggestionObjects"
    oui-autocomplete-property="country.name">
```

### Events

**Note**: If you want to access the parameters inside `on-select` callback, you need to use `value` variable as below.
It will return the corresponding value from your array of suggestions.

```html:preview
<input type="text" class="oui-input oui-input_inline" 
    placeholder="Search country name"
    ng-model="$ctrl.modelOnSelect"
    oui-autocomplete="$ctrl.suggestionObjects"
    oui-autocomplete-property="country.name"
    oui-autocomplete-on-select="$ctrl.selectedValue = value">
<div class="oui-doc-preview-only">
    <p><strong>model value:</strong> {{$ctrl.modelOnSelect | json}}</p>
    <p><strong>onSelect 'value' value:</strong> {{$ctrl.selectedValue | json}}</p>
</div>
```

## Variants

### Search

See [Search](#!/components/search)  component.

```html:preview
<oui-search
    model="$ctrl.modelSearch"
    autocomplete="$ctrl.suggestionObjects"
    autocomplete-property="country.name"
    placeholder="Search country name">
</oui-search>
```

## API

| Attribute                     | Type      | Binding   | One-time binding  | Values | Default   | Description
| ----                          | ----      | ----      | ----              | ----   | ----      | ----
| `oui-autocomplete`            | array     | <         | no                | n/a    | n/a       | array of suggestions
| `oui-autocomplete-options`    | object    | <?        | yes               | n/a    | n/a       | options of autocomplete
| `oui-autocomplete-property`   | string    | @?        | no                | n/a    | n/a       | property path used to get value from suggestion
| `oui-autocomplete-on-select`  | function  | &         | no                | n/a    | n/a       | handler triggered when suggestion is selected

## Configuration

The autocomplete can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.autocomplete"
]).config(ouiAutocompleteConfigurationProvider => {
    ouiAutocompleteConfigurationProvider.setOptions({ // default options
        debounceDelay: 500,
        minLength: 2
    });
});
```
