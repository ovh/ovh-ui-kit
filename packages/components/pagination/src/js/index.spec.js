import '@ovh/ui-kit.core/src/js/test-utils';
import './index';

describe('ouiPagination', () => {
  let TestUtils;

  const customPageSize = 50;
  const customPageSizesList = [25, 50, 100, 200];

  const getPagination = elt => elt[0].querySelector('.oui-pagination');
  const getProgress = elt => elt[0].querySelector('.oui-pagination__progress');
  const getSelector = elt => elt[0].querySelector('.oui-pagination__selector');
  const getPreviousButton = elt => elt[0].querySelectorAll('.oui-pagination__selector > button')[0];
  const getNextButton = elt => elt[0].querySelectorAll('.oui-pagination__selector > button')[1];
  const getPageSizeButtons = elt => getProgress(elt).querySelectorAll('.oui-pagination-menu__items-list .oui-pagination-menu__item');

  beforeEach(angular.mock.module('oui.pagination'));
  beforeEach(angular.mock.module('oui.test-utils'));
  beforeEach(angular.mock.module('test.paginationConfiguration'));

  beforeEach(inject((_TestUtils_) => {
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
      expect(getProgress(element)).toBeDefined();
      expect(getSelector(element)).toBeDefined();
      expect(getPreviousButton(element)).toBeDefined();
      expect(getNextButton(element)).toBeDefined();
    });

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

    it('should display 4 buttons for page selection', () => {
      const element = TestUtils.compileTemplate(`
                <oui-pagination
                    current-offset="1"
                    page-size="25"
                    total-items="100">
                </oui-pagination>
            `);
      const expectedLength = 4;

      expect(getSelector(element).querySelectorAll('.oui-button-group .oui-button').length).toEqual(expectedLength);
      expect(getSelector(element).querySelector('.oui-pagination-menu')).toBeNull();
    });

    it('should display a dropdown page selector', () => {
      const element = TestUtils.compileTemplate(`
                <oui-pagination
                    current-offset="1"
                    page-size="25"
                    total-items="1000">
                </oui-pagination>
            `);

      expect(getSelector(element).querySelectorAll('.oui-button-group .oui-button').length).toEqual(0);
      expect(getSelector(element).querySelector('.oui-pagination-menu')).toBeDefined();
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

        expect(getPreviousButton(element).getAttribute('disabled')).toEqual('disabled');
        expect(getNextButton(element).hasAttribute('disabled')).toBeFalsy();
      });

      it('should have next previous button disabled when not available', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-pagination
                        current-offset="76"
                        page-size="25"
                        total-items="100">
                    </oui-pagination>
                `);

        expect(getPreviousButton(element).hasAttribute('disabled')).toBeFalsy();
        expect(getNextButton(element).getAttribute('disabled')).toEqual('disabled');
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

        angular.element(getNextButton(element)).triggerHandler('click');
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

        angular.element(getPreviousButton(element)).triggerHandler('click');
        expect(clickSpy).toHaveBeenCalledWith({
          offset: 51,
          pageSize: 25,
        });
        expect(clickSpy.calls.count()).toEqual(1);
      });
    });

    describe('Pages buttons', () => {
      it('should change page', () => {
        const clickSpy = jasmine.createSpy('clickSpy');
        const element = TestUtils.compileTemplate(`
                    <oui-pagination
                        current-offset="$ctrl.offset"
                        page-size="25"
                        total-items="100"
                        on-change="$ctrl.clickHandler($event)">
                    </oui-pagination>
                `, {
          offset: 1,
          clickHandler: clickSpy,
        });

        const buttons = getSelector(element).querySelectorAll('.oui-button-group .oui-button');
        const contextController = element.scope().$ctrl;

        expect(buttons[0].hasAttribute('disabled')).toBeTruthy();

        angular.element(buttons[1]).triggerHandler('click');
        expect(clickSpy).toHaveBeenCalledWith({
          offset: 26,
          pageSize: 25,
        });
        expect(clickSpy.calls.count()).toEqual(1);

        // Set the new offset (one-way)
        contextController.offset = 26;
        element.scope().$digest();
        expect(buttons[1].hasAttribute('disabled')).toBeTruthy();

        clickSpy.calls.reset();
        const index = 3;
        angular.element(buttons[index]).triggerHandler('click');
        expect(clickSpy).toHaveBeenCalledWith({
          offset: 76,
          pageSize: 25,
        });
        expect(clickSpy.calls.count()).toEqual(1);
      });
    });

    describe('Pages dropdown', () => {
      it('should change page', () => {
        const clickSpy = jasmine.createSpy('clickSpy');
        const element = TestUtils.compileTemplate(`
                    <oui-pagination
                        current-offset="$ctrl.offset"
                        page-size="25"
                        total-items="1000"
                        on-change="$ctrl.clickHandler($event)">
                    </oui-pagination>
                `, {
          offset: 1,
          clickHandler: clickSpy,
        });

        const buttons = getSelector(element).querySelectorAll('.oui-pagination-menu__items-list .oui-pagination-menu__item');
        const contextController = element.scope().$ctrl;

        expect(buttons[0].hasAttribute('disabled')).toBeTruthy();

        angular.element(buttons[1]).triggerHandler('click');
        expect(clickSpy).toHaveBeenCalledWith(jasmine.objectContaining({ offset: 26 }));
        expect(clickSpy.calls.count()).toEqual(1);

        // Set the new offset (one-way)
        contextController.offset = 26;
        element.scope().$digest();
        expect(buttons[1].hasAttribute('disabled')).toBeTruthy();

        clickSpy.calls.reset();

        const index = 39;
        angular.element(buttons[index]).triggerHandler('click');
        expect(clickSpy).toHaveBeenCalledWith(jasmine.objectContaining({ offset: 976 }));
        expect(clickSpy.calls.count()).toEqual(1);
      });
    });

    describe('Page size selector', () => {
      it('should have default page sizes', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-pagination
                        current-offset="1"
                        page-size="25"
                        total-items="1000">
                    </oui-pagination>
                `);

        const buttons = getProgress(element).querySelectorAll('.oui-pagination-menu__items-list .oui-pagination-menu__item');
        const expectedLength = 4;
        expect(buttons.length).toEqual(expectedLength);
        expect(buttons[0].hasAttribute('disabled')).toBeTruthy();
      });

      it('should change page size', () => {
        const clickSpy = jasmine.createSpy('clickSpy');
        const element = TestUtils.compileTemplate(`
                    <oui-pagination
                        current-offset="1"
                        page-size="$ctrl.pageSize"
                        total-items="1000"
                        on-change="$ctrl.clickHandler($event)">
                    </oui-pagination>
                `, {
          pageSize: 25,
          clickHandler: clickSpy,
        });

        const pageSizesButtons = getProgress(element).querySelectorAll('.oui-pagination-menu__items-list .oui-pagination-menu__item');
        const contextController = element.scope().$ctrl;

        angular.element(pageSizesButtons[1]).triggerHandler('click');
        expect(clickSpy).toHaveBeenCalledWith(jasmine.objectContaining({ pageSize: 50 }));
        expect(clickSpy.calls.count()).toEqual(1);

        // Set the new page size (one-way)
        contextController.pageSize = 50;
        element.scope().$digest();
        expect(pageSizesButtons[1].hasAttribute('disabled')).toBeTruthy();

        // Count page buttons
        const pageButtons = getSelector(element).querySelectorAll('.oui-pagination-menu__items-list .oui-pagination-menu__item');
        const length = 20;
        expect(pageButtons.length).toEqual(length);
      });

      it('should reset offset to 1 when page size is changed', () => {
        const clickSpy = jasmine.createSpy('clickSpy');
        const element = TestUtils.compileTemplate(`
                    <oui-pagination
                        current-offset="999"
                        page-size="$ctrl.pageSize"
                        total-items="1000"
                        on-change="$ctrl.clickHandler($event)">
                    </oui-pagination>
                `, {
          clickHandler: clickSpy,
        });

        const pageSizesButtons = getProgress(element).querySelectorAll('.oui-pagination-menu__items-list .oui-pagination-menu__item');
        angular.element(pageSizesButtons[1]).triggerHandler('click');

        expect(clickSpy).toHaveBeenCalledWith(jasmine.objectContaining({ offset: 1 }));
        expect(clickSpy.calls.count()).toEqual(1);
        const paginationController = element.controller('ouiPagination');
        expect(paginationController.currentOffset).toEqual(1);
      });

      it('should have max page size limiting the page size list (without creating a new value in this list)', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-pagination
                        current-offset="1"
                        page-size="25"
                        page-size-max="50"
                        total-items="1000">
                    </oui-pagination>
                `);

        // Page sizes list should not list page size above pageSizeMax (50).
        // So, instead of displaying 4 values (see customPageSizesList = [25, 50, 100, 200])
        // the page size list is limited to all values
        // lower or equal to pageSizeMax: [25, 50] (length: 2).
        const pageSizesButtons = getProgress(element)
          .querySelectorAll('.oui-pagination-menu__items-list .oui-pagination-menu__item');
        const expectedLength = 2;
        expect(pageSizesButtons.length).toEqual(expectedLength);
      });

      it('should have max page size limiting the page size list (and creating a new value in this list)', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-pagination
                            current-offset="1"
                            page-size="25"
                            page-size-max="$ctrl.pageSizeMax"
                            total-items="1000">
                        </oui-pagination>
                    `, {
          pageSizeMax: 80,
        });

        // Page sizes list should not list page size above pageSizeMax (80).
        // So, instead of displaying 4 values (see customPageSizesList = [25, 50, 100, 200])
        // the page size list is limited to all values
        // lower or equal to pageSizeMax and pageSizeMax: [25, 50, 80] (length: 3).
        const pageSizesButtons = getPageSizeButtons(element);
        const expectedLength = 3;
        const index = 2;

        expect(pageSizesButtons.length).toEqual(expectedLength);
        expect(pageSizesButtons[index].innerHTML).toEqual('80');
      });

      it('should be reinitilized', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-pagination
                            current-offset="1"
                            page-size="25"
                            page-size-max="$ctrl.pageSizeMax"
                            total-items="1000">
                        </oui-pagination>
                    `, {
          pageSizeMax: 80,
        });

        const contextController = element.scope().$ctrl;
        let pageSizesButtons = getPageSizeButtons(element);

        // Reset to all page sizes
        delete contextController.pageSizeMax;
        element.scope().$digest();

        pageSizesButtons = getPageSizeButtons(element);
        expect(pageSizesButtons.length).toEqual(customPageSizesList.length);
      });
    });
  });
});
