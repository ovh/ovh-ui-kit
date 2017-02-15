# oui-message

oui-message is a package which provide styles for the `oui-message` component.

## Installation

```less
  @import 'oui-message/message.less';
```

## Usage

### Default

<div class="oui-message" role="alert">
	<i class="oui-icon"></i>
	<p class="oui-message__body">Default message</p>
</div>

```html
	<div class="oui-message" role="alert">
		<i class="oui-icon"></i>
		<p class="oui-message__body">Default message</p>
	</div>
```
### Default with close button

<div class="oui-message" role="alert">
	<i class="oui-icon"></i>
	<p class="oui-message__body">Default message with close button</p>
	<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

```html
	<div class="oui-message" role="alert">
		<i class="oui-icon"></i>
		<p class="oui-message__body">Default message with close button</p>
		<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
	</div>
```

### Info

<div class="oui-message oui-message_info" role="alert">
	<i class="oui-icon oui-icon-info_circle oui-icon_bicolor"></i>
	<p class="oui-message__body">Info message</p>
</div>

```html
	<div class="oui-message oui-message_info" role="alert">
		<i class="oui-icon oui-icon-info_circle oui-icon_bicolor"></i>
		<p class="oui-message__body">Info message</p>
	</div>
```
### Info with close button

<div class="oui-message oui-message_info" role="alert">
	<i class="oui-icon oui-icon-info_circle oui-icon_bicolor"></i>
	<p class="oui-message__body">Info message with close button</p>
	<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

```html
	<div class="oui-message oui-message_info" role="alert">
		<i class="oui-icon oui-icon-info_circle oui-icon_bicolor"></i>
		<p class="oui-message__body">Info message with close button</p>
		<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
	</div>
```
### Info with no icon

<div class="oui-message oui-message_info oui-message_no-icon" role="alert">
	<p class="oui-message__body">Info message no icon</p>
</div>

```html
	<div class="oui-message oui-message_info oui-message_no-icon" role="alert">
		<p class="oui-message__body">Info message no icon</p>
	</div>
```
### Info with close button and no icon

<div class="oui-message oui-message_info oui-message_no-icon" role="alert">
	<p class="oui-message__body">Info message with close button and no icon</p>
	<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

```html
	<div class="oui-message oui-message_info oui-message_no-icon" role="alert">
		<p class="oui-message__body">Info message with close button and no icon</p>
		<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
	</div>
```

### Success

<div class="oui-message oui-message_success" role="alert">
	<i class="oui-icon oui-icon-success_circle oui-icon_bicolor"></i>
	<p class="oui-message__body">Success message</p>
</div>

```html
	<div class="oui-message oui-message_success" role="alert">
		<i class="oui-icon oui-icon-success_circle oui-icon_bicolor"></i>
		<p class="oui-message__body">Success message</p>
	</div>
```
### Success with close button

<div class="oui-message oui-message_success" role="alert">
	<i class="oui-icon oui-icon-success_circle oui-icon_bicolor"></i>
	<p class="oui-message__body">Success message with close button</p>
	<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

```html
	<div class="oui-message oui-message_success" role="alert">
		<i class="oui-icon oui-icon-success_circle oui-icon_bicolor"></i>
		<p class="oui-message__body">Success message with close button</p>
		<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
	</div>
```
### Success with no icon

<div class="oui-message oui-message_success oui-message_no-icon" role="alert">
	<p class="oui-message__body">Success message no icon</p>
</div>

```html
	<div class="oui-message oui-message_success oui-message_no-icon" role="alert">
		<p class="oui-message__body">Success message no icon</p>
	</div>
```
### Success with close button and no icon

<div class="oui-message oui-message_success oui-message_no-icon" role="alert">
	<p class="oui-message__body">Success message with close button and no icon</p>
	<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

```html
	<div class="oui-message oui-message_success oui-message_no-icon" role="alert">
		<p class="oui-message__body">Success message with close button and no icon</p>
		<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
	</div>
```

### Warning

<div class="oui-message oui-message_warning" role="alert">
	<i class="oui-icon oui-icon-warning_circle oui-icon_bicolor"></i>
	<p class="oui-message__body">Warning message</p>
</div>

```html
	<div class="oui-message oui-message_warning" role="alert">
		<i class="oui-icon oui-icon-warning_circle oui-icon_bicolor"></i>
		<p class="oui-message__body">Warning message</p>
	</div>
```
### Warning with close button

<div class="oui-message oui-message_warning" role="alert">
	<i class="oui-icon oui-icon-warning_circle oui-icon_bicolor"></i>
	<p class="oui-message__body">Warning message with close button</p>
	<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

```html
	<div class="oui-message oui-message_warning" role="alert">
		<i class="oui-icon oui-icon-warning_circle oui-icon_bicolor"></i>
		<p class="oui-message__body">Warning message with close button</p>
		<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
	</div>
```
### Warning with no icon

<div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
	<p class="oui-message__body">Warning message no icon</p>
</div>

