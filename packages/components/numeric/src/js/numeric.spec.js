import '../index';

describe('ouiNumeric', () => {
  let $rootScope;
  let $compile;

  const getDecrementBtn = elt => angular.element(elt.find('button')[0]);
  const getIncrementBtn = elt => angular.element(elt.find('button')[1]);
  const getInput = elt => angular.element(elt.find('input')[0]);

  beforeEach(angular.mock.module('oui.numeric'));

  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  describe('Component', () => {
    it('should display an input with two buttons', () => {
      const elt = angular.element('<oui-numeric model="foo"></oui-numeric>');
      const scope = $rootScope.$new();
      const expectedLength = 2;
      $compile(elt)(scope);
      scope.$digest();
      expect(elt.find('input').length).toBe(1);
      expect(elt.find('button').length).toBe(expectedLength);
    });

    it('should updates model when input changes', () => {
      const elt = angular.element('<oui-numeric model="foo"></oui-numeric>');
      const scope = $rootScope.$new();
      const value = 5;
      $compile(elt)(scope);
      scope.$digest();
      elt.find('input').controller('ngModel').$setViewValue('5');
      expect(scope.foo).toBe(value);
      elt.find('input').controller('ngModel').$setViewValue('1');
      expect(scope.foo).toBe(1);
    });

    it('should display model value in input', () => {
      const elt = angular.element('<oui-numeric model="foo"></oui-numeric>');
      const scope = $rootScope.$new();
      scope.foo = 25;
      $compile(elt)(scope);
      scope.$digest();
      expect(elt.find('input').val()).toBe('25');
      scope.foo = 5;
      scope.$digest();
      expect(elt.find('input').val()).toBe('5');
    });

    it('should not updates model when input is given invalid value', () => {
      const elt = angular.element('<oui-numeric model="foo" min="0" max="5"></oui-numeric>');
      const scope = $rootScope.$new();
      const value1 = 3;
      const value2 = 7;
      $compile(elt)(scope);
      scope.$digest();
      elt.find('input').controller('ngModel').$setViewValue('1');
      expect(scope.foo).toBe(1);
      elt.find('input').controller('ngModel').$setViewValue('hello');
      expect(scope.foo).toBe(1);
      elt.find('input').controller('ngModel').$setViewValue(value1);
      expect(scope.foo).toBe(value1);
      elt.find('input').controller('ngModel').$setViewValue(value2);
      expect(scope.foo).toBe(value1);
    });

    it('should decrement value when clicking first button', () => {
      const elt = angular.element('<oui-numeric model="foo"></oui-numeric>');
      const scope = $rootScope.$new();
      const foo = 10;
      $compile(elt)(scope);
      scope.foo = foo;
      scope.$digest();
      getDecrementBtn(elt).triggerHandler('click');
      expect(scope.foo).toBe(foo - 1);
    });

    it('should increment value when clicking second button', () => {
      const elt = angular.element('<oui-numeric model="foo"></oui-numeric>');
      const scope = $rootScope.$new();
      const foo = 10;
      $compile(elt)(scope);
      scope.foo = foo;
      scope.$digest();
      getIncrementBtn(elt).triggerHandler('click');
      expect(scope.foo).toBe(foo + 1);
    });

    it('should disable left button is value is lower or equal to min', () => {
      const elt = angular.element('<oui-numeric model="foo" min="3"></oui-numeric>');
      const scope = $rootScope.$new();
      $compile(elt)(scope);
      scope.foo = 5;
      scope.$digest();
      expect(getDecrementBtn(elt).attr('disabled')).not.toBeDefined();
      scope.foo = 3;
      scope.$digest();
      expect(getDecrementBtn(elt).attr('disabled')).toBeDefined();
      scope.foo = 1;
      scope.$digest();
      expect(getDecrementBtn(elt).attr('disabled')).toBeDefined();
    });

    it('should disable right button is value is greater or equal to max', () => {
      const elt = angular.element('<oui-numeric model="foo" max="5"></oui-numeric>');
      const scope = $rootScope.$new();
      $compile(elt)(scope);
      scope.foo = 3;
      scope.$digest();
      expect(getIncrementBtn(elt).attr('disabled')).not.toBeDefined();
      scope.foo = 5;
      scope.$digest();
      expect(getIncrementBtn(elt).attr('disabled')).toBeDefined();
      scope.foo = 7;
      scope.$digest();
      expect(getIncrementBtn(elt).attr('disabled')).toBeDefined();
    });

    it('should disable component when disabled attribut exists', () => {
      const elt = angular.element('<oui-numeric model="foo" disabled></oui-numeric>');
      const scope = $rootScope.$new();
      $compile(elt)(scope);
      scope.$digest();
      expect(getInput(elt).attr('disabled')).toBeDefined();
      expect(getDecrementBtn(elt).attr('disabled')).toBeDefined();
      expect(getIncrementBtn(elt).attr('disabled')).toBeDefined();
    });

    it('should disable component when disabled attribut is set', () => {
      const elt = angular.element('<oui-numeric model="foo" disabled="isDisabled"></oui-numeric>');
      const scope = $rootScope.$new();
      $compile(elt)(scope);
      scope.foo = 3;
      scope.isDisabled = true;
      scope.$digest();
      expect(getInput(elt).attr('disabled')).toBeDefined();
      expect(getDecrementBtn(elt).attr('disabled')).toBeDefined();
      expect(getIncrementBtn(elt).attr('disabled')).toBeDefined();
      scope.isDisabled = false;
      scope.$digest();
      expect(getInput(elt).attr('disabled')).not.toBeDefined();
      expect(getDecrementBtn(elt).attr('disabled')).not.toBeDefined();
      expect(getIncrementBtn(elt).attr('disabled')).not.toBeDefined();
    });

    it('should trigger onChange callback when value changes', () => {
      const elt = angular.element('<oui-numeric model="foo" on-change="onChange(modelValue)"></oui-numeric>');
      const scope = $rootScope.$new();
      scope.foo = 5;
      scope.onChange = jasmine.createSpy('onChange');
      $compile(elt)(scope);
      scope.$digest();
      elt.find('input').controller('ngModel').$setViewValue('10');
      const value = 10;
      expect(scope.onChange).toHaveBeenCalledWith(value);
    });

    it('should not trigger onChange callback when value is updated with no changes', () => {
      const elt = angular.element('<oui-numeric model="foo" on-change="onChange(modelValue)"></oui-numeric>');
      const scope = $rootScope.$new();
      scope.foo = 5;
      scope.onChange = jasmine.createSpy('onChange');
      $compile(elt)(scope);
      scope.$digest();
      elt.find('input').controller('ngModel').$setViewValue('5');
      expect(scope.onChange).not.toHaveBeenCalled();
    });
  });
});
