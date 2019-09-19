import { storiesOf } from '@storybook/html';

storiesOf('Components|Box/Native', module)
  .add(
    'Default',
    () => `
    <div class="oui-box">
      <div class="oui-box__heading">An awesome title for an awesome box</div>
      <div class="oui-box__body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed tempus sapien erat, et molestie magna tristique non.
        Sed tincidunt eu augue tempor consectetur. Nullam iaculis,
        nibh mollis vulputate elementum, neque est iaculis nisi,
        et gravida turpis erat non dui. Nunc eget tortor et enim
        interdum euismod sed eget purus. Integer in metus ultrices,
        ultricies lacus in, fermentum nisi. Cras sed neque id dui
        fermentum faucibus. Mauris mollis arcu justo, eget convallis
        massa volutpat ac.
      </div>
    </div>
    `,
  )
  .add(
    'Light',
    () => `
    <div class="oui-box oui-box_light">
      <div class="oui-box__heading">An awesome title for an awesome box</div>
      <div class="oui-box__body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed tempus sapien erat, et molestie magna tristique non.
        Sed tincidunt eu augue tempor consectetur. Nullam iaculis,
        nibh mollis vulputate elementum, neque est iaculis nisi,
        et gravida turpis erat non dui. Nunc eget tortor et enim
        interdum euismod sed eget purus. Integer in metus ultrices,
        ultricies lacus in, fermentum nisi. Cras sed neque id dui
        fermentum faucibus. Mauris mollis arcu justo, eget convallis
        massa volutpat ac.
      </div>
    </div>
    `,
  );
