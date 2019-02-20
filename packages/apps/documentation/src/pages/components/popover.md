# Popover

## Usage

### Using value of `oui-popover` attribute

```html:preview
<button type="button" 
    class="oui-button oui-button_primary" 
    oui-popover="This is an awesome popover content.">
    Click to toggle popover
</button>
```

### Using value of `title` attribute

```html:preview
<button type="button" 
    class="oui-button oui-button_primary" 
    title="This is an awesome popover content." 
    oui-popover>
    Click to toggle popover
</button>
```

### Using a template with `oui-popover-template` attribute

<oui-message type="warning">This method use <code class="oui-doc-codespan">ngInclude</code> to add the template in a popover. The content of your template will be compiled with a <strong>new</strong> scope. See <a href="https://docs.angularjs.org/api/ng/directive/ngInclude">ngInclude</a>.</oui-message>

```html:preview
<button type="button" 
    class="oui-button oui-button_primary" 
    oui-popover
    oui-popover-template="popover.html">
    Click to toggle popover
</button>

<script type="text/ng-template" id="popover.html">
<p ng-init="$ctrl.awesome = 'awesome'">This is an <strong ng-bind="$ctrl.awesome"></strong> popover content.</p>
<p><a href="#">The quick brown fox jumps over the lazy dog</a></p>
</script>
```

### All directions

```html:preview
<button type="button" class="oui-button oui-button_primary"
    oui-popover="This is an awesome popover content."
    oui-popover-placement="right">
    Popover on right
</button>

<button type="button" class="oui-button oui-button_primary"
    oui-popover="This is an awesome popover content."
    oui-popover-placement="top">
    Popover on top
</button>

<button type="button" class="oui-button oui-button_primary"
    oui-popover="This is an awesome popover content."
    oui-popover-placement="bottom">
    Popover on bottom
</button>

<button type="button" class="oui-button oui-button_primary"
    oui-popover="This is an awesome popover content."
    oui-popover-placement="left">
    Popover on left
</button>
```

### Alignments

```html:preview
<button type="button" class="oui-button oui-button_primary" 
    oui-popover="This is an awesome popover content." 
    oui-popover-placement="bottom-start">
    Align start
</button>

<button type="button" class="oui-button oui-button_primary" 
    oui-popover="This is an awesome popover content." 
    oui-popover-placement="bottom-end">
    Align end
</button>
```

### Help Popover

```html:preview
<button type="button" class="oui-popover-button" oui-popover="This is an awesome popover content."></button>
```

### Dynamic popover text

```html:preview
<input type="text" class="oui-input oui-input_inline"
    ng-init="$ctrl.popoverText = 'Lorem ipsum'" 
    ng-model="$ctrl.popoverText"
    oui-popover="{{ $ctrl.popoverText }}">
```

## API

| Attribute                 | Type      | Binding   | One-time Binding  | Values                                                                                        | Default           | Description
| ----                      | ----      | ----      | ----              | ----                                                                                          | ----              | ----
| `oui-popover`             | string    | @         | no                | n/a                                                                                           | `title` attribute | popover content
| `oui-popover-id`          | string    | @?        | yes               | n/a                                                                                           | n/a               | popover content id
| `oui-popover-template`    | string    | @?        | no                | n/a                                                                                           | n/a               | popover content template
| `oui-popover-placement`   | string    | @?        | yes               | See [Popper placements](https://popper.js.org/popper-documentation.html#Popper.placements)    | `right`           | modifier for alignment
