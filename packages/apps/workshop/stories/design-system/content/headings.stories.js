export default {
  title: 'Design System/Content/Headings',

  parameters: {
    docs: { iframeHeight: 420 },
  },
};

export const Default = () => `
<h1>h1. The quick brown fox jumps over the lazy dog</h1>
<h2>h2. The quick brown fox jumps over the lazy dog</h2>
<h3>h3. The quick brown fox jumps over the lazy dog</h3>
<h4>h4. The quick brown fox jumps over the lazy dog</h4>
<h5>h5. The quick brown fox jumps over the lazy dog</h5>
<h6>h6. The quick brown fox jumps over the lazy dog</h6>`;

export const Style = () => `
<p class="oui-heading_1">h1. The quick brown fox jumps over the lazy dog</p>
<p class="oui-heading_2">h2. The quick brown fox jumps over the lazy dog</p>
<p class="oui-heading_3">h3. The quick brown fox jumps over the lazy dog</p>
<p class="oui-heading_4">h4. The quick brown fox jumps over the lazy dog</p>
<p class="oui-heading_5">h5. The quick brown fox jumps over the lazy dog</p>
<p class="oui-heading_6">h6. The quick brown fox jumps over the lazy dog</p>`;
