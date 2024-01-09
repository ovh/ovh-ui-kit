import uniq from 'lodash/uniq';
import data from './select.spec.data.json';

describe('ouiSelect', () => {
  let TestUtils;
  let $document;
  let $timeout;
  let $httpBackend;

  beforeEach(angular.mock.module('oui.select'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$document_, _$timeout_, _$httpBackend_) => {
    TestUtils = _TestUtils_;
    $document = _$document_;
    $timeout = _$timeout_;
    $httpBackend = _$httpBackend_;

    $httpBackend.when('GET', '/data').respond(data);
    $httpBackend.when('GET', '/data1').respond([data[1]]);
    $httpBackend.when('GET', '/data2').respond([data[2]]);
    $httpBackend.when('GET', '/data3').respond([data[3]]);
    $httpBackend.when('GET', '/data4').respond([data[4]]);
    $httpBackend.when('GET', '/notfound').respond(404, '');
    $httpBackend.when('GET', '/paginateddata').respond((a, b, c, headers) => {
      const start = headers['X-Pagination-Cursor']
        ? parseInt(headers['X-Pagination-Cursor'], 10)
        : 0;
      const end = headers['X-Pagination-Size']
        ? parseInt(headers['X-Pagination-Size'], 10)
        : 10;
      const slicedData = data.slice(start, start + end);
      return slicedData.length === end
        ? [200, slicedData, { 'X-Pagination-Cursor-Next': (start + end).toString() }]
        : [200, slicedData];
    });
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  const selectedItemClass = 'ui-select-choices-row_selected';

  const getContainer = (element) => element[0].querySelector('.ui-select-container');
  const getDropdownButton = (element) => element[0].querySelector('.ui-select-match');
  const getMultipleDropdownButton = (element) => element[0].querySelector('.ui-select-match-container');
  const getMultipleMatchItem = (element) => element[0].querySelectorAll('.ui-select-match-item');
  const getDropdown = (element) => element[0].querySelector('.ui-select-choices-content');
  const getFocusser = (element) => element[0].querySelector('.ui-select-focusser');
  const getItemsGroups = (element) => element[0].querySelectorAll('.ui-select-choices-group');
  const getItemsGroup = (element, index) => element[0].querySelectorAll('.ui-select-choices-group')[index];
  const getItemsGroupLabel = (groupElement) => groupElement.querySelector('.ui-select-choices-group-label');
  const getDropdownItems = (element) => element[0].querySelectorAll('.ui-select-choices-row');
  const getDropdownItemsSpinner = (element) => element[0].querySelector('.ui-select-choices-spinner');
  const getDropdownItem = (element, index) => element[0].querySelectorAll('.ui-select-choices-row')[index];

  describe('Component', () => {
    it('should display the select component', () => {
      const title = 'Select a country';
      const placeholder = 'Select a country...';

      const element = TestUtils.compileTemplate(`
                <oui-select name="country"
                    model="$ctrl.country"
                    title="${title}"
                    placeholder="${placeholder}"
                    items="$ctrl.countries"
                    match="country.name">
                </oui-select>`, {
        countries: data,
      });

      expect(angular.element(getContainer(element)).attr('title')).toEqual(title);
      expect(angular.element(getDropdownButton(element)).text()).toContain(placeholder);
      expect(getDropdownButton(element)).toBeDefined();
      expect(getDropdown(element)).toBeDefined();
    });

    it('should open dropdown when trigger button is clicked', () => {
      const element = TestUtils.compileTemplate(`
                <oui-select name="country"
                    model="$ctrl.country"
                    title="Select a country"
                    placeholder="Select a country..."
                    items="$ctrl.countries"
                    match="country.name">
                </oui-select>`, {
        countries: data,
      });

      const $triggerButton = angular.element(getDropdownButton(element));

      // The dropdown should be initially closed.
      expect($triggerButton.attr('aria-expanded')).toBe('false');

      // Click on the trigger and check if it's open.
      $triggerButton.triggerHandler('click');
      expect($triggerButton.attr('aria-expanded')).toBe('true');

      $triggerButton.triggerHandler('click');
      expect($triggerButton.attr('aria-expanded')).toBe('false');
    });

    it('should close the dropdown on click outside it', () => {
      const element = TestUtils.compileTemplate(`
                <div>
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="country.name">
                        <span ng-bind="$item.country.name"></span>
                    </oui-select>
                    <button class="outside-button">Outside</button>
                </div>`, {
        countries: data,
      });

      const $triggerButton = angular.element(getDropdownButton(element));
      const outsideElement = element[0].querySelector('.outside-button');

      // Open dropdown.
      $triggerButton.triggerHandler('click');

      // Close the dropdown by clicking outside the dropdown.
      $document.triggerHandler({ type: 'click', target: outsideElement });
      expect($triggerButton.attr('aria-expanded')).toBe('false');
    });

    describe('Single select', () => {
      it('should close dropdown when item is select', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="country.name">
                        <span ng-bind="$item.country.name"></span>
                    </oui-select>`, {
          countries: data,
        });

        const $triggerButton = angular.element(getDropdownButton(element));

        expect($triggerButton.attr('aria-expanded')).toBe('false');

        // Open the dropdown
        $triggerButton.triggerHandler('click');

        // Select 5th element and check if it's highlighted.
        let $itemButton = angular.element(getDropdownItem(element, 4));
        expect($itemButton.hasClass(selectedItemClass)).toBeFalsy();
        $itemButton.triggerHandler('click');

        // The dropdown should have been closed.
        expect($triggerButton.attr('aria-expanded')).toBe('false');

        // Reopen dropdown and check if the selected element is highlighted.
        // The element is retrieved again to be sure to not test on a detached element.
        $triggerButton.triggerHandler('click');
        $itemButton = angular.element(getDropdownItem(element, 4));
        expect($itemButton.hasClass(selectedItemClass)).toBeTruthy();
      });
    });

    describe('Multiple select', () => {
      it('should not close dropdown when an item is selected', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="country.name"
                        multiple>
                    </oui-select>`, {
          countries: data,
        });

        const $triggerButton = angular.element(getMultipleDropdownButton(element));

        expect($triggerButton.attr('aria-expanded')).toBe('false');

        // Open the dropdown
        $triggerButton.triggerHandler('click');

        // Select 5th element and check if it's highlighted.
        const $itemButton = angular.element(getDropdownItem(element, 4));
        $itemButton.triggerHandler('click');

        // The dropdown should stay opened.
        expect($triggerButton.attr('aria-expanded')).toBe('true');
      });

      it('should remove item selected', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="country.name"
                        multiple>
                    </oui-select>`, {
          countries: data,
        });

        const $triggerButton = angular.element(getMultipleDropdownButton(element));

        expect($triggerButton.attr('aria-expanded')).toBe('false');

        // Open the dropdown
        $triggerButton.triggerHandler('click');

        // Select 5th element and check if it's highlighted.
        let $itemButton = angular.element(getDropdownItem(element, 4));
        $itemButton.triggerHandler('click');

        $itemButton = angular.element(getDropdownItem(element, 4));
        $itemButton.triggerHandler('click');

        // The dropdown should stay opened.
        let matchItems = getMultipleMatchItem(element);
        expect(matchItems.length).toBe(2);

        angular.element(matchItems[0]).triggerHandler('click');
        matchItems = getMultipleMatchItem(element);

        expect(matchItems.length).toBe(1);
      });


      it('should trigger onChange callback if an item is removed', () => {
        const onChange = jasmine.createSpy();
        const element = TestUtils.compileTemplate(`
            <oui-select name="country"
                model="$ctrl.country"
                title="Select a country"
                placeholder="Select a country..."
                items="$ctrl.countries"
                match="country.name"
                multiple
                on-change="$ctrl.onChange()">
            </oui-select>`, {
          countries: data,
          onChange,
          country: data.slice(0, 4),
        });

        const items = angular.element(getMultipleMatchItem(element));
        const $triggerButton = angular.element(items[0]);
        $triggerButton.triggerHandler('click');
        $timeout.flush();

        expect(onChange).toHaveBeenCalled();
      });
    });

    describe('Not grouped', () => {
      it('should display all the choices (objectArray)', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="country.name">
                    </oui-select>`, {
          countries: data,
        });

        // Must open the select first, to init the dropdown menu
        const $triggerButton = angular.element(getDropdownButton(element));
        $triggerButton.triggerHandler('click');

        expect(getDropdownItems(element).length).toEqual(data.length);
        expect(angular.element(getDropdownItem(element, 0)).text()).toContain(data[0].country.name);
        expect(angular.element(getDropdownItem(element, data.length - 1)).text())
          .toContain(data[data.length - 1].country.name);
        expect(getItemsGroups(element).length).toEqual(1);
      });

      it('should display all the choices (stringArray)', () => {
        const stringArray = ['a', 'b', 'c'];
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        title="Select a country"
                        model="$ctrl.country"
                        items="$ctrl.array">
                    </oui-select>`, {
          array: stringArray,
        });

        // Must open the select first, to init the dropdown menu
        const $triggerButton = angular.element(getDropdownButton(element));
        $triggerButton.triggerHandler('click');

        expect(getDropdownItems(element).length).toEqual(stringArray.length);
        expect(angular.element(getDropdownItem(element, 0)).text()).toContain(stringArray[0]);
        expect(angular.element(getDropdownItem(element, stringArray.length - 1)).text())
          .toContain(stringArray[stringArray.length - 1]);
        expect(getItemsGroups(element).length).toEqual(1);
      });
    });

    describe('Grouped', () => {
      it('should display all the choices', () => {
        const groupByFirstLetter = (item) => item.country.name.substr(0, 1).toUpperCase();
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="country.name"
                        group-by="$ctrl.groupByFirstLetter">
                    </oui-select>`, {
          countries: data,
          groupByFirstLetter,
        });

        // Must open the select first, to init the dropdown menu
        const $triggerButton = angular.element(getDropdownButton(element));
        $triggerButton.triggerHandler('click');

        const groups = uniq(data.map(groupByFirstLetter));
        const firstGroupElement = getItemsGroup(element, 0);
        const lastGroupElement = getItemsGroup(element, groups.length - 1);

        expect(getDropdownItems(element).length).toEqual(data.length);
        expect(angular.element(getItemsGroupLabel(firstGroupElement)).text())
          .toContain(groups[0]);
        expect(angular.element(getItemsGroupLabel(lastGroupElement)).text())
          .toContain(groups[groups.length - 1]);
        expect(getItemsGroups(element).length).toEqual(groups.length);
      });
    });

    describe('Blur on dropdown trigger', () => {
      it('should call onBlur callback', () => {
        const onBlur = jasmine.createSpy();
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="country.name"
                        on-blur="$ctrl.onBlur()">
                    </oui-select>`, {
          onBlur,
        });

        $timeout.flush();

        angular.element(getFocusser(element)).triggerHandler('blur');

        // Need to flush again for the callback
        $timeout.flush();

        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('Focus on dropdown trigger', () => {
      it('should call onFocus callback', () => {
        const onFocus = jasmine.createSpy();
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="country.name"
                        on-focus="$ctrl.onFocus()">
                    </oui-select>`, {
          onFocus,
        });

        $timeout.flush();

        angular.element(getFocusser(element)).triggerHandler('focus');

        // Need to flush again for the callback
        $timeout.flush();

        expect(onFocus).toHaveBeenCalled();
      });
    });

    describe('Change on dropdown trigger', () => {
      it('should call onChange callback', () => {
        const onChange = jasmine.createSpy();
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="country.name"
                        on-change="$ctrl.onChange(modelValue)">
                    </oui-select>`, {
          countries: data,
          onChange,
        });

        $timeout.flush();

        // Must open the select first, to init the dropdown menu
        const $triggerButton = angular.element(getDropdownButton(element));
        $triggerButton.triggerHandler('click');

        const index = 4;
        const $itemButton = angular.element(getDropdownItem(element, index));
        $itemButton.triggerHandler('click');

        // onSelect from ui-select is inside a $timeout
        // Must open the dropdown before flushing the $timeout
        $triggerButton.triggerHandler('click');
        $timeout.flush();
        expect(onChange).toHaveBeenCalledWith(data[index]);
      });
    });

    describe('Disable options', () => {
      it('should disable corresponding items', () => {
        const disableCountry = (item) => item.country.name === data[3].country.name;
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        disable-items="$ctrl.disableCountry($item)"
                        match="country.name">
                    </oui-select>`, {
          countries: data,
          disableCountry,
        });

        $timeout.flush();

        // Trigger click to update the options with corresponding dynamic attributes
        getDropdownButton(element).click();
        expect(angular.element(getDropdownItem(element, 3)).prop('disabled')).toBeTruthy();
      });

      it('should update item', () => {
        const countries = data.concat({ name: 'Imaginary country', code: 'IC' });
        const disableCountry = (item) => item.code === '';
        const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        disable-items="$ctrl.disableCountry($item)"
                        match="country.name">
                    </oui-select>`, {
          countries,
          disableCountry,
        });

        $timeout.flush();

        // Trigger click to update the options with corresponding dynamic attributes
        getDropdownButton(element).click();
        expect(angular.element(getDropdownItem(element, data.length - 1)).prop('disabled')).toBeFalsy();

        element.scope().$ctrl.countries[data.length - 1].code = '';
        $timeout.flush();

        expect(angular.element(getDropdownItem(element, data.length - 1)).prop('disabled')).toBeTruthy();
      });
    });

    describe('Inline attribute', () => {
      it('should display an inline select', () => {
        const title = 'Select a country';
        const placeholder = 'Select a country...';

        const element = TestUtils.compileTemplate(`
          <oui-select name="country"
              model="$ctrl.country"
              title="${title}"
              placeholder="${placeholder}"
              items="$ctrl.countries"
              match="country.name"
              inline>
          </oui-select>`, {
          countries: data,
        });

        $timeout.flush();
        expect(angular.element(element).hasClass('oui-select_inline')).toBe(true);
      });
    });

    describe('value-property attribute', () => {
      it('should select the value-property of the selected item', () => {
        const title = 'Select a country';
        const placeholder = 'Select a country...';
        const onChange = jasmine.createSpy();
        const index = 4;

        const element = TestUtils.compileTemplate(`
          <oui-select name="country"
              model="$ctrl.country"
              title="${title}"
              placeholder="${placeholder}"
              items="$ctrl.countries"
              match="name"
              value-property="code"
              on-change="$ctrl.onChange(modelValue)">
          </oui-select>`, {
          model: 'FR',
          countries: data.map(({ country }) => country),
          onChange,
        });

        const $triggerButton = angular.element(getDropdownButton(element));

        // Open the dropdown
        $triggerButton.triggerHandler('click');

        // Select 5th element (AS)
        const $itemButton = angular.element(getDropdownItem(element, index));
        $itemButton.triggerHandler('click');
        $triggerButton.triggerHandler('click');
        $timeout.flush();

        expect(onChange).toHaveBeenCalledWith(data[index].country.code);
      });
    });

    describe('using load', () => {
      it('should load with basic setup', () => {
        const onLoad = jasmine.createSpy();
        TestUtils.compileTemplate(`
            <oui-select
              load="/data"
              on-load="$ctrl.onLoad(request, response)"
              model="$ctrl.model"
            ></oui-select>
          `, {
          model: null,
          onLoad,
        });

        $httpBackend.flush();

        expect(onLoad).toHaveBeenCalledWith(
          jasmine.objectContaining({ method: 'GET', url: '/data', timeout: 30000 }),
          jasmine.objectContaining({ data }),
        );
      });

      it('should remove the size header', () => {
        const onLoad = jasmine.createSpy();
        TestUtils.compileTemplate(`
            <oui-select
              load="/data"
              load-options="{ size: 0 }"
              on-load="$ctrl.onLoad(request, response)"
              model="$ctrl.model"
            ></oui-select>
          `, {
          model: null,
          onLoad,
        });

        $httpBackend.flush();

        expect(onLoad).toHaveBeenCalledWith(
          jasmine.objectContaining({ url: '/data', headers: {} }),
          jasmine.objectContaining({ data }),
        );
      });

      it('should change some request properties before load', () => {
        const onBeforeLoad = jasmine.createSpy('onBeforeLoad').and.callFake((request) => ({
          ...request,
          headers: { 'X-Test': 'OK' },
        }));
        const onLoad = jasmine.createSpy('onLoad');
        TestUtils.compileTemplate(`
            <oui-select
              load="/data"
              on-before-load="$ctrl.onBeforeLoad(request)"
              on-load="$ctrl.onLoad(request, response)"
              model="$ctrl.model"
            ></oui-select>
          `, {
          model: null,
          onBeforeLoad,
          onLoad,
        });

        expect(onBeforeLoad).toHaveBeenCalledWith(
          jasmine.objectContaining({ url: '/data', headers: { 'X-Pagination-Size': 25 } }),
        );

        $httpBackend.flush();

        expect(onLoad).toHaveBeenCalledWith(
          jasmine.objectContaining({ url: '/data', headers: { 'X-Test': 'OK' } }),
          jasmine.objectContaining({ data }),
        );
      });

      it('should not load', () => {
        const onError = jasmine.createSpy();
        TestUtils.compileTemplate(`
            <oui-select
              load="/notfound"
              on-error="$ctrl.onError(request, error)"
              model="$ctrl.model"
            ></oui-select>
          `, {
          model: null,
          onError,
        });

        $httpBackend.flush();

        expect(onError).toHaveBeenCalledWith(
          jasmine.objectContaining({ url: '/notfound' }),
          jasmine.objectContaining({ status: 404 }),
        );
      });

      it('should handle stress test', () => {
        const onLoad = jasmine.createSpy('onLoad');
        const onError = jasmine.createSpy('onError');
        const element = TestUtils.compileTemplate(`
            <oui-select
              load="/data{{ $ctrl.callId }}"
              on-load="$ctrl.onLoad(request, response)"
              on-error="$ctrl.onError(request, error)"
              model="$ctrl.model"
            ></oui-select>
          `, {
          callId: 1,
          model: null,
          onLoad,
          onError,
        });
        const scope = angular.element(element).scope();
        const selectController = angular.element(getContainer(element)).scope().$ctrl;
        spyOn(selectController, 'loadItems').and.callThrough();

        scope.$ctrl.callId = 2;
        scope.$apply();
        scope.$ctrl.callId = 3;
        scope.$apply();
        scope.$ctrl.callId = 4;
        scope.$apply();

        $httpBackend.flush();

        expect(selectController.loadItems).toHaveBeenCalledTimes(3);
        expect(onLoad).toHaveBeenCalledTimes(1);
        expect(onLoad).toHaveBeenCalledWith(
          jasmine.objectContaining({ url: '/data4' }),
          jasmine.objectContaining({ data: [data[4]] }),
        );
      });

      it('should timeout', () => {
        const onError = jasmine.createSpy();
        TestUtils.compileTemplate(`
            <oui-select
              load="/data"
              load-options="{ timeout: 5000 }"
              on-error="$ctrl.onError(request, error)"
              model="$ctrl.model"
            ></oui-select>
          `, {
          model: null,
          onError,
        });

        $timeout.flush();

        expect(onError).toHaveBeenCalledWith(
          jasmine.objectContaining({ url: '/data', timeout: 5000 }),
          jasmine.objectContaining({ xhrStatus: 'timeout' }),
        );
      });

      describe('using paginated data', () => {
        it('should display partial data with spinner', () => {
          const onLoad = jasmine.createSpy();
          const element = TestUtils.compileTemplate(`
              <oui-select
                load="/paginateddata"
                on-load="$ctrl.onLoad(request, response)"
                model="$ctrl.model"
              ></oui-select>
            `, {
            model: null,
            onLoad,
          });

          $httpBackend.flush();

          angular.element(getDropdownButton(element)).triggerHandler('click');
          $timeout.flush();

          expect(onLoad).toHaveBeenCalledWith(
            jasmine.objectContaining({ url: '/paginateddata', headers: { 'X-Pagination-Size': 25 } }),
            jasmine.objectContaining({ data: data.slice(0, 25), nextCursor: '25' }),
          );
          expect(getDropdownItems(element).length).toBe(26);
          expect(Array.from(getDropdownItems(element)).pop().disabled).toBe(true);
          expect(getDropdownItemsSpinner(element)).toBeTruthy();
        });

        it('should load the second page', (done) => {
          const onLoad = jasmine.createSpy();
          const element = TestUtils.compileTemplate(`
              <oui-select
                load="/paginateddata"
                on-load="$ctrl.onLoad(request, response)"
                model="$ctrl.model"
              ></oui-select>
            `, {
            model: null,
            onLoad,
          });

          $httpBackend.flush();

          angular.element(getDropdownButton(element)).triggerHandler('click');
          $timeout.flush();
          getDropdownItemsSpinner(element).scrollIntoView();

          setTimeout(() => {
            $httpBackend.flush();

            expect(onLoad).toHaveBeenCalledTimes(2);
            expect(onLoad.calls.argsFor(0)).toEqual([
              jasmine.objectContaining({ url: '/paginateddata', headers: { 'X-Pagination-Size': 25 } }),
              jasmine.objectContaining({ data: data.slice(0, 25), nextCursor: '25' }),
            ]);
            expect(onLoad.calls.argsFor(1)).toEqual([
              jasmine.objectContaining({ url: '/paginateddata', headers: { 'X-Pagination-Cursor': '25', 'X-Pagination-Size': 25 } }),
              jasmine.objectContaining({ data: data.slice(25, 50), nextCursor: '50' }),
            ]);
            expect(getDropdownItems(element).length).toBe(51);
            expect(getDropdownItemsSpinner(element)).toBeTruthy();
            done();
          }, 500);
        });

        it('should reset the cursor on change', () => {
          const onLoad = jasmine.createSpy();
          const element = TestUtils.compileTemplate(`
              <oui-select
                load="{{ $ctrl.load }}"
                on-load="$ctrl.onLoad(request, response)"
                model="$ctrl.model"
              ></oui-select>
            `, {
            load: '/paginateddata',
            model: null,
            onLoad,
          });
          $httpBackend.flush();

          const scope = angular.element(element).scope();
          scope.$ctrl.load = '/data';
          scope.$apply();

          $httpBackend.flush();

          expect(onLoad).toHaveBeenCalledTimes(2);
          expect(onLoad.calls.argsFor(0)).toEqual([
            jasmine.objectContaining({ url: '/paginateddata' }),
            jasmine.objectContaining({ data: data.slice(0, 25) }),
          ]);
          expect(onLoad.calls.argsFor(1)).toEqual([
            jasmine.objectContaining({ url: '/data', headers: { 'X-Pagination-Size': 25 } }),
            jasmine.objectContaining({ data }),
          ]);
        });

        it('should load the second page once', (done) => {
          const element = TestUtils.compileTemplate(`
            <div>
              <oui-select
                load="/paginateddata"
                load-options="{ timeout: 0 }"
                model="$ctrl.model"
              ></oui-select>
              <button class="outside-button">Outside</button>
            </div>
            `, {
            model: null,
          });
          const selectController = angular.element(getContainer(element)).scope().$ctrl;
          const dropdownButton = angular.element(getDropdownButton(element));
          const outsideButton = element[0].querySelector('.outside-button');
          spyOn(selectController, 'loadItems').and.callThrough();
          $httpBackend.flush();

          [...Array(5).keys()].forEach((x) => {
            setTimeout(() => {
              dropdownButton.triggerHandler('click');
              $timeout.flush();
              getDropdownItemsSpinner(element).scrollIntoView();
              setTimeout(() => $document.triggerHandler({ type: 'click', target: outsideButton }), 50);
            }, x * 100);
          });

          setTimeout(() => {
            $httpBackend.flush();
            expect(selectController.loadItems).toHaveBeenCalledTimes(1);
            done();
          }, 1000);
        });

        it('should load with custom size', (done) => {
          const onLoad = jasmine.createSpy();
          const element = TestUtils.compileTemplate(`
              <oui-select
                load="/paginateddata"
                load-options="{ size: 150 }"
                on-load="$ctrl.onLoad(request, response)"
                model="$ctrl.model"
              ></oui-select>
            `, {
            model: null,
            onLoad,
          });

          $httpBackend.flush();

          angular.element(getDropdownButton(element)).triggerHandler('click');
          $timeout.flush();
          getDropdownItemsSpinner(element).scrollIntoView();

          setTimeout(() => {
            $httpBackend.flush();

            expect(onLoad).toHaveBeenCalledTimes(2);
            expect(onLoad.calls.argsFor(0)).toEqual([
              jasmine.objectContaining({ url: '/paginateddata', headers: { 'X-Pagination-Size': 150 } }),
              jasmine.objectContaining({ data: data.slice(0, 150), nextCursor: '150' }),
            ]);
            expect(onLoad.calls.argsFor(1)).toEqual([
              jasmine.objectContaining({ url: '/paginateddata', headers: { 'X-Pagination-Cursor': '150', 'X-Pagination-Size': 150 } }),
              jasmine.objectContaining({ data: data.slice(150), nextCursor: null }),
            ]);
            expect(getDropdownItems(element).length).toBe(data.length);
            expect(getDropdownItemsSpinner(element)).toBeFalsy();
            done();
          }, 500);
        });
      });
    });
  });
});
