import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Calendar from '@ovh/ui-kit.calendar';
import '@ovh/ui-kit.calendar/src/index.less';

storiesOf('Components/Calendar', module)
  .add(
    'default',
    forModule(Calendar).createElement(compile => compile`
      <oui-calendar model="$ctrl.model"></oui-calendar>
    `),
  )
  .add(
    'placeholder',
    forModule(Calendar).createElement(compile => compile`
      <oui-calendar model="$ctrl.model" placeholder="YYYY-MM-DD"></oui-calendar>
    `),
  )
  .add(
    'disabled',
    forModule(Calendar).createElement((compile) => {
      const disabled = boolean('disabled', true);

      return compile`
        <oui-calendar model="$ctrl.model" disabled="${disabled}"></oui-calendar>
      `;
    }),
  )
  .add(
    'inline',
    forModule(Calendar).createElement(compile => compile`
      <oui-calendar model="$ctrl.model" inline></oui-calendar>
    `),
  );
