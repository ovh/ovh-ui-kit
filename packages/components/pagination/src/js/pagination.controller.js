import { addDefaultParameter } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';
import clamp from 'lodash/clamp';
import range from 'lodash/range';

const MODES = [
  'button',
  'select',
  'input',
];

const MAX_THRESHOLD_MODE = {
  button: 10,
  select: 100,
};

export default class {
  constructor($attrs, $element, $timeout, ouiPaginationConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
    this.config = ouiPaginationConfiguration;
  }

  getCurrentPage() {
    return Math.floor((this.currentOffset - 1) / this.currentPageSize) + 1;
  }

  getCurrentOffset(page) {
    const offset = (this.currentPageSize * (page - 1)) + 1;
    return clamp(offset, 1, this.totalItems);
  }

  getPageCount() {
    return Math.ceil(this.totalItems / this.currentPageSize);
  }

  getPageRange() {
    return range(1, this.pageCount + 1);
  }

  getPageSizeList() {
    let { pageSizeList } = this.config;

    // Add the currentPageSize in the list if necessary
    if (angular.isNumber(this.currentPageSize) && !pageSizeList.includes(this.currentPageSize)) {
      pageSizeList.push(this.currentPageSize);
    }

    // Filter value above pageSizeMax
    if (angular.isNumber(this.pageSizeMax)) {
      pageSizeList = pageSizeList.filter((pageSize) => pageSize <= this.pageSizeMax);

      // ... and add the max page size if necessary.
      if (!pageSizeList.includes(this.pageSizeMax)) {
        pageSizeList.push(this.pageSizeMax);
      }
    }

    return pageSizeList.sort((a, b) => a - b);
  }

  getPaginationMode() {
    if (!angular.isUndefined(this.$attrs.mode) && MODES.includes(this.mode)) {
      return this.mode;
    }

    // If we don't have a valid "mode" value
    // We select it automatically based on thresholds
    if (this.pageCount <= MAX_THRESHOLD_MODE.button) {
      return 'button';
    }
    if (
      this.pageCount > MAX_THRESHOLD_MODE.button
      && this.pageCount <= MAX_THRESHOLD_MODE.select
    ) {
      return 'select';
    }
    return 'input';
  }

  getPaginationTranslations() {
    const translations = {
      ...this.config.translations,
      splittedPageOfPageCount: this.config.translations.currentPageOfPageCount,
    };

    translations.ofNResults = translations.ofNResults
      .replace('{{totalItems}}', this.totalItems);
    translations.splittedPageOfPageCount = translations.splittedPageOfPageCount
      .replace('{{pageCount}}', this.pageCount)
      .split('{{currentPage}}');
    translations.currentPageOfPageCount = translations.currentPageOfPageCount
      .replace('{{currentPage}}', this.currentPage)
      .replace('{{pageCount}}', this.pageCount);

    return translations;
  }

  onPageChange(page) {
    // The numeric input returns undefined
    // If the value doesn't match the min/max values
    // In this case, we reset the current page
    this.currentPage = (Number.isInteger(page))
      ? page
      : this.getCurrentPage();

    this.currentOffset = this.getCurrentOffset(this.currentPage);

    this.onChange({
      $event: {
        offset: this.currentOffset,
        pageSize: this.currentPageSize,
      },
    });
  }

  onPageSizeChange(pageSize) {
    // Since the pageSize changed
    // We need to update all the selectors
    this.updatePaginationSelectors(pageSize);

    this.onChange({
      $event: {
        offset: this.currentOffset,
        pageSize: this.currentPageSize,
      },
    });
  }

  updatePaginationSelectors(pageSize) {
    if (pageSize && this.currentOffset && this.totalItems) {
      // PageSize selector
      this.currentPageSize = pageSize || this.pageSize;
      this.pageSizeList = this.getPageSizeList();

      // Page selector
      this.currentPage = this.getCurrentPage();
      this.pageCount = this.getPageCount();
      this.pageRange = this.getPageRange();

      // Pagination template
      this.mode = this.getPaginationMode();
      this.translations = this.getPaginationTranslations();
    }
  }

  $onInit() {
    addDefaultParameter(this, 'pageSize', this.config.pageSize);

    this.updatePaginationSelectors(this.pageSize);
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-pagination'));
  }

  $onChanges({ pageSize }) {
    this.updatePaginationSelectors(
      (pageSize)
        ? pageSize.currentValue
        : this.pageSize,
    );
  }
}
