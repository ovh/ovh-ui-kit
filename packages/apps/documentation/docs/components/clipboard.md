# Clipboard

## Usage

### Default

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.simpleModel = 'Copy this text'">
<oui-clipboard model="$ctrl.simpleModel"></oui-clipboard>
</div>
<div class="oui-doc-preview-only">
    <p><strong>Model value:</strong> {{$ctrl.simpleModel}}</p>
</div>
```

### Formatted text

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.formattedModel = 'Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Integer sed lacinia nisi.
Integer eleifend ipsum in pulvinar sodales.
Donec vitae lobortis dui,
at accumsan purus.'">
<oui-clipboard model="$ctrl.formattedModel"></oui-clipboard>
</div>
<div class="oui-doc-preview-only">
    <p style="white-space: pre-wrap;"><strong>Model value:</strong> {{$ctrl.formattedModel}}</p>
</div>
```

## API

| Attribute | Type      | Binding   | One-time Binding  | Values    | Default   | Description
| ----      | ----      | ----      | ----              | ----      | ----      | ----
| `model`   | object    | =         | no                | n/a       | n/a       | model bound to component
| `id`      | string    | @?        | yes               | n/a       | n/a       | id attribute of the input
| `name`    | string    | @?        | yes               | n/a       | n/a       | name attribute of the input

## Configuration

The clipboard can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.clipboard"
]).config(ouiClipboardConfigurationProvider => {
    ouiClipboardConfigurationProvider.setTranslations({ // default translations
        copyToClipboardLabel: "Copy to clipboard",
        copiedLabel: "Copied",
        notSupported: "Copy to clipboard not supported. Please copy the text manually"
    });
});
```
