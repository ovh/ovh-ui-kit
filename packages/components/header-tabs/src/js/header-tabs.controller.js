const checkScrollDelay = 800;

export default class {
  constructor($attrs, $element, $interval, $scope, $timeout, $window) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$interval = $interval;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$window = $window;
  }

  $onInit() {
    this.scroll = {
      begin: 0,
      end: 0,
    };
  }

  $onDestroy() {
    angular.element(this.tabsElement).off('scroll');
    angular.element(this.$window).off('resize');
  }

  $postLink() {
    this.$timeout(() => {
      this.$element
        .addClass('oui-header-tabs');

      this.tabsElement = this.$element[0].querySelector('.oui-header-tabs__container');
      angular.element(this.tabsElement).on('scroll', event => this.checkScroll(event));
      angular.element(this.$window).on('resize', event => this.checkScroll(event));
      this.initialCheck();
    });

    /* On initial render, we need to wait few seconds before calling
           the checkScroll method otherwise panel size would be wrong. */
    this.$timeout(() => this.initialCheck(), checkScrollDelay);
  }

  scrollLeft() {
    this.scroll('left');
  }

  scrollRight() {
    this.scroll('right');
  }

  initialCheck() {
    const activeTab = this.$element[0].querySelector('.oui-header-tabs__item_active');
    if (activeTab && activeTab.offsetLeft - this.tabsElement.offsetLeft > 0) {
      this.tabsElement.scrollLeft = activeTab.offsetLeft - this.tabsElement.offsetLeft;
    } else {
      this.scroll.end = this.tabsElement.scrollWidth - this.tabsElement.offsetWidth;
    }
  }

  scroll(direction) {
    const itemToGo = this.findItemToGo(direction);
    this.scrollToItem(direction, itemToGo);
  }

  checkScroll(e) {
    if (e) {
      e.preventDefault();
    }

    this.scroll.begin = this.tabsElement.scrollLeft;
    this.scroll.end = this.tabsElement.scrollWidth
      - this.tabsElement.offsetWidth
      - this.tabsElement.scrollLeft;
    this.$scope.$digest();
  }

  findItemToGo(direction) {
    const tabsList = [].slice.call(this.tabsElement.querySelectorAll(':scope > .oui-header-tabs__item'));
    const tabsOffset = this.tabsElement.offsetLeft;
    const tabsStart = this.tabsElement.scrollLeft;
    const tabsEnd = tabsStart + this.tabsElement.offsetWidth;

    let itemGutter = 0;
    if (tabsList && tabsList.length > 1) {
      itemGutter = tabsList[1].offsetLeft - (tabsList[0].offsetLeft + tabsList[0].offsetWidth);
    }

    let itemToGo = tabsList[0];
    for (const item of tabsList) {
      const itemStart = item.offsetLeft - tabsOffset;
      if (direction === 'right' && itemStart <= tabsEnd + tabsOffset + itemGutter) {
        itemToGo = item;
      } else if (direction === 'left' && itemStart < tabsStart) {
        itemToGo = item;
      } else {
        break;
      }
    }
    return itemToGo;
  }

  scrollToItem(direction, item) {
    const duration = 500;
    const stepDuration = 15;
    const step = this.tabsElement.scrollWidth / (duration / stepDuration);

    const itemStart = item.offsetLeft - this.tabsElement.offsetLeft;
    const itemEnd = itemStart + item.offsetWidth;
    const tabsWidth = this.tabsElement.offsetWidth;

    const loop = this.$interval(() => {
      const tabsStart = this.tabsElement.scrollLeft;
      const tabsEnd = this.tabsElement.scrollWidth
        - this.tabsElement.offsetWidth
        - this.tabsElement.scrollLeft;
      const screenEnd = tabsStart + this.tabsElement.offsetWidth;

      if (direction === 'right' && tabsEnd > 0 && (tabsStart + step < itemStart || itemEnd > screenEnd)) {
        this.tabsElement.scrollLeft += step;
      } else if (direction === 'left' && tabsStart > 0 && (screenEnd - step > itemEnd || itemStart < tabsStart - step)) {
        this.tabsElement.scrollLeft -= step;
      } else {
        if (direction === 'right') {
          this.tabsElement.scrollLeft = tabsStart <= itemStart ? itemStart : itemEnd - tabsWidth;
        } else {
          this.tabsElement.scrollLeft = tabsStart >= itemStart ? itemStart : itemEnd - tabsWidth;
        }
        this.$interval.cancel(loop);
      }
    }, stepDuration);
  }
}
