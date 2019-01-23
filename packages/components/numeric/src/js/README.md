# Numeric

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default

```html:preview
<oui-numeric
    model="$ctrl.size">
</oui-numeric>
```

### Limits

```html:preview
<oui-numeric
    min="2"
    max="8"
    model="$ctrl.core">
</oui-numeric>
```

### Disabled

```html:preview
<oui-numeric
    model="$ctrl.foo"
    disabled>
</oui-numeric>
```

## API

| Attribute     | Type      | Binding   | One-time binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the input
| `name`        | string    | @?        | yes               | n/a               | n/a       | name attribute of the input
| `model`       | string    | =         | no                | n/a               | n/a       | model bound to component
| `min`         | integer   | <?        | no                | n/a               | `0`       | model lower bound
| `max`         | integer   | <?        | no                | n/a               | `99999`   | model upper bound
| `disabled`    | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `on-change`   | function  | &?        | no                | n/a               | n/a       | handler triggered when model changes
