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
      this.canScroll = this.tabsList.clientWidth < this.initialScrollWidth;

      // Reset scroll value
      this.canScrollLeft = false;
      this.canScrollRight = true;
      this.scrollIndex = 0;
      this.tabsList.firstElementChild.style.marginLeft = 0;
    });
  }

  getOffsetLeft() {
    const { initialOffsetLeft } = this.tabs[this.scrollIndex];

    return initialOffsetLeft;
  }

  scrollTo(direction) {
    const minIndex = 0;
    const maxIndex = this.tabs.length - 1;

    if (direction === 'left') {
      this.scrollIndex = Math.max(this.scrollIndex - 1, minIndex);
    } else {
      this.scrollIndex = Math.min(this.scrollIndex + 1, maxIndex);
    }

    this.canScrollRight = (this.getOffsetLeft() + this.tabsList.clientWidth)
      <= this.initialScrollWidth;
    this.canScrollLeft = this.scrollIndex > minIndex;

    // The slide animation is done in the CSS with a transition
    // targeting the margin-left property n the first child.
    // In this way, we can keep the overflow: hidden on the flex container.
    // With others solutions, this will mask any dropdown item
    this.tabsList.firstElementChild.style.marginLeft = `-${this.getOffsetLeft()}px`;
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

      this.tabsList = this.$element[0].querySelector('.oui-header-tabs__container');

      // Update initial offsetLeft for the slide animation
      // Unless it changes when moved
      this.tabsList.children.forEach((element) => {
        // eslint-disable-next-line
        element.initialOffsetLeft = element.offsetLeft;
      });

      this.initialScrollWidth = this.tabsList.scrollWidth;

      this.$scope.$watch(() => this.tabsList.childNodes.length, () => {
        this.tabs = filter(this.tabsList.childNodes, (node) => node.nodeType === 1);
        this.checkScroll();
      });
    });

    angular.element(this.tabsList).on('scroll', () => this.checkScroll());
    angular.element(this.$window).on('resize', () => this.checkScroll());
  }
}
