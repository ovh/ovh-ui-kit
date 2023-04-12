import merge from 'lodash/merge';

export default class {
  constructor() {
    this.paginationHeaders = {
      cursor: 'X-Pagination-Cursor',
      nextCursor: 'X-Pagination-Cursor-Next',
      size: 'X-Pagination-Size',
    };
  }

  /**
   * Set the headers for the pagination cursor api
   * @param {Object} paginationHeaders the http headers
   * @param {string=} paginationHeaders.cursor the cursor pagination header
   * @param {string=} paginationHeaders.nextCursor the next cursor pagination header
   * @param {string=} paginationHeaders.size the size pagination header
   */
  setPaginationHeaders(paginationHeaders) {
    this.paginationHeaders = merge(this.paginationHeaders, paginationHeaders);
    return this;
  }

  $get() {
    return angular.copy({
      paginationHeaders: this.paginationHeaders,
    });
  }
}
