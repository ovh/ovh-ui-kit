import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';
import Flatpickr from 'flatpickr';
import merge from 'lodash/merge';

export default class {
  constructor($attrs, $element, $scope, $timeout, ouiCalendarConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$id = $scope.$id;
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
      const wrapper = this.$element[0].querySelector('.oui-calendar__control-wrapper');
      this.setOptionsProperty('appendTo', wrapper);
    }

    // Set events with array of supported hooks/attributes
    this.setEventHooks([
      'onChange',
      'onOpen',
      'onClose',
    ]);

    // Get instance of flatpickr when component is ready
    this.setOptionsProperty('onReady', (selectedDates, dateStr, instance) => {
      this.flatpickr = instance;

      // Update model with formatted value
      this.model = dateStr;
    });

    // Init the flatpickr instance
    this.flatpickr = new Flatpickr(this.$element.find('input')[0], this.config);
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
  }

  $onDestroy() {
    this.flatpickr.destroy();
  }

  $postLink() {
    this.$timeout(() => {
      const controls = angular.element(this.$element[0].querySelectorAll('.oui-calendar__control'));

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
