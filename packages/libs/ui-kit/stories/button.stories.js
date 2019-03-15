import '../src/less/oui.less';
import '../src/js/index';

import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';
import centered from '@storybook/addon-centered/html';

storiesOf('Components/Button', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add(
    'default',
    forModule('oui.button').createElement(compile => compile`
      <oui-button>Default button</oui-button>
    `),
  )
  .add(
    'variants',
    forModule('oui.button').createElement(compile => compile`
      <oui-button variant="primary">Primary</oui-button>
      <oui-button variant="secondary">Secondary</oui-button>
      <oui-button variant="link">Link</oui-button>
    `),
  )
  .add(
    'disabled',
    forModule('oui.button').createElement(compile => compile`
      <oui-button variant="primary" disabled>Primary</oui-button>
      <oui-button variant="secondary" disabled>Secondary</oui-button>
      <oui-button variant="link" disabled>Link</oui-button>
    `),
  );
