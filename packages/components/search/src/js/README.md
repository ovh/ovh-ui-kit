# Search field

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic

```html:preview
<oui-search
    model="$ctrl.modelValue">
</oui-search>
```

### Placeholder

```html:preview
<oui-search
    model="$ctrl.modelValue"
    placeholder="Placeholder example">
</oui-search>
```

### Disabled

```html:preview
<oui-search
    model="$ctrl.modelValue"
    disabled>
</oui-search>
```

### Accessibility

**Note**: `aria-label` add an attribute `aria-label` on the input.

```html:preview
<oui-search
    model="$ctrl.modelValue"
    aria-label="Accessibility text">
</oui-search>
```

### Autocomplete

See [Autocomplete](#!/oui-angular/autocomplete) directive for more informations.

```html:preview
<oui-search
    model="$ctrl.autocompleteModelValue"
    autocomplete="$ctrl.autocomplete"
    autocomplete-property="country.name"
    placeholder="Search country name">
</oui-search>
```

### Events

**Note**: If you want to access the model inside `on-change` and `on-submit` callbacks, you need to use the `modelValue` variable as below.

```html:preview
<oui-search
    model="$ctrl.modelValue"
    on-change="$ctrl.onSearchChange(modelValue)"
    on-reset="$ctrl.onSearchReset()"
    on-submit="$ctrl.onSearchSubmit(modelValue)">
</oui-search>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.modelValue}}</p>
    <p><strong>onChange value:</strong> {{$ctrl.changedValue}}</p>
    <p><strong>onSubmit value:</strong> {{$ctrl.submittedValue}}</p>
    <p><strong>onReset count:</strong> {{$ctrl.resetCount}}</p>
</div>
```

## API

| Attribute                 | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----                      | ----      | ----      | ----              | ----              | ----      | ----
| `model`                   | object    | =         | no                | n/a               | n/a       | model bound to component
| `id`                      | string    | @?        | yes               | n/a               | n/a       | id attribute of the button
| `name`                    | string    | @?        | yes               | n/a               | n/a       | name attribute of the button
| `placeholder`             | string    | @?        | yes               | n/a               | n/a       | placeholder text
| `aria-label`              | string    | @?        | yes               | n/a               | n/a       | accessibility label
| `debounce`                | number    | <?        | no                | n/a               | n/a       | debounce of the model value
| `minlength`               | number    | <?        | no                | n/a               | n/a       | min length of the model value
| `maxlength`               | number    | <?        | no                | n/a               | n/a       | max length of the model value
| `disabled`                | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `on-change`               | function  | &         | no                | n/a               | n/a       | handler triggered when model has changed
| `on-reset`                | function  | &         | no                | n/a               | n/a       | handler triggered when form is reseted
| `on-submit`               | function  | &         | no                | n/a               | n/a       | handler triggered when form is submitted


### `oui-autocomplete` attributes

See [Autocomplete](#!/oui-angular/autocomplete) directive for more informations.

| Attribute                 | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----                      | ----      | ----      | ----              | ----              | ----      | ----
| `autocomplete`            | array     | <         | no                | n/a               | n/a       | array of suggestions
| `autocomplete-options`    | object    | <?        | yes               | n/a               | n/a       | options of autocomplete
| `autocomplete-property`   | string    | @?        | no                | n/a               | n/a       | property path used to get value from suggestion
| `autocomplete-on-select`  | function  | &         | no                | n/a               | n/a       | handler triggered when suggestion is selected
