describe('ouiPagination', () => {
  let $timeout;
  let TestUtils;

  const customPageSize = 50;
  const customPageSizesList = [25, 50, 100, 200];

  const getPagination = (elt) => elt[0].querySelector('.oui-pagination');
  const getPaginationResult = (elt) => elt[0].querySelector('.oui-pagination-result');
  const getPaginationResultSelector = (elt) => getPaginationResult(elt).querySelector('.oui-pagination-result__selector');
  const getPaginationResultSizes = (elt) => getPaginationResult(elt).querySelectorAll('.oui-pagination-result__selector option');
  const getPaginationNav = (elt) => elt[0].querySelector('.oui-pagination-nav');
  const getPaginationNavPrevious = (elt) => getPaginationNav(elt).querySelector('.oui-pagination-nav__previous');
  const getPaginationNavNext = (elt) => getPaginationNav(elt).querySelector('.oui-pagination-nav__next');
  const getPaginationItems = (elt) => elt[0].querySelector('.oui-pagination-items');
  const getPaginationItemsButtons = (elt) => getPaginationItems(elt).querySelectorAll('.oui-pagination-items__button');

  beforeEach(angular.mock.module('oui.pagination'));
  beforeEach(angular.mock.module('oui.test-utils'));
  beforeEach(angular.mock.module('test.paginationConfiguration'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    TestUtils = _TestUtils_;
  }));

  describe('Provider', () => {
    let paginationConfiguration;

    angular.module('test.paginationConfiguration', [
      'oui.pagination',
    ]).config((ouiPaginationConfigurationProvider) => {
      ouiPaginationConfigurationProvider.setPageSize(customPageSize);
      ouiPaginationConfigurationProvider.setPageSizeList(customPageSizesList);
      ouiPaginationConfigurationProvider.setTranslations({
        resultsPerPage: 'Results per page',
        ofNResults: 'of {{totalItems}} results',
        currentPageOfPageCount: 'Page {{currentPage}} of {{pageCount}}',
        foo: 'bar',
      });
    });

    beforeEach(inject((_ouiPaginationConfiguration_) => {
      paginationConfiguration = _ouiPaginationConfiguration_;
    }));

    it('should have custom values', () => {
      expect(paginationConfiguration.pageSize).toEqual(customPageSize);
      expect(paginationConfiguration.pageSizeList).toEqual(customPageSizesList);
      expect(paginationConfiguration.translations.foo).toEqual('bar');
    });
  });

  describe('Controller', () => {
    it('should have a default page size', () => {
      const element = TestUtils.compileTemplate(`
        <oui-pagination
          current-offset="1"
          total-items="100">
        </oui-pagination>
      `);
      const pageSize = 50;

      const paginationController = element.controller('ouiPagination');
      expect(paginationController.pageSize).toEqual(pageSize);
    });
  });

  describe('Component', () => {
    it('should display a pagination component', () => {
      const element = TestUtils.compileTemplate(`
        <oui-pagination
          current-offset="1"
          page-size="25"
          total-items="100">
        </oui-pagination>
      `);

      expect(getPagination(element)).toBeDefined();
      expect(getPaginationResult(element)).toBeDefined();
      expect(getPaginationNav(element)).toBeDefined();
      expect(getPaginationNavPrevious(element)).toBeDefined();
      expect(getPaginationNavNext(element)).toBeDefined();
    });

    it('should have an element with default classname', () => {
      const element = TestUtils.compileTemplate(`
        <oui-pagination
          current-offset="1"
          total-items="100">
        </oui-pagination>
      `);

      $timeout.flush();

      expect(element.hasClass('oui-pagination')).toBe(true);
    });

    it('should display 4 buttons for page selection', () => {
      const element = TestUtils.compileTemplate(`
        <oui-pagination
          current-offset="1"
          page-size="25"
          total-items="100">
        </oui-pagination>
      `);
      const expectedLength = 4;
      const buttons = getPaginationItemsButtons(element);

      expect(buttons.length).toEqual(expectedLength);
    });

    describe('Page size', () => {
      it('should trigger on-change handler when we select a new size', () => {
        const clickSpy = jasmine.createSpy('clickSpy');
        const element = TestUtils.compileTemplate(`
            <oui-pagination
              current-offset="76"
              total-items="100"
              on-change="$ctrl.clickHandler($event)">
            </oui-pagination>
          `, {
          clickHandler: clickSpy,
        });

        const selector = angular.element(getPaginationResultSelector(element));
        const sizes = getPaginationResultSizes(element);
        selector.val(sizes[sizes.length - 1].value).triggerHandler('change');

        expect(clickSpy).toHaveBeenCalledWith({
          offset: 76,
          pageSize: 200,
        });
      });

      it('should add the pageSize and the pageSizeMax if not in the pageSize list', () => {
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            current-offset="1"
            page-size="5"
            page-size-max="10"
            total-items="100">
          </oui-pagination>
        `);

        const ctrl = element.controller('ouiPagination');
        expect(ctrl.pageSizeList.includes(5)).toBe(true);
        expect(ctrl.pageSizeList.includes(10)).toBe(true);
      });

      it('should filter sizes above the pageSizeMax', () => {
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            current-offset="1"
            page-size-max="25"
            total-items="100">
          </oui-pagination>
        `);

        const ctrl = element.controller('ouiPagination');
        expect(ctrl.pageSizeList.length).toBe(1);
        expect(ctrl.pageSizeList).toEqual([25]);
      });
    });

    describe('Previous/next buttons', () => {
      it('should have previous button disabled when not available', () => {
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            current-offset="1"
            page-size="25"
            total-items="100">
          </oui-pagination>
        `);

        const previous = getPaginationNavPrevious(element);
        const next = getPaginationNavNext(element);

        expect(previous.getAttribute('disabled')).toEqual('disabled');
        expect(next.hasAttribute('disabled')).toBeFalsy();
      });

      it('should have next previous button disabled when not available', () => {
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            current-offset="76"
            page-size="25"
            total-items="100">
          </oui-pagination>
        `);

        const previous = getPaginationNavPrevious(element);
        const next = getPaginationNavNext(element);

        expect(previous.hasAttribute('disabled')).toBeFalsy();
        expect(next.getAttribute('disabled')).toEqual('disabled');
      });

      it('should trigger on-change handler when next is clicked', () => {
        const clickSpy = jasmine.createSpy('clickSpy');
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            current-offset="1"
            page-size="25"
            total-items="100"
            on-change="$ctrl.clickHandler($event)">
          </oui-pagination>
        `, {
          clickHandler: clickSpy,
        });

        const next = getPaginationNavNext(element);

        angular.element(next).triggerHandler('click');
        expect(clickSpy).toHaveBeenCalledWith({
          offset: 26,
          pageSize: 25,
        });
        expect(clickSpy.calls.count()).toEqual(1);
      });

      it('should trigger on-change handler when previous is clicked', () => {
        const clickSpy = jasmine.createSpy('clickSpy');
        const element = TestUtils.compileTemplate(`
            <oui-pagination
              current-offset="76"
              page-size="25"
              total-items="100"
              on-change="$ctrl.clickHandler($event)">
            </oui-pagination>
          `, {
          clickHandler: clickSpy,
        });

        const previous = getPaginationNavPrevious(element);

        angular.element(previous).triggerHandler('click');
        expect(clickSpy).toHaveBeenCalledWith({
          offset: 51,
          pageSize: 25,
        });
        expect(clickSpy.calls.count()).toEqual(1);
      });
    });

    describe('Mode', () => {
      it('should display items in button mode', () => {
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            mode="button"
            current-offset="1"
            total-items="100">
          </oui-pagination>
        `);

        const items = angular.element(getPaginationItems(element));
        expect(items.hasClass('oui-pagination-items_button')).toBe(true);
      });

      it('should display items in select mode', () => {
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            mode="select"
            current-offset="1"
            total-items="100">
          </oui-pagination>
        `);

        const items = angular.element(getPaginationItems(element));
        expect(items.hasClass('oui-pagination-items_select')).toBe(true);
      });

      it('should display items in input mode', () => {
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            mode="input"
            current-offset="1"
            total-items="100">
          </oui-pagination>
        `);

        const items = angular.element(getPaginationItems(element));
        expect(items.hasClass('oui-pagination-items_input')).toBe(true);
      });

      it('should display items in arrows mode', () => {
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            mode="arrows"
            current-offset="1"
            total-items="100">
          </oui-pagination>
        `);

        expect(getPaginationNavPrevious(element)).toBeDefined();
        expect(getPaginationNavNext(element)).toBeDefined();
        expect(getPaginationResult(element)).toBeFalsy();
        expect(getPaginationItems(element)).toBeFalsy();
      });

      it('should change the mode automatically based on the pageCount', () => {
        let items;
        const element = TestUtils.compileTemplate(`
          <oui-pagination
            current-offset="1"
            total-items="100">
          </oui-pagination>
        `);

        const ctrl = element.controller('ouiPagination');
        const scope = element.scope();

        items = angular.element(getPaginationItems(element));
        expect(items.hasClass('oui-pagination-items_button')).toBe(true);

        // Default pageSize is 25
        ctrl.totalItems = 1000;
        ctrl.updatePaginationSelectors(ctrl.pageSize);
        scope.$digest();

        items = angular.element(getPaginationItems(element));
        expect(items.hasClass('oui-pagination-items_select')).toBe(true);

        ctrl.totalItems = 10000;
        ctrl.updatePaginationSelectors(ctrl.pageSize);
        scope.$digest();

        items = angular.element(getPaginationItems(element));
        expect(items.hasClass('oui-pagination-items_input')).toBe(true);
      });
    });
  });
});
