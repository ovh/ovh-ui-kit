# Slideshow

<component-status cx-design="none" ux="prototype"></component-status>

## Usage

### Basic

```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
<oui-slideshow>
    <oui-slideshow-panel heading="New feature"
        picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg">
        Display your infrastructure as a list
    </oui-slideshow-panel>
    <oui-slideshow-panel heading="Introducing Ad-Sync"
        picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg"
        href="http://www.ovh.com/"
        label="Discover">
        Designed to help you synchronize your local Active Directory with your OVH Active Directory.
    </oui-slideshow-panel>
    <oui-slideshow-panel heading="New features available in your emails pages"
        href="http://www.ovh.com/"
        label="Discover">
        Introducing Ad-Sync, designed to help you synchronize your local Active Directory with your OVH Active Directory.
    </oui-slideshow-panel>
    <oui-slideshow-panel heading="Introducing Ad-Sync"
        picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg"
        href="http://www.ovh.com/"
        label="Discover">
        Designed to help you synchronize your local Active Directory with your OVH Active Directory.
    </oui-slideshow-panel>
</oui-slideshow>
</div>
```

### Loading state

```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
<oui-slideshow loading>
    <oui-slideshow-panel heading="Panel 1">
        This is the first panel description
    </oui-slideshow-panel>
</oui-slideshow>
</div>
```

### Loop steps

```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
<oui-slideshow loop>
    <oui-slideshow-panel heading="Panel 1">
        This is the first panel description
    </oui-slideshow-panel>
    <oui-slideshow-panel heading="Panel 2">
        This is the second panel description
    </oui-slideshow-panel>
    <oui-slideshow-panel heading="Panel 3">
        This is the third panel description
    </oui-slideshow-panel>
</oui-slideshow>
</div>
```

### Link
```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
<oui-slideshow>
    <oui-slideshow-panel heading="External link"
        href="#"
        label="Discover"
        external>
        Introducing Ad-Sync, designed to help you synchronize your local Active Directory with your OVH Active Directory.
    </oui-slideshow-panel>
</oui-slideshow>
</div>
```

### Panel change event
**Note**: If you want to access the parameters inside `on-panel-change` callback, you need to use `direction` and `index` variables as below.

* `direction` returns string of `prev` or `next`
* `index` returns index of current slide

```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
<oui-slideshow on-panel-change="$ctrl.onPanelChange(direction, index)">
    <oui-slideshow-panel heading="New feature"
        picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg">
        Display your infrastructure as a list
    </oui-slideshow-panel>
    <oui-slideshow-panel heading="Introducing Ad-Sync"
        picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg"
        href="http://www.ovh.com/"
        label="Discover">
        Designed to help you synchronize your local Active Directory with your OVH Active Directory.
    </oui-slideshow-panel>
</oui-slideshow>
</div>
```

## API

### oui-slideshow

| Attribute         | Type      | Binding   | One-time Binding  | Values                  | Default   | Description
| ----              | ----      | ----      | ----              | ----                    | ----      | ----
| `theme`           | string    | @?        | yes               | n/a                     | `default` | add specific theme to component
| `loading`         | boolean   | <?        | no                | `true`, `false`         | `false`   | display loader flag
| `loop`            | boolean   | <?        | no                | `true`, `false`         | `false`   | whether the component should cycle continuously
| `on-dismiss`      | function  | &         | no                | n/a                     | n/a       | dismiss callback
| `on-panel-change` | function  | &         | no                | direction, index        | n/a       | handler triggered when on click of next slide

### oui-slideshow-panel

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `heading`     | string    | @?        | yes               | n/a               | n/a       | heading of the panel
| `picture`     | string    | @?        | yes               | n/a               | n/a       | picture/illustration of the panel
| `label`       | string    | @?        | yes               | n/a               | n/a       | label of the link
| `href`        | string    | @?        | yes               | n/a               | n/a       | href of the link
| `external`    | boolean   | <?        | yes               | `true`, `false`   | `false`   | external link flag
| `on-click`    | function  | &?        | no                | n/a               | n/a       | on-click handler

#### Deprecated

* `text`: Replaced by transclude value
