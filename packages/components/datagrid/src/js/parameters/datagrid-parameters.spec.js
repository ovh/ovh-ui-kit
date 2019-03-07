import '@ovh/ui-kit.checkbox';
import '@ovh/ui-kit.dropdown';

import '@ovh/ui-kit.core/src/js/test-utils';
import '../index';

describe('ouiDatagridParameters', () => {
  let $timeout;
  let TestUtils;

  const getColumns = element => element[0].querySelectorAll('.oui-datagrid-parameters__column');
  const getCheckbox = (columnsElements, index) => angular.element(columnsElements[index]).find('input');

  beforeEach(angular.mock.module('oui.datagrid'));
  beforeEach(angular.mock.module('oui.test-utils'));
  beforeEach(angular.mock.module('oui.dropdown'));
  beforeEach(angular.mock.module('oui.checkbox'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    TestUtils = _TestUtils_;
  }));

  describe('Component', () => {
    const columns = [{
      name: 'foo',
      title: 'Foo',
    }, {
      name: 'bar',
      title: 'Bar',
      hidden: true,
    }, {
      name: 'baz',
      title: 'Baz',
    }, {
      name: 'qux',
      title: 'Qux',
      preventCustomization: true,
    }];

    describe('Display', () => {
      let element;

      beforeEach(() => {
        element = TestUtils.compileTemplate(`
                    <oui-datagrid-parameters
                        columns="$ctrl.columns"></oui-datagrid-parameters>
                `, { columns });
      });

      it('should display the component', () => {
        const columnsElements = getColumns(element);

        $timeout.flush();

        expect(element.hasClass('oui-datagrid-parameters')).toBe(true);
        expect(columnsElements.length).toEqual(columns.length);
        expect(angular.element(columnsElements[0]).text()).toContain(columns[0].title);
      });

      it('should display a checked column when visible', () => {
        const columnsElements = getColumns(element);
        const checkedColumn = getCheckbox(columnsElements, 0);
        expect(checkedColumn.prop('checked')).toBe(true);
      });

      it('should display an unchecked column when hidden', () => {
        const columnsElements = getColumns(element);
        const uncheckedColumn = getCheckbox(columnsElements, 1);
        expect(uncheckedColumn.prop('checked')).toBe(false);
      });

      it('should display a disabled checkbox column when customization is prevented', () => {
        const columnsElements = getColumns(element);
        const disabledColumn = getCheckbox(columnsElements, 3);
        expect(disabledColumn.prop('disabled')).toBe(true);
      });
    });

    describe('Events', () => {
      let changeHandler;
      let element;

      beforeEach(() => {
        changeHandler = jasmine.createSpy('change');
        element = TestUtils.compileTemplate(`
                    <oui-datagrid-parameters
                        on-change="$ctrl.changeHandler(columns)"
                        columns="$ctrl.columns"></oui-datagrid-parameters>
                `, {
          columns,
          changeHandler,
        });
      });

      it('should trigger onChange when column is toggled hidden', () => {
        const columnsElements = getColumns(element);
        const $checkbox1 = getCheckbox(columnsElements, 0);
        const $checkbox2 = getCheckbox(columnsElements, 1);
        const $checkbox3 = getCheckbox(columnsElements, 2);
        const expected = angular.copy(columns);
        expected[0].hidden = true;

        $checkbox1.prop('checked', false);
        $checkbox1.triggerHandler('click'); // NG 1.6
        $checkbox1.triggerHandler('change'); // NG 1.7

        // 2nd checkbox should stay unchecked
        expect($checkbox2.prop('checked')).toBe(false);

        // 3rd checkbox should stay checked
        expect($checkbox3.prop('checked')).toBe(true);

        expect(changeHandler).toHaveBeenCalledWith(expected);
      });

      it('should trigger onChange when column is toggled visible', () => {
        const columnsElements = getColumns(element);
        const $checkbox1 = getCheckbox(columnsElements, 0);
        const $checkbox2 = getCheckbox(columnsElements, 1);
        const expected = angular.copy(columns);
        expected[1].hidden = false;

        $checkbox2.prop('checked', true);
        $checkbox2.triggerHandler('click'); // NG 1.6
        $checkbox2.triggerHandler('change'); // NG 1.7

        // 1st checkbox should stay checked
        expect($checkbox1.prop('checked')).toBe(true);
        expect(changeHandler).toHaveBeenCalledWith(expected);
      });
    });
  });
});
