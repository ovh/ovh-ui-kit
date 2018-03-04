# oui-message

<component-status cx-design="partial" ux="rc"></component-status>

## Installation

```less
  @import 'oui-message/message';
```

## Usage

```html:preview


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
  <p class="oui-message__body">Warning message</p>
</div>

<div class="oui-message oui-message_error" role="alert">
  <i class="oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></i>
  <p class="oui-message__body">Error message</p>
</div>
```
