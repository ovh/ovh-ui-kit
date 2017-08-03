# oui-message

<component-status cx-design="partial" ux="rc"></component-status>

oui-message is a package which provides styles for the `oui-message` component.

## Installation

```less
  @import 'oui-message/message';
```

## Usage

### Initial

```html:preview
<div class="oui-message" role="alert">
  <p class="oui-message__body">Default message</p>
</div>

<div class="oui-message oui-message_info" role="alert">
  <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Info message</p>
</div>

<div class="oui-message oui-message_success" role="alert">
  <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Success message</p>
</div>

<div class="oui-message oui-message_warning" role="alert">
  <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Warning message</p>
</div>

<div class="oui-message oui-message_error" role="alert">
  <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Error message</p>
</div>
```
### Close button

```html:preview
<div class="oui-message" role="alert">
  <p class="oui-message__body">Default message with close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_info" role="alert">
  <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Info message with close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_success" role="alert">
  <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Success message with close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_warning" role="alert">
  <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Warning message with close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_error" role="alert">
  <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Error message with close button</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
```

### Icon medium

```html:preview
<div class="oui-message oui-message_info oui-message_icon-m" role="alert">
  <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
  Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
  imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
</div>

<div class="oui-message oui-message_success oui-message_icon-m" role="alert">
  <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
  Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
  imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
</div>

<div class="oui-message oui-message_warning oui-message_icon-m" role="alert">
  <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
  Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
  imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
</div>

<div class="oui-message oui-message_error oui-message_icon-m" role="alert">
  <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
  Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
  imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
</div>
```
### Icon medium and close button

```html:preview
<div class="oui-message oui-message_info oui-message_icon-m" role="alert">
  <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
  Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
  imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_success oui-message_icon-m" role="alert">
  <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
  Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
  imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_warning oui-message_icon-m" role="alert">
  <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
  Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
  imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_error oui-message_icon-m" role="alert">
  <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
  Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
  imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
```
### No icon

```html:preview
<div class="oui-message oui-message_info oui-message_no-icon" role="alert">
  <p class="oui-message__body">Info message no icon</p>
</div>

<div class="oui-message oui-message_success oui-message_no-icon" role="alert">
  <p class="oui-message__body">Success message no icon</p>
</div>

<div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
  <p class="oui-message__body">Warning message no icon</p>
</div>

<div class="oui-message oui-message_error oui-message_no-icon" role="alert">
  <p class="oui-message__body">Error message no icon</p>
</div>
```
### Close button and no icon

```html:preview
<div class="oui-message oui-message_info oui-message_no-icon" role="alert">
  <p class="oui-message__body">Info message with close button and no icon</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_success oui-message_no-icon" role="alert">
  <p class="oui-message__body">Success message with close button and no icon</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
  <p class="oui-message__body">Warning message with close button and no icon</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<div class="oui-message oui-message_error oui-message_no-icon" role="alert">
  <p class="oui-message__body">Error message with close button and no icon</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>
```
### No border

```html:preview
<div class="oui-message oui-message_info oui-message_no-border" role="alert">
  <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Info message no border</p>
</div>

<div class="oui-message oui-message_info oui-message_no-icon oui-message_no-border" role="alert">
  <p class="oui-message__body"><strong>Info message</strong> no border</p>
</div>

<div class="oui-message oui-message_success oui-message_no-border" role="alert">
  <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Success message no border</p>
</div>

<div class="oui-message oui-message_success oui-message_no-icon oui-message_no-border" role="alert">
  <p class="oui-message__body"><strong>Success message</strong> no border</p>
</div>

<div class="oui-message oui-message_warning oui-message_no-border" role="alert">
  <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Warning message no border</p>
</div>

<div class="oui-message oui-message_warning oui-message_no-icon oui-message_no-border" role="alert">
  <p class="oui-message__body"><strong>Warning message</strong> no border</p>
</div>

<div class="oui-message oui-message_error oui-message_no-border" role="alert">
  <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Error message no border</p>
</div>

<div class="oui-message oui-message_error oui-message_no-icon oui-message_no-border" role="alert">
  <p class="oui-message__body"><strong>Error message</strong> no border</p>
</div>
```

### Large

```html:preview
<div class="oui-message oui-message_warning oui-message_l" role="alert">
  <i class="oui-message_l-icon" aria-hidden="true"></i>
  <h1 class="oui-message__title">We are sorry, a problem occurred during the loading of the page.</h1>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis a nisl eget pretium. Phasellus.</p>
</div>

<div class="oui-message oui-message_error oui-message_l" role="alert">
  <i class="oui-message_l-icon" aria-hidden="true"></i>
  <h1 class="oui-message__title">We are sorry, a problem occurred during the loading of the page.</h1>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis a nisl eget pretium. Phasellus.</p>
</div>
```

## Mixins

```less
@import 'oui-message/_mixins';
```

### .message-base

Define the base styles for a message.

```less
#oui > .message-base();
```

```less
#oui > .message-base(
  @margin: Number,
  @font-weight: Number,
  @font-color: Color,
  @background-color: Color,
  @border: Number,
  @border-radius: Number,
  @padding: Number,
  @close-button-color: Color,
  @close-button-background-color: Color,
  @close-button-border: Number,
  @close-button-width: Number,
  @close-button-height: Number,
  @close-button-font-size: Number,
  @close-button-margin: Number,
  @close-button-padding: Number
);
```

