export default class {
  constructor($timeout) {
    'ngInject';

    this.$timeout = $timeout;
  }

  $onInit() {
    const today = new Date();
    const day = 24 * 60 * 60 * 1000; // eslint-disable-line no-magic-numbers
    const week = 7 * day; // eslint-disable-line no-magic-numbers
    const nextWeek = new Date(today.getTime() + week);
    const yesterday = new Date(today.getTime() - day);
    const tomorrow = new Date(today.getTime() + day);

    // Min & Max example
    this.minDate = today;
    this.maxDate = nextWeek;

    // Formatting example
    this.formatModel = today;

    // Disable example
    this.disableDate = [yesterday, today, tomorrow];

    // Disable example
    this.enableDate = [yesterday, today, tomorrow];

    // Mode 'range' example
    this.rangeModel = [today, nextWeek];

    // Mode 'multiple' example
    this.multipleModel = [yesterday, today, tomorrow];

    // Events example
    this.eventsModel = today;
  }

  onChange(selectedDates, dateStr) {
    this.onChangeValues = { selectedDates, dateStr };
  }

  onOpen(selectedDates, dateStr) {
    this.onOpenValues = { selectedDates, dateStr };
  }

  onClose(selectedDates, dateStr) {
    this.onCloseValues = { selectedDates, dateStr };
  }
}
