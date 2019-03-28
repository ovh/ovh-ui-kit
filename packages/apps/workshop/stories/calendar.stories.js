import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../src/utils';

// Create mock module for the stories
const moduleName = 'oui-calendar-stories';
angular.module(moduleName, ['oui.calendar']);

storiesOf('Molecules/Calendar', module)
  .add(
    'Simple date selector',
    forModule(moduleName).createElement(() => compileTemplate(
      `<oui-calendar model="$ctrl.model"
                     placeholder="YYYY-MM-DD"
                     disabled="$ctrl.disabled"></oui-calendar>
      `,
      {
        $ctrl: {
          disabled: boolean('Disabled', false),
        },
      },
    )),
  )
  .add(
    'Full calendar in-place',
    forModule(moduleName).createElement(() => compileTemplate(`
      <oui-calendar model="$ctrl.model" inline></oui-calendar>
    `)),
  );
