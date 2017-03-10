# oui-message

<component-status cx-design="partial" ux="rc"></component-status>

oui-message is a package which provide styles for the `oui-message` component.

## Installation

```less
  @import 'oui-message/message.less';
```

## Usage

### Default

```html:preview
  <div class="oui-message" role="alert">
    <p class="oui-message__body">Default message</p>
  </div>
```
### Default with close button

```html:preview
  <div class="oui-message" role="alert">
    <p class="oui-message__body">Default message with close button</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```

### Info

```html:preview
  <div class="oui-message oui-message_info" role="alert">
    <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Info message</p>
  </div>
```
### Info with close button

```html:preview
  <div class="oui-message oui-message_info" role="alert">
    <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Info message with close button</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```
### Info with icon 2x

```html:preview
  <div class="oui-message oui-message_info oui-message_icon-2x" role="alert">
    <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
    Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
    imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
  </div>
```
### Info with icon 2x and close button

```html:preview
  <div class="oui-message oui-message_info oui-message_icon-2x" role="alert">
    <i class="oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
    Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
    imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```
### Info with no icon

```html:preview
  <div class="oui-message oui-message_info oui-message_no-icon" role="alert">
    <p class="oui-message__body">Info message no icon</p>
  </div>
```
### Info with no icon and close button

```html:preview
  <div class="oui-message oui-message_info oui-message_no-icon" role="alert">
    <p class="oui-message__body">Info message with close button and no icon</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```

### Success

```html:preview
  <div class="oui-message oui-message_success" role="alert">
    <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Success message</p>
  </div>
```
### Success with close button

```html:preview
  <div class="oui-message oui-message_success" role="alert">
    <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Success message with close button</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```
### Success with icon 2x

```html:preview
  <div class="oui-message oui-message_success oui-message_icon-2x" role="alert">
    <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
    Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
    imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
  </div>
```
### Success with icon 2x and close button

```html:preview
  <div class="oui-message oui-message_success oui-message_icon-2x" role="alert">
    <i class="oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
    Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
    imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```
### Success with no icon

```html:preview
  <div class="oui-message oui-message_success oui-message_no-icon" role="alert">
    <p class="oui-message__body">Success message no icon</p>
  </div>
```
### Success with close button and no icon

```html:preview
  <div class="oui-message oui-message_success oui-message_no-icon" role="alert">
    <p class="oui-message__body">Success message with close button and no icon</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```

### Warning

```html:preview
  <div class="oui-message oui-message_warning" role="alert">
    <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor"></i>
    <p class="oui-message__body">Warning message</p>
  </div>
```
### Warning with close button

```html:preview
  <div class="oui-message oui-message_warning" role="alert">
    <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Warning message with close button</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```
### Warning with icon 2x

```html:preview
  <div class="oui-message oui-message_warning oui-message_icon-2x" role="alert">
    <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
    Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
    imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
  </div>
```
### Warning with icon 2x and close button

```html:preview
  <div class="oui-message oui-message_warning oui-message_icon-2x" role="alert">
    <i class="oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
    Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
    imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```
### Warning with no icon

```html:preview
  <div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
    <p class="oui-message__body">Warning message no icon</p>
  </div>
```
### Warning with close button and no icon

```html:preview
  <div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
    <p class="oui-message__body">Warning message with close button and no icon</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```

### Error

```html:preview
  <div class="oui-message oui-message_error" role="alert">
    <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Error message</p>
  </div>
```
### Error with close button

```html:preview
  <div class="oui-message oui-message_error" role="alert">
    <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Error message with close button</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```
### Error with icon 2x

```html:preview
  <div class="oui-message oui-message_error oui-message_icon-2x" role="alert">
    <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
    Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
    imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
  </div>
```
### Error with icon 2x and close button

```html:preview
  <div class="oui-message oui-message_error oui-message_icon-2x" role="alert">
    <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
    <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra in est sed mollis. Phasellus eu fringilla sem.
    Nunc molestie tellus et odio dictum condimentum. Vivamus eleifend mauris eget sem cursus, et commodo ipsum ultrices. Praesent mollis lacus quis
    imperdiet laoreet. In quis ornare turpis. Aliquam sit amet tempus urna. Praesent posuere nisl ut nibh consectetur sagittis.</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
  </div>
```
### Error with no icon

```html:preview
  <div class="oui-message oui-message_error oui-message_no-icon" role="alert">
    <p class="oui-message__body">Error message no icon</p>
  </div>
```
### Error with close button and no icon

```html:preview
  <div class="oui-message oui-message_error oui-message_no-icon" role="alert">
    <p class="oui-message__body">Error message with close button and no icon</p>
    <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
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

### .message-icon-2x

Will stylize your message as a message with a bigger icon.

```less
  #oui > .message-icon-2x();
```

```less
  #oui > .message-icon-2x(
    @padding: Number,
    @icon-2x-size: Number,
    @icon-2x-position-top: Number,
    @icon-2x-position-left: Number
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

## Classes

### Block

The block class is `oui-message` (top-level element).

### Element

The message component can take 1 to 4 inner elements:
* An inline element class `oui-message__body` which contains the text of the message
* An optional element class `oui-icon` which displays an icon
* An optional button class `oui-message__close-button` which provides the possibility to hide the message
* An optional element class `oui-tip` which displays a tip

### Modifiers

The provided modifiers are:

| Class                                      | Description                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| `oui-message_info`                         | Make the alert looks like an info message with an icon       |
| `oui-message_info oui-message_icon-2x`     | Make the alert looks like an info message with a bigger icon |
| `oui-message_info oui-message_no-icon`     | Make the alert looks like an info message with no icon       |
| `oui-message_success`                      | Make the alert looks like a success message with an icon     |
| `oui-message_success oui-message_icon-2x`  | Make the alert looks like an info message with a bigger icon |
| `oui-message_success oui-message_no-icon`  | Make the alert looks like a success message with no icon     |
| `oui-message_warning`                      | Make the alert looks like a warning message with an icon     |
| `oui-message_warning oui-message_icon-2x`  | Make the alert looks like an info message with a bigger icon |
| `oui-message_warning oui-message_no-icon`  | Make the alert looks like a warning message with no icon     |
| `oui-message_error`                        | Make the alert looks like an error message with an icon      |
| `oui-message_error oui-message_icon-2x`    | Make the alert looks like an info message with a bigger icon |
| `oui-message_error oui-message_no-icon`    | Make the alert looks like an error message with no icon      |
