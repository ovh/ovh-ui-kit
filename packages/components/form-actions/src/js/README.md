# Form Actions

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default

```html:preview
<oui-form-actions></oui-form-actions>
```

**Note**: Cancel button is hidden if there is no `href` or `on-cancel` attributes.

### Custom naming

```html:preview
<oui-form-actions
    on-submit="$ctrl.submit()"
    href="#"
    submit-text="Apply"
    cancel-text="Close">
</oui-form-actions>
```

### on-submit and on-cancel events

```html:preview
<div ng-init="$ctrl.disabled = false" class="oui-doc-preview-only-keep-children">
<p class="oui-doc-preview-only">
    <strong>Last action</strong>: {{ $ctrl.lastAction }}
</p>
<oui-form-actions
    on-submit="$ctrl.lastAction = 'submit'"
    on-cancel="$ctrl.lastAction = 'cancel'">
</oui-form-actions>
</div>
```

## API

| Attribute     | Type      | Binding   | One-time Binding  | Values    | Default   | Description
| ----          | ----      | ----      | ----              | ----      | ----      | ----
| `submit-text` | string    | @?        | yes               | n/a       | `Submit`  | submit button text
| `cancel-text` | string    | @?        | yes               | n/a       | `Cancel`  | cancel button text
| `href`        | string    | @?        | yes               | n/a       | n/a       | link url on cancel
| `on-submit`   | function  | &         | no                | n/a       | n/a       | button submit click handler
| `on-cancel`   | function  | &?        | no                | n/a       | n/a       | button cancel click handler

## Configuration

The form actions can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.form-actions"
]).config(ouiFormActionsConfigurationProvider => {
    ouiFormActionsConfigurationProvider.setTranslations({ // default translations
        submit: "Submit",
        cancel: "Cancel"
    });
});
```
