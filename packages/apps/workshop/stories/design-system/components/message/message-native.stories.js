export default {
  title: 'Design System/Components/Message/Native',

  parameters: {
  },
};

export const Default = () => `
<!-- Info -->
<div class="oui-message oui-message_info" role="alert">
  <span class="oui-message__icon oui-icon oui-icon-info-circle" aria-hidden="true"></span>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

<!-- Success -->
<div class="oui-message oui-message_success" role="alert">
  <span class="oui-message__icon oui-icon oui-icon-success-circle" aria-hidden="true"></span>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

<!-- Warning -->
<div class="oui-message oui-message_warning" role="alert">
  <span class="oui-message__icon oui-icon oui-icon-warning-circle" aria-hidden="true"></span>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

<!-- Error -->
<div class="oui-message oui-message_error" role="alert">
  <span class="oui-message__icon oui-icon oui-icon-error-circle" aria-hidden="true"></span>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>`;

export const Dismissable = () => `
<!-- Info -->
<div class="oui-message oui-message_info" role="alert">
  <span class="oui-message__icon oui-icon oui-icon-info-circle" aria-hidden="true"></span>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<!-- Success -->
<div class="oui-message oui-message_success" role="alert">
  <span class="oui-message__icon oui-icon oui-icon-success-circle" aria-hidden="true"></span>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<!-- Warning -->
<div class="oui-message oui-message_warning" role="alert">
  <span class="oui-message__icon oui-icon oui-icon-warning-circle" aria-hidden="true"></span>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>

<!-- Error -->
<div class="oui-message oui-message_error" role="alert">
  <span class="oui-message__icon oui-icon oui-icon-error-circle" aria-hidden="true"></span>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
</div>`;

export const NoIcon = () => `
<!-- Info -->
<div class="oui-message oui-message_info oui-message_no-icon" role="alert">
  <p class="oui-message__body">Info message with close button and no icon</p>
</div>

<!-- Success -->
<div class="oui-message oui-message_success oui-message_no-icon" role="alert">
  <p class="oui-message__body">Success message with close button and no icon</p>
</div>

<!-- Warning -->
<div class="oui-message oui-message_warning oui-message_no-icon" role="alert">
  <p class="oui-message__body">Warning message with close button and no icon</p>
</div>

<!-- Error -->
<div class="oui-message oui-message_error oui-message_no-icon" role="alert">
  <p class="oui-message__body">Error message with close button and no icon</p>
</div>`;

NoIcon.story = {
  name: 'No icon',
};
