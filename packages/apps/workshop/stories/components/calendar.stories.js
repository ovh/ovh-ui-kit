import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-calendar-stories';
angular.module(moduleName, ['oui.calendar']);

storiesOf('Components/Calendar', module)
  .add(
    'Simple date selector',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      on-change="$ctrl.onChange(selectedDates, dateStr)"
      on-close="$ctrl.onClose(selectedDates, dateStr)"
      on-open="$ctrl.onOpen(selectedDates, dateStr)"
      placeholder="YYYY-MM-DD">
    </oui-calendar>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
        onClose: action('onClose'),
        onOpen: action('onOpen'),
      },
    })),
  )
  .add(
    'Full calendar in-place',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar model="$ctrl.model" inline></oui-calendar>
    `)),
  );
