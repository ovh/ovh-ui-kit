import filter from 'lodash/filter';

export default class {
  constructor($element, $scope, $timeout, $window) {
    'ngInject';

    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$window = $window;
  }

  checkScroll() {
    this.$timeout(() => {
      this.canScroll = this.tabsList.clientWidth < this.tabsList.scrollWidth;

      // Reset scroll value
      this.canScrollLeft = false;
      this.canScrollRight = true;
      this.scrollIndex = 0;
      this.tabsList.style.transform = 'translateX(0)';
    });
  }

  getOffsetLeft() {
    // Here we set temporary the position to 'relative',
    // to get the right offsetLeft with for reference the list container.
    // Because we could have dropdown, we can't set the position to 'relative' in the CSS,
    // or else the overflow will hidden the dropdown menu
    this.tabsList.style.position = 'relative';
    const { offsetLeft } = this.tabs[this.scrollIndex];
    this.tabsList.style.position = 'static';

    return offsetLeft;
  }

  scrollTo(direction) {
    const minIndex = 0;
    const maxIndex = this.tabs.length - 1;

    if (direction === 'left') {
      this.scrollIndex = Math.max(this.scrollIndex - 1, minIndex);
    } else {
      this.scrollIndex = Math.min(this.scrollIndex + 1, maxIndex);
    }

    this.canScrollLeft = this.scrollIndex > minIndex;
    this.canScrollRight = this.scrollIndex < maxIndex;

    // The slide animation is done in the CSS
    // with a transition targeting the transform property
    this.tabsList.style.transform = `translateX(-${this.getOffsetLeft()}px)`;
  }

  $onInit() {
    this.tabs = [];
  }

  $onDestroy() {
    angular.element(this.tabsList).off('scroll');
    angular.element(this.$window).off('resize');
  }

  $postLink() {
    this.$timeout(() => {
      this.$element
        .addClass('oui-header-tabs');

      this.tabsList = this.$element[0].querySelector('.oui-header-tabs__list');
      this.$scope.$watch(() => this.tabsList.childNodes.length, () => {
        this.tabs = filter(this.tabsList.childNodes, node => node.nodeType === 1);
        this.checkScroll();
      });
    });

    angular.element(this.tabsList).on('scroll', () => this.checkScroll());
    angular.element(this.$window).on('resize', () => this.checkScroll());
  }
}
