/* eslint-disable max-classes-per-file */
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Calendar from '@ovh-ux/ui-kit.calendar';

import readme from '@ovh-ux/ui-kit.calendar/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'calendar-webcomponent.stories';
angular.module(moduleName, [Calendar]);

export default {
  title: 'Design System/Components/Calendar/WebComponent',

  parameters: {
    docs: { iframeHeight: 450 },
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
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

export const Inline = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      inline>
    </oui-calendar>`,
  ),
);

export const WithWeekNumbers = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      week-numbers>
    </oui-calendar>`,
  ),
);

WithWeekNumbers.storyName = 'With week numbers';

export const WithTimepicker = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      format="Y-m-d H:i"
      enable-time>
    </oui-calendar>`,
  ),
);

export const MinAndMax = forModule(moduleName).createElement(
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

MinAndMax.storyName = 'Min and Max';

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

DisablingDates.storyName = 'Disabling dates';

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

DisablingAllDatesExceptSelectFew.storyName = 'Disabling all dates except select few';

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

DateFormatting.storyName = 'Date formatting';

export const RangeMode = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      mode="range">
    </oui-calendar>`,
  ),
);

RangeMode.storyName = 'Range mode';

export const MultipleMode = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-calendar
      model="$ctrl.model"
      mode="multiple">
    </oui-calendar>`,
  ),
);

MultipleMode.storyName = 'Multiple mode';
