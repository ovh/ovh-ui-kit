import '@ovh-ux/ui-kit.action-menu';

import columnsData from './columns.spec.data.json';
import originalFakeData from './datagrid.spec.data.json';

describe('ouiDatagrid', () => {
  let TestUtils;
  let $rootScope;
  let $timeout;
  let ouiDatagridService;
  let fakeData;

  const getRows = (element) => element[0].querySelectorAll('.oui-datagrid__row:not(.oui-datagrid__row_placeholder)');
  const getRow = (element, lineNumber) => angular.element(getRows(element)[lineNumber]);
  const getHeaderRow = (element) => angular.element(element[0].querySelector('thead > tr'));
  const getHeaderCell = (element, columnNumber) => angular.element(element[0].querySelectorAll('.oui-datagrid__header')[columnNumber]);
  const getFooterRow = (element) => angular.element(element[0].querySelector('tfoot > tr'));
  const getFooterCell = (element, columnNumber) => angular.element(element[0].querySelectorAll('.oui-datagrid__footer')[columnNumber]);
  const getCell = (element, columnNumber) => angular.element(element[0].querySelectorAll('.oui-datagrid__cell')[columnNumber]);
  const getNextPagePaginationButton = (element) => angular.element(element[0].querySelector('.oui-pagination-nav__next'));
  const isSortableCell = (element) => element.hasClass('oui-datagrid__header_sortable');
  const isSortableAscCell = (element) => {
    const isSortable = isSortableCell(element);
    const isSortableDesc = angular.element(element[0].querySelector('.oui-icon')).hasClass('oui-icon-sort-up');

    return isSortable && isSortableDesc;
  };
  const isSortableDescCell = (element) => {
    const isSortable = isSortableCell(element);
    const isSortableDesc = angular.element(element[0].querySelector('.oui-icon')).hasClass('oui-icon-sort-down');

    return isSortable && isSortableDesc;
  };
  const getActionMenu = (element) => element.find('oui-action-menu');
  const getDatagridParameters = (element) => element.find('oui-datagrid-parameters');
  const getColumnsInDatagridParameters = (element) => angular.element(element[0].querySelectorAll('oui-datagrid-parameters .oui-datagrid-parameters__column'));

  function changeCellValue(element, rowNumber, columnName, newValue) {
    const controller = TestUtils.getElementController(element);

    controller.rows[rowNumber][columnName] = newValue;

    $rootScope.$digest();
  }

  beforeEach(angular.mock.module('oui.datagrid'));
  beforeEach(angular.mock.module('oui.test-utils'));
  beforeEach(angular.mock.module('oui.action-menu'));

  beforeEach(inject((_TestUtils_, _$rootScope_, _$timeout_, _ouiDatagridService_) => {
    TestUtils = _TestUtils_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
    ouiDatagridService = _ouiDatagridService_;
    fakeData = angular.copy(originalFakeData);
  }));

  describe('Component', () => {
    describe('Local rows', () => {
      it('should display rows using rows attribute', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          rows: fakeData.slice(0, 5),
        });

        const $firstRow = getRow(element, 0);
        const $fifthRow = getRow(element, 4);

        expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
        expect(getCell($firstRow, 1).children().html()).toBe(fakeData[0].lastName);

        expect(getCell($fifthRow, 0).children().html()).toBe(fakeData[4].firstName);
        expect(getCell($fifthRow, 1).children().html()).toBe(fakeData[4].lastName);
      });

      it('should refresh when rows changed', () => {
        const fakeDataCopy = angular.copy(fakeData.slice(0, 5));
        const newCellValue = 'fakeFirstName';

        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          rows: fakeDataCopy,
        });

        changeCellValue(element, 0, 'firstName', newCellValue);

        // Let DatagridPagingAbstract.preventLoadingRows return to false.
        $timeout.flush();

        const $firstRow = getRow(element, 0);

        expect(getCell($firstRow, 0).children().html()).toBe(newCellValue);
      });

      it('should load data instantly if data is already available', inject(($q) => {
        const loadRowSpy = jasmine.createSpy('loadRow');
        const additionnalDataValue = '+';

        loadRowSpy.and.callFake(($row) => $q.when({
          ...$row,
          more: additionnalDataValue,
        }));

        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows" row-loader="$ctrl.loadRow($row)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            <oui-datagrid-column property="more"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          rows: fakeData.slice(0, 5),
          loadRow: loadRowSpy,
        });

        const $firstRow = getRow(element, 0);

        expect(loadRowSpy.calls.count()).toEqual(5);

        expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
        expect(getCell($firstRow, 2).children().html()).toBe(additionnalDataValue);
      }));

      it('should display a skeleton when a cell is not loaded', inject(($q) => {
        const deferred = $q.defer();
        const loadRowSpy = jasmine.createSpy('loadRow');

        loadRowSpy.and.returnValue(deferred.promise);

        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows" row-loader="$ctrl.loadRow($row)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            <oui-datagrid-column property="more"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          rows: fakeData.slice(0, 1),
          loadRow: loadRowSpy,
        });

        const $firstRow = getRow(element, 0);

        expect(loadRowSpy.calls.count()).toEqual(1);

        expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
        expect(getCell($firstRow, 2).children()[0].tagName.toLowerCase()).toBe('oui-skeleton');
      }));

      it('should load data later and display it', inject(($q) => {
        const additionnalDataValue = '+';
        const deferred = $q.defer();
        const loadRowSpy = jasmine.createSpy('loadRow');

        loadRowSpy.and.returnValue(deferred.promise);

        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows" row-loader="$ctrl.loadRow($row)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            <oui-datagrid-column property="more"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          rows: fakeData.slice(0, 1),
          loadRow: loadRowSpy,
        });

        deferred.resolve({
          more: additionnalDataValue,
        });

        $rootScope.$digest();

        const $firstRow = getRow(element, 0);

        expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
        expect(getCell($firstRow, 2).children().html()).toBe(additionnalDataValue);
      }));

      it('should display rows that can only be contained in a page', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows" page-size="2">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          rows: fakeData.slice(0, 5),
        });

        const rows = getRows(element);

        expect(rows.length).toEqual(2);
      });

      it('should display rows sorted', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName" sortable="asc"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          rows: fakeData.slice(0, 5),
        });

        [
          'Cole',
          'Harris',
          'Jackson',
          'Jenkins',
          'Torres',
        ]
          .forEach((lastName, index) => {
            const $row = getRow(element, index);

            expect(getCell($row, 1).children().html()).toBe(lastName);
          });
      });

      it('should refresh datagrid', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-datagrid
                            id="refreshableDatagrid"
                            rows="$ctrl.rows"
                            row-loader="$ctrl.loadRow($row)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            <oui-datagrid-column property="more"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          rows: angular.copy(fakeData.slice(0, 1)),
          loadRow: ($row) => ({
            ...$row,
                        more: `More ${1000 * Math.random()}` //eslint-disable-line
          }),
        });

        let row = getRow(element, 0);
        let cell = getCell(row, 2);

        const originalValue = cell.text();

        ouiDatagridService.refresh('refreshableDatagrid');
        element.scope().$digest();

        row = getRow(element, 0);
        cell = getCell(row, 2);
        const newValue = cell.text();

        expect(newValue).not.toEqual(originalValue);
      });

      describe('Filtering', () => {
        it('should set page to 1 on filtering', () => {
          const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-datagrid-column property="firstName" type="string" searchable></oui-datagrid-column>
                                <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            </oui-datagrid>
                        `, {
            rows: fakeData,
          });

          const tableController = element.controller('ouiDatagrid');
          tableController.paging.setOffset = jasmine.createSpy('setOffsetSpy')
            .and.callThrough();
          tableController.onCriteriaChange([{
            property: null, // any property
            operator: 'contains',
            value: 'aaron',
          }]);
          element.scope().$apply();

          expect(tableController.paging.setOffset).toHaveBeenCalledWith(1);
        });

        it('should not display search input nor criteria adder', () => {
          const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-datagrid-column property="firstName" type="string"></oui-datagrid-column>
                                <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            </oui-datagrid>
                        `, {
            rows: fakeData,
          });

          const searchInput = element.find('oui-search');
          const criteriaAdder = element.find('oui-criteria-adder');

          expect(searchInput.length).toEqual(0);
          expect(criteriaAdder.length).toEqual(0);
        });

        it('should display search input but not criteria adder', () => {
          const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-datagrid-column property="firstName" type="string" searchable></oui-datagrid-column>
                                <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            </oui-datagrid>
                        `, {
            rows: fakeData,
          });

          const searchInput = element.find('oui-search');
          const criteriaAdder = element.find('oui-criteria-adder');

          expect(searchInput.length).toEqual(1);
          expect(criteriaAdder.length).toEqual(0);
        });

        it('should display criteria adder input but not search', () => {
          const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-datagrid-column property="firstName" type="string" filterable></oui-datagrid-column>
                                <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            </oui-datagrid>
                        `, {
            rows: fakeData,
          });

          const searchInput = element.find('oui-search');
          const criteriaAdder = element.find('oui-criteria-adder');

          expect(searchInput.length).toEqual(0);
          expect(criteriaAdder.length).toEqual(1);
        });

        it('should display search and criteria adder', () => {
          const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-datagrid-column property="firstName" type="string" filterable></oui-datagrid-column>
                                <oui-datagrid-column property="lastName" type="string" searchable></oui-datagrid-column>
                            </oui-datagrid>
                        `, {
            rows: fakeData,
          });

          const searchInput = element.find('oui-search');
          const criteriaAdder = element.find('oui-criteria-adder');

          expect(searchInput.length).toEqual(1);
          expect(criteriaAdder.length).toEqual(1);
        });

        describe('Search text', () => {
          it('should filter text on a simple column', () => {
            const criteria = [{
              property: null, // any property
              operator: 'contains',
              value: 'aaron',
            }];
            const expectedResults = 2;

            const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows="$ctrl.rows">
                                    <oui-datagrid-column property="firstName" type="string" searchable></oui-datagrid-column>
                                    <oui-datagrid-column property="lastName"></oui-datagrid-column>
                                </oui-datagrid>
                            `, {
              rows: fakeData,
            });

            const tableController = element.controller('ouiDatagrid');
            tableController.onCriteriaChange(criteria);
            element.scope().$apply();

            expect(getRows(element).length).toEqual(expectedResults);
          });

          it('should filter text on a multiple columns', () => {
            const criteria = [{
              property: null, // any property
              operator: 'contains',
              value: 'ron',
            }];
            const expectedResults = 15;

            const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows="$ctrl.rows">
                                    <oui-datagrid-column property="firstName" type="string" searchable></oui-datagrid-column>
                                    <oui-datagrid-column property="lastName" type="string" searchable></oui-datagrid-column>
                                </oui-datagrid>
                            `, {
              rows: fakeData,
            });

            const tableController = element.controller('ouiDatagrid');
            tableController.onCriteriaChange(criteria);
            element.scope().$apply();

            expect(getRows(element).length).toEqual(expectedResults);
          });
        });

        describe('Text', () => {
          it('should filter with contains operator', () => {
            const criteria = [{
              property: 'firstName',
              operator: 'contains',
              value: 'aaron',
            }];
            const expectedResults = 2;

            const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows="$ctrl.rows">
                                    <oui-datagrid-column property="firstName" type="string" filterable></oui-datagrid-column>
                                    <oui-datagrid-column property="lastName"></oui-datagrid-column>
                                </oui-datagrid>
                            `, {
              rows: fakeData,
            });

            const tableController = element.controller('ouiDatagrid');
            tableController.onCriteriaChange(criteria);
            element.scope().$apply();

            expect(getRows(element).length).toEqual(expectedResults);
          });
        });
      });
    });

    describe('Selectable rows', () => {
      it('should toggle row selection', () => {
        const selectHandler = jasmine.createSpy();
        const element = TestUtils.compileTemplate(`
                <oui-datagrid rows="$ctrl.rows"
                              selectable-rows
                              on-row-select="$ctrl.selectHandler($row, $rows)">
                    <oui-datagrid-column property="firstName"></oui-datagrid-column>
                    <oui-datagrid-column property="lastName"></oui-datagrid-column>
                </oui-datagrid>`, {
          rows: fakeData.slice(0, 5),
          selectHandler,
        });
        const ctrl = element.controller('ouiDatagrid');

        let selection = [];
        ctrl.toggleRowSelection(0, true);
        selection = ctrl.getSelectedRows();

        expect(selection.length).toBe(1);
        expect(selection[0]).toEqual(fakeData[0]);
        expect(selectHandler).toHaveBeenCalledWith(fakeData[0], fakeData.slice(0, 1));

        ctrl.toggleRowSelection(0, false);
        selection = ctrl.getSelectedRows();

        expect(selection.length).toBe(0);
        expect(selectHandler).toHaveBeenCalledWith(fakeData[0], []);
      });

      it('should toggle all rows', () => {
        const selectHandler = jasmine.createSpy();
        const element = TestUtils.compileTemplate(`
                <oui-datagrid rows="$ctrl.rows"
                              selectable-rows
                              on-row-select="$ctrl.selectHandler($row, $rows)">
                    <oui-datagrid-column property="firstName"></oui-datagrid-column>
                    <oui-datagrid-column property="lastName"></oui-datagrid-column>
                </oui-datagrid>`, {
          rows: fakeData.slice(0, 5),
          selectHandler,
        });
        const ctrl = element.controller('ouiDatagrid');

        let selection = [];
        expect(ctrl.selectAllRows).toBe(false);

        ctrl.toggleAllRowsSelection(true);
        selection = ctrl.getSelectedRows();
        expect(selection.length).toBe(5);
        expect(selectHandler).toHaveBeenCalledWith(null, fakeData.slice(0, 5));

        ctrl.toggleAllRowsSelection(false);
        selection = ctrl.getSelectedRows();
        expect(selection.length).toBe(0);
        expect(selectHandler).toHaveBeenCalledWith(null, []);
      });

      it('should update global selection checkbox', () => {
        const element = TestUtils.compileTemplate(`
                <oui-datagrid rows="$ctrl.rows" selectable-rows>
                    <oui-datagrid-column property="firstName"></oui-datagrid-column>
                    <oui-datagrid-column property="lastName"></oui-datagrid-column>
                </oui-datagrid>`, {
          rows: fakeData.slice(0, 5),
        });
        const ctrl = element.controller('ouiDatagrid');

        expect(ctrl.selectAllRows).toBe(false);
        ctrl.toggleRowSelection(0, true);
        expect(ctrl.selectAllRows).toBe(null);
        ctrl.toggleRowSelection(1, true);
        ctrl.toggleRowSelection(2, true);
        ctrl.toggleRowSelection(3, true);
        expect(ctrl.selectAllRows).toBe(null);
        ctrl.toggleRowSelection(4, true);
        expect(ctrl.selectAllRows).toBe(true);
        ctrl.toggleRowSelection(4, false);
        expect(ctrl.selectAllRows).toBe(null);
        ctrl.toggleRowSelection(0, false);
        ctrl.toggleRowSelection(1, false);
        ctrl.toggleRowSelection(2, false);
        ctrl.toggleRowSelection(3, false);
        expect(ctrl.selectAllRows).toBe(false);
      });

      it('should updates oui-datagrid-topbar content', () => {
        const element = TestUtils.compileTemplate(`
                <oui-datagrid rows="$ctrl.rows">
                    <oui-datagrid-column property="firstName"></oui-datagrid-column>
                    <oui-datagrid-column property="lastName"></oui-datagrid-column>
                    <oui-datagrid-topbar>{{ $selectedRows.length }}</oui-datagrid-topbar>
                </oui-datagrid>`, {
          rows: fakeData.slice(0, 5),
        });
        const ctrl = element.controller('ouiDatagrid');
        ctrl.toggleAllRowsSelection(true);
        element.scope().$apply();
        expect(element.find('oui-datagrid-topbar').text()).toBe('5');
      });
    });

    describe('Expandable rows', () => {
      it('should toggle row detail on click on one row, if row detail exists', () => {
        const element = TestUtils.compileTemplate(`
            <oui-datagrid rows="$ctrl.rows">
                <oui-datagrid-column property="firstName"></oui-datagrid-column>
                <oui-datagrid-column property="lastName"></oui-datagrid-column>
                <oui-datagrid-column property="description"></oui-datagrid-column>
                <oui-datagrid-row-detail>
                    Contact informations :
                    <ul>
                        <li>Email : <span ng-bind="$row.email"></span></li>
                        <li>Phone : <span ng-bind="$row.phone"></span></li>
                    </ul>
                </oui-datagrid-row-detail>
            </oui-datagrid>
          `, {
          rows: fakeData.slice(0, 5),
        });

        const ctrl = element.controller('ouiDatagrid');
        expect(ctrl.expandableRows).toBe(true);
        expect(ctrl.expandedRows.length).toEqual(0);
        ctrl.toggleRowExpansion(0);
        expect(ctrl.expandedRows.length).toEqual(1);
        expect(ctrl.isRowExpanded(0)).toBe(true);
        expect(element.find('<span ng-bind="$row.phone>')).not.toBe(null);
        expect(ctrl.isRowExpanded(1)).toBe(false);
        expect(ctrl.isRowExpanded(2)).toBe(false);
        expect(ctrl.isRowExpanded(3)).toBe(false);
        expect(ctrl.isRowExpanded(4)).toBe(false);
        ctrl.toggleRowExpansion(0);
        expect(ctrl.expandedRows.length).toEqual(0);
        expect(ctrl.isRowExpanded(0)).toBe(false);
      });

      it('should not expand any row, if no row detail exists', () => {
        const element = TestUtils.compileTemplate(`
            <oui-datagrid rows="$ctrl.rows">
                <oui-datagrid-column property="firstName"></oui-datagrid-column>
                <oui-datagrid-column property="lastName"></oui-datagrid-column>
                <oui-datagrid-column property="description"></oui-datagrid-column>
            </oui-datagrid>
          `, {
          rows: fakeData.slice(0, 5),
        });

        const ctrl = element.controller('ouiDatagrid');
        expect(ctrl.expandableRows).toBe(false);
        ctrl.toggleRowExpansion(0);
        expect(ctrl.expandedRows.length).toEqual(0);
      });
      it('should have as many columns in expanded row than in parent', () => {
        const element = TestUtils.compileTemplate(`
            <oui-datagrid rows="$ctrl.rows">
                <oui-datagrid-column property="firstName"></oui-datagrid-column>
                <oui-datagrid-column property="lastName"></oui-datagrid-column>
                <oui-datagrid-row-detail>
                  <span>Email : <span ng-bind="$row.email"></span>
              </oui-datagrid-row-detail>
              <oui-datagrid-row-detail>
                  <span>Email : <span ng-bind="$row.phone"></span>
              </oui-datagrid-row-detail>
            </oui-datagrid>
          `, {
          rows: fakeData.slice(0, 5),
        });

        const ctrl = element.controller('ouiDatagrid');
        expect(ctrl.expandableRows).toBe(true);
        expect(ctrl.expandedRows.length).toEqual(0);
        ctrl.toggleRowExpansion(0);
        expect(ctrl.expandedRows.length).toEqual(1);
        expect(ctrl.isRowExpanded(0)).toBe(true);
        expect(element.find('<span ng-bind="$row.email>')).not.toBe(null);
        expect(element.find('<span ng-bind="$row.phone>')).not.toBe(null);
        ctrl.toggleRowExpansion(0);
        expect(ctrl.expandedRows.length).toEqual(0);
        expect(ctrl.isRowExpanded(0)).toBe(false);
      });
    });

    describe('Remote rows', () => {
      let rowsLoaderSpy;

      beforeEach(inject(($q) => {
        rowsLoaderSpy = jasmine.createSpy('rowsLoader');

        rowsLoaderSpy.and.returnValue($q.when({
          data: fakeData.slice(0, 5),
          meta: {
            currentOffset: 0,
            pageCount: 1,
            totalCount: 5,
            pageSize: 25,
          },
        }));
      }));

      it('should display rows using rowsLoader', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          loadRows: rowsLoaderSpy,
        });

        const $firstRow = getRow(element, 0);
        const $fifthRow = getRow(element, 4);

        expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
        expect(getCell($firstRow, 1).children().html()).toBe(fakeData[0].lastName);

        expect(getCell($fifthRow, 0).children().html()).toBe(fakeData[4].firstName);
        expect(getCell($fifthRow, 1).children().html()).toBe(fakeData[4].lastName);
      });

      it('should display a skeleton when a cell is not loaded', inject(($q) => {
        const deferred = $q.defer();
        const loadRowSpy = jasmine.createSpy('loadRow');

        loadRowSpy.and.returnValue(deferred.promise);

        rowsLoaderSpy.and.returnValue($q.when({
          data: fakeData.slice(0, 1),
          meta: {
            currentOffset: 0,
            pageCount: 1,
            totalCount: 1,
            pageSize: 1,
          },
        }));

        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)" row-loader="$ctrl.loadRow($row)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            <oui-datagrid-column property="more"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          loadRows: rowsLoaderSpy,
          loadRow: loadRowSpy,
        });

        const $firstRow = getRow(element, 0);

        expect(loadRowSpy.calls.count()).toEqual(1);

        expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
        expect(getCell($firstRow, 2).children()[0].tagName.toLowerCase()).toBe('oui-skeleton');
      }));

      it('should load data later and display it', inject(($q) => {
        const additionnalDataValue = '+';
        const deferred = $q.defer();
        const loadRowSpy = jasmine.createSpy('loadRow');

        loadRowSpy.and.returnValue(deferred.promise);

        rowsLoaderSpy.and.returnValue($q.when({
          data: fakeData.slice(0, 1),
          meta: {
            currentOffset: 0,
            pageCount: 1,
            totalCount: 1,
            pageSize: 1,
          },
        }));

        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)" row-loader="$ctrl.loadRow($row)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            <oui-datagrid-column property="more"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          loadRows: rowsLoaderSpy,
          loadRow: loadRowSpy,
        });

        deferred.resolve({
          more: additionnalDataValue,
        });

        $rootScope.$digest();

        const $firstRow = getRow(element, 0);

        expect(loadRowSpy.calls.count()).toEqual(1);
        expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
        expect(getCell($firstRow, 2).children().html()).toBe(additionnalDataValue);
      }));

      it('should display rows that can only be contained in a page', inject(($q) => {
        rowsLoaderSpy.and.callFake((config) => $q.when({
          data: fakeData.slice(config.offset - 1, config.pageSize),
          meta: {
            totalCount: config.pageSize - config.offset,
          },
        }));

        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)" page-size="2">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          loadRows: rowsLoaderSpy,
        });

        const rows = getRows(element);

        expect(rows.length).toEqual(2);
      }));

      it('should display rows sorted', () => {
        TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName" sortable="asc"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          loadRows: rowsLoaderSpy,
        });

        expect(rowsLoaderSpy).toHaveBeenCalledWith(jasmine.objectContaining({
          sort: {
            property: 'lastName',
            columnName: 'lastName',
            dir: 1,
          },
        }));
      });

      it('should refresh datagrid', inject(($q) => {
        const element = TestUtils.compileTemplate(`
                        <oui-datagrid
                            id="refreshableDatagrid"
                            rows-loader="$ctrl.loadRows($config)"
                            row-loader="$ctrl.loadRow($row)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            <oui-datagrid-column property="more"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
          loadRows: () => $q.when({
            data: angular.copy(fakeData.slice(0, 1)),
            meta: {
              currentOffset: 0,
              pageCount: 1,
              totalCount: 1,
              pageSize: 1,
            },
          }),
          loadRow: ($row) => ({
            ...$row,
                        more: `More ${1000 * Math.random()}` //eslint-disable-line
          }),
        });

        let row = getRow(element, 0);
        let cell = getCell(row, 2);

        const originalValue = cell.text();

        ouiDatagridService.refresh('refreshableDatagrid');
        element.scope().$digest();

        row = getRow(element, 0);
        cell = getCell(row, 2);
        const newValue = cell.text();

        expect(newValue).not.toEqual(originalValue);
      }));

      describe('Filtering', () => {
        describe('Search text', () => {
          it('should send criteria in rows-loader params', () => {
            const criteria = [{
              property: null, // any property
              operator: 'contains',
              value: 'aaron',
            }];

            const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows-loader="$ctrl.loadRows($config)">
                                    <oui-datagrid-column property="firstName" type="text"></oui-datagrid-column>
                                    <oui-datagrid-column property="lastName"></oui-datagrid-column>
                                </oui-datagrid>
                            `, {
              loadRows: rowsLoaderSpy,
            });

            const tableController = element.controller('ouiDatagrid');
            tableController.onCriteriaChange(criteria);
            element.scope().$apply();

            expect(rowsLoaderSpy).toHaveBeenCalledWith(jasmine.objectContaining({
              criteria,
            }));
          });
        });

        describe('Text', () => {
          it('should filter with contains operator', () => {
            const criteria = [{
              property: 'firstName',
              operator: 'contains',
              value: 'aaron',
            }];

            const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows-loader="$ctrl.loadRows($config)">
                                    <oui-datagrid-column property="firstName" type="text"></oui-datagrid-column>
                                    <oui-datagrid-column property="lastName"></oui-datagrid-column>
                                </oui-datagrid>
                            `, {
              loadRows: rowsLoaderSpy,
            });

            const tableController = element.controller('ouiDatagrid');
            tableController.onCriteriaChange(criteria);
            element.scope().$apply();

            expect(rowsLoaderSpy).toHaveBeenCalledWith(jasmine.objectContaining({
              criteria,
            }));
          });
        });
      });
    });

    describe('Helper popover', () => {
      it('should be present if helper text is provided', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows"
                        columns="$ctrl.columns">
                        <oui-datagrid-column property="firstName" type="text" helper="'Helper text'"></oui-datagrid-column>
                    </oui-datagrid>
                `, {
          columns: columnsData.columns1,
          rows: fakeData.slice(0, 5),
        });

        const helperPopover = element[0].querySelector('.oui-popover-button');
        expect(helperPopover).not.toEqual(null);
      });

      it('should not be present if helper text is not provided', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows"
                        columns="$ctrl.columns">
                        <oui-datagrid-column property="firstName" type="text"></oui-datagrid-column>
                    </oui-datagrid>
                `, {
          columns: columnsData.columns1,
          rows: fakeData.slice(0, 5),
        });

        const helperPopover = element[0].querySelector('.oui-popover-button');
        expect(helperPopover).toEqual(null);
      });
    });

    describe('Dynamic columns', () => {
      it('should update columns list', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows"
                        columns="$ctrl.columns">
                    </oui-datagrid>
                `, {
          columns: columnsData.columns1,
          rows: fakeData.slice(0, 5),
        });

        const scope = element.scope();
        const controller = element.controller('ouiDatagrid');
        expect(controller.columns.length).toEqual(columnsData.columns1.length);

        scope.$ctrl.columns = columnsData.columns2;
        scope.$digest();
        expect(controller.columns.length).toEqual(columnsData.columns2.length);
      });

      it('should only show non hidden columns', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows"
                        columns="[{
                            title: 'First name',
                            property: 'firstName',
                            sortable: 'asc',
                            searchable: true,
                            filterable: true,
                            hidden: $ctrl.hidden
                          },
                          {
                            title: 'Last name',
                            property: 'lastName',
                            sortable: true,
                            searchable: true,
                            filterable: true
                        }]">
                    </oui-datagrid>
                `, {
          hidden: false,
          rows: fakeData.slice(0, 5),
        });

        const scope = element.scope();
        const controller = element.controller('ouiDatagrid');
        expect(controller.columns.length).toEqual(2);

        scope.$ctrl.hidden = true;
        scope.$digest();
        expect(controller.columns.length).toEqual(1);
      });
    });

    describe('Datagrid customization', () => {
      describe('Display', () => {
        it('should not show parameters icon if not enabled', () => {
          const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
            rows: fakeData.slice(0, 5),
          });

          const datagridParameters = getDatagridParameters(element);

          expect(datagridParameters.length).toEqual(0);
        });

        it('should show parameters icon if enabled', () => {
          const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows"
                            customizable>
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
            rows: fakeData.slice(0, 5),
          });

          const datagridParameters = getDatagridParameters(element);
          expect(datagridParameters.length).toEqual(1);
        });

        it('should show parameters icon if enabled and with action-menu', () => {
          const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows"
                            customizable>
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                            <oui-action-menu>
                                <oui-action-menu-item>Action 1</oui-action-menu-item>
                                <oui-action-menu-item>Action 2</oui-action-menu-item>
                            </oui-action-menu>
                        </oui-datagrid>
                    `, {
            rows: fakeData.slice(0, 5),
          });

          const datagridParameters = getDatagridParameters(element);
          expect(datagridParameters.length).toEqual(1);
        });

        it('should only show not hidden columns', () => {
          const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName" hidden></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
            rows: fakeData.slice(0, 5),
          });

          const headers = getHeaderRow(element)[0].querySelectorAll('.oui-datagrid__header');
          expect(headers.length).toEqual(1);
        });

        it('should show visible and hidden columns in parameters', () => {
          const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows"
                            customizable>
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName" hidden></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
            rows: fakeData.slice(0, 5),
          });

          const columnsParameters = getColumnsInDatagridParameters(element);
          expect(columnsParameters.length).toBe(2);
        });

        it('should override base columns with custom columns', () => {
          const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows"
                            columns-parameters="$ctrl.columnsParameters">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName" hidden></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
            rows: fakeData.slice(0, 5),
            columnsParameters: [{
              name: 'firstName',
              hidden: true,
            }, {
              name: 'lastName',
            }],
          });

          const headers = getHeaderRow(element)[0].querySelectorAll('.oui-datagrid__header');
          expect(headers.length).toEqual(1);
        });

        it('should change columns if columns parameters is updated', () => {
          const columnsParameters = [{
            name: 'firstName',
            hidden: true,
          }, {
            name: 'lastName',
          }];
          const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows"
                            columns-parameters="$ctrl.columnsParameters">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName" hidden></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
            rows: fakeData.slice(0, 5),
            columnsParameters,
          });

          let headers = getHeaderRow(element)[0].querySelectorAll('.oui-datagrid__header');
          expect(headers.length).toEqual(1);

          const scope = element.scope();
          const newColumnsParameters = angular.copy(columnsParameters);
          newColumnsParameters[0].hidden = false;
          scope.$ctrl.columnsParameters = newColumnsParameters;
          scope.$digest();

          headers = getHeaderRow(element)[0].querySelectorAll('.oui-datagrid__header');
          expect(headers.length).toEqual(2);
        });
      });

      describe('Events', () => {
        const columns = [{
          name: 'firstName',
        }, {
          name: 'lastName',
        }];

        it('should not call change handler if no id is defined', () => {
          const changeHandler = jasmine.createSpy();
          const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows"
                            customizable
                            on-columns-parameters-change="$ctrl.changeHandler(id, column)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
            rows: fakeData.slice(0, 5),
            changeHandler,
          });

          const controller = element.controller('oui-datagrid');

          const changedColumns = angular.copy(columns);
          changedColumns[0].hidden = true;
          controller.onColumnsChange(changedColumns);

          expect(changeHandler).not.toHaveBeenCalled();
        });

        it('should call change handler', () => {
          const id = 'datagridId';
          const changeHandler = jasmine.createSpy();
          const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows"
                            id="${id}"
                            customizable
                            on-columns-parameters-change="$ctrl.changeHandler(id, columns)">
                            <oui-datagrid-column property="firstName"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        </oui-datagrid>
                    `, {
            rows: fakeData.slice(0, 5),
            changeHandler,
          });

          const controller = element.controller('oui-datagrid');

          const changedColumns = angular.copy(columns);
          changedColumns[0].hidden = true;
          controller.onColumnsChange(changedColumns);

          expect(changeHandler).toHaveBeenCalledWith(id, changedColumns);
        });
      });
    });

    it('should support row data binding inside cell', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName">
                            test: {{ $row.lastName }}
                        </oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $firstRow = getRow(element, 0);

      const actualCellHtml = getCell($firstRow, 1)
        .children()
        .children()
        .html()
        .trim();

      expect(actualCellHtml).toBe(`test: ${fakeData[0].lastName}`);
    });

    it('should support value data binding inside cell', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName">
                            test: {{ $value }}
                        </oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $firstRow = getRow(element, 0);

      const actualCellHtml = getCell($firstRow, 1)
        .children()
        .children()
        .html()
        .trim();

      expect(actualCellHtml).toBe(`test: ${fakeData[0].lastName}`);
    });

    it('should support row index data binding inside cell', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName"></oui-datagrid-column>
                        <oui-datagrid-column property="">
                            test: {{ $rowIndex }}
                        </oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $firstRow = getRow(element, 0);
      expect(
        getCell($firstRow, 1).children().children().html()
          .trim(),
      )
        .toBe('test: 0');

      const $middleRow = getRow(element, 2);
      expect(
        getCell($middleRow, 1).children().children().html()
          .trim(),
      )
        .toBe('test: 2');

      const $lastRow = getRow(element, 4);
      expect(
        getCell($lastRow, 1).children().children().html()
          .trim(),
      )
        .toBe('test: 4');
    });

    it('should support parent binding inside cell', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName">
                            {{ $row.lastName }} + {{ $ctrl.something }}
                        </oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
        something: 'hello world',
      });

      const $firstRow = getRow(element, 0);

      const actualCellHtml = getCell($firstRow, 1)
        .children()
        .children()
        .html()
        .trim();

      expect(actualCellHtml).toBe(`${fakeData[0].lastName} + hello world`);
    });

    it('should support advanced component inside cell', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        <oui-datagrid-column>
                            <oui-action-menu>
                                <oui-action-menu-item>Action 1</oui-action-menu-item>
                                <oui-action-menu-item>Action 2</oui-action-menu-item>
                            </oui-action-menu>
                        </oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $firstRow = getRow(element, 0);
      const $actionCell = getCell($firstRow, 2);

      const actions = $actionCell[0].querySelectorAll('.oui-dropdown-option');

      expect(actions.length).toEqual(2);
    });

    it('should support sortable columns', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName" sortable></oui-datagrid-column>
                        <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        <oui-datagrid-column property="phone" sortable></oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $headerRow = getHeaderRow(element);

      expect(isSortableCell(getHeaderCell($headerRow, 0))).toBe(true);
      expect(isSortableCell(getHeaderCell($headerRow, 1))).toBe(false);
      expect(isSortableCell(getHeaderCell($headerRow, 2))).toBe(true);
    });

    it('should support default sortable column', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName" sortable="asc"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        <oui-datagrid-column property="phone" sortable></oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $headerRow = getHeaderRow(element);

      expect(isSortableCell(getHeaderCell($headerRow, 0))).toBe(true);
      expect(isSortableCell(getHeaderCell($headerRow, 1))).toBe(false);
      expect(isSortableCell(getHeaderCell($headerRow, 2))).toBe(true);

      expect(isSortableAscCell(getHeaderCell($headerRow, 0))).toBe(true);
      expect(isSortableAscCell(getHeaderCell($headerRow, 1))).toBe(false);
      expect(isSortableAscCell(getHeaderCell($headerRow, 2))).toBe(false);

      expect(isSortableDescCell(getHeaderCell($headerRow, 0))).toBe(false);
      expect(isSortableDescCell(getHeaderCell($headerRow, 1))).toBe(false);
      expect(isSortableDescCell(getHeaderCell($headerRow, 2))).toBe(false);
    });

    it('should update sort order on header click', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName" sortable="asc"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        <oui-datagrid-column property="phone" sortable></oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $headerRow = getHeaderRow(element, 0);

      getHeaderCell($headerRow, 0).triggerHandler('click');

      expect(isSortableCell(getHeaderCell($headerRow, 0))).toBe(true);
      expect(isSortableCell(getHeaderCell($headerRow, 1))).toBe(false);
      expect(isSortableCell(getHeaderCell($headerRow, 2))).toBe(true);

      expect(isSortableAscCell(getHeaderCell($headerRow, 0))).toBe(false);
      expect(isSortableAscCell(getHeaderCell($headerRow, 1))).toBe(false);
      expect(isSortableAscCell(getHeaderCell($headerRow, 2))).toBe(false);

      expect(isSortableDescCell(getHeaderCell($headerRow, 0))).toBe(true);
      expect(isSortableDescCell(getHeaderCell($headerRow, 1))).toBe(false);
      expect(isSortableDescCell(getHeaderCell($headerRow, 2))).toBe(false);
    });

    it('should refresh when pagination has changed', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows" page-size="2">
                        <oui-datagrid-column property="firstName"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName"></oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      getNextPagePaginationButton(element).triggerHandler('click');

      const $firstRow = getRow(element, 0);
      const $secondRow = getRow(element, 1);

      expect(getCell($firstRow, 0).children().html()).toBe(fakeData[2].firstName);
      expect(getCell($firstRow, 1).children().html()).toBe(fakeData[2].lastName);

      expect(getCell($secondRow, 0).children().html()).toBe(fakeData[3].firstName);
      expect(getCell($secondRow, 1).children().html()).toBe(fakeData[3].lastName);
    });

    it('should go to the given page', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows" page-size="2" page="2">
                        <oui-datagrid-column property="firstName"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName"></oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $firstRow = getRow(element, 0);
      const $secondRow = getRow(element, 1);

      expect(getCell($firstRow, 0).children().html()).toBe(fakeData[2].firstName);
      expect(getCell($firstRow, 1).children().html()).toBe(fakeData[2].lastName);

      expect(getCell($secondRow, 0).children().html()).toBe(fakeData[3].firstName);
      expect(getCell($secondRow, 1).children().html()).toBe(fakeData[3].lastName);
    });

    it('should execute callback when pagination changes', () => {
      const onPageChangeSpy = jasmine.createSpy('onPaginationChangeSpy');
      const element = TestUtils.compileTemplate(`
            <oui-datagrid rows="$ctrl.rows" page-size="2" on-page-change="$ctrl.onPageChange($pagination)">
                <oui-column property="firstName"></oui-column>
                <oui-column property="lastName"></oui-column>
            </oui-datagrid>
        `, {
        rows: fakeData.slice(0, 5),
        onPageChange: onPageChangeSpy,
      });

      getNextPagePaginationButton(element).triggerHandler('click');

      expect(onPageChangeSpy).toHaveBeenCalled();
    });

    it('should support action-menu as column', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        <oui-action-menu>
                            <oui-action-menu-item>Action 1</oui-action-menu-item>
                            <oui-action-menu-item>Action 2</oui-action-menu-item>
                        </oui-action-menu>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $firstRow = getRow(element, 0);
      const $actionCell = getCell($firstRow, 2);

      expect(getActionMenu($actionCell)).toBeDefined();
    });

    it('should support ng-repeat', () => {
      const firstDatagridSize = 5;
      const secondDatagridSize = 10;
      const multiData = [
        fakeData.slice(0, firstDatagridSize),
        fakeData.slice(0, secondDatagridSize),
      ];

      const element = TestUtils.compileTemplate(`
                    <div>
                        <div ng-repeat="data in $ctrl.multiData track by $index">
                            <oui-datagrid rows="data">
                                <oui-datagrid-column property="firstName"></oui-datagrid-column>
                                <oui-datagrid-column property="lastName"></oui-datagrid-column>
                                <oui-action-menu>
                                    <oui-action-menu-item>Action 1</oui-action-menu-item>
                                    <oui-action-menu-item>Action 2</oui-action-menu-item>
                                </oui-action-menu>
                            </oui-datagrid>
                        </div>
                    </div>
                `, {
        multiData,
      });

      const datagridElements = element.find('oui-datagrid');
      expect(datagridElements.length).toEqual(multiData.length);

      const firstDatagridRows = getRows(angular.element(datagridElements[0]));
      expect(firstDatagridRows.length).toEqual(firstDatagridSize);

      const secondDatagridRows = getRows(angular.element(datagridElements[1]));
      expect(secondDatagridRows.length).toEqual(secondDatagridSize);
    });

    it('should display an extra top content', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName"></oui-datagrid-column>
                        <oui-datagrid-column property="lastName"></oui-datagrid-column>
                        <oui-datagrid-topbar>PLACEHOLDER</oui-datagrid-topbar>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      expect(element.text()).toContain('PLACEHOLDER');
    });

    it('should apply default criteria', () => {
      const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows" criteria="[{'property': 'firstName', 'operator': 'is', 'value': 'Keith'}]">
                        <oui-datagrid-column property="firstName" type="string" filterable></oui-datagrid-column>
                        <oui-datagrid-column property="lastName"></oui-datagrid-column>
                    </oui-datagrid>
                `, {
        rows: fakeData.slice(0, 5),
      });

      const $rows = getRows(element);
      const $firstRow = getRow(element, 0);

      expect(getCell($firstRow, 0).children().html()).toBe(fakeData[2].firstName);
      expect(getCell($firstRow, 1).children().html()).toBe(fakeData[2].lastName);
      expect($rows.length).toBe(1);
    });

    describe('Columns', () => {
      it('should support dataset notation', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-datagrid-column property="firstName"
                                sortable="asc"
                                title="'First name'"></oui-datagrid-column>
                            <oui-datagrid-column property="lastName"
                                sortable
                                title="'Last name'"></oui-datagrid-column>
                            <oui-action-menu>
                                <oui-action-menu-item>Action 1</oui-action-menu-item>
                                <oui-action-menu-item>Action 2</oui-action-menu-item>
                            </oui-action-menu>
                        </oui-datagrid>
                    `, {
          rows: fakeData.slice(0, 5),
        });

        // Check sortable and title
        const $headerRow = getHeaderRow(element);
        expect(getHeaderCell($headerRow, 0).text().trim()).toEqual('First name');
        expect(isSortableAscCell(getHeaderCell($headerRow, 0))).toBe(true);
        expect(getHeaderCell($headerRow, 1).text().trim()).toEqual('Last name');
        expect(isSortableCell(getHeaderCell($headerRow, 1))).toBe(true);

        // Check property
        const firstRow = getRow(element, 0);
        expect(getCell(firstRow, 0).text().trim()).toEqual('Ann');
        expect(getCell(firstRow, 1).text().trim()).toEqual('Cole');
      });

      it('should not accept white spaces as template', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-datagrid-column property="firstName"
                            title="'First name'">
                        </oui-datagrid-column>
                    </oui-datagrid>
                `, {
          rows: fakeData.slice(0, 5),
        });

        // Check that property is still rendered in the cell.
        const firstRow = getRow(element, 0);
        expect(getCell(firstRow, 0).text().trim()).toEqual('Raymond');
      });

      it('should have a footer row with the propety value', () => {
        const footerValue = 'test';
        const element = TestUtils.compileTemplate(`
          <oui-datagrid rows="$ctrl.rows">
            <oui-datagrid-column property="firstName"
              title="'First name'"
              footer="${footerValue}">
            </oui-datagrid-column>
            <oui-datagrid-column property="lastName"
              title="'Last name'">
            </oui-datagrid-column>
          </oui-datagrid>
        `, {
          rows: fakeData.slice(0, 5),
        });

        const footerRow = getFooterRow(element);
        const footerCell = getFooterCell(element, 0);

        expect(footerRow.length).toBe(1);
        expect(footerCell.length).toBe(1);
        expect(footerCell.text().trim()).toBe(footerValue);
      });
    });
  });
});
