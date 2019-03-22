import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Calendar from '@ovh/ui-kit.calendar';
import '@ovh/ui-kit.calendar/src/index.less';

storiesOf('Molecules/Calendar', module)
  .add(
    'Simple date selector',
    forModule(Calendar).createElement((compile) => {
      const disabled = boolean('Disabled', false);
      return compile`
        <oui-calendar model="$ctrl.model"
                      placeholder="YYYY-MM-DD"
                      disabled="${disabled}"></oui-calendar>
      `;
    }),
  )
  .add(
    'Full calendar in-place',
    forModule(Calendar).createElement(compile => compile`
      <oui-calendar model="$ctrl.model" inline></oui-calendar>
    `),
  );
