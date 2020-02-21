export default {
  title: 'Version 4/Content/Descriptions',

  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export const Default = () => `
<dl class="oui-description">
  <dt>Disk space</dt>
    <dd>250 GB (HDD)</dd>
  <dt>E-mail account</dt>
    <dd>100 + 5 GB</dd>
  <dt>Language</dt>
    <dd>PHP</dd>
  <dt>Shared DB</dt>
    <dd>MySQL Personal 3 x 400 MB</dd>
    <dd>MySQL Professional 3 x 400 MB</dd>
  <dt>Private SQL</dt>
    <dd>optional</dd>
</dl>`;

export const Horizontal = () => `
<dl class="oui-description oui-description_horizontal">
  <dt>Disk space</dt>
    <dd>250 GB (HDD)</dd>
  <dt>E-mail account</dt>
    <dd>100 + 5 GB</dd>
  <dt>Language</dt>
    <dd>PHP</dd>
  <dt>Shared DB</dt>
    <dd>MySQL Personal 3 x 400 MB</dd>
    <dd>MySQL Professional 3 x 400 MB</dd>
  <dt>Private SQL</dt>
    <dd>optional</dd>
</dl>`;
