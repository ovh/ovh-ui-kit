import '@ovh-ux/ui-kit.spinner';

describe('ouiSlideshow', () => {
  let TestUtils;
  let $document;
  let $timeout;

  const getSlideshow = element => angular.element(element[0].querySelector('.oui-slideshow'));
  const getBody = element => angular.element(element[0].querySelector('.oui-slideshow__body'));
  const getFirstPanel = element => angular.element(element[0].querySelector('.oui-slideshow-panel'));
  const getDismissButton = element => angular.element(element[0].querySelector('.oui-slideshow__header .oui-icon'));
  const getNextButton = element => angular.element(element[0].querySelector('.oui-slideshow__next-button'));
  const getFirstIndicator = element => angular.element(element[0].querySelector('.oui-slideshow__indicators > button'));
  const getLastIndicator = element => angular.element(element[0].querySelector('.oui-slideshow__indicators > button:last-child'));

  const KEYBOARD_KEYS = {
    ESC: 27,
  };

  beforeEach(angular.mock.module('oui.slideshow'));
  beforeEach(angular.mock.module('oui.spinner'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$document_, _$timeout_) => {
    $document = _$document_;
    TestUtils = _TestUtils_;
    $timeout = _$timeout_;
  }));

  describe('Component', () => {
    describe('Slideshow', () => {
      it('should display a slideshow', () => {
        const element = TestUtils.compileTemplate('<oui-slideshow></oui-slideshow>');
        $timeout.flush();
        expect(getSlideshow(element)).toBeDefined();
      });

      it('should display an overlay when loading', () => {
        const element = TestUtils.compileTemplate('<oui-slideshow loading></oui-slideshow>');
        $timeout.flush();
        const $body = getBody(element);
        expect($body.html()).toContain('oui-slideshow__loader');
        expect($body.html()).toContain('oui-spinner');
      });

      it('should display a slideshow with active panel', () => {
        const element = TestUtils.compileTemplate(`
            <oui-slideshow>
              <oui-slideshow-panel></oui-slideshow-panel>
            </oui-slideshow>
          `);
        $timeout.flush();
        expect(getBody(element).html()).toContain('oui-slideshow-panel');
        expect(getFirstPanel(element).hasClass('active')).toBe(true);
      });

      it('should trigger on-dismiss action', () => {
        const dismissSpy = jasmine.createSpy('dismiss');
        const element = TestUtils.compileTemplate('<oui-slideshow on-dismiss="$ctrl.dismissSpy()"></oui-slideshow>', {
          dismissSpy,
        });
        $timeout.flush();

        // Button
        getDismissButton(element).triggerHandler('click');
        expect(dismissSpy).toHaveBeenCalled();

        // ESC
        $document.triggerHandler({ type: 'keydown', which: KEYBOARD_KEYS.ESC });
        expect(dismissSpy).toHaveBeenCalled();
      });

      it('should add a classname with the theme value', () => {
        const foo = 'bar';
        const element = TestUtils.compileTemplate(`<oui-slideshow theme="${foo}"></oui-slideshow>`);
        const controller = element.controller('ouiSlideshow');
        const container = angular.element(element[0].querySelector(`.${controller.themeClassname}`));

        expect(controller.themeClassname).toBeDefined();
        expect(controller.themeClassname.search(foo)).toBeGreaterThan(-1);
        expect(container.length).toBe(1);
      });
    });

    describe('SlideshowPanel', () => {
      it('should update active panel on right button click', () => {
        const element = TestUtils.compileTemplate(`
            <oui-slideshow>
              <oui-slideshow-panel></oui-slideshow-panel>
              <oui-slideshow-panel></oui-slideshow-panel>
            </oui-slideshow>
          `);
        $timeout.flush();
        const $firstPanel = getFirstPanel(element);
        expect($firstPanel.hasClass('active')).toBe(true);
        getNextButton(element).triggerHandler('click');
        $timeout.flush();
        expect($firstPanel.hasClass('active')).toBe(false);
      });

      it('should hide left button if first panel is selected', () => {
        const element = TestUtils.compileTemplate(`
            <oui-slideshow>
              <oui-slideshow-panel></oui-slideshow-panel>
              <oui-slideshow-panel></oui-slideshow-panel>
            </oui-slideshow>
          `);
        $timeout.flush();
        expect(getBody(element).html()).not.toContain('oui-slideshow__prev-button');
      });

      it('should always show left button if loop option is active', () => {
        const element = TestUtils.compileTemplate(`
            <oui-slideshow loop>
              <oui-slideshow-panel></oui-slideshow-panel>
              <oui-slideshow-panel></oui-slideshow-panel>
            </oui-slideshow>
          `);
        $timeout.flush();
        const $body = getBody(element);
        expect($body.html()).toContain('oui-slideshow__prev-button');
      });

      it('should hide right button if last panel is selected', () => {
        const element = TestUtils.compileTemplate(`
            <oui-slideshow>
              <oui-slideshow-panel></oui-slideshow-panel>
              <oui-slideshow-panel></oui-slideshow-panel>
            </oui-slideshow>
          `);
        $timeout.flush();
        const $body = getBody(element);
        expect($body.html()).toContain('oui-slideshow__next-button');
        getNextButton(element).triggerHandler('click');
        $timeout.flush();
        expect($body.html()).toContain('oui-slideshow__prev-button');
        expect($body.html()).not.toContain('oui-slideshow__next-button');
      });

      it("should update bottom indicators if panel's changed", () => {
        const element = TestUtils.compileTemplate(`
            <oui-slideshow>
              <oui-slideshow-panel></oui-slideshow-panel>
              <oui-slideshow-panel></oui-slideshow-panel>
            </oui-slideshow>
          `);
        $timeout.flush();
        const $firstIndicator = getFirstIndicator(element);
        expect($firstIndicator).toBeDefined();
        expect($firstIndicator.hasClass('active')).toBe(true);
        getNextButton(element).triggerHandler('click');
        $timeout.flush();
        expect($firstIndicator.hasClass('active')).toBe(false);
      });

      it('should update active panel on indicator button click', () => {
        const element = TestUtils.compileTemplate(`
            <oui-slideshow>
              <oui-slideshow-panel></oui-slideshow-panel>
              <oui-slideshow-panel></oui-slideshow-panel>
            </oui-slideshow>
          `);
        $timeout.flush();
        const $firstPanel = getFirstPanel(element);
        expect($firstPanel.hasClass('active')).toBe(true);
        getLastIndicator(element).triggerHandler('click');
        $timeout.flush();
        expect($firstPanel.hasClass('active')).toBe(false);
      });

      it('should call function of event with attributes', () => {
        const onPanelChangeSpy = jasmine.createSpy('onPanelChangeSpy');
        const element = TestUtils.compileTemplate(`
          <oui-slideshow on-panel-change="$ctrl.onPanelChangeSpy(direction, index)">
            <oui-slideshow-panel></oui-slideshow-panel>
            <oui-slideshow-panel></oui-slideshow-panel>
          </oui-slideshow>`, {
          onPanelChangeSpy,
        });
        const direction = 'next';
        const index = 1;
        $timeout.flush();
        getNextButton(element).triggerHandler('click');
        expect(onPanelChangeSpy).toHaveBeenCalledWith(direction, index);
      });
    });
  });
});
