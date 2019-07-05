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

storiesOf('Components|Buttons/Primary', module)
  .add(
    'Normal',
    () => `
    <button class="oui-button oui-button_primary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>`,
  )
  .add(
    'Normal + Icon',
    () => `
    <button class="oui-button oui-button_primary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>`,
  )
  .add(
    'Large',
    () => `
    <button class="oui-button oui-button_large oui-button_primary" ${select(state.label, state.options, state.default)}>
      Call to action
    </button>`,
  )
  .add(
    'Large + Icon',
    () => `
    <button class="oui-button oui-button_large oui-button_primary oui-button_icon-left" ${select(state.label, state.options, state.default)}>
      <span class="oui-icon oui-icon-folder" aria-hidden="true"></span>
      Call to action
    </button>`,
  );
