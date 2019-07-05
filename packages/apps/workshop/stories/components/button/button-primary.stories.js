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

storiesOf('Components|Buttons/Primary/Normal', module)
  .add(
    'Text',
    () => `
    <button class="oui-button oui-button_primary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>`,
  )
  .add(
    'Text + Icon left',
    () => `
    <button class="oui-button oui-button_primary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>`,
  )
  .add(
    'Text + Icon right',
    () => `
    <button class="oui-button oui-button_primary oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    </button>`,
  );

storiesOf('Components|Buttons/Primary/Large', module)
  .add(
    'Text',
    () => `
    <button class="oui-button oui-button_large oui-button_primary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>`,
  )
  .add(
    'Text + Icon left',
    () => `
    <button class="oui-button oui-button_large oui-button_primary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>`,
  )
  .add(
    'Text + Icon right',
    () => `
    <button class="oui-button oui-button_large oui-button_primary oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
    </button>`,
  );

storiesOf('Components|Buttons/Primary/Small', module)
  .add(
    'Text',
    () => `
    <button class="oui-button oui-button_small oui-button_primary" ${select(state.label, state.options, state.default)}>
      OK
    </button>`,
  )
  .add(
    'Icon',
    () => `
    <button class="oui-button oui-button_small oui-button_primary" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder"></span>
    </button>`,
  );

storiesOf('Components|Buttons/Primary/Block', module)
  .add(
    'Text',
    () => `
    <button class="oui-button oui-button_block oui-button_primary" ${select(state.label, state.options, state.default)}>
    Call to action
    </button>`,
  )
  .add(
    'Text + Icon left',
    () => `
    <button class="oui-button oui-button_block oui-button_primary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder"></span>
      Call to action
    </button>`,
  )
  .add(
    'Text + Icon right',
    () => `
    <button class="oui-button oui-button_block oui-button_primary oui-button_icon-right" ${select(state.label, state.options, state.default)}>
      Call to action
      <span class="oui-icon oui-icon-folder"></span>
    </button>`,
  );
