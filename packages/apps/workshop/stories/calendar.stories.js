import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

// Create mock module for the stories
const moduleName = 'oui-calendar-stories';
angular.module(moduleName, ['oui.calendar']);

storiesOf('Molecules/Calendar', module)
  .add(
    'Simple date selector',
    forModule(moduleName).createElement((compile) => {
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
    forModule(moduleName).createElement(compile => compile`
      <oui-calendar model="$ctrl.model" inline></oui-calendar>
    `),
  );
