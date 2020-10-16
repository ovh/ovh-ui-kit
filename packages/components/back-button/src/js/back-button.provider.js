import merge from 'lodash/merge';

export default class {
  constructor() {
    this.translations = {
      backTo: 'Back to',
      previousPage: 'Previous page', // Deprecated
      backToPreviousPage: 'Back to “Previous page“',
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
