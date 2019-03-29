# Installation

```js
angular.module('myModule', ['oui.popover']);
```

# API

## Directive `oui-popover`

| Attribute                 | Type      | Binding   | One-time Binding  | Values                                                                                        | Default           | Description
| ----                      | ----      | ----      | ----              | ----                                                                                          | ----              | ----
| `oui-popover`             | string    | @         | no                | n/a                                                                                           | `title` attribute | popover content
| `oui-popover-id`          | string    | @?        | yes               | n/a                                                                                           | n/a               | popover content id
| `oui-popover-placement`   | string    | @?        | yes               | See [Popper placements](https://popper.js.org/popper-documentation.html#Popper.placements)    | `right`           | modifier for alignment
| `oui-popover-template`    | string    | @?        | no                | n/a                                                                                           | n/a               | id of the popover template
| `oui-popover-scope`       | string    | <?        | no                | n/a                                                                                           | n/a               | scope of the popover template

### Using a template with `oui-popover-template` attribute

This method use `ngInclude` to add the template in a popover and create an **isolated** scope.

Use `oui-popover-scope` to extend the isolated scope and `$ctrl` to access thoses values.

```html
<input
    type="text"
    class="oui-input oui-input_inline"
    ng-init="$ctrl.awesome = 'awesome'"
    ng-model="$ctrl.awesome">
<button
    type="button"
    class="oui-button oui-button_primary" 
    oui-popover
    oui-popover-scope="$ctrl"
    oui-popover-template="popover.html">
    Click to toggle popover
</button>

<script type="text/ng-template" id="popover.html">
    <p>This is an <strong ng-bind="$ctrl.awesome"></strong> popover content.</p>
    <p><a href="#">The quick brown fox jumps over the lazy dog</a></p>
</script>
```
