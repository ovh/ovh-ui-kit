import { storiesOf } from '@storybook/html';

storiesOf('Old/Styles/Message', module)
  .add(
    'No icon',
    () => `
    <div class="oui-message oui-message_no-icon" role="alert">
      <p class="oui-message__body">Default message with close button</p>
      <button class="oui-icon oui-icon-close oui-message__close-button" type="button" title="Close the alert"></button>
    </div>
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
    `,
  )
  .add(
    'No border',
    () => `
    <div class="oui-message oui-message_info oui-message_no-border" role="alert">
      <span class="oui-message__icon oui-icon oui-icon-info_circle oui-icon_bicolor" aria-hidden="true"></span>
      <p class="oui-message__body">Info message no border</p>
    </div>
    <div class="oui-message oui-message_info oui-message_no-icon oui-message_no-border" role="alert">
      <p class="oui-message__body"><strong>Info message</strong> no border</p>
    </div>
    <div class="oui-message oui-message_success oui-message_no-border" role="alert">
      <span class="oui-message__icon oui-icon oui-icon-success_circle oui-icon_bicolor" aria-hidden="true"></span>
      <p class="oui-message__body">Success message no border</p>
    </div>
    <div class="oui-message oui-message_success oui-message_no-icon oui-message_no-border" role="alert">
      <p class="oui-message__body"><strong>Success message</strong> no border</p>
    </div>
    <div class="oui-message oui-message_warning oui-message_no-border" role="alert">
      <span class="oui-message__icon oui-icon oui-icon-warning_circle oui-icon_bicolor" aria-hidden="true"></span>
      <p class="oui-message__body">Warning message no border</p>
    </div>
    <div class="oui-message oui-message_warning oui-message_no-icon oui-message_no-border" role="alert">
      <p class="oui-message__body"><strong>Warning message</strong> no border</p>
    </div>
    <div class="oui-message oui-message_error oui-message_no-border" role="alert">
      <span class="oui-message__icon oui-icon oui-icon-error_circle oui-icon_bicolor" aria-hidden="true"></span>
      <p class="oui-message__body">Error message no border</p>
    </div>
    <div class="oui-message oui-message_error oui-message_no-icon oui-message_no-border" role="alert">
      <p class="oui-message__body"><strong>Error message</strong> no border</p>
    </div>
    `,
  )
  .add(
    'Large warning',
    () => `
    <div class="oui-message oui-message_warning oui-message_l" role="alert">
        <span class="oui-message_l-icon" aria-hidden="true"></span>
        <h1 class="oui-message__title">We are sorry, a problem occurred during the loading of the page.</h1>
        <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis a nisl eget pretium. Phasellus.</p>
    </div>
    `,
  )
  .add(
    'Large error',
    () => `
    <div class="oui-message oui-message_error oui-message_l" role="alert">
      <span class="oui-message_l-icon" aria-hidden="true"></span>
      <h1 class="oui-message__title">We are sorry, a problem occurred during the loading of the page.</h1>
      <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis a nisl eget pretium. Phasellus.</p>
    </div>
    `,
  );
