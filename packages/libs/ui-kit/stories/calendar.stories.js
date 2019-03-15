import '@ovh/ui-kit.calendar';
import '@ovh/ui-kit.calendar/src/index.less';

import {
  Storybook,
  Knobs,
  forModule,
  centered,
} from '@ovh/ui-kit.core/src/js/storybook-utils';

Storybook.storiesOf('Components/Calendar', module)
  .addDecorator(centered)
  .addDecorator(Knobs.withKnobs)
  .add(
    'default',
    forModule('oui.calendar').createElement(compile => compile`
      <oui-calendar model="$ctrl.model"></oui-calendar>
    `),
  )
  .add(
    'placeholder',
    forModule('oui.calendar').createElement(compile => compile`
      <oui-calendar model="$ctrl.model" placeholder="YYYY-MM-DD"></oui-calendar>
    `),
  )
  .add(
    'disabled',
    forModule('oui.calendar').createElement((compile) => {
      const disabled = Knobs.boolean('disabled', true);

      return compile`
        <oui-calendar model="$ctrl.model" disabled="${disabled}"></oui-calendar>
      `;
    }),
  )
  .add(
    'inline',
    forModule('oui.calendar').createElement(compile => compile`
      <oui-calendar model="$ctrl.model" inline></oui-calendar>
    `),
  );
