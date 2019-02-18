import { addBooleanParameter } from '@ovh/ui-kit.core/src/js/component-utils';

const rootClass = 'oui-textarea';
const disabledClass = 'oui-textarea_disabled';
const focusClass = 'oui-textarea_active';
const readonlyClass = 'oui-textarea_readonly';
const errorClass = 'oui-textarea_error';
const footerClass = 'oui-textarea__footer';

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
  }

  $postLink() {
    this.$element.addClass(rootClass);

    this.$element.toggleClass(disabledClass, !!this.disabled);
    this.$element.toggleClass(readonlyClass, !!this.readonly);

    this.$timeout(() => {
      this.$element
        .removeAttr('id')
        .removeAttr('name');

      this.$footer = angular.element(this.$element[0].querySelector(`.${footerClass}`));
      this.textarea = this.$element[0].querySelector('textarea');
      this.$footer.on('click', () => {
        this.textarea.focus();
      });

      this.updateErrorState();
    });
  }

  $onChanges(changes) {
    if (changes.disabled) {
      this.setDisabled(changes.disabled.currentValue);
    }

    if (changes.readonly) {
      this.setReadonly(changes.readonly.currentValue);
    }
  }

  $onDestroy() {
    if (this.$footer) {
      this.$footer.off('click');
    }
  }

  onTextareaChange() {
    if (this.onChange) {
      this.onChange({ modelValue: this.model });
    }
    this.updateErrorState();
  }

  updateErrorState() {
    if (!this.textarea || angular.isUndefined(this.maxlength)) {
      return;
    }
    const { length } = angular.element(this.textarea).val();
    this.$element.toggleClass(errorClass, length > this.maxlength);
  }

  getMaxLengthText() {
    const translation = this.ouiTextareaConfiguration.translations.lengthCounter;
    return translation
      .replace('{{length}}', this.textarea ? this.textarea.value.length : 0)
      .replace('{{max}}', this.maxlength);
  }

  setDisabled(disabled) {
    this.disabled = disabled;
    this.$element.toggleClass(disabledClass, disabled);
  }

  setFocus(focused) {
    this.$element.toggleClass(focusClass, focused);
  }

  setReadonly(readonly) {
    this.readonly = readonly;
    this.$element.toggleClass(readonlyClass, readonly);
  }
}
