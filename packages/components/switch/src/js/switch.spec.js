describe('ouiSwitch', () => {
  let TestUtils;
  let $timeout;

  beforeEach(angular.mock.module('oui.switch'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$timeout_) => {
    TestUtils = _TestUtils_;
    $timeout = _$timeout_;
  }));

  const getSwitchInputElement = (element) => element[0].querySelector('input[type=checkbox]');

  describe('Component', () => {
    describe('input checkbox', () => {
      it('should display a input (checkbox) element', () => {
        const element = TestUtils.compileTemplate('<oui-switch></oui-switch>');
        $timeout.flush();
        expect(getSwitchInputElement(element)).toBeTruthy();
      });
    });

    describe('id attribute', () => {
      it('should generate an id for the input when undefined', () => {
        const element = TestUtils.compileTemplate('<oui-switch></oui-switch>');

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('id')).toMatch(/^ouiSwitch\d+$/);
      });

      it('should set the id for the input when defined', () => {
        const element = TestUtils.compileTemplate('<oui-switch id="test"></oui-switch>');

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('id')).toBe('test');
      });
    });

    describe('name attribute', () => {
      it('should set the name attribute on input when defined', () => {
        const element = TestUtils.compileTemplate('<oui-switch name="test"></oui-switch>');

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('name')).toBe('test');
      });
    });

    describe('tooltip attribute', () => {
      it('should display a disable action tooltip when defined', () => {
        const element = TestUtils.compileTemplate('<oui-switch model="$ctrl.checked" tooltip="Click to enable/disable"></oui-switch>');
        const label = angular.element(element.find('label')[0]);
        expect(label.attr('title')).toBe('Click to enable/disable');
      });
    });

    describe('model attribute', () => {
      it('should display an unchecked switch when no model', () => {
        const element = TestUtils.compileTemplate('<oui-switch></oui-switch>');

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('checked')).toBe(false);
      });

      it('should display a on switch when true', () => {
        const element = TestUtils.compileTemplate('<oui-switch model="$ctrl.checked"></oui-switch>', {
          checked: true,
        });

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('checked')).toBe(true);
      });

      it('should display a an off switch when false', () => {
        const element = TestUtils.compileTemplate('<oui-switch model="$ctrl.checked"></oui-switch>', {
          checked: false,
        });

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('checked')).toBe(false);
      });

      it('should be updated when clicked', () => {
        const element = TestUtils.compileTemplate('<oui-switch model="$ctrl.currentModel"></oui-switch>', {
          currentModel: false,
        });

        $timeout.flush();
        const $ctrl = TestUtils.getElementController(element);
        const checkboxElement = getSwitchInputElement(element);
        const $checkboxElement = angular.element(checkboxElement);
        $checkboxElement.prop('checked', true);
        $checkboxElement.triggerHandler('click'); // NG 1.6
        $checkboxElement.triggerHandler('change'); // NG 1.7
        expect($ctrl.currentModel).toBe(true);
      });
    });

    describe('disabled attribute', () => {
      it('should display an active switch when no attribute', () => {
        const element = TestUtils.compileTemplate('<oui-switch></oui-switch>');

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('disabled')).toBe(false);
      });

      it('should display a disabled switch when defined but no value', () => {
        const element = TestUtils.compileTemplate('<oui-switch disabled></oui-switch>');

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('disabled')).toBe(true);
      });

      it('should display a disabled switch when true', () => {
        const element = TestUtils.compileTemplate('<oui-switch disabled="$ctrl.disabled"></oui-switch>', {
          disabled: true,
        });

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('disabled')).toBe(true);
      });
    });

    describe('on-change attribute', () => {
      it('should trigger callback when the switch is clicked', () => {
        const onChangeSpy = jasmine.createSpy('onChangeSpy');

        const element = TestUtils.compileTemplate('<oui-switch on-change="$ctrl.onChange(modelValue)"></oui-switch>', {
          onChange: onChangeSpy,
        });

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        const $checkboxElement = angular.element(checkboxElement);
        $checkboxElement.prop('checked', true);
        $checkboxElement.triggerHandler('click'); // NG 1.6
        $checkboxElement.triggerHandler('change'); // NG 1.7
        expect(onChangeSpy).toHaveBeenCalledWith(true);
      });
    });

    describe('Validation', () => {
      it('should apply a required validation with the required attribute without value', () => {
        const element = TestUtils.compileTemplate('<oui-switch required></oui-switch>');

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('required')).toBe(true);
      });

      it('should apply a required validation with the required attribute when true', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-switch required="$ctrl.isRequired"></oui-switch>
                    `, {
          isRequired: true,
        });

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('required')).toBe(true);
      });

      it('should not apply a required validation with the required attribute when false', () => {
        const element = TestUtils.compileTemplate(`
                        <oui-switch required="$ctrl.isRequired"></oui-switch>
                    `, {
          isRequired: false,
        });

        $timeout.flush();
        const checkboxElement = getSwitchInputElement(element);
        expect(angular.element(checkboxElement).prop('required')).toBe(false);
      });

      it('should be done if required attribute is defined', () => {
        const element = TestUtils.compileTemplate(`<form name="form">
                        <oui-switch required="$ctrl.isRequired"></oui-switch>
                    </form>
                    `, {
          isRequired: true,
        });

        $timeout.flush();
        const { form } = element.scope();
        const checkboxElement = getSwitchInputElement(element);
        const $checkboxElement = angular.element(checkboxElement);
        expect(form.$valid).toBeFalsy();

        $checkboxElement.prop('checked', true);
        $checkboxElement.triggerHandler('click'); // NG 1.6
        $checkboxElement.triggerHandler('change'); // NG 1.7
        expect(form.$valid).toBeTruthy();
      });
    });
  });
});
