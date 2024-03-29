export default {
  title: 'Design System/Content/Links',

  parameters: {
  },
};

export const Default = () => `
<a href="#">The quick brown fox jumps over the lazy dog</a>`;

export const Style = () => `
<span class="oui-link">The quick brown fox jumps over the lazy dog</span>`;

export const WithIcon = () => `
<a class="oui-link_icon" href="#">
  The quick brown fox jumps over the lazy dog
  <span class="oui-icon oui-icon-external-link" aria-hidden="true"></span>
</a>`;