```html
	<div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
		<p class="oui-message__body">Warning message no icon</p>
	</div>
```
### Warning with close button and no icon

<div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
	<p class="oui-message__body">Warning message with close button and no icon</p>
	<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

```html
	<div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
		<p class="oui-message__body">Warning message with close button and no icon</p>
		<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
	</div>
```

### Error

<div class="oui-message oui-message_error" role="alert">
	<i class="oui-icon oui-icon-error_circle oui-icon_bicolor"></i>
	<p class="oui-message__body">Error message</p>
</div>

```html
	<div class="oui-message oui-message_error" role="alert">
		<i class="oui-icon oui-icon-error_circle oui-icon_bicolor"></i>
		<p class="oui-message__body">Error message</p>
	</div>
```
### Error with close button

<div class="oui-message oui-message_error" role="alert">
	<i class="oui-icon oui-icon-error_circle oui-icon_bicolor"></i>
	<p class="oui-message__body">Error message with close button</p>
	<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

```html
	<div class="oui-message oui-message_error" role="alert">
		<i class="oui-icon oui-icon-error_circle oui-icon_bicolor"></i>
		<p class="oui-message__body">Error message with close button</p>
		<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
	</div>
```
### Error with no icon

<div class="oui-message oui-message_error oui-message_no-icon" role="alert">
	<p class="oui-message__body">Error message no icon</p>
</div>

```html
	<div class="oui-message oui-message_error oui-message_no-icon" role="alert">
		<p class="oui-message__body">Error message no icon</p>
	</div>
```
### Error with close button and no icon

<div class="oui-message oui-message_error oui-message_no-icon" role="alert">
	<p class="oui-message__body">Error message with close button and no icon</p>
	<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

```html
	<div class="oui-message oui-message_error oui-message_no-icon" role="alert">
		<p class="oui-message__body">Error message with close button and no icon</p>
		<button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
	</div>
```

## Mixins

```less
  @import 'oui-message/message/_mixins';
```

### .message-base

Define the base styles for a message.

```less
#oui > .message-base();
```

```less
#oui > .message-base(
	@margin,
	@font-weight,
	@font-color,
	@background-color,
	@border,
	@border-radius,
	@padding,
	@close-button-color,
	@close-button-background-color,
	@close-button-border,
	@close-button-width,
	@close-button-height,
	@close-button-font-size,
	@close-button-margin,
	@close-button-padding
);
```

| Parameter 						 | Type		| Default Value 								| Comments 			|
| ---------------------------------- | -------- | --------------------------------------------- | ----------------- |
| __@margin__ 					 	 | Number 	| `@oui-message-margin` 						| -					|
| __@font-weight__ 					 | Number 	| `@oui-message-font-weight`					| -					|
| __@font-color__ 					 | Color 	| `@oui-message-font-color` 					| -					|
| __@background-color__ 			 | Color 	| `@oui-message-background-color` 				| -					| 
| __@border__ 				 		 | Number 	| `@oui-message-border`							| width-style-color	| 
| __@border-radius__ 				 | Number 	| `@oui-message-border-radius` 					| -					|
| __@padding__ 						 | Number 	| `@oui-message-padding` 						| -					|
| __@close-button-color__ 			 | Color 	| `@oui-message-close-button-color` 			| -					|
| __@close-button-background-color__ | Color 	| `@oui-message-close-button-background-color`	| -					|
| __@close-button-border__ 			 | Number 	| `@oui-message-close-button-border` 			| width-style-color |
| __@close-button-width__ 			 | Number 	| `@oui-message-close-button-width` 			| - 				|
| __@close-button-height__ 			 | Number 	| `@oui-message-close-button-height`			| - 				|
| __@close-button-font-size__		 | Number 	| `@oui-message-close-button-font-size`			| - 				|
| __@close-button-margin__ 			 | Number 	| `@oui-message-close-button-margin` 			| - 				|
| __@close-button-padding__ 		 | Number 	| `@oui-message-close-button-padding` 			| -					|

### .message-info

Will stylize your message as an informative one.

```less
#oui > .message-info();
```

```less
#oui > .message-info(
    @font-color,
    @border-color,
    @background-color,
    @icon-color,
    @icon-position-top,
    @icon-position-left,
    @icon-size,
    @padding
);
```

| Parameter 						 | Type		| Default Value 								|
| ---------------------------------- | -------- | --------------------------------------------- |
| __@font-color__ 					 | Color 	| `@oui-message-info-font-color` 				|
| __@border-color__ 				 | Color 	| `@oui-message-info-border-color`				|
| __@background-color__ 			 | Color 	| `@oui-message-info-background-color` 			|
| __@icon-color__ 					 | Color 	| `@oui-message-info-icon-color` 				|
| __@icon-position-top__ 			 | Number 	| `@oui-message-info-icon-position-top` 		|
| __@icon-position-left__ 			 | Number 	| `@oui-message-info-position-left` 			|
| __@icon-size__ 					 | Number 	| `@oui-message-info-size` 		     			|
| __@padding__ 						 | Number 	| `@oui-message-info-padding` 					|

