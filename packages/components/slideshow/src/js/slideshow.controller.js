import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

const KEY_ESCAPE = 27;
const TRANSITION_DURATION = 800;
const Direction = {
  NEXT: 'next',
  PREV: 'prev',
  LEFT: 'left',
  RIGHT: 'right',
};

export default class {
  constructor($scope, $element, $attrs, $document, $timeout) {
    'ngInject';

    this.$scope = $scope;
    this.$element = $element;
    this.$attrs = $attrs;
    this.$document = $document;
    this.$timeout = $timeout;
  }

  $onInit() {
    addBooleanParameter(this, 'loading');
    addBooleanParameter(this, 'loop');
    addDefaultParameter(this, 'theme', 'onboarding');

    // Use internal id to map trigger
    this.id = `ouiSlideshow${this.$scope.$id}`;
    this.themeClassname = `oui-slideshow_${this.theme}`;

    this.componentElement = this.$element[0].querySelector('.oui-slideshow');
    this.contentElement = this.$element[0].querySelector('.oui-slideshow__content');

    this.isSliding = false;
    this.currentIndex = 0;
    this.isIllustrated = false;

    /* Init Touch device feature */
    this.isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
    this.client = { x: 0, y: 0 };
  }

  $postLink() {
    this.$document.on('keydown', (evt) => this.triggerKeyHandler(evt));

    this.$timeout(() => {
      this.panels = this.$element.find('oui-slideshow-panel');

      if (this.panels[0]) {
        this.isIllustrated = this.isIllustratedPanel(0);
        const firstPanelElement = this.panels[0];
        firstPanelElement.setAttribute('aria-hidden', 'false');
        const $firstPanelElement = angular.element(firstPanelElement);
        $firstPanelElement.addClass('active');
      }

      if (this.isTouch) {
        angular.element(this.componentElement).addClass('touchDevice');
        this.setTouchEventListener();
      }
    });
  }

  $onDestroy() {
    this.closeOnBoarding();
  }

  closeOnBoarding() {
    this.onDismiss();

    this.$document.off('keydown', (evt) => this.triggerKeyHandler(evt));
    this.$scope.$broadcast('oui:modalOnBoarding:afterClose', this.id);
  }

  next() {
    if (!this.isSliding) {
      this.slide(Direction.NEXT);
      this.onPanelChange({ direction: Direction.NEXT, index: this.currentIndex });
    }
  }

  prev() {
    if (!this.isSliding) {
      this.slide(Direction.PREV);
      this.onPanelChange({ direction: Direction.PREV, index: this.currentIndex });
    }
  }

  slideTo(index) {
    const active = this.currentIndex;
    const waiting = 10;

    if (index > this.panels.length - 1 || index < 0 || index === active) {
      return;
    }

    if (this.isSliding) {
      this.$timeout(() => this.slideTo(index), waiting);
      return;
    }

    this.slide(index > active ? Direction.NEXT : Direction.PREV, index);
  }

  getIndexByDirection(direction) {
    const isNextDirection = direction === Direction.NEXT;
    const isPrevDirection = direction === Direction.PREV;
    const lastItemIndex = this.panels.length - 1;
    const isGoingToWrap = (isPrevDirection && this.currentIndex === 0)
      || (isNextDirection && this.currentIndex === lastItemIndex);

    if (isGoingToWrap && !this.loop) {
      return this.currentIndex;
    }

    const delta = direction === Direction.PREV ? -1 : 1;
    const itemIndex = (this.currentIndex + delta) % this.panels.length;

    return itemIndex === -1 ? this.panels.length - 1 : itemIndex;
  }

  slide(direction, indexTo) {
    const slideType = direction === Direction.NEXT ? Direction.LEFT : Direction.RIGHT;
    const activePanel = this.panels[this.currentIndex];
    const $activePanel = angular.element(activePanel);
    const nextPanelIndex = indexTo === 0
      ? 0
      : indexTo || (activePanel && this.getIndexByDirection(direction));
    const nextPanel = this.panels[nextPanelIndex];
    const $nextPanel = angular.element(nextPanel);

    if (nextPanel && $nextPanel.hasClass('active')) {
      this.isSliding = false;
      return;
    }

    if (!activePanel || !nextPanel) {
      return;
    }

    this.isSliding = true;
    const nextIsIllustrated = this.isIllustratedPanel(nextPanelIndex);

    $nextPanel.addClass(direction);
    this.constructor.reflowElement($nextPanel);
    $activePanel.addClass(slideType);
    this.constructor.reflowElement($activePanel);
    $nextPanel.addClass(slideType);

    this.currentIndex = nextPanelIndex;
    if (direction === Direction.NEXT) {
      this.isIllustrated = nextIsIllustrated;
    }

    this.$timeout(() => {
      $activePanel.removeClass(`active ${slideType}`);
      activePanel.setAttribute('aria-hidden', 'true');
      $nextPanel.removeClass(`${direction} ${slideType}`);
      $nextPanel.addClass('active');
      nextPanel.setAttribute('aria-hidden', 'false');
      this.isIllustrated = nextIsIllustrated;
      this.isSliding = false;
    }, TRANSITION_DURATION);
  }

  setTouchEventListener() {
    if (this.contentElement) {
      this.contentElement.addEventListener('touchstart', (evt) => {
        evt.preventDefault();
        this.client.x = evt.touches[0].clientX || 0;
        this.client.y = evt.touches[0].clientY || 0;
      });

      this.contentElement.addEventListener('touchmove', (evt) => {
        evt.preventDefault();
        if (!this.client.x || !this.client.y) {
          return;
        }

        const xDiff = this.client.x - evt.touches[0].clientX;
        const yDiff = this.client.y - evt.touches[0].clientY;
        const minDiff = 2; // deal with short swipes

        if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) + Math.abs(yDiff) > minDiff) {
          if (xDiff > 0) {
            this.next();
          } else {
            this.prev();
          }
        }

        this.client.x = 0;
        this.client.y = 0;
      });
    }
  }

  triggerKeyHandler(evt) {
    if (evt && evt.type === 'keydown' && evt.which === KEY_ESCAPE) {
      this.$scope.$apply(() => {
        this.closeOnBoarding();
      });
    }
  }

  isIllustratedPanel(index) {
    return !!this.panels[index].attributes.picture || !!this.panels[index].dataset.picture;
  }

  static reflowElement($element) {
    return $element[0].offsetHeight;
  }
}
