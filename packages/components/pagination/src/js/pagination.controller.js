import clamp from 'lodash/clamp';
import range from 'lodash/range';

export default class {
  constructor($attrs, ouiPaginationConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.config = ouiPaginationConfiguration;
    this.pageSizeList = this.config.pageSizeList.slice();
    this.pageSize = this.config.pageSize;
  }

  $onChanges(changes) {
    // If pageSizeMax changes, recalculate pageSizeList...
    if (changes.pageSizeMax) {
      this.pageSizeList = this.config.pageSizeList.slice();
      this.pageSizeList.sort((a, b) => a - b);

      if (angular.isNumber(this.pageSizeMax)) {
        this.pageSizeList = this.pageSizeList
          .filter(pageSize => pageSize <= this.pageSizeMax);

        // ... and add the max page size if necessary.
        if (this.pageSizeList.indexOf(this.pageSizeMax) < 0) {
          this.pageSizeList.push(this.pageSizeMax);
        }
      }
    }

    // Instead of recalculate these values on each digest,
    // values are calculated on each change concerning the table.
    // It avoids digest problems in ng-repeat.
    this.processPaginationChange();

    this.processTranslations();
  }

  processPaginationChange() {
    this.pageCount = this.getPageCount();
    this.currentPage = this.getCurrentPage();
    this.inputPage = this.getCurrentPage(); // Update model for input
  }

  processTranslations() {
    this.translations = { ...this.config.translations };
    this.translations.ofNResults = this.translations.ofNResults
      .replace('{{totalItems}}', this.totalItems);
    this.translations.currentPageOfPageCount = this.translations.currentPageOfPageCount
      .replace('{{currentPage}}', this.currentPage)
      .replace('{{pageCount}}', this.pageCount);

    // For huge amount of pages, we replaced "{{currentPage}}" by a number input
    const translations = { ...this.config.translations };
    this.translations.inputPageOfPageCount = translations.currentPageOfPageCount
      .replace('{{pageCount}}', this.pageCount)
      .split('{{currentPage}}');
  }

  getPageAriaLabel(page) {
    const pageOfPageCountText = this.config.translations.currentPageOfPageCount;
    return pageOfPageCountText
      .replace('{{currentPage}}', page)
      .replace('{{pageCount}}', this.pageCount);
  }

  onPageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.currentOffset = 1;

    // If page-size attribute is not set on the component (default value),
    // $onChanges is never triggered and other values are not calculated.
    // So these values have to be calculated here.
    if (!this.$attrs.pageSize) {
      this.processPaginationChange();
    }

    this.onPaginationChange();
  }

  onPageChange(page) {
    this.currentOffset = (this.pageSize * (page - 1)) + 1;
    this.currentPage = this.getCurrentPage();
    this.inputPage = this.getCurrentPage(); // Update model for input
    this.onPaginationChange();
  }

  checkPageRange(page) {
    const currentPage = Number.isInteger(page)
      ? clamp(page, 1, this.pageCount)
      : this.currentPage;

    this.onPageChange(currentPage);
  }

  getLastItemOffset() {
    return Math.min(this.currentOffset + this.pageSize - 1, this.totalItems);
  }

  getPageCount() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  getCurrentPage() {
    return Math.floor((this.currentOffset - 1) / this.pageSize) + 1;
  }

  getPageRange() {
    return range(1, this.getPageCount() + 1);
  }

  onPaginationChange() {
    this.onChange({
      $event: {
        offset: this.currentOffset,
        pageSize: this.pageSize,
      },
    });
  }
}
