# Tile

## Usage

### Basic

```html:preview
<oui-tile heading="Title">Tile content</oui-tile>
```

```html:preview
<oui-tile heading="Title" description="A great legend for this tile.">Tile content</oui-tile>
```

### Button Tile

```html:preview
<div class="oui-doc-preview-only-keep-children" ng-init="$ctrl.click = false">
<oui-tile heading="Title">
    <oui-tile-button on-click="$ctrl.click = true">Button 1</oui-tile-button>
    <oui-tile-button href="#">Button 2</oui-tile-button>
    <oui-tile-button aria-label="access to .." href="#" external>Button 3</oui-tile-button>
    <oui-tile-button disabled>Button 4 (disabled)</oui-tile-button>
    <oui-tile-button href="#" disabled>Button 5 (disabled)</oui-tile-button>
</oui-tile>
<div class="oui-doc-preview-only">Button 1 clicked: {{$ctrl.click}}</div>
</div>
```

### Definition list Tile

```html:preview
<oui-tile heading="Title">
    <oui-tile-definition term="Term" description="This is a description"></oui-tile-definition>
    <oui-tile-definition term="Term">
        <oui-tile-description>This is a description</oui-tile-description>
    </oui-tile-definition>
    <oui-tile-definition term="Term" term-popover="This is a popover text" description="This is a description"></oui-tile-definition>
    <oui-tile-definition term="Progress">
        <oui-tile-description>
            <progress class="oui-progress oui-progress_success" value="10" max="100"></progress>
        </oui-tile-description>
    </oui-tile-definition>
    <oui-tile-definition
        term="Term"
        description="This is a description">
        <oui-action-menu data-compact align="end">
            <oui-action-menu-item text="Action 1"></oui-action-menu-item>
        </oui-action-menu>
    </oui-tile-definition>
</oui-tile>
```

### Loading state

```html:preview
<div ng-init="$ctrl.loading = true" class="oui-doc-preview-only-keep-children">
<p>
    <button class="oui-button oui-doc-preview-only" type="button"
        ng-class="{
            'oui-button_primary': $ctrl.loading,
            'oui-button_secondary': !$ctrl.loading
        }"
        ng-click="$ctrl.loading = !$ctrl.loading">
        Toggle loading
    </button>
</p>
<oui-tile heading="Title" description="A great legend for this tile." loading="$ctrl.loading">
    <p>Nulla ac dui a est varius eleifend nec vitae ipsum. Nunc venenatis luctus nisi quis pulvinar. Duis justo massa, mattis nec metus scelerisque, mattis tristique quam. Sed eget neque elementum, facilisis velit eget, iaculis lectus. Quisque at molestie justo. Ut tincidunt augue non tortor tincidunt facilisis. Donec ut lectus a leo porttitor eleifend. Morbi venenatis turpis eu rutrum consectetur. Sed auctor ligula at erat euismod, imperdiet posuere est feugiat. Quisque maximus ultricies risus sed varius.</p>
</oui-tile>
</div>
```

## API

### oui-tile

| Attribute         | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `heading`         | string    | @?        | yes               | n/a               | n/a       | tile title
| `description`     | string    | @?        | yes               | n/a               | n/a       | tile description behind title
| `loading`         | boolean   | <?        | no                | `true`, `false`   | `false`   | display loader flag

### oui-tile-button

| Attribute         | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `href`            | string    | @?        | yes               | n/a               | n/a       | button link url
| `aria-label`      | string    | @?        | no                | n/a               | `null`    | accessibility label
| `disabled`        | boolean   | <?        | no                | `true`, `false`   | `false`   | disabled flag
| `external`        | boolean   | <?        | yes               | `true`, `false`   | `false`   | open in new tab and display external icon
| `on-click`        | funcion   | &         | no                | n/a               | n/a       | button action callback

#### Deprecated

* `text`: Replaced by transclude value

### oui-tile-definition

| Attribute         | Type     | Binding    | One-time Binding  | Values            | Default   | Description
| ----              | ----     | ----       | ----              | ----              | ----      | ----
| `term`            | string   | @?         | yes               | n/a               | n/a       | definition term item
| `term-popover`    | string   | @?         | yes               | n/a               | n/a       | definition term item popover
| `description`     | string   | @?         | yes               | n/a               | n/a       | definition description item
