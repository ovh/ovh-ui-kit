import readme from '@ovh-ux/ui-kit.badge/README.md';

export default {
  title: 'Version 4/Components/Badge/Native',

  parameters: {
    notes: readme,
  },
};

export const Default = () => `
<span class="oui-badge">Default</span>
<span class="oui-badge oui-badge_info">Info</span>
<span class="oui-badge oui-badge_error">Error</span>
<span class="oui-badge oui-badge_warning">Warning</span>
<span class="oui-badge oui-badge_success">Success</span>`;

export const Small = () => `
<span class="oui-badge oui-badge_s">Default</span>
<span class="oui-badge oui-badge_s oui-badge_info">Info</span>
<span class="oui-badge oui-badge_s oui-badge_error">Error</span>
<span class="oui-badge oui-badge_s oui-badge_warning">Warning</span>
<span class="oui-badge oui-badge_s oui-badge_success">Success</span>`;
