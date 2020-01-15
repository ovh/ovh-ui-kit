import readme from '@ovh-ux/ui-kit.status/README.md';

export default {
  title: 'Version 4/Components/Status/Native',

  parameters: {
    notes: readme,
  },
};

export const Default = () => `
<span class="oui-status">Default</span>
<span class="oui-status oui-status_info">Info</span>
<span class="oui-status oui-status_error">Error</span>
<span class="oui-status oui-status_warning">Warning</span>
<span class="oui-status oui-status_success">Success</span>`;

export const Small = () => `
<span class="oui-status oui-status_s">Default</span>
<span class="oui-status oui-status_s oui-status_info">Info</span>
<span class="oui-status oui-status_s oui-status_error">Error</span>
<span class="oui-status oui-status_s oui-status_warning">Warning</span>
<span class="oui-status oui-status_s oui-status_success">Success</span>`;
