# Guide-menu

## Usage

### Default

```html:preview
<oui-guide-menu text="Guides" align="start">
    <oui-guide-menu-item href="#">Guide 1 (link)</oui-guide-menu-item>
    <oui-guide-menu-item on-click="$ctrl.onActionClick()">Guide 2 (button)</oui-guide-menu-item>
    <oui-guide-menu-divider></oui-guide-menu-divider>
    <oui-guide-menu-item href="#" external>External link</oui-guide-menu-item>
</oui-guide-menu>
```

### Guide with sections

```html:preview
<oui-guide-menu text="Guides" align="start">
    <oui-guide-menu-group label="Section 1">
        <oui-guide-menu-item href="#">Guide 1 (link)</oui-guide-menu-item>
        <oui-guide-menu-item on-click="$ctrl.onActionClick()">Guide 2 (button)</oui-guide-menu-item>
    </oui-guide-menu-group>
    <oui-guide-menu-group label="Section 2">
        <oui-guide-menu-item href="#">Guide 1 (link)</oui-guide-menu-item>
        <oui-guide-menu-item on-click="$ctrl.onActionClick()">Guide 2 (button)</oui-guide-menu-item>
    </oui-guide-menu-group>
    <oui-guide-menu-divider></oui-guide-menu-divider>
    <oui-guide-menu-item href="#" external>External link</oui-guide-menu-item>
</oui-guide-menu>
```

### In Header

```html:preview
<oui-header heading="My title" description="My subtitle">à
    <oui-guide-menu text="Guides">
        <oui-guide-menu-group label="Section 1">
            <oui-guide-menu-item href="#">Guide 1 (link)</oui-guide-menu-item>
            <oui-guide-menu-item on-click="$ctrl.onActionClick()">Guide 2 (button)</oui-guide-menu-item>
        </oui-guide-menu-group>
        <oui-guide-menu-group label="Section 2">
            <oui-guide-menu-item href="#">Guide 1 (link)</oui-guide-menu-item>
            <oui-guide-menu-item on-click="$ctrl.onActionClick()">Guide 2 (button)</oui-guide-menu-item>
        </oui-guide-menu-group>
        <oui-guide-menu-divider></oui-guide-menu-divider>
        <oui-guide-menu-item href="#" external>External link</oui-guide-menu-item>
    </oui-guide-menu>
</oui-header>
```

## API

### oui-guide-menu

| Attribute     | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----          | ----      | ----      | ----              | ----                      | ----      | ----
| `text`        | string    | @         | yes               | n/a                       | n/a       | button guide text
| `aria-label`  | string    | @?        | yes               | n/a                       | n/a       | accessibility label
| `align`       | string    | @?        | yes               | `start`,`center`,`end`    | `end`     | menu alignment

### oui-guide-menu-item

| Attribute     | Type      | Binding   | One-time binding  | Values                    | Default   | Description
| ----          | ----      | ----      | ----              | ----                      | ----      | ----
| `aria-label`  | string    | @?        | no                | n/a                       | n/a       | accessibility label
| `href`        | string    | @?        | yes               | n/a                       | n/a       | hypertext link (link)
| `disabled`    | boolean   | <?        | no                | `true`, `false`           | `false`   | disable (button)
| `external`    | boolean   | @?        | yes               | `true`, `false`           | `false`   | display external icon (link)
| `on-click`    | function  | &?        | no                | n/a                       | n/a       | on-click handler (button)

### oui-guide-menu-group

| Attribute     | Type      | Binding   | One-time Binding  | Values                    | Default   | Description
| ----          | ----      | ----      | ----              | ----                      | ----      | ----
| `label`       | string    | @         | yes               | n/a                       | n/a       | guide-menu group label
