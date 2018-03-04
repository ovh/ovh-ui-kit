# oui-message

<component-status cx-design="partial" ux="rc"></component-status>

## Installation

```less
  @import 'oui-message/message';
```

## Usage

### Initial

```html:preview


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
