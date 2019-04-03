import { storiesOf } from '@storybook/html';

storiesOf('Styles/Back Button', module)
  .add(
    'With a button',
    () => `
    <div class="oui-back-button">
      <button type="button" class="oui-button oui-button_icon-alone">
        <span class="oui-icon oui-icon-chevron-left"></span>
      </button>
      <h2 class="oui-back-button_title">Lorem ipsum dolor sit amet</h2>
    </div>
    `,
  )
  .add(
    'With a link',
    () => `
    <div class="oui-back-button">
      <a class="oui-button oui-button_icon-alone" href="">
        <span class="oui-icon oui-icon-chevron-left"></span>
      </a>
      <h2 class="oui-back-button_title">Lorem ipsum dolor sit amet</h2>
    </div>
    `,
  );
