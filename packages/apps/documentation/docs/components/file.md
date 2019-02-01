# File

## Selector

### Basic

```html:preview
<oui-file model="$ctrl.modelBasic"></oui-file>
```

### Placeholder

```html:preview
<oui-file model="$ctrl.modelPlaceholder" placeholder="Placeholder example"></oui-file>
```

### Disabled

```html:preview
<oui-file model="$ctrl.modelDisabled" disabled></oui-file>
```

### File restriction

<oui-message type="info" dismissable="false">`maxsize` support form validators</oui-message>

```html:preview
<form novalidate name="fileForm">
    <oui-field label="Upload file" help-text="image/jpeg, image/png, image/gif (max size 150 KB)" size="xl">
        <oui-file name="fileUpload" model="$ctrl.modelField" 
            accept="image/jpeg,image/png,image/gif" 
            maxsize="150000" 
            required>
        </oui-file>
    </oui-field>
    <p><strong><code class="oui-doc-codespan">fileForm.$valid</code> value:</strong> {{fileForm.$valid | json}}</p>
    <p><strong><code class="oui-doc-codespan">fileForm.$submitted</code> value:</strong> {{fileForm.$submitted | json}}</p>
    <p><strong><code class="oui-doc-codespan">fileForm["fileUpload"].$error</code> value:</strong> {{fileForm["fileUpload"].$error | json}}</p>
    <oui-button type="submit">Submit</oui-button>
</form>
```

## Multiple files

### Basic

```html:preview
<oui-file model="$ctrl.modelMultiple" maxsize="150000" multiple></oui-file>
```

### With preview

<oui-message type="info" dismissable="false">Preview works only with `image/*` files.</oui-message>

```html:preview
<oui-file model="$ctrl.modelMultiplePreview" maxsize="150000" multiple preview></oui-file>
```

## Drag & Drop area

### Basic

```html:preview
<oui-file model="$ctrl.modelDroparea" maxsize="150000" droparea></oui-file>
```

### With preview

<oui-message type="info" dismissable="false">Preview works only with `image/*` files.</oui-message>

```html:preview
<oui-file model="$ctrl.modelDropareaPreview" maxsize="150000" droparea preview></oui-file>
```

## API

| Attribute         | Type              | Binding   | One-time binding  | Values            | Default   | Description
| ----              | ----              | ----      | ----              | ----              | ----      | ----
| `model`           | array&lt;file&gt; | =         | no                | n/a               | n/a       | model bound to component
| `id`              | string            | @?        | yes               | n/a               | n/a       | id attribute of form input
| `name`            | string            | @?        | yes               | n/a               | n/a       | name attribute of form input
| `placeholder`     | string            | @?        | yes               | n/a               | n/a       | placeholder text
| `accept`          | string            | @?        | yes               | n/a               | n/a       | accept attribute of file input
| `maxsize`         | number            | <?        | no                | n/a               | n/a       | maximum file size in byte
| `disabled`        | boolean           | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `required`        | boolean           | <?        | no                | `true`, `false`   | `false`   | required flag
| `multiple`        | boolean           | <?        | yes               | `true`, `false`   | `false`   | multiple flag
| `droparea`        | boolean           | <?        | yes               | `true`, `false`   | `false`   | droparea flag
| `preview`         | boolean           | <?        | yes               | `true`, `false`   | `false`   | preview flag
| `on-select`       | function          | &         | no                | n/a               | n/a       | handler triggered when files are selected

## Configuration

The file component can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.file"
]).config(ouiFileConfigurationProvider => {
    ouiFileConfigurationProvider.setTranslations({ // default translations
        attachmentsHeading: "Attachment(s)",
        dropArea: "Attach document(s) by drap and drop or",
        dropAreaSelector: "select a file",
        fileSelector: "Select file",
        filesSelector: "Select file(s)...",
        maxsizeError: "This file exceeds the size limit",
        removeFile: "Remove file from selector"
    });
    ouiFileConfigurationProvider.setUnits([ // default units
        { size: 1000000000, suffix: "GB" },
        { size: 1000000, suffix: "MB" },
        { size: 1000, suffix: "KB" },
        { size: 1, suffix: "B" }
    ]);
});
```
