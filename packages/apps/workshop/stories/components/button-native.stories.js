import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const state = {
  label: 'State',
  options: {
    Normal: '',
    Disabled: 'disabled',
  },
  default: '',
};

storiesOf('Components|Buttons/Native/Primary', module)
  .add(
    'Default',
    () => `
    <button class="oui-button oui-button_primary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>
    <button class="oui-button oui-button_primary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>
    <button class="oui-button oui-button_primary oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    </button>`,
  )
  .add(
    'Large',
    () => `
    <button class="oui-button oui-button_l oui-button_primary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>
    <button class="oui-button oui-button_l oui-button_primary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>
    <button class="oui-button oui-button_l oui-button_primary oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    </button>`,
  )
  .add(
    'Small',
    () => `
    <button class="oui-button oui-button_s oui-button_primary" ${select(state.label, state.options, state.default)}>
      OK
    </button>
    <button class="oui-button oui-button_s oui-button_primary" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder"></span>
    </button>`,
  )
  .add(
    'Block',
    () => `
    <button class="oui-button oui-button_block oui-button_primary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>
    <button class="oui-button oui-button_block oui-button_primary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder"></span>
      Call to action
    </button>
    <button class="oui-button oui-button_block oui-button_primary oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder"></span>
    </button>`,
  );

storiesOf('Components|Buttons/Native/Secondary', module)
  .add(
    'Default',
    () => `
    <button class="oui-button oui-button_secondary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>
    <button class="oui-button oui-button_secondary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>
    <button class="oui-button oui-button_secondary oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    </button>`,
  )
  .add(
    'Large',
    () => `
    <button class="oui-button oui-button_l oui-button_secondary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>
    <button class="oui-button oui-button_l oui-button_secondary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>
    <button class="oui-button oui-button_l oui-button_secondary oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    </button>`,
  )
  .add(
    'Small',
    () => `
    <button class="oui-button oui-button_s oui-button_secondary" ${select(state.label, state.options, state.default)}>
      OK
    </button>
    <button class="oui-button oui-button_s oui-button_secondary" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder"></span>
    </button>`,
  )
  .add(
    'Block',
    () => `
    <button class="oui-button oui-button_block oui-button_secondary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>
    <button class="oui-button oui-button_block oui-button_secondary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder"></span>
      Call to action
    </button>
    <button class="oui-button oui-button_block oui-button_secondary oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder"></span>
    </button>`,
  );

storiesOf('Components|Buttons/Native/Link', module)
  .add(
    'Default',
    () => `
    <button class="oui-button oui-button_link" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>
    <button class="oui-button oui-button_link oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>
    <button class="oui-button oui-button_link oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    </button>`,
  )
  .add(
    'Large',
    () => `
    <button class="oui-button oui-button_l oui-button_link" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>
    <button class="oui-button oui-button_l oui-button_link oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>
    <button class="oui-button oui-button_l oui-button_link oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    </button>`,
  )
  .add(
    'Small',
    () => `
    <button class="oui-button oui-button_s oui-button_link" ${select(state.label, state.options, state.default)}>
      OK
    </button>
    <button class="oui-button oui-button_s oui-button_link" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder"></span>
    </button>`,
  )
  .add(
    'Block',
    () => `
    <button class="oui-button oui-button_block oui-button_link" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>
    <button class="oui-button oui-button_block oui-button_link oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder"></span>
      Call to action
    </button>
    <button class="oui-button oui-button_block oui-button_link oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder"></span>
    </button>`,
  );
