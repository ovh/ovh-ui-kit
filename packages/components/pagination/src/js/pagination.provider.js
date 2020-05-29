import merge from 'lodash/merge';

export default class {
  constructor() {
    this.pageSize = 25;
    this.pageSizeList = [
      25, 50, 100, 300,
    ];
    this.translations = {
      resultsPerPage: 'Results per page',
      ofNResults: 'of {{totalItems}} results',
      currentPageOfPageCount: 'Page {{currentPage}} of {{pageCount}}',
      previousPage: 'Previous page',
      nextPage: 'Next page',
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
     * Set the choices of page sizes
     * @param {Array<Number>} pageSizeList a list of page sizes
     */
  setPageSizeList(pageSizeList) {
    this.pageSizeList = pageSizeList;
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
    return angular.copy({
      pageSize: this.pageSize,
      pageSizeList: this.pageSizeList,
      translations: this.translations,
    });
  }
}
