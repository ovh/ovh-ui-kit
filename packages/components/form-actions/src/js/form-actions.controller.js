export default class {
  constructor($attrs, ouiFormActionsConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.config = ouiFormActionsConfiguration;
  }

  $onInit() {
    this.processTranslations();
  }

  processTranslations() {
    this.translations = Object.assign({}, this.config.translations);

    if (angular.isUndefined(this.submitText)) {
      this.submitText = this.translations.submit;
    }

    if (angular.isUndefined(this.cancelText)) {
      this.cancelText = this.translations.cancel;
    }
  }
}
