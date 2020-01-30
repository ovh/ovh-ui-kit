describe('ouiRadio', () => {
  let TestUtils;
  let $rootScope;
  let $timeout;

  beforeEach(angular.mock.module('oui.radio'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$rootScope_, _$timeout_) => {
    TestUtils = _TestUtils_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
  }));

  describe('Component', () => {
    describe('Radio', () => {
      const getRadioInputElement = (element) => element[0].querySelector('input[type=radio]');
      const getRadioLabelElement = (element) => element[0].querySelector('label');
      const getRadioTextContainerElement = (element) => element[0].querySelector('.oui-radio__text');
      const getRadioDescriptionElement = (element) => element[0].querySelector('.oui-radio__description');
      const getRadioFooterElement = (element) => element[0].querySelector('.oui-radio__footer');

      describe('id attribute', () => {
        it('should generate an id for the input and label when undefined', () => {
          const element = TestUtils.compileTemplate('<oui-radio></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('id')).toMatch(/^ouiRadio\d+$/);

          const radioLabelElement = getRadioLabelElement(element);
          expect(angular.element(radioLabelElement).attr('for')).toMatch(/^ouiRadio\d+$/);
        });

        it('should set the id for the input and label when defined', () => {
          const element = TestUtils.compileTemplate('<oui-radio id="test"></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('id')).toBe('test');

          const radioLabelElement = getRadioLabelElement(element);
          expect(angular.element(radioLabelElement).attr('for')).toBe('test');
        });
      });

      describe('name attribute', () => {
        it('should set the name attribute on input when defined', () => {
          const element = TestUtils.compileTemplate('<oui-radio name="test"></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('name')).toBe('test');
        });

        it('should set the name attribute on input when defined with id', () => {
          const element = TestUtils.compileTemplate('<oui-radio name="test" id="testid"></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('name')).toBe('test');
        });

        it('should set the name attribute to id when only id is defined', () => {
          const element = TestUtils.compileTemplate('<oui-radio id="test"></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('name')).toBe('test');
        });
      });

      describe('transclude value', () => {
        it("should display a text inside the radio's text container", () => {
          const element = TestUtils.compileTemplate('<oui-radio>test</oui-radio>');

          const textContainerRadioElement = getRadioTextContainerElement(element);
          expect(angular.element(textContainerRadioElement).html()).toBe('test');
        });
      });

      describe('description attribute', () => {
        it("should display the radio's description container when empty", () => {
          const element = TestUtils.compileTemplate('<oui-radio></oui-radio>');

          const descriptionRadioElement = getRadioDescriptionElement(element);
          expect(angular.element(descriptionRadioElement).length).toBe(0);
        });

        it("should display a text inside the radio's description container", () => {
          const element = TestUtils.compileTemplate('<oui-radio description="test"></oui-radio>');

          const descriptionRadioElement = getRadioDescriptionElement(element);
          expect(angular.element(descriptionRadioElement).html()).toBe('test');
        });
      });

      describe('footer attribute', () => {
        it("should not display the radio's footer container when empty", () => {
          const element = TestUtils.compileTemplate('<oui-radio></oui-radio>');

          const footerRadioElement = getRadioFooterElement(element);
          expect(angular.element(footerRadioElement).length).toBe(0);
        });
        it("should not display the radio's footer container when not empty and not in thumbnail mode", () => {
          const element = TestUtils.compileTemplate('<oui-radio footer="test"></oui-radio>');

          const footerRadioElement = getRadioFooterElement(element);
          expect(angular.element(footerRadioElement).length).toBe(0);
        });

        it("should display a text inside the radio's footer container", () => {
          const element = TestUtils.compileTemplate('<oui-radio footer="test" thumbnail="true"></oui-radio>');

          const footerRadioElement = getRadioFooterElement(element);
          expect(angular.element(footerRadioElement).html()).toBe('test');
        });
      });

      describe('value attribute', () => {
        it("should set the radio's value attribute", () => {
          const element = TestUtils.compileTemplate('<oui-radio value="\'aValue\'"></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).attr('value')).toEqual('aValue');
        });
      });

      describe('disabled attribute', () => {
        it('should display an active radio when no attribute', () => {
          const element = TestUtils.compileTemplate('<oui-radio></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('disabled')).toBe(false);
        });

        it('should display a disabled radio when defined but no value', () => {
          const element = TestUtils.compileTemplate('<oui-radio disabled></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('disabled')).toBe(true);
        });

        it('should display a disabled radio when true', () => {
          const element = TestUtils.compileTemplate('<oui-radio disabled="$ctrl.disabled"></oui-radio>', {
            disabled: true,
          });

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('disabled')).toBe(true);
        });

        it('should display an active radio when false', () => {
          const element = TestUtils.compileTemplate('<oui-radio disabled="$ctrl.notDisabled"></oui-radio>', {
            notDisabled: false,
          });

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('disabled')).toBe(false);
        });
      });

      describe('required attribute', () => {
        it('should display an active radio when no attribute', () => {
          const element = TestUtils.compileTemplate('<oui-radio></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('required')).toBe(false);
        });

        it('should display a required radio when defined but no value', () => {
          const element = TestUtils.compileTemplate('<oui-radio required></oui-radio>');

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('required')).toBe(true);
        });

        it('should display a required radio when true', () => {
          const element = TestUtils.compileTemplate('<oui-radio required="$ctrl.required"></oui-radio>', {
            required: true,
          });

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('required')).toBe(true);
        });

        it('should display an active radio when false', () => {
          const element = TestUtils.compileTemplate('<oui-radio required="$ctrl.notRequired"></oui-radio>', {
            notRequired: false,
          });

          const radioElement = getRadioInputElement(element);
          expect(angular.element(radioElement).prop('required')).toBe(false);
        });
      });

      describe('thumbnail attribute', () => {
        it('should display a classic radio when no attribute', () => {
          const element = TestUtils.compileTemplate('<oui-radio></oui-radio>');

          $timeout.flush();
          expect(angular.element(element).hasClass('oui-radio_thumbnail')).toBe(false);
        });

        it('should display a thumbnail radio when defined but no value', () => {
          const element = TestUtils.compileTemplate('<oui-radio thumbnail></oui-radio>');

          $timeout.flush();
          expect(angular.element(element).hasClass('oui-radio_thumbnail')).toBe(true);
        });

        it('should display a classic radio when false', () => {
          const element = TestUtils.compileTemplate('<oui-radio thumbnail="$ctrl.thumbnail"></oui-radio>', {
            thumbnail: false,
          });

          $timeout.flush();
          expect(angular.element(element).hasClass('oui-radio_thumbnail')).toBe(false);
        });

        it('should display a thumbnail radio when true', () => {
          const element = TestUtils.compileTemplate('<oui-radio thumbnail="$ctrl.thumbnail"></oui-radio>', {
            thumbnail: true,
          });

          $timeout.flush();
          expect(angular.element(element).hasClass('oui-radio_thumbnail')).toBe(true);
        });
      });

      describe('inline attribute', () => {
        it('should display an inline radio', () => {
          const element = TestUtils.compileTemplate('<oui-radio inline></oui-radio>');

          $timeout.flush();
          expect(angular.element(element).hasClass('oui-radio_inline')).toBe(true);
        });
      });

      describe('default value', () => {
        it('should select the default value on loading', () => {
          const onChangeSpy = jasmine.createSpy('onChangeSpy');

          const element = TestUtils.compileTemplate(`
                        <div>
                            <oui-radio name="oui-radio-1"
                                value="'aValue'"
                                model="$ctrl.radioValue"
                                on-change="$ctrl.onChange(modelValue)"></oui-radio>
                            <oui-radio name="oui-radio-1"
                                value="'bValue'"
                                model="$ctrl.radioValue"
                                on-change="$ctrl.onChange(modelValue)"></oui-radio>
                        </div>
                        `, {
            onChange: onChangeSpy,
            radioValue: 'bValue',
          });

          const radioComponent1 = element.children()[0];
          const radioComponent2 = element.children()[1];
          const $radioElement1 = angular.element(radioComponent1).find('input');
          const $radioElement2 = angular.element(radioComponent2).find('input');

          expect($radioElement1.prop('checked')).toEqual(false);
          expect($radioElement2.prop('checked')).toEqual(true);
        });
      });

      describe('on-change attribute', () => {
        it('should trigger callback when the radio is clicked', () => {
          const onChangeSpy = jasmine.createSpy('onChangeSpy');

          const element = TestUtils.compileTemplate(`
                        <div>
                            <oui-radio name="oui-radio-1"
                                value="'aValue'"
                                on-change="$ctrl.onChange(modelValue)"></oui-radio>
                            <oui-radio name="oui-radio-1"
                                value="'bValue'"
                                on-change="$ctrl.onChange(modelValue)"></oui-radio>
                        </div>
                        `, {
            onChange: onChangeSpy,
          });

          const radioComponent1 = element.children()[0];
          const radioComponent2 = element.children()[1];
          const $radioElement1 = angular.element(radioComponent1).find('input');
          const $radioElement2 = angular.element(radioComponent2).find('input');

          $radioElement1.prop('checked', true);
          $radioElement1.triggerHandler('click'); // NG 1.6
          $radioElement1.triggerHandler('change'); // NG 1.7
          $timeout.flush();
          expect(onChangeSpy).toHaveBeenCalledWith('aValue');

          $radioElement1.prop('checked', false);
          $radioElement2.prop('checked', true);
          $radioElement2.triggerHandler('click'); // NG 1.6
          $radioElement2.triggerHandler('change'); // NG 1.7
          $timeout.flush();
          expect(onChangeSpy).toHaveBeenCalledWith('bValue');
        });
      });
    });
  });

  describe('Radio Group', () => {
    const getRadioInputElement = (element) => angular.element(element[0].querySelector('input[type=radio]'));
    const getElementByClass = (element, value) => angular.element(element[0].querySelector(value));
    const getRadioInputElementByValue = (element, value) => angular.element(element[0].querySelector(`input[type=radio][value=${value}]`));
    const getRadioGroupElement = (element) => angular.element(element[0]);
    const clickRadio = (radioToCheck) => {
      radioToCheck.prop('checked', true);
      radioToCheck.triggerHandler('click'); // NG 1.6
      radioToCheck.triggerHandler('change'); // NG 1.7
    };

    describe('attributes', () => {
      it('should assign defined name to child radios when name attribute is defined', () => {
        const name = 'foo';

        const element = TestUtils.compileTemplate(`
                    <oui-radio-group name=${name}>
                        <oui-radio></oui-radio>
                    </oui-radio-group>
            `);

        expect(getRadioInputElement(element).prop('name')).toBe(name);
      });

      it('should assign a generated name to child radios when name attribute is undefined ', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-radio-group>
                        <oui-radio></oui-radio>
                    </oui-radio-group>
                `);

        expect(getRadioInputElement(element).prop('name')).toMatch(/^oui-radio-group-\d+$/);
      });

      it('should add radiogroup role', () => {
        const element = TestUtils.compileTemplate('<oui-radio-group></oui-radio-group>');
        $timeout.flush();

        expect(getRadioGroupElement(element).attr('role')).toEqual('radiogroup');
      });
    });

    describe('classes', () => {
      it('should set radio classes', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-radio-group>
                        <oui-radio></oui-radio>
                    </oui-radio-group>
            `);

        $timeout.flush();
        expect(getElementByClass(element, '.oui-radio').length).toEqual(1);
        expect(getElementByClass(element, '.oui-radio__input').length).toEqual(1);
        expect(getElementByClass(element, '.oui-radio__label-container').length).toEqual(1);
        expect(getElementByClass(element, '.oui-radio__label').length).toEqual(1);
      });
    });

    describe('on radio group model change', () => {
      it('should update child radio models at initialization', () => {
        const defaultRadioValue = 'bValue';
        const otherRadioValue = 'aValue';
        const element = TestUtils.compileTemplate(`
                    <oui-radio-group model="$ctrl.defaultValue">
                        <oui-radio value="'${otherRadioValue}'"></oui-radio>
                        <oui-radio value="'${defaultRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `, {
          defaultValue: defaultRadioValue,
        });

        expect(getRadioInputElementByValue(element, defaultRadioValue).prop('checked')).toEqual(true);
        expect(getRadioInputElementByValue(element, otherRadioValue).prop('checked')).toEqual(false);
      });

      it('should update child radio models after initialization too', () => {
        const defaultRadioValue = 'bValue';
        const newRadioValue = 'aValue';
        const element = TestUtils.compileTemplate(`
                    <oui-radio-group model="$ctrl.defaultValue">
                        <oui-radio value="'${newRadioValue}'"></oui-radio>
                        <oui-radio value="'${defaultRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `, {
          defaultValue: defaultRadioValue,
        });

        TestUtils.getElementController(element).defaultValue = newRadioValue;
        $rootScope.$digest();

        expect(getRadioInputElementByValue(element, newRadioValue).prop('checked')).toEqual(true);
        expect(getRadioInputElementByValue(element, defaultRadioValue).prop('checked')).toEqual(false);
      });
    });

    describe('on child radio click', () => {
      it('should update radio group model', () => {
        const clickedRadioValue = 'bValue';
        const element = TestUtils.compileTemplate(`
                    <oui-radio-group model="$ctrl.model">
                        <oui-radio value="'aValue'"></oui-radio>
                        <oui-radio value="'${clickedRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `);

        clickRadio(getRadioInputElementByValue(element, clickedRadioValue));

        expect(TestUtils.getElementController(element).model).toEqual(clickedRadioValue);
      });

      it('should trigger on change callback', () => {
        const clickedRadioValue = 'bValue';
        const onChangeSpy = jasmine.createSpy('onChangeSpy');
        const element = TestUtils.compileTemplate(`
                    <oui-radio-group on-change="$ctrl.onChange(modelValue)">
                        <oui-radio value="'aValue'"></oui-radio>
                        <oui-radio value="'${clickedRadioValue}'"></oui-radio>
                    </oui-radio-group>
                    `, {
          onChange: onChangeSpy,
        });

        clickRadio(getRadioInputElementByValue(element, clickedRadioValue));
        $timeout.flush();
        expect(onChangeSpy).toHaveBeenCalledWith(clickedRadioValue);
      });
    });
  });

  describe('Radio Toggle Group', () => {
    const getRadioInputElement = (element) => angular.element(element[0].querySelector('input[type=radio]'));
    const getElementByClass = (element, value) => angular.element(element[0].querySelector(value));
    const getRadioInputElementByValue = (element, value) => angular.element(element[0].querySelector(`input[type=radio][value=${value}]`));
    const getRadioGroupElement = (element) => angular.element(element[0]);
    const clickRadio = (radioToCheck) => {
      radioToCheck.prop('checked', true);
      radioToCheck.triggerHandler('click'); // NG 1.6
      radioToCheck.triggerHandler('change'); // NG 1.7
    };

    describe('attributes', () => {
      it('should assign defined name to child radios when name attribute is defined', () => {
        const name = 'foo';

        const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle-group name=${name}>
                        <oui-radio></oui-radio>
                    </oui-radio-toggle-group>
            `);

        expect(getRadioInputElement(element).prop('name')).toBe(name);
      });

      it('should assign a generated name to child radios when name attribute is undefined ', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle-group>
                        <oui-radio></oui-radio>
                    </oui-radio-toggle-group>
                `);

        expect(getRadioInputElement(element).prop('name')).toMatch(/^oui-radio-group-\d+$/);
      });

      it('should add radiogroup role', () => {
        const element = TestUtils.compileTemplate('<oui-radio-toggle-group></oui-radio-toggle-group>');
        $timeout.flush();

        expect(getRadioGroupElement(element).attr('role')).toEqual('radiogroup');
      });
    });

    describe('classes', () => {
      it('should set toggle classes', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle-group>
                        <oui-radio></oui-radio>
                    </oui-radio-toggle-group>
            `);

        $timeout.flush();
        expect(getElementByClass(element, '.oui-radio-toggle').length).toEqual(1);
        expect(getElementByClass(element, '.oui-radio-toggle__input').length).toEqual(1);
        expect(getElementByClass(element, '.oui-radio-toggle__label-container').length).toEqual(1);
        expect(getElementByClass(element, '.oui-radio-toggle__label').length).toEqual(1);
      });
    });

    describe('on radio group model change', () => {
      it('should update child radio models at initialization', () => {
        const defaultRadioValue = 'bValue';
        const otherRadioValue = 'aValue';
        const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle-group model="$ctrl.defaultValue">
                        <oui-radio value="'${otherRadioValue}'"></oui-radio>
                        <oui-radio value="'${defaultRadioValue}'"></oui-radio>
                    </oui-radio-toggle-group>
                    `, {
          defaultValue: defaultRadioValue,
        });

        expect(getRadioInputElementByValue(element, defaultRadioValue).prop('checked')).toEqual(true);
        expect(getRadioInputElementByValue(element, otherRadioValue).prop('checked')).toEqual(false);
      });

      it('should update child radio models after initialization too', () => {
        const defaultRadioValue = 'bValue';
        const newRadioValue = 'aValue';
        const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle-group model="$ctrl.defaultValue">
                        <oui-radio value="'${newRadioValue}'"></oui-radio>
                        <oui-radio value="'${defaultRadioValue}'"></oui-radio>
                    </oui-radio-toggle-group>
                    `, {
          defaultValue: defaultRadioValue,
        });

        TestUtils.getElementController(element).defaultValue = newRadioValue;
        $rootScope.$digest();

        expect(getRadioInputElementByValue(element, newRadioValue).prop('checked')).toEqual(true);
        expect(getRadioInputElementByValue(element, defaultRadioValue).prop('checked')).toEqual(false);
      });
    });

    describe('on child radio click', () => {
      it('should update radio group model', () => {
        const clickedRadioValue = 'bValue';
        const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle-group model="$ctrl.model">
                        <oui-radio value="'aValue'"></oui-radio>
                        <oui-radio value="'${clickedRadioValue}'"></oui-radio>
                    </oui-radio-toggle-group>
                    `);

        clickRadio(getRadioInputElementByValue(element, clickedRadioValue));

        expect(TestUtils.getElementController(element).model).toEqual(clickedRadioValue);
      });

      it('should trigger on change callback', () => {
        const clickedRadioValue = 'bValue';
        const onChangeSpy = jasmine.createSpy('onChangeSpy');
        const element = TestUtils.compileTemplate(`
                    <oui-radio-toggle-group on-change="$ctrl.onChange(modelValue)">
                        <oui-radio value="'aValue'"></oui-radio>
                        <oui-radio value="'${clickedRadioValue}'"></oui-radio>
                    </oui-radio-toggle-group>
                    `, {
          onChange: onChangeSpy,
        });

        clickRadio(getRadioInputElementByValue(element, clickedRadioValue));
        $timeout.flush();
        expect(onChangeSpy).toHaveBeenCalledWith(clickedRadioValue);
      });
    });
  });
});
