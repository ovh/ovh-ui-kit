import merge from 'lodash/merge';

export default class {
  constructor() {
    this.operatorsByType = {
      boolean: [
        'is',
        'isNot',
      ],
      date: [
        'is',
        'isAfter',
        'isBefore',
      ],
      number: [
        'is',
        'smaller',
        'bigger',
      ],
      options: [
        'is',
        'isNot',
      ],
      string: [
        'contains',
        'containsNot',
        'startsWith',
        'endsWith',
        'is',
        'isNot',
      ],
    };

    this.translations = {
      column_label: 'Column',
      operator_label: 'Operator',

      operator_boolean_is: 'is',
      operator_boolean_isNot: 'is not',

      operator_string_contains: 'contains',
      operator_string_containsNot: 'does not contain',
      operator_string_startsWith: 'starts with',
      operator_string_endsWith: 'ends with',
      operator_string_is: 'is',
      operator_string_isNot: 'is not',

      operator_number_is: 'is',
      operator_number_smaller: 'is smaller than',
      operator_number_bigger: 'is bigger than',

      operator_date_is: 'is',
      operator_date_isBefore: 'is before',
      operator_date_isAfter: 'is after',

      operator_options_is: 'is',
      operator_options_isNot: 'is not',

      true_label: 'Yes',
      false_label: 'No',

      value_label: 'Value',
      submit_label: 'Add',
    };
  }

  /**
     * Set the operators by type
     * @param {Object} operatorsByType a list of operators by type
     */
  setOperatorsByType(operatorsByType) {
    this.operatorsByType = merge(this.operatorsByType, operatorsByType);
    return this;
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
      operatorsByType: this.operatorsByType,
      translations: this.translations,
    };
  }
}
