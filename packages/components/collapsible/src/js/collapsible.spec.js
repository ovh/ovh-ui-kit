describe('ouiCollapsible', () => {
  let TestUtils;

  beforeEach(angular.mock.module('oui.collapsible'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_) => {
    TestUtils = _TestUtils_;
  }));

  function getHeaderElement(element) {
    return element[0].querySelector('.oui-collapsible__header');
  }

  function getBodyElement(element) {
    return element[0].querySelector('.oui-collapsible__body');
  }

  describe('Component', () => {
    it('should have the correct heading', () => {
      const headingText = 'Collapsible heading';
      const element = TestUtils.compileTemplate(`
                <oui-collapsible heading="${headingText}" aria-label="Action"></oui-collapsible>`);

      const headerEl = getHeaderElement(element);
      expect(headerEl.innerText).toContain(headingText);
    });

    it('should have the correct aria-label', () => {
      const ariaLabel = 'Action';
      const element = TestUtils.compileTemplate(`
                <oui-collapsible heading="Title" aria-label="${ariaLabel}"></oui-collapsible>`);

      const headerEl = getHeaderElement(element);
      expect(headerEl.getAttribute('aria-label')).toBe(ariaLabel);
    });


    it('should expand and collapse on header click', () => {
      const element = TestUtils.compileTemplate(`
                <oui-collapsible heading="Title" aria-label="Action"></oui-collapsible>`);

      const headerEl = angular.element(getHeaderElement(element));

      // Expand
      headerEl.triggerHandler('click');
      expect(headerEl.attr('aria-expanded')).toBe('true');

      // Collapse
      headerEl.triggerHandler('click');
      expect(headerEl.attr('aria-expanded')).toBe('false');
    });

    it('should be expanded', () => {
      const element = TestUtils.compileTemplate(`
                <oui-collapsible heading="Title" aria-label="Action" expanded="true"></oui-collapsible>`);
      const headerEl = angular.element(getHeaderElement(element));
      expect(headerEl.attr('aria-expanded')).toBe('true');
    });

    it('should transclude the contents into the collapsible body', () => {
      const element = TestUtils.compileTemplate(`
                <oui-collapsible heading="Title" aria-label="Action" expanded="true">
                    <div class="custom-content">Collapsible body</div>
                </oui-collapsible>`);

      const bodyEl = getBodyElement(element);
      expect(bodyEl).toBeTruthy();

      const contentEl = bodyEl.querySelector('.custom-content');
      expect(contentEl).toBeTruthy();
    });

    it('should call ontoggle when defined into attributes', () => {
      const onToggle = jasmine.createSpy('onToggle');
      const element = TestUtils.compileTemplate(`
        <oui-collapsible heading="Title" aria-label="Action" on-toggle="$ctrl.onToggle(expanded)"></oui-collapsible>`, {
        onToggle,
      });

      const headerEl = angular.element(getHeaderElement(element));

      // Expand
      headerEl.triggerHandler('click');
      expect(onToggle).toHaveBeenCalledWith(true);

      // Collapse
      headerEl.triggerHandler('click');
      expect(onToggle).toHaveBeenCalledWith(false);
    });
  });

  describe('Loading', () => {
    it('should expand on header click when loading is false', () => {
      const onToggle = jasmine.createSpy('onToggle');
      const element = TestUtils.compileTemplate(`
        <oui-collapsible heading="Title" aria-label="Action" loading="false" on-toggle="$ctrl.onToggle(expanded)"></oui-collapsible>`, {
        onToggle,
      });

      const headerEl = angular.element(getHeaderElement(element));

      headerEl.triggerHandler('click');
      expect(onToggle).toHaveBeenCalledWith(true);

      headerEl.triggerHandler('click');
      expect(onToggle).toHaveBeenCalledWith(false);
    });

    it('should not expand on header click when loading is true', () => {
      const onToggle = jasmine.createSpy('onToggle');
      const element = TestUtils.compileTemplate(`
        <oui-collapsible heading="Title" aria-label="Action" loading="true" on-toggle="$ctrl.onToggle(expanded)"></oui-collapsible>`, {
        onToggle,
      });

      const headerEl = angular.element(getHeaderElement(element));

      headerEl.triggerHandler('click');
      expect(onToggle).not.toHaveBeenCalled();
    });
  });

  describe('Group', () => {
    it('should close the collapsible panel', () => {
      const onToggle = jasmine.createSpy('onToggle');
      const element = TestUtils.compileTemplate(`
        <oui-collapsible heading="Title" expanded="true" on-toggle="$ctrl.onToggle(expanded)"></oui-collapsible>`, {
        onToggle,
      });

      const controller = element.controller('ouiCollapsible');
      controller.close();

      expect(onToggle).toHaveBeenCalledWith(false);
      expect(controller.expanded).toBe(false);
    });

    it('should close opened from the group', () => {
      const onToggle1 = jasmine.createSpy('onToggle1');
      const onToggle2 = jasmine.createSpy('onToggle2');
      const onToggle3 = jasmine.createSpy('onToggle3');

      const element = TestUtils.compileTemplate(`
        <div>
          <oui-collapsible heading="Title" group="foo" on-toggle="$ctrl.onToggle1(expanded)"></oui-collapsible>
          <oui-collapsible heading="Title" group="foo" on-toggle="$ctrl.onToggle2(expanded)" expanded="true"></oui-collapsible>
          <oui-collapsible heading="Title" group="bar" on-toggle="$ctrl.onToggle3(expanded)" expanded="true"></oui-collapsible>
        </div>`, {
        onToggle1,
        onToggle2,
        onToggle3,
      });

      // Mock $document to get items for querySelectorAll in controller
      const $document = angular.element(document); // This is exactly what Angular does
      $document.find('body').append(element);

      const headerEl = angular.element(getHeaderElement(element));
      headerEl.triggerHandler('click');

      expect(onToggle1).toHaveBeenCalledWith(true);
      expect(onToggle2).toHaveBeenCalledWith(false);
      expect(onToggle3).not.toHaveBeenCalled();
    });
  });
});
