import '@ovh/ui-kit.button';
import '@ovh/ui-kit.button/src/index.less';

import {
  Storybook,
  Knobs,
  forModule,
  centered,
} from '@ovh/ui-kit.core/src/js/storybook-utils';

Storybook.storiesOf('Components/Button', module)
  .addDecorator(centered)
  .addDecorator(Knobs.withKnobs)
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
