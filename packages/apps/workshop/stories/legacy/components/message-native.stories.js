export default {
  title: 'Legacy/Components/Message/Native',

  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const LargeWarning = () => `
<div class="oui-message oui-message_warning oui-message_l" role="alert">
    <span class="oui-message_l-icon" aria-hidden="true"></span>
    <h1 class="oui-message__title">We are sorry, a problem occurred during the loading of the page.</h1>
    <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis a nisl eget pretium. Phasellus.</p>
</div>`;

LargeWarning.story = {
  name: 'Large warning',
};

export const LargeError = () => `
<div class="oui-message oui-message_error oui-message_l" role="alert">
  <span class="oui-message_l-icon" aria-hidden="true"></span>
  <h1 class="oui-message__title">We are sorry, a problem occurred during the loading of the page.</h1>
  <p class="oui-message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis a nisl eget pretium. Phasellus.</p>
</div>`;

LargeError.story = {
  name: 'Large error',
};
