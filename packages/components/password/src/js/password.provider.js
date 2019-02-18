import merge from 'lodash/merge';

export default class {
  constructor() {
    this.translations = {
      allRulesValidLabel: 'All password rules are met.',
      ariaHidePasswordLabel: 'Hide password',
      ariaShowPasswordLabel: 'Show password',
      ariaValidRuleLabel: 'Valid rule.',
      ariaInvalidRuleLabel: 'Invalid rule.',
      riskyPasswordLabel: 'Risky password.',
      badPasswordLabel: 'Bad password.',
      weakPasswordLabel: 'Weak password.',
      goodPasswordLabel: 'Good password.',
      strongPasswordLabel: 'Strong password.',
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
