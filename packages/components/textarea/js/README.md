# Textarea

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic

```html:preview
<oui-textarea
    model="$ctrl.text1"
    id="text-1"
    name="text-1"
    placeholder="Please insert your text..."
    rows="7"></oui-textarea>
```

### Validations

```html:preview
<oui-textarea
    id="text-2"
    name="text-2"
    placeholder="Please insert your text..."
    maxlength="20"></oui-textarea>
```

### Disabled

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.text3 = 'A disabled textarea'">
<oui-textarea
    id="text-3"
    name="text-3"
    model="$ctrl.text3"
    disabled></oui-textarea>
</div>
```

### Read-only

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.text4 = 'A readonly textarea'">
<oui-textarea
    id="text-4"
    name="text-4"
    model="$ctrl.text4"
    readonly></oui-textarea>
</div>
```

### Change event

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.changed = false">
<oui-textarea
    id="text-5"
    name="text-5"
    placeholder="Please insert your text..."
    on-change="$ctrl.changed = true; $ctrl.newValue = modelValue"></oui-textarea>
Has model changed? {{$ctrl.changed}}
<div ng-if="$ctrl.changed">New value: {{$ctrl.newValue}}</div>
</div>
```

## API

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `model`       | string    | =?        | no                | n/a               | n/a       | current value of the textarea
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the textarea
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the textarea
| `placeholder` | string    | @?        | yes               | n/a               | n/a       | placeholder attribute of the textarea
| `rows`        | string    | @?        | yes               | n/a               | n/a       | number of displayed rows without scrolling
| `minlength`   | number    | <?        | no                | n/a               | n/a       | min length of the model value
| `maxlength`   | number    | <?        | no                | n/a               | n/a       | max length of the model value
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `readonly`    | boolean   | <?        | no                | `true`, `false`   | `false`   | readonly flag
| `required`    | boolean   | <?        | no                | `true`, `false`   | `false`   | required flag
| `on-change`   | function  | &?        | no                | n/a               | n/a       | model value change callback

## Configuration

The textarea can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.textarea"
]).config(ouiTextareaConfigurationProvider => {
    ouiTextareaConfigurationProvider.setTranslations({ // default translations
        lengthCounter: "{{length}}/{{max}} characters"
    });
});
```
