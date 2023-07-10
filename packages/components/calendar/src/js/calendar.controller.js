import {
  addBooleanParameter,
  addDefaultParameter,
} from '@ovh-ux/ui-kit.core/src/js/component-utils';
import flatpickr from 'flatpickr/dist/flatpickr';
import merge from 'lodash/merge';

export default class {
  constructor($attrs, $element, $scope, $timeout, ouiCalendarConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$id = $scope.$id;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.locale = ouiCalendarConfiguration.locale;
    this.config = angular.copy(ouiCalendarConfiguration.options);
  }

  setModelValue(value) {
    this.flatpickr.setDate(value, true);
  }

  setEventHooks(hooks) {
    // Add a callback for each events
    hooks.forEach((hook) => {
      this.config[hook] = (selectedDates, dateStr) => {
        this.model = dateStr;
        this.$timeout(this[hook]({ selectedDates, dateStr }));
      };
    });
  }

  setOptionsProperty(property, value) {
    if (angular.isDefined(value)) {
      this.config[property] = value;
    }
  }

  initCalendarInstance() {
    if (this.options) {
      this.config = merge(this.config, this.options);
    }

    // Set options from attributes
    this.setOptionsProperty('appendTo', this.appendTo);
    this.setOptionsProperty('defaultDate', this.model);
    this.setOptionsProperty('disable', this.disableDate);
    this.setOptionsProperty('enable', this.enableDate);
    this.setOptionsProperty('inline', this.inline);
    this.setOptionsProperty('locale', this.locale);
    this.setOptionsProperty('maxDate', this.maxDate);
    this.setOptionsProperty('minDate', this.minDate);
    this.setOptionsProperty('mode', this.mode);
    this.setOptionsProperty('weekNumbers', this.weekNumbers);
    this.setOptionsProperty('enableTime', this.enableTime);

    // Set formatting options
    this.setOptionsProperty('dateFormat', this.format);

    if (angular.isDefined(this.altFormat)) {
      this.setOptionsProperty('altInput', !this.disabled);
      this.setOptionsProperty('altFormat', this.altFormat);
    }

    // Append calendar to control wrapper
    if (!this.appendToBody) {
      const wrapper = this.$element[0].querySelector(
        '.oui-calendar__control-wrapper',
      );
      this.setOptionsProperty('appendTo', wrapper);
    }

    // Set events with array of supported hooks/attributes
    this.setEventHooks(['onChange', 'onOpen', 'onClose']);

    // Get instance of flatpickr when component is ready
    this.setOptionsProperty('onReady', (selectedDates, dateStr, instance) => {
      this.flatpickr = instance;

      // Update model with formatted value
      this.model = dateStr;
    });

    // Init the flatpickr instance
    this.flatpickr = new flatpickr(this.$element.find('input')[0], this.config); // eslint-disable-line new-cap
  }

  $onInit() {
    addBooleanParameter(this, 'appendToBody');
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'enableTime');
    addBooleanParameter(this, 'inline');
    addBooleanParameter(this, 'noCalendar');
    addBooleanParameter(this, 'required');
    addBooleanParameter(this, 'static');
    addBooleanParameter(this, 'weekNumbers');

    addDefaultParameter(this, 'id', `ouiCalendar${this.$id}`);
    addDefaultParameter(this, 'name', `ouiCalendar${this.$id}`);

    this.initCalendarInstance();
    this.handleInputsVisibility();
  }

  handleReadonlyElement(htmlElt, hidden = false) {
    const element = angular.element(htmlElt);
    if (this.disabled) {
      element.attr('disabled', 'disabled');
      element.addClass('disabled');
      if (hidden) {
        element.attr('hidden', 'hidden');
      }
    } else {
      element.removeAttr('disabled');
      element.removeClass('disabled');
      if (hidden) {
        element.removeAttr('hidden');
      }
    }
  }

  handleInputsVisibility() {
    if (this.flatpickr.altInput) {
      // Fix disabled state when there is an alt input
      this.handleReadonlyElement(this.flatpickr.altInput);
    }
    // In inline mode, inputs are managed in calendar container
    if (this.inline) {
      const { calendarContainer } = this.flatpickr;
      const inputs = calendarContainer.querySelectorAll('input');
      angular.forEach(inputs, (input) => {
        this.handleReadonlyElement(input);
      });
      // span AM-PM must be hide to avoid modifiying AM/PM value in readonly mode
      this.handleReadonlyElement(
        calendarContainer.querySelectorAll('.flatpickr-am-pm'),
        true,
      );
    }
  }

  $onChanges({ minDate, maxDate }) {
    if (this.flatpickr) {
      this.handleInputsVisibility();
      if (maxDate) {
        this.flatpickr.set('maxDate', maxDate.currentValue);
      }
      if (minDate) {
        this.flatpickr.set('minDate', minDate.currentValue);
      }
    }
  }

  $onDestroy() {
    this.flatpickr.destroy();
  }

  $postLink() {
    this.$timeout(() => {
      const controls = angular.element(
        this.$element[0].querySelectorAll('.oui-calendar__control'),
      );

      this.$element
        .addClass('oui-calendar')
        .removeAttr('id')
        .removeAttr('name');

      // Avoid 'alt-input' to take bad value of placeholder
      controls.attr('placeholder', this.placeholder);

      if (this.inline) {
        this.$element.addClass('oui-calendar_inline');
        controls.attr('type', 'hidden');
      }
    });
  }
}
