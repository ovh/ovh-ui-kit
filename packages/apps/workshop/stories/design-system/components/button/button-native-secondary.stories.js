import { select } from '@storybook/addon-knobs';

import readme from '@ovh-ux/ui-kit.button/README.md';

const state = {
  label: 'State',
  options: {
    Normal: '',
    Disabled: 'disabled',
  },
  default: '',
};

export default {
  title: 'Design System/Components/Buttons/Native/Secondary',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Default = () => `
  <button class="oui-button oui-button_secondary" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    Call to action
  </button>
  <button class="oui-button oui-button_secondary oui-button_icon-left" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    Call to action
  </button>
  <button class="oui-button oui-button_secondary oui-button_icon-right" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    Call to action
    <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
  </button>`;

export const Large = () => `
  <button class="oui-button oui-button_l oui-button_secondary" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    Call to action
  </button>
  <button class="oui-button oui-button_l oui-button_secondary oui-button_icon-left" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    Call to action
  </button>
  <button class="oui-button oui-button_l oui-button_secondary oui-button_icon-right" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    Call to action
    <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
  </button>`;

export const Small = () => `
  <button class="oui-button oui-button_s oui-button_secondary" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    OK
  </button>
  <button class="oui-button oui-button_s oui-button_secondary" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    <span class="oui-icon oui-icon-folder"></span>
  </button>`;

export const Block = () => `
  <button class="oui-button oui-button_block oui-button_secondary" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    Call to action
  </button>
  <button class="oui-button oui-button_block oui-button_secondary oui-button_icon-left" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    <span class="oui-icon oui-icon-folder"></span>
    Call to action
  </button>
  <button class="oui-button oui-button_block oui-button_secondary oui-button_icon-right" ${select(
    state.label,
    state.options,
    state.default,
  )}>
    Call to action
    <span class="oui-icon oui-icon-folder"></span>
  </button>`;

export const Group = () => `
  <div class="oui-button-group">
    <button class="oui-button oui-button_secondary">Lorem</button>
    <button class="oui-button oui-button_secondary">Ipsum</button>
    <button class="oui-button oui-button_secondary">Dolor</button>
    <button class="oui-button oui-button_secondary">Sit</button>
    <button class="oui-button oui-button_secondary">Amet</button>
  </div>`;
