import merge from 'lodash/merge';

export default class {
  constructor() {
    this.translations = {
      optionalLabel: '(optional)',
      modifyThisStep: 'Modify this step',
      skipThisStep: 'Skip this step',
      nextButtonLabel: 'Next',
      submitButtonLabel: 'Submit',
      cancelButtonLabel: 'Cancel',
    };
  }

  /**
     * Set the translations
     * @param {Object} translations a map of translations
     */
  setTranslations(translations) {
    this.translations = merge(this.translations, translations);
    return this;
  }

  $get() {
    return {
      translations: this.translations,
    };
  }
}
