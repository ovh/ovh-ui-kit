export default class {
  constructor($attrs, $element, $timeout, $window, ouiBackButtonConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
    this.$window = $window;
    this.translations = ouiBackButtonConfiguration.translations;
  }

  $postLink() {
    this.$element.addClass('oui-back-button');

    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => this.$element
      .removeAttr('aria-label')
      .removeAttr('id')
      .removeAttr('name'));
  }

  onBtnClick() {
    if (angular.isFunction(this.onClick)) {
      this.onClick();
    } else if (!this.href) {
      this.$window.history.back();
    }
  }

  getBtnText() {
    return this.previousPage
      ? `${this.translations.backTo} “${this.previousPage}”`
      : this.translations.backToPreviousPage || `${this.translations.backTo} ${this.translations.previousPage}`;
  }

  // Return value of "ui-sref"
  getFullSref() {
    return `${this.state}(${JSON.stringify(this.stateParams)})`;
  }
}
