# oui-tip

oui-tip is a package which provide styles for the `oui-tip` component.

Tips are used together with a relative positionned component as the `oui-message`.

> Tips are named depending on the element they are pointing.
> 
> e.g. `oui-tip-top` will be on the top of an element.

## Installation

```less
@import 'oui-tip/tip.less';
```

## Usage

### Default

```html:preview
<div class="oui-message" role="alert">
  <span class="oui-tip-top" aria-hidden="true"></span>
  <p class="oui-message__body">Default message with tip top</p>
</div>
<div class="oui-message" role="alert">
  <span class="oui-tip-right" aria-hidden="true"></span>
  <p class="oui-message__body">Default message with tip right</p>
</div>
<div class="oui-message" role="alert">
  <span class="oui-tip-bottom" aria-hidden="true"></span>
  <p class="oui-message__body">Default message with tip bottom</p>
</div>
<div class="oui-message" role="alert">
  <span class="oui-tip-left" aria-hidden="true"></span>
  <p class="oui-message__body">Default message with tip left</p>
</div>
```

### Info

```html:preview
<div class="oui-message oui-message_info" role="alert">
  <span class="oui-tip-top" aria-hidden="true"></span>
  <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Info message with icon and tip top</p>
</div>
<div class="oui-message oui-message_info" role="alert">
  <span class="oui-tip-right" aria-hidden="true"></span>
  <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Info message with icon, tip right and close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
<div class="oui-message oui-message_info oui-message_no-icon" role="alert">
  <span class="oui-tip-bottom" aria-hidden="true"></span>
  <p class="oui-message__body">Info message with no icon, tip bottom and close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
<div class="oui-message oui-message_info oui-message_no-icon" role="alert">
  <span class="oui-tip-left" aria-hidden="true"></span>
  <p class="oui-message__body">Info message with no icon and tip left</p>
</div>
```

### Success

```html:preview
<div class="oui-message oui-message_success" role="alert">
  <span class="oui-tip-top" aria-hidden="true"></span>
  <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Success message with icon and tip top</p>
</div>
<div class="oui-message oui-message_success" role="alert">
  <span class="oui-tip-right" aria-hidden="true"></span>
  <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Success message with icon, tip right and close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
<div class="oui-message oui-message_success oui-message_no-icon" role="alert">
  <span class="oui-tip-bottom" aria-hidden="true"></span>
  <p class="oui-message__body">Success message with no icon, tip bottom and close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
<div class="oui-message oui-message_success oui-message_no-icon" role="alert">
  <span class="oui-tip-left" aria-hidden="true"></span>
  <p class="oui-message__body">Success message with no icon and tip left</p>
</div>
```

### Warning

```html:preview
<div class="oui-message oui-message_warning" role="alert">
  <span class="oui-tip-top" aria-hidden="true"></span>
  <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Warning message with icon and tip top</p>
</div>
<div class="oui-message oui-message_warning" role="alert">
  <span class="oui-tip-right" aria-hidden="true"></span>
  <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Warning message with icon, tip right and close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
<div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
  <span class="oui-tip-bottom" aria-hidden="true"></span>
  <p class="oui-message__body">Warning message with no icon, tip bottom and close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
<div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
  <span class="oui-tip-left" aria-hidden="true"></span>
  <p class="oui-message__body">Warning message with no icon and tip left</p>
</div>
```

### Error

```html:preview
<div class="oui-message oui-message_error" role="alert">
  <span class="oui-tip-top" aria-hidden="true"></span>
  <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Error message with icon and tip top</p>
</div>
<div class="oui-message oui-message_error" role="alert">
  <span class="oui-tip-right" aria-hidden="true"></span>
  <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Error message with icon, tip right and close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
<div class="oui-message oui-message_error oui-message_no-icon" role="alert">
  <span class="oui-tip-bottom" aria-hidden="true"></span>
  <p class="oui-message__body">Error message with no icon, tip bottom and close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
<div class="oui-message oui-message_error oui-message_no-icon" role="alert">
  <span class="oui-tip-left" aria-hidden="true"></span>
  <p class="oui-message__body">Error message with no icon and tip left</p>
</div>
```

## Mixins

```less
@import 'oui-tip/_mixins';
```

### .tip

Define the base styles for a tip.

```less
#oui > .tip();
```

```less
#oui > .tip(
  @size: Number,
  @border-color: Color,
  @background-color: Color
);
```

### .tip-top

Will stylize your tip as a tip at the top of a box.

```less
#oui > .tip-top();
```

```less
#oui > .tip-top(
  @size: Number,
  @border-color: Color,
  @background-color: Color
);
```

### .tip-right

Will stylize your tip as a tip at the right side of a box.

```less
#oui > .tip-right();
```

```less
#oui > .tip-right(
  @size: Number,
  @border-color: Color,
  @background-color: Color
);
```

### .tip-bottom

Will stylize your tip as a tip at the bottom of a box.

```less
#oui > .tip-bottom();
```

```less
#oui > .tip-bottom(
  @size: Number,
  @border-color: Color,
  @background-color: Color
);
```

### .tip-left

Will stylize your tip as a tip at the left side of a box.

```less
#oui > .tip-left();
```

```less
#oui > .tip-left(
  @size: Number,
  @border-color: Color,
  @background-color: Color
);
```
