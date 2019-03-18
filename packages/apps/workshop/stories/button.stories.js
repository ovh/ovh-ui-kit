import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

import Button from '@ovh/ui-kit.button';
import '@ovh/ui-kit.button/src/index.less';

storiesOf('Components/Button', module)
  .add(
    'default',
    forModule(Button).createElement(compile => compile`
      <oui-button>Default button</oui-button>
    `),
  )
  .add(
    'variants',
    forModule(Button).createElement(compile => compile`
      <oui-button variant="primary">Primary</oui-button>
      <oui-button variant="secondary">Secondary</oui-button>
      <oui-button variant="link">Link</oui-button>
    `),
  )
  .add(
    'disabled',
    forModule(Button).createElement(compile => compile`
      <oui-button variant="primary" disabled>Primary</oui-button>
      <oui-button variant="secondary" disabled>Secondary</oui-button>
      <oui-button variant="link" disabled>Link</oui-button>
    `),
  );
