# Skeleton

## Usage

### Default
```html:preview
<oui-skeleton></oui-skeleton>
```

### Size
```html:preview
<oui-skeleton size="xs"></oui-skeleton>
<oui-skeleton size="s"></oui-skeleton>
<oui-skeleton size="m"></oui-skeleton>
<oui-skeleton size="l"></oui-skeleton>
<oui-skeleton size="xl"></oui-skeleton>
<oui-skeleton size="auto"></oui-skeleton>
```

### Randomized width
```html:preview
<oui-skeleton randomized></oui-skeleton>
<oui-skeleton randomized></oui-skeleton>
<oui-skeleton randomized></oui-skeleton>
<oui-skeleton randomized></oui-skeleton>
<oui-skeleton randomized></oui-skeleton>
```

## API

| Attribute     | Type      | Binding | One-time Binding    | Values                    | Default   | Description
| ----          | ----      | ----    | ----                | ----                      | ----      | ----
| `size`        | String    | @?      | yes                 | `xs`, `s`, `m`, `l`, `xl` | `auto`    | Skeleton size
| `randomized`  | Boolean   | <?      | yes                 | `true`, `false`           | `false`   | Randomized width flag
