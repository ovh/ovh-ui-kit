# Installation

```js
angular.module('myModule', ['oui.file']);
```

# Configuration

The file component can be globally configured with a provider.

```js
angular.module('myModule', ['oui.file'])
  .config(ouiFileConfigurationProvider => {
    // default translations
    ouiFileConfigurationProvider.setTranslations({
      attachmentsHeading: 'Attachment(s)',
      dropArea: 'Attach document(s) by drap and drop or',
      dropAreaSelector: 'select a file',
      filePlaceholder: 'Select a file...',
      fileSelector: 'Select file',
      filesSelector: 'Select file(s)...',
      maxsizeError: 'This file exceeds the size limit',
      removeFile: 'Remove file from selector'
    });

    // default units
    ouiFileConfigurationProvider.setUnits([
      { size: 1000000000, suffix: 'GB' },
      { size: 1000000, suffix: 'MB' },
      { size: 1000, suffix: 'KB' },
      { size: 1, suffix: 'B' }
    ]);
  });
```

# API

## Component `oui-file`

| Attribute         | Type              | Binding   | One-time binding  | Values            | Default   | Description
| ----              | ----              | ----      | ----              | ----              | ----      | ----
| `model`           | array&lt;file&gt; | =         | no                | n/a               | n/a       | model bound to component
| `id`              | string            | @?        | yes               | n/a               | n/a       | id attribute of form input
| `name`            | string            | @?        | yes               | n/a               | n/a       | name attribute of form input
| `placeholder`     | string            | @?        | yes               | n/a               | n/a       | placeholder text
| `accept`          | string            | @?        | yes               | n/a               | n/a       | accept attribute of file input
| `maxsize`         | number            | <?        | no                | n/a               | n/a       | maximum file size in byte (support form validators)
| `disabled`        | boolean           | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `required`        | boolean           | <?        | no                | `true`, `false`   | `false`   | required flag
| `multiple`        | boolean           | <?        | yes               | `true`, `false`   | `false`   | allow multiple files
| `droparea`        | boolean           | <?        | yes               | `true`, `false`   | `false`   | enable a drop area to drag files
| `preview`         | boolean           | <?        | yes               | `true`, `false`   | `false`   | show preview of image files (works only with `image/*` files.)
| `on-select`       | function          | &         | no                | n/a               | n/a       | handler triggered when files are selected
| `on-remove`       | function          | &         | no                | n/a               | n/a       | handler triggered when attachment is removed
