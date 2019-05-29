import { addBooleanParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, ouiFormActionsConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.config = ouiFormActionsConfiguration;
  }

  $onInit() {
    this.processTranslations();

    addBooleanParameter(this, 'disabled');
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
