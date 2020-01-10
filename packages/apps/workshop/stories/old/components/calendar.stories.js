import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.calendar/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-calendar-stories';
angular.module(moduleName, ['oui.calendar']);

storiesOf('Old|Components/Calendar', module)
  .addParameters({
    notes: readme,
  })
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
  )
  .add(
    'With week numbers',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar model="$ctrl.model" week-numbers></oui-calendar>
    `)),
  )
  .add(
    'Limited range of dates',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar
      model="$ctrl.model"
      min-date="$ctrl.minDate"
      max-date="$ctrl.maxDate">
    </oui-calendar>
    `, {
      $ctrl: new class {
        constructor() {
          const today = new Date();
          const day = 24 * 60 * 60 * 1000;
          const week = 7 * day;
          const nextWeek = new Date(today.getTime() + week);

          // Min & Max example
          this.minDate = today;
          this.maxDate = nextWeek;
        }
      }(),
    })),
  )
  .add(
    'Enable timepicker',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar
      model="$ctrl.model"
      format="Y-m-d H:i"
      enable-time>
    </oui-calendar>
    `)),
  )
  .add(
    'Disabling dates',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar
      model="$ctrl.model"
      disable-date="$ctrl.disableDate">
    </oui-calendar>
    `, {
      $ctrl: new class {
        constructor() {
          const today = new Date();
          const day = 24 * 60 * 60 * 1000;
          const yesterday = new Date(today.getTime() - day);
          const tomorrow = new Date(today.getTime() + day);

          // Disable example
          this.disableDate = [yesterday, today, tomorrow];
        }
      }(),
    })),
  )
  .add(
    'Disabling all dates except select few',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar
      model="$ctrl.model"
      enable-date="$ctrl.enableDate">
    </oui-calendar>
    `, {
      $ctrl: new class {
        constructor() {
          const today = new Date();
          const day = 24 * 60 * 60 * 1000;
          const yesterday = new Date(today.getTime() - day);
          const tomorrow = new Date(today.getTime() + day);

          // Disable example
          this.enableDate = [yesterday, today, tomorrow];
        }
      }(),
    })),
  )
  .add(
    'Date formatting',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar
      alt-format="F j, Y"
      format="d-m-Y"
      model="$ctrl.model">
    </oui-calendar>
    `)),
  )
  .add(
    'Range mode',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar model="$ctrl.model" mode="range"></oui-calendar>
    `)),
  )
  .add(
    'Multiple mode',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-calendar model="$ctrl.model" mode="multiple"></oui-calendar>
    `)),
  );
