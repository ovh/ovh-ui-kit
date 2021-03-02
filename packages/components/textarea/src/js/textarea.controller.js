import { addBooleanParameter } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout, ouiTextareaConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
    this.ouiTextareaConfiguration = ouiTextareaConfiguration;
  }

  $onInit() {
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'required');
    addBooleanParameter(this, 'readonly');
    addBooleanParameter(this, 'inline');
  }

  $postLink() {
    this.$element.addClass('oui-textarea__wrapper');

    this.$timeout(() => {
      this.$element
        .removeAttr('id')
        .removeAttr('name');

      if (this.inline) {
        this.$element.addClass('oui-textarea__wrapper_inline');
      }

      this.textarea = this.$element[0].querySelector('textarea');
      this.updateErrorState();
    });
  }

  onTextareaChange() {
    if (this.onChange) {
      this.onChange({ modelValue: this.model });
    }
    this.updateErrorState();
  }

  updateErrorState() {
    if (!this.textarea || angular.isUndefined(this.maxlength)) {
      return false;
    }

    const { length } = angular.element(this.textarea).val();
    return length > this.maxlength;
  }

  getMaxLengthText() {
    const translation = this.ouiTextareaConfiguration.translations.lengthCounter;
    return translation
      .replace('{{length}}', this.textarea ? this.textarea.value.length : 0)
      .replace('{{max}}', this.maxlength);
  }
}
