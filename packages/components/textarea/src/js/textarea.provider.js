import merge from 'lodash/merge';

export default class {
  constructor() {
    this.translations = {
      lengthCounter: '{{length}}/{{max}} characters',
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
