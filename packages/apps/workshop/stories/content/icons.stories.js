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
    'Manager',
    () => `
    <div class="row">
      <div class="doc-icon-badge">
        <div class="doc-icon-badge__preview"><span class="oui-icon oui-icon-domain-dns" aria-hidden="true"></span></div>
        <div class="doc-icon-badge__code"><code>.oui-icon-domain-dns</code></div>
      </div>
    </div>
    `, {
      options: {
        showPanel: false,
      },
    },
  );
