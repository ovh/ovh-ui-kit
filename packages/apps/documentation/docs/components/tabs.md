# Tabs

## Usage

### Basic

```html:preview
<oui-tabs>
    <oui-tabs-item heading="Basic1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet congue urna. Praesent ultricies id ex convallis dictum. Pellentesque malesuada faucibus consectetur. Quisque vehicula tincidunt leo, quis auctor nisi luctus quis. Etiam purus lectus, placerat vitae vehicula at, molestie nec erat. Duis enim odio, maximus at laoreet in, finibus nec mi. Nam ultrices, lacus vitae egestas volutpat, libero odio gravida turpis, vitae dapibus ex mi nec quam. Pellentesque a tempor nibh.</p>
    </oui-tabs-item>
    <oui-tabs-item heading="Basic2">
        <p>Proin egestas fermentum lectus nec euismod. Vivamus eu congue dui. Pellentesque sit amet pellentesque quam. Morbi posuere sem nec rutrum placerat. Vestibulum porttitor arcu eu risus tempor consectetur. Fusce aliquam bibendum aliquet. Morbi semper egestas iaculis. Ut sit amet sem et neque porta cursus pellentesque nec augue. Nullam semper in metus et luctus. Nunc molestie non ipsum a consequat. Etiam pellentesque laoreet lectus ut luctus. Nulla maximus, leo a mattis gravida, ligula felis vulputate libero, vitae fringilla nibh mauris nec dui. Fusce sed massa at arcu euismod dictum id sit amet lorem. Aliquam sed viverra sem, quis vehicula ligula. Vivamus blandit varius condimentum.</p>
    </oui-tabs-item>
    <oui-tabs-item heading="Basic3">
        <p>Duis egestas nulla at euismod semper. Nullam bibendum auctor viverra. Sed posuere neque nulla, id cursus nisi molestie vel. Nulla ornare elit sit amet congue faucibus. Aliquam eget lorem id justo ornare pretium in sit amet lectus. Sed maximus odio id porttitor rhoncus. Quisque pulvinar mauris ut sapien dictum, ultrices fermentum orci efficitur. Cras nec auctor ante. Aliquam ornare eleifend neque, at condimentum lacus aliquet elementum. Mauris mattis porttitor tortor vel vehicula. Phasellus venenatis nibh nec viverra sollicitudin. Ut lobortis mattis mauris, vel euismod nibh faucibus a.</p>
    </oui-tabs-item>
</oui-tabs>
```

### Dynamic

```html:preview
<p class="oui-doc-preview-only">
    <oui-button ng-init="$ctrl.hideDynamic1 = false" on-click="$ctrl.hideDynamic1 = !$ctrl.hideDynamic1">
        {{$ctrl.hideDynamic1 ? 'Show' : 'Hide'}} Dynamic1 tab
    </oui-button>
    <oui-button ng-init="$ctrl.hideDynamic2 = true" on-click="$ctrl.hideDynamic2 = !$ctrl.hideDynamic2">
        {{$ctrl.hideDynamic2 ? 'Show' : 'Hide'}} Dynamic2 tab
    </oui-button>
    <oui-button ng-init="$ctrl.hideDynamic3 = false" on-click="$ctrl.hideDynamic3 = !$ctrl.hideDynamic3">
        {{$ctrl.hideDynamic3 ? 'Show' : 'Hide'}} Dynamic3 tab
    </oui-button>
</p>
<oui-tabs>
    <oui-tabs-item heading="Dynamic1" ng-if="!$ctrl.hideDynamic1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet congue urna. Praesent ultricies id ex convallis dictum. Pellentesque malesuada faucibus consectetur. Quisque vehicula tincidunt leo, quis auctor nisi luctus quis. Etiam purus lectus, placerat vitae vehicula at, molestie nec erat. Duis enim odio, maximus at laoreet in, finibus nec mi. Nam ultrices, lacus vitae egestas volutpat, libero odio gravida turpis, vitae dapibus ex mi nec quam. Pellentesque a tempor nibh.</p>
    </oui-tabs-item>
    <oui-tabs-item heading="Dynamic2" ng-if="!$ctrl.hideDynamic2">
        <p>Proin egestas fermentum lectus nec euismod. Vivamus eu congue dui. Pellentesque sit amet pellentesque quam. Morbi posuere sem nec rutrum placerat. Vestibulum porttitor arcu eu risus tempor consectetur. Fusce aliquam bibendum aliquet. Morbi semper egestas iaculis. Ut sit amet sem et neque porta cursus pellentesque nec augue. Nullam semper in metus et luctus. Nunc molestie non ipsum a consequat. Etiam pellentesque laoreet lectus ut luctus. Nulla maximus, leo a mattis gravida, ligula felis vulputate libero, vitae fringilla nibh mauris nec dui. Fusce sed massa at arcu euismod dictum id sit amet lorem. Aliquam sed viverra sem, quis vehicula ligula. Vivamus blandit varius condimentum.</p>
    </oui-tabs-item>
    <oui-tabs-item heading="Dynamic3" ng-if="!$ctrl.hideDynamic3">
        <p>Duis egestas nulla at euismod semper. Nullam bibendum auctor viverra. Sed posuere neque nulla, id cursus nisi molestie vel. Nulla ornare elit sit amet congue faucibus. Aliquam eget lorem id justo ornare pretium in sit amet lectus. Sed maximus odio id porttitor rhoncus. Quisque pulvinar mauris ut sapien dictum, ultrices fermentum orci efficitur. Cras nec auctor ante. Aliquam ornare eleifend neque, at condimentum lacus aliquet elementum. Mauris mattis porttitor tortor vel vehicula. Phasellus venenatis nibh nec viverra sollicitudin. Ut lobortis mattis mauris, vel euismod nibh faucibus a.</p>
    </oui-tabs-item>
</oui-tabs>
```

### Check marks

```html:preview
<oui-tabs ng-init="$ctrl.checked1 = true">
    <oui-tabs-item heading="Lorem" checked="$ctrl.checked1">
        <oui-button on-click="$ctrl.checked1 = !$ctrl.checked1">Toggle check mark of tab 1</oui-button>
    </oui-tabs-item>
    <oui-tabs-item heading="Ipsum" checked="$ctrl.checked2">
        <oui-button on-click="$ctrl.checked2 = !$ctrl.checked2">Toggle check mark of tab 2</oui-button>
    </oui-tabs-item>
    <oui-tabs-item heading="Dolor sit amet" checked="$ctrl.checked3">
        <oui-button on-click="$ctrl.checked3 = !$ctrl.checked3">Toggle check mark of tab 3</oui-button>
    </oui-tabs-item>
</oui-tabs>
```

## API

### oui-tabs

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `aria-label`  | string    | @?        | yes               | n/a               | n/a       | accessibility label

### oui-tabs-item

| Attribute     | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----          | ----      | ----      | ----              | ----              | ----      | ----
| `id`          | string    | @?        | yes               | n/a               | n/a       | id attribute of the panel
| `heading`     | string    | @?        | yes               | n/a               | n/a       | heading text of the tab
| `aria-label`  | string    | @?        | yes               | n/a               | n/a       | accessibility label
| `checked`     | booldean  | <?        | yes               | `true`, `false`   | n/a       | check mark flag of the tab
| `on-active`   | function  | &         | no                | n/a               | n/a       | function called when tab is active
