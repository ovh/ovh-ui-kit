# Action-menu

## Usage

### Normal

```html:preview
<oui-action-menu text="Actions">
    <oui-action-menu-item href="#">Action 1 (link)</oui-action-menu-item>
    <oui-action-menu-item on-click="$ctrl.onActionClick()">Action 2 (button)</oui-action-menu-item>
    <oui-action-menu-item disabled>Action 3 (disabled)</oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item href="#" external>External link</oui-action-menu-item>
</oui-action-menu>
```

### Compact

```html:preview
<oui-action-menu compact>
    <oui-action-menu-item href="#">Action 1 (link)</oui-action-menu-item>
    <oui-action-menu-item on-click="$ctrl.onActionClick()">Action 2 (button)</oui-action-menu-item>
    <oui-action-menu-item disabled>Action 3 (disabled)</oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item href="#" external>External link</oui-action-menu-item>
</oui-action-menu>
```

### Disabled

```html:preview
<oui-action-menu text="Actions" disabled>
    <oui-action-menu-item href="#">Action 1 (link)</oui-action-menu-item>
    <oui-action-menu-item on-click="$ctrl.onActionClick()">Action 2 (button)</oui-action-menu-item>
    <oui-action-menu-item disabled>Action 3 (disabled)</oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item href="#" external>External link</oui-action-menu-item>
</oui-action-menu>

<oui-action-menu compact disabled>
    <oui-action-menu-item href="#">Action 1 (link)</oui-action-menu-item>
    <oui-action-menu-item on-click="$ctrl.onActionClick()">Action 2 (button)</oui-action-menu-item>
    <oui-action-menu-item disabled>Action 3 (disabled)</oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item href="#" external>External link</oui-action-menu-item>
</oui-action-menu>
```

### On click

```html:preview
<div class="oui-doc-preview-only-keep-children"
    ng-init="$ctrl.action1 = false; $ctrl.action2 = false; $ctrl.action3 = false">
<oui-action-menu compact>
    <oui-action-menu-item
        aria-label="Server: action 1"
        on-click="$ctrl.action1 = true">
        Action 1
    </oui-action-menu-item>
    <oui-action-menu-item
        aria-label="Server: action 2"
        on-click="$ctrl.action2 = true">
        Action 2
    </oui-action-menu-item>
    <oui-action-menu-item
        aria-label="Server: action 3"
        on-click="$ctrl.action3 = true"
        disabled>
        Action 3 (disabled)
    </oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item
        href="#"
        external>
        External link
    </oui-action-menu-item>
</oui-action-menu>
</div>
<div class="oui-doc-preview-only">
    <p><strong>Action 1:</strong> {{$ctrl.action1}}</p>
    <p><strong>Action 2:</strong> {{$ctrl.action2}}</p>
    <p><strong>Action 3:</strong> {{$ctrl.action3}}</p>
</div>
```

## API

### oui-action-menu

| Attribute         | Type            | Binding | One-time binding | Values                    | Default    | Description
| ----              | ----            | ----    | ----             | ----                      | ----       | ----
| `text`            | string          | @       | yes              | n/a                       | n/a        | button label
| `aria-label`      | string          | @?      | yes              | n/a                       | n/a        | accessibility label
| `align`           | string          | @?      | yes              | `start`, `center`, `end`  | `center`   | menu alignment
| `compact`         | boolean         | <?      | yes              | `true`, `false`           | `false`    | use the compact button
| `disabled`        | boolean         | <?      | no               | `true`, `false`           | `false`    | disable flag

### oui-action-menu-item

| Attribute         | Type            | Binding | One-time binding | Values                    | Default    | Description
| ----              | ----            | ----    | ----             | ----                      | ----       | ----
| `aria-label`      | string          | @?      | no               | n/a                       | n/a        | accessibility label
| `href`            | string          | @?      | yes              | n/a                       | n/a        | hypertext link (link)
| `disabled`        | boolean         | <?      | no               | `true`, `false`           | `false`    | disable (button)
| `external`        | boolean         | @?      | yes              | `true`, `false`           | `false`    | display external icon (link)
| `on-click`        | function        | &?      | no               | n/a                       | n/a        | on-click handler (button)

#### Deprecated

* `text`: Replaced by transclude value
