import { storiesOf } from '@storybook/html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';
import centered from '@storybook/addon-centered/html';

storiesOf('Components/Calendar', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
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
      const disabled = boolean('disabled', true);

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