### .message-info

Will stylize your message as an informative one.

```less
#oui > .message-info();
```

```less
#oui > .message-info(
  @font-color: Color,
  @border-color: Color,
  @background-color: Color,
  @icon-color: Color,
  @icon-position-top: Number,
  @icon-position-left: Number,
  @icon-size: Number,
  @padding: Number
);
```

### .message-success

Will stylize your message as a success one.

```less
#oui > .message-success();
```

```less
#oui > .message-success(
  @font-color: Color,
  @border-color: Color,
  @background-color: Color,
  @icon-color: Color,
  @icon-position-top: Number,
  @icon-position-left: Number,
  @icon-size: Number,
  @padding: Number
);
```

### .message-warning

Will stylize your message as a warning one.

```less
#oui > .message-warning();
```

```less
#oui > .message-warning(
  @font-color: Color,
  @border-color: Color,
  @background-color: Color,
  @icon-color: Color,
  @icon-position-top: Number,
  @icon-position-left: Number,
  @icon-size: Number,
  @padding: Number,
);
```

### .message-error

Will stylize your message as an error one.

```less
#oui > .message-error();
```

```less
#oui > .message-error(
  @font-color: Color,
  @border-color: Color,
  @background-color: Color,
  @icon-color: Color,
  @icon-position-top: Number,
  @icon-position-left: Number,
  @icon-size: Number,
  @padding: Number
);
```

### .message-icon-m

Will stylize your message as a message with a medium icon.

```less
#oui > .message-icon-m();
```

```less
#oui > .message-icon-m(
  @padding: Number,
  @icon-m-size: Number,
  @icon-m-position-top: Number,
  @icon-m-position-left: Number
);
```

### .message-no-icon

Will stylize your message as a message with no icon.

```less
#oui > .message-no-icon();
```

```less
#oui > .message-no-icon(
  @padding: Number
);
```

### .message-no-border

Will stylize your message as a message with no border.

```less
#oui > .message-no-border();
```

### .message-l

Will stylize your message as a large message.

```less
#oui > .message-l(
  @oui-message-selector: Class,
  @padding: @oui-message-l-padding: Number,
  @title-font-size: @oui-message-l-title-font-size: Number,
  @body-font-size: @oui-message-l-body-font-size: Number,
  @color: @oui-message-l-color: Color
);
```

### .message-l-type-base

Will stylize your message as a large message and add type styles.

```less
#oui > .message-l-type-base(
  @oui-message-selector: Class,
  @background-image: Image,
  @icon-width: Number,
  @icon-height: Number
)
```

### .message-l-warning

Will stylize your message as a large message.

```less
#oui > .message-l-warning(
  @oui-message-selector: Class,
  @background-image: Image,
  @icon-width: Number,
  @icon-height: Number
)
```

### .message-l-error

Will stylize your message as a large message.

```less
#oui > .message-l-error(
  @oui-message-selector: Class,
  @background-image: Image,
  @icon-width: Number,
  @icon-height: Number
)
```

## Classes

### Block

The block class is `oui-message` (top-level element).

### Element

The message component can take 1 to 4 inner elements:
* An inline element class `oui-message__title` which contains the title of the message, works only for large message
* An inline element class `oui-message__body` which contains the text of the message
* An optional element class `oui-icon` which displays an icon, works only on small message
* An optional element class `oui-message_l-icon` which displays an icon, works only on large message
* An optional button class `oui-message__close-button` which provides the possibility to hide the message, works only on small message
* An optional element class `oui-tip` which displays a tip, works only on small message

### Modifiers

The provided modifiers are:

| Class                                      | Description                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| `oui-message_info`                         | Make the alert looks like an info message with an icon       |
| `oui-message_info oui-message_icon-m`      | Make the alert looks like an info message with a bigger icon |
| `oui-message_info oui-message_no-icon`     | Make the alert looks like an info message with no icon       |
| `oui-message_info oui-message_no-border`   | Make the alert looks like an info message with no border     |
| `oui-message_success`                      | Make the alert looks like a success message with an icon     |
| `oui-message_success oui-message_icon-m`   | Make the alert looks like an info message with a bigger icon |
| `oui-message_success oui-message_no-icon`  | Make the alert looks like a success message with no icon     |
| `oui-message_success oui-message_no-border`| Make the alert looks like a success message with no border   |
| `oui-message_warning`                      | Make the alert looks like a warning message with an icon     |
| `oui-message_warning oui-message_icon-m`   | Make the alert looks like an info message with a bigger icon |
| `oui-message_warning oui-message_no-icon`  | Make the alert looks like a warning message with no icon     |
| `oui-message_warning oui-message_no-border`| Make the alert looks like a warning message with no border   |
| `oui-message_error`                        | Make the alert looks like an error message with an icon      |
| `oui-message_error oui-message_icon-m`     | Make the alert looks like an info message with a bigger icon |
| `oui-message_error oui-message_no-icon`    | Make the alert looks like an error message with no icon      |
| `oui-message_error oui-message_no-border`  | Make the alert looks like an error message with no border    |
| `oui-message_l oui-message_warning`        | Make the alert looks like a large warning message           |
| `oui-message_l oui-message_error`          | Make the alert looks like a large error message             |
