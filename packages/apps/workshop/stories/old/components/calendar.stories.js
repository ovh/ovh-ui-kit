/* eslint-disable max-classes-per-file */
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.calendar/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-calendar-stories';
angular.module(moduleName, ['oui.calendar']);

export default {
  title: 'Old/Components/Calendar',

  parameters: {
    notes: readme,
  },
};

export const SimpleDateSelector = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      on-change="$ctrl.onChange(selectedDates, dateStr)"
      on-close="$ctrl.onClose(selectedDates, dateStr)"
      on-open="$ctrl.onOpen(selectedDates, dateStr)"
      placeholder="YYYY-MM-DD">
    </oui-calendar>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
        onClose: action('onClose'),
        onOpen: action('onOpen'),
      },
    },
  ),
);

SimpleDateSelector.story = {
  name: 'Simple date selector',
};

export const FullCalendarInPlace = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      inline>
    </oui-calendar>`,
  ),
);

FullCalendarInPlace.story = {
  name: 'Full calendar in-place',
};

export const WithWeekNumbers = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      week-numbers>
    </oui-calendar>`,
  ),
);

WithWeekNumbers.story = {
  name: 'With week numbers',
};

export const LimitedRangeOfDates = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      min-date="$ctrl.minDate"
      max-date="$ctrl.maxDate">
    </oui-calendar>`,
    {
      $ctrl: new (class {
        constructor() {
          const today = new Date();
          const day = 24 * 60 * 60 * 1000;
          const week = 7 * day;
          const nextWeek = new Date(today.getTime() + week);

          // Min & Max example
          this.minDate = today;
          this.maxDate = nextWeek;
        }
      })(),
    },
  ),
);

LimitedRangeOfDates.story = {
  name: 'Limited range of dates',
};

export const EnableTimepicker = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      format="Y-m-d H:i"
      enable-time>
    </oui-calendar>`,
  ),
);

EnableTimepicker.story = {
  name: 'Enable timepicker',
};

export const DisablingDates = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      disable-date="$ctrl.disableDate">
    </oui-calendar>`,
    {
      $ctrl: new (class {
        constructor() {
          const today = new Date();
          const day = 24 * 60 * 60 * 1000;
          const yesterday = new Date(today.getTime() - day);
          const tomorrow = new Date(today.getTime() + day);

          // Disable example
          this.disableDate = [yesterday, today, tomorrow];
        }
      })(),
    },
  ),
);

DisablingDates.story = {
  name: 'Disabling dates',
};

export const DisablingAllDatesExceptSelectFew = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      enable-date="$ctrl.enableDate">
    </oui-calendar>`,
    {
      $ctrl: new (class {
        constructor() {
          const today = new Date();
          const day = 24 * 60 * 60 * 1000;
          const yesterday = new Date(today.getTime() - day);
          const tomorrow = new Date(today.getTime() + day);

          // Disable example
          this.enableDate = [yesterday, today, tomorrow];
        }
      })(),
    },
  ),
);

DisablingAllDatesExceptSelectFew.story = {
  name: 'Disabling all dates except select few',
};

export const DateFormatting = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      alt-format="F j, Y"
      format="d-m-Y"
      model="$ctrl.model">
    </oui-calendar>`,
  ),
);

DateFormatting.story = {
  name: 'Date formatting',
};

export const RangeMode = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      mode="range">
    </oui-calendar>`,
  ),
);

RangeMode.story = {
  name: 'Range mode',
};

export const MultipleMode = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      mode="multiple">
    </oui-calendar>`,
  ),
);

MultipleMode.story = {
  name: 'Multiple mode',
};
