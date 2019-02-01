# Tooltip

## Usage

### Using value of `oui-tooltip` attribute

```html:preview
<p class="oui-doc-preview-only-keep-children"><a href="#" class="oui-link" oui-tooltip="Link tooltip">focus or hover me</a></p>

<p class="oui-doc-preview-only-keep-children"><button class="oui-button oui-button_primary" oui-tooltip="Button tooltip">focus or hover me</button></p>

<p class="oui-doc-preview-only-keep-children"><input type="text" class="oui-input oui-input_inline" placeholder="focus or hover me" oui-tooltip="Input tooltip"></p>
```

### Using value of `title` attribute

```html:preview
<p class="oui-doc-preview-only-keep-children"><a href="#" class="oui-link" title="Link tooltip" oui-tooltip>focus or hover me</a></p>

<p class="oui-doc-preview-only-keep-children"><button class="oui-button oui-button_primary" title="Button tooltip" oui-tooltip>focus or hover me</button></p>

<p class="oui-doc-preview-only-keep-children"><input type="text" class="oui-input oui-input_inline" placeholder="focus or hover me" title="Input tooltip" oui-tooltip></p>
```

**Note**: `title` attribute is removed to avoid using the native tooltip.

### Directions

```html:preview
<div class="oui-doc-preview-only-keep-children">
<input type="text" class="oui-input oui-input_inline" placeholder="Top Left" oui-tooltip="Tooltip on top left" oui-tooltip-placement="top-start">
<input type="text" class="oui-input oui-input_inline" placeholder="Top Center" oui-tooltip="Tooltip on top center" oui-tooltip-placement="top">
<input type="text" class="oui-input oui-input_inline" placeholder="Top Right" oui-tooltip="Tooltip on top right" oui-tooltip-placement="top-end">
</div>
<div class="oui-doc-preview-only-keep-children">
<input type="text" class="oui-input oui-input_inline" placeholder="Bottom Left" oui-tooltip="Tooltip on bottom left" oui-tooltip-placement="bottom-start">
<input type="text" class="oui-input oui-input_inline" placeholder="Bottom Center" oui-tooltip="Tooltip on bottom center" oui-tooltip-placement="bottom">
<input type="text" class="oui-input oui-input_inline" placeholder="Bottom Right" oui-tooltip="Tooltip on bottom right" oui-tooltip-placement="bottom-end">
</div>
```

### Dynamic tooltip text

```html:preview
<input type="text" class="oui-input oui-input_inline"
    ng-init="$ctrl.tooltipText = 'Lorem ipsum'" 
    ng-model="$ctrl.tooltipText"
    oui-tooltip="{{ $ctrl.tooltipText }}">
```

## Accessibility

If there is no `aria-label` attribute, the directive create one based on `oui-tooltip` value on the trigger element.

## API

| Attribute                 | Type      | Binding   | One-time Binding  | Values                                                                                        | Default           | Description
| ----                      | ----      | ----      | ----              | ----                                                                                          | ----              | ----
| `oui-tooltip`             | string    | @         | no                | n/a                                                                                           | `title` attribute | tooltip text
| `oui-tooltip-placement`   | string    | @?        | yes               | See [Popper placements](https://popper.js.org/popper-documentation.html#Popper.placements)    | `top`             | tooltip placement
