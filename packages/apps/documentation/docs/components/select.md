# Select

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic (String array)

```html:preview
<oui-select name="letter"
    model="$ctrl.modelBasicString"
    items="['a', 'b', 'c']">
</oui-select>
```

### Basic (Object array)

```html:preview
<oui-select name="country"
    model="$ctrl.modelBasicObject"
    items="$ctrl.countries"
    match="country.name">
</oui-select>
```

### Placeholder

```html:preview
<oui-select name="letter"
    model="$ctrl.modelPlaceholder"
    placeholder="Select a letter..."
    items="['a', 'b', 'c']">
</oui-select>
```

### Searchable

```html:preview
<oui-select name="country"
    model="$ctrl.modelSearchable"
    placeholder="Select a country..."
    items="$ctrl.countries"
    match="country.name"
    searchable>
</oui-select>
```

### Multiple

```html:preview
<oui-select name="country"
    model="$ctrl.modelMultiple"
    placeholder="Select a country..."
    items="$ctrl.countries"
    match="country.name"
    multiple
    searchable>
</oui-select>
```

### Disabled

```html:preview
<oui-select name="country"
    model="$ctrl.modelDisabled"
    placeholder="Select a country..."
    items="$ctrl.countries"
    match="country.name"
    disabled>
</oui-select>
```

### Disabled Items

<oui-message type="info" dismissable="false">
    For each <code class="oui-doc-codespan">$item</code> in <code class="oui-doc-codespan">items</code> array, <code class="oui-doc-codespan">disable-item</code> will be called with current <code class="oui-doc-codespan">$item</code> as an argument. <br />
    If it returns true, <code class="oui-doc-codespan">$item</code> will be disabled. 
</oui-message>

```html:preview
<oui-select name="country"
    model="$ctrl.modelDisabledItems"
    placeholder="Select a country..."
    items="$ctrl.countries"
    disable-items="$ctrl.disableItems($item)"
    match="country.name">
</oui-select>
```

### Grouping

```html:preview
<oui-select name="country"
    model="$ctrl.modelGrouping"
    placeholder="Select a country..."
    items="$ctrl.countries"
    group-by="$ctrl.groupByFirstLetter"
    match="country.name">
</oui-select>
```

### Custom option template

<oui-message type="info" dismissable="false">
    Template inside <code class="oui-doc-codespan">oui-select</code> component will be used as the content of each option. <br />
    You can use <code class="oui-doc-codespan">$item</code> variable to get option value for your template.
</oui-message>

```html:preview
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

### On Change

<oui-message type="warning">
    Model will not be refreshed until the <code class="oui-doc-codespan">on-change</code> callback hasn't returned. <br />
    If you want to access the new model inside the <code class="oui-doc-codespan">on-change</code> callback you need to use the <code class="oui-doc-codespan">modelValue</code> variable as below.
</oui-message>

```html:preview
<div class="oui-doc-preview-only">
    <p><strong>Last onChange value:</strong> {{ $ctrl.onChangeModelValue | json}}</p>
    <p><strong>onBlur counter:</strong> {{ $ctrl.onBlurCounter }}</p>
    <p><strong>onFocus counter:</strong> {{ $ctrl.onFocusCounter }}</p>
</div>
<oui-select name="country"
    model="$ctrl.modelOnChange"
    placeholder="Select a country..."
    items="$ctrl.countries"
    required
    group-by="$ctrl.groupByFirstLetter"
    match="country.name"
    on-change="$ctrl.onChange(modelValue)"
    on-blur="$ctrl.onBlur()"
    on-focus="$ctrl.onFocus()">
    <span ng-bind="$item.country.name"></span><br>
    <small>
        Code: <span ng-bind="$item.code"></span>
    </small>
</oui-select>
```

## API

| Attribute         | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `model`           | object    | =         | no                | n/a               | n/a       | model bound to component
| `name`            | string    | @?        | yes               | n/a               | n/a       | name of the form component
| `title`           | string    | @?        | yes               | n/a               | n/a       | title of the form component
| `placeholder`     | string    | @?        | yes               | n/a               | n/a       | placeholder displayed when model is undefined
| `match`           | string    | @?        | no                | n/a               | n/a       | property of item to show as selected item
| `items`           | array     | <         | no                | n/a               | n/a       | array used to populate the list
| `disable-items`   | function  | &         | no                | n/a               | n/a       | predicate to determine items to disable
| `required`        | boolean   | <?        | no                | `true`, `false`   | `false`   | define if the field is required
| `disabled`        | boolean   | <?        | no                | `true`, `false`   | `false`   | define if the field is disabled
| `multiple`        | boolean   | <?        | yes               | `true`, `false`   | `false`   | allow multiple selection
| `group-by`        | function  | <?        | no                | n/a               | n/a       | function taking an item as parameter and returning the group name as as string
| `on-blur`         | function  | &         | no                | n/a               | n/a       | called focus is lost
| `on-focus`        | function  | &         | no                | n/a               | n/a       | called on focus
| `on-change`       | function  | &         | no                | n/a               | n/a       | handler triggered when value has changed

#### Deprecated

* `data-align`: Unused
