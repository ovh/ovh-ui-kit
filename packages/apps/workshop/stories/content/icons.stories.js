import { storiesOf } from '@storybook/html';

storiesOf('Content|Icons', module)
  .add(
    'Usage',
    () => `
    <p>
      <span class="oui-icon oui-icon-error_circle"></span>
      <span class="oui-icon oui-icon-info_circle"></span>
      <span class="oui-icon oui-icon-success_circle"></span>
      <span class="oui-icon oui-icon-warning_circle"></span>
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span class="oui-icon oui-icon-error_circle"></span><br />
      Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat. <span class="oui-icon oui-icon-info_circle"></span><br />
      Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu. <span class="oui-icon oui-icon-success_circle"></span><br />
      Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus. <span class="oui-icon oui-icon-warning_circle"></span>
    </p>
    `, {
      options: {
        showPanel: true,
      },
    },
  )
  .add(
    'System',
    () => `
    <div class="doc-row">
      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-add" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-add</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-arrow-down" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-arrow-down</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-arrow-left" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-arrow-left</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-arrow-right" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-arrow-right</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-arrow-up" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-arrow-up</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-bell" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-bell</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-bin" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-bin</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-book" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-book</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-calendar" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-calendar</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-chat" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-chat</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-check" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-check</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-chevron-down</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-chevron-left</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-chevron-right</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-chevron-up-down" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-chevron-up-down</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-chevron-up" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-chevron-up</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-clock-wait" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-clock-wait</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-close" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-close</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-copy" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-copy</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-ellipsis-vertical" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-ellipsis-vertical</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-ellipsis" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-ellipsis</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-error" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-error</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-error_circle" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-error_circle</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-external-link" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-external-link</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-eye-blocked" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-eye-blocked</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-eye" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-eye</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-file" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-file</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-filter" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-filter</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-folder" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-folder</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-gear" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-gear</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-guides" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-guides</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-hamburger" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-hamburger</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-help" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-help</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-help_circle" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-help_circle</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-home" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-home</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-info" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-info</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-info_circle" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-info_circle</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-lightbulb" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-lightbulb</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-list" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-list</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-location" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-location</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-minus" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-minus</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-ok" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-ok</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-ovh" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-ovh</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-phone" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-phone</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-plus" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-plus</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-refresh" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-refresh</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-remove" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-remove</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-search" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-search</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-settings" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-settings</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-shape-circle" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-shape-circle</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-shape-dot" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-shape-dot</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-success" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-success</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-success_circle" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-success_circle</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-time" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-time</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-trash" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-trash</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-triangle-left" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-triangle-left</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-triangle-right" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-triangle-right</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-triangle-up" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-triangle-up</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-triangle-down" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-triangle-down</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-triangle-up-down" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-triangle-up-down</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-user" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-user</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-warning" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-warning</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-warning_circle" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-warning_circle</code></div>
      </div>
    </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  )
  .add(
    'Flags', () => `
      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ad" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ad</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ae" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ae</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_am" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_am</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ar" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ar</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_at" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_at</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_au" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_au</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_az" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_az</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_bb" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_bb</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_be" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_be</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_bg" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_bg</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ca" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ca</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ch" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ch</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ci" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ci</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_cl" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_cl</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_cn" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_cn</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_cr" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_cr</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_cu" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_cu</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_cz" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_cz</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_de" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_de</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_dk" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_dk</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_es" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_es</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_eu" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_eu</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_fi" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_fi</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_fr" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_fr</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_gb" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_gb</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_gb-zet" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_gb-zet</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ge" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ge</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_gn" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_gn</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_gr" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_gr</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_gw" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_gw</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ie" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ie</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_it" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_it</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_jm" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_jm</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_jo" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_jo</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_jp" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_jp</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_lt" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_lt</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ma" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ma</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ne" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ne</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ng" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ng</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_nl" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_nl</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_pl" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_pl</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_pt" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_pt</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ro" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ro</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_se" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_se</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_sg" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_sg</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_sl" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_sl</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_sn" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_sn</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_tg" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_tg</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_th" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_th</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_tj" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_tj</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_tn" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_tn</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_tr" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_tr</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ua" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ua</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_us" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_us</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_ve" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_ve</code></div>
      </div>

      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-flag oui-flag_vn" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-flag_vn</code></div>
      </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  );
