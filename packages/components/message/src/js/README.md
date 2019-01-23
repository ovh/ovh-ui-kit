# oui-message

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic

```html:preview
<oui-message type="info">Message</oui-message>
<oui-message type="success">Message</oui-message>
<oui-message type="warning">Message</oui-message>
<oui-message type="error">Message</oui-message>
```

**Note**: Messages of type `info` and `success` are dismissable by default.

### Dismissable

You can force the dismissable state by adding `dismissable` attribute.

```html:preview
<oui-message type="info" dismissable="false">Message</oui-message>
<oui-message type="success" dismissable="false">Message</oui-message>
<oui-message type="warning" dismissable>Message</oui-message>
<oui-message type="error" dismissable>Message</oui-message>
```

### Accessibility

```html:preview
<oui-message aria-close-button-label="Close" type="info">Message</oui-message>
```

## API

| Attribute                 | Type      | Binding   | One-time binding  | Values                                | Default   | Description
| ----                      | ----      | ----      | ----              | ----                                  | ----      | ----
| `type`                    | string    | @         | yes               | `info`, `success`, `warning`, `error` | n/a       | message type
| `aria-close-button-label` | string    | @?        | yes               | n/a                                   | n/a       | accessibility label for close button
| `dismissable`             | boolean   | <?        | yes               | `true`, `false`                       | n/a       | dismissable flag for close button
| `on-dismissed`            | function  | &?        | no                | n/a                                   | n/a       | dismissed handler
