# Button

## Usage

### Default

```html:preview
<oui-button on-click="onClick()">Default button</oui-button>
```

### Action buttons

```html:preview
<p>
  <oui-button variant="primary" text="Primary"></oui-button>
  <oui-button variant="secondary" text="Secondary"></oui-button>
  <oui-button variant="link" text="Link"></oui-button>
</p>

<p>
  <oui-button variant="primary" text="Primary" disabled></oui-button>
  <oui-button variant="secondary" text="Secondary" disabled></oui-button>
  <oui-button variant="link" text="Link" disabled></oui-button>
</p>
```

### Steps buttons

```html:preview
<p>
  <oui-button variant-nav="previous" on-click="previous()">Previous</oui-button>
  <oui-button variant="primary" variant-nav="next" on-click="next()">Next</oui-button>
</p>

<p>
  <oui-button variant-nav="previous" on-click="previous()" disabled>Previous</oui-button>
  <oui-button variant="primary" variant-nav="next" on-click="next()" disabled>Next</oui-button>
</p>
```

### Accessibility

```html:preview
<oui-button aria-label="Accessibility text" on-click="onClick()">Button with accessibility</oui-button>
```

- `aria-label` add an attribute `aria-label` on the button.

## API

| Attribute     | Type      | Binding   | One-time Binding  | Values                            | Default       | Description
| ----          | ----      | ----      | ----              | ----                              | ----          | ----
| `id`          | string    | @?        | yes               | n/a                               | n/a           | id attribute of the button
| `name`        | string    | @?        | yes               | n/a                               | n/a           | name attribute of the button
| `type`        | string    | @?        | yes               | `submit`, `button`, `reset`       | `button`      | type attribute of the button
| `variant`     | string    | @?        | yes               | `primary`, `secondary`, `link`    | `secondary`   | modifier for button
| `variant-nav` | string    | @?        | yes               | `next`, `previous`                | n/a           | nav modifier for button
| `aria-label`  | string    | @?        | yes               | n/a                               | n/a           | accessibility label
| `disabled`    | boolean   | <?        | no                | `true`, `false`                   | `false`       | disabled flag
| `on-click`    | function  | &?        | no                | n/a                               | n/a           | click handler
