export default class {
  // This controller can be used by any README.md to test on-change
  // callback and show the actual value.
  constructor($window) {
    'ngInject';

    this.$window = $window;
  }

  showCurrentValueInPopup(value) {
    this.$window.alert(`The current value is: ${value}`);
  }
}
