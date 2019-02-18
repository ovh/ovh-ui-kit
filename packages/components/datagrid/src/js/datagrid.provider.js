import merge from 'lodash/merge';

export default class {
  constructor() {
    this.pageSize = 25;
    this.translations = {
      emptyPlaceholder: 'No data available',
    };
  }

  /**
     * Set the default page size
     * @param {Number} pageSize the default page size
     */
  setPageSize(pageSize) {
    this.pageSize = pageSize;
    return this;
  }

  /**
     * Set the translations for the datagrid component
     * @param {Object} translations a map of translations
     */
  setTranslations(translations) {
    this.translations = merge(this.translations, translations);
    return this;
  }

  $get() {
    return {
      pageSize: this.pageSize,
      translations: this.translations,
    };
  }
}
