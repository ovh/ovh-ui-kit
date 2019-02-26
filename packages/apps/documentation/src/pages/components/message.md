# Message

## Usage

### Basic

```html:preview
<oui-message type="info">Message</oui-message>
<oui-message type="success">Message</oui-message>
<oui-message type="warning">Message</oui-message>
<oui-message type="error">Message</oui-message>
```

### Dismissable

```html:preview
<oui-message type="info" dismissable>Message</oui-message>
<oui-message type="success" dismissable>Message</oui-message>
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
| `dismissable`             | boolean   | <?        | yes               | `true`, `false`                       | `false`   | dismissable flag for close button
| `on-dismiss`              | function  | &?        | no                | n/a                                   | n/a       | dismiss callback