### .message-success

Will stylize your message as a success one.

```less
#oui > .message-success();
```

```less
#oui > .message-success(
    @font-color,
    @border-color,
    @background-color,
    @icon-color,
    @icon-position-top,
    @icon-position-left,
    @icon-size,
    @padding
);
```

| Parameter 						 | Type		| Default Value 								|
| ---------------------------------- | -------- | --------------------------------------------- |
| __@font-color__ 					 | Color 	| `@oui-message-success-font-color` 			|
| __@border-color__ 				 | Color 	| `@oui-message-success-border-color`			|
| __@background-color__ 			 | Color 	| `@oui-message-success-background-color` 		|
| __@icon-color__ 					 | Color 	| `@oui-message-success-icon-color` 			|
| __@icon-position-top__ 			 | Number 	| `@oui-message-success-icon-position-top` 		|
| __@icon-position-left__ 			 | Number 	| `@oui-message-success-position-left` 			|
| __@icon-size__ 					 | Number 	| `@oui-message-info-size` 		     			|
| __@padding__ 						 | Number 	| `@oui-message-success-padding` 				|

### .message-warning

Will stylize your message as a warning one.

```less
#oui > .message-warning();
```

```less
#oui > .message-warning(
    @font-color,
    @border-color,
    @background-color,
    @icon-color,
    @icon-position-top,
    @icon-position-left,
    @icon-size,
    @padding
);
```

| Parameter 						 | Type		| Default Value 								|
| ---------------------------------- | -------- | --------------------------------------------- |
| __@font-color__ 					 | Color 	| `@oui-message-warning-font-color` 			|
| __@border-color__ 				 | Color 	| `@oui-message-warning-border-color`			|
| __@background-color__ 			 | Color 	| `@oui-message-warning-background-color` 		|
| __@icon-color__ 					 | Color 	| `@oui-message-warning-icon-color` 			|
| __@icon-position-top__ 			 | Number 	| `@oui-message-warning-icon-position-top` 		|
| __@icon-position-left__ 			 | Number 	| `@oui-message-warning-position-left` 			|
| __@icon-size__ 					 | Number 	| `@oui-message-info-size` 		     			|
| __@padding__ 						 | Number 	| `@oui-message-warning-padding` 				|

### .message-error

Will stylize your message as an error one.

```less
#oui > .message-error();
```

```less
#oui > .message-error(
    @font-color,
    @border-color,
    @background-color,
    @icon-color,
    @icon-position-top,
    @icon-position-left,
    @icon-size,
    @padding
);
```

| Parameter 						 | Type		| Default Value 								|
| :--------------------------------- | :------- | :-------------------------------------------- |
| __@font-color__ 					 | Color 	| `@oui-message-error-font-color` 				|
| __@border-color__ 				 | Color 	| `@oui-message-error-border-color`				|
| __@background-color__ 			 | Color 	| `@oui-message-error-background-color` 		|
| __@icon-color__ 					 | Color 	| `@oui-message-error-icon-color` 				|
| __@icon-position-top__ 			 | Number 	| `@oui-message-error-icon-position-top` 		|
| __@icon-position-left__ 			 | Number 	| `@oui-message-error-position-left` 			|
| __@icon-size__ 					 | Number 	| `@oui-message-info-size` 		     			|
| __@padding__ 						 | Number 	| `@oui-message-error-padding` 					|

### .message-no-icon

Will stylize your message as a message with no icon.

```less
#oui > .message-no-icon();
```

```less
#oui > .message-no-icon(
    @padding
);
```

| Parameter 						 | Type		| Default Value 								| 
| :--------------------------------- | :------- | :-------------------------------------------- | 
| __@padding__ 						 | Number 	| `@oui-message-no-icon-padding` 				| 

## Classes

### Block

The block class is `oui-message` (top-level element).

### Element

The message component has 3 inner elements:
* An optional element class `oui-icon` which displays an icon
* An inline element class `oui-message__body` which contains the text of the message
* An optional button class `oui-message__close-button` which provides the possibility to hide the message

### Modifiers

The provided modifiers are:

| Class 									 | Description         						 			    |
| -----------------------------------------  | -------------------------------------------------------- |
| `oui-message_info`   						 | Make the alert looks like an info message with an icon   |
| `oui-message_info oui-message_no-icon`     | Make the alert looks like an info message with no icon   |
| `oui-message_success` 					 | Make the alert looks like a success message with an icon |
| `oui-message_success oui-message_no-icon`  | Make the alert looks like a success message with no icon |
| `oui-message_warning` 					 | Make the alert looks like a warning message with an icon |
| `oui-message_warning oui-message_no-icon`  | Make the alert looks like a warning message with no icon |
| `oui-message_error`  						 | Make the alert looks like an error message with an icon  |
| `oui-message_error oui-message_no-icon`  	 | Make the alert looks like an error message with no icon  |
