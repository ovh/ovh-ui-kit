export default {
  title: 'Design System/Components/Progress/Native',

  parameters: {
    docs: { iframeHeight: 180 },
  },
};

export const Default = () => `
<!-- Info -->
<progress class="oui-progress oui-progress_info" value="5" max="100"></progress>

<!-- Success -->
<progress class="oui-progress oui-progress_success" value="10" max="100"></progress>

<!-- Warning -->
<progress class="oui-progress oui-progress_warning" value="60" max="100"></progress>

<!-- Error -->
<progress class="oui-progress oui-progress_error" value="100" max="100"></progress>`;
