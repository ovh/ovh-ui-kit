import merge from 'lodash/merge';

export default class {
  constructor() {
    this.translations = {
      errors: {
        invalid: 'Invalid field.',
        required: 'Mandatory.',
        number: 'Invalid number.',
        email: 'Invalid email.',
        password: 'Invalid password.',
        min: 'Too low ({{min}} min).',
        max: 'Too high ({{max}} max).',
        minlength: 'Too short ({{minlength}} characters min).',
        maxlength: 'Too high ({{maxlength}} characters max).',
        maxsize: 'This file exceeds the size limit',
        type: 'This file extension is not supported',
        pattern: 'Invalid format.',
      },
    };
  }

  /**
     * Set the translations for the field component
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
