import { storiesOf } from '@storybook/html';

storiesOf('Documentation|Styles/Status', module)
  .add(
    'Variants',
    () => `
    <span class="oui-status">Info</span>
    <span class="oui-status oui-status_info">Info</span>
    <span class="oui-status oui-status_error">Error</span>
    <span class="oui-status oui-status_warning">Warning</span>
    <span class="oui-status oui-status_success">Success</span>
    `,
  );
