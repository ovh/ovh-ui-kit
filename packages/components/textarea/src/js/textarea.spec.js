describe('ouiTextarea', () => {
  let $sniffer;
  let $timeout;
  let TestUtils;

  const getTextarea = (elm) => elm[0].querySelector('textarea');
  const getFooter = (elm) => elm[0].querySelector('.oui-textarea__footer');

  const errorClass = 'oui-textarea_error';

  beforeEach(angular.mock.module('oui.textarea'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$sniffer_, _$timeout_, _TestUtils_) => {
    $sniffer = _$sniffer_;
    $timeout = _$timeout_;
    TestUtils = _TestUtils_;
  }));

  describe('Component', () => {
    it('should display a textarea', () => {
      const id = 'text-1';
      const name = 'text-name-1';

      const element = TestUtils.compileTemplate(`
                <oui-textarea
                    id="${id}"
                    name="${name}"></oui-textarea>
            `);

      const textarea = getTextarea(element);

      expect(textarea).toBeDefined();
      expect(textarea.getAttribute('id')).toEqual(id);
      expect(textarea.getAttribute('name')).toEqual(name);

      expect(getFooter(element)).toBe(null);
    });

    it('should remove root attributes', () => {
      const element = TestUtils.compileTemplate(`
                <oui-textarea
                    id="text-1"
                    name="text-1"></oui-textarea>
            `);

      $timeout.flush();
      expect(element.attr('id')).toBeUndefined();
      expect(element.attr('name')).toBeUndefined();
    });

    it('should show the model as value', () => {
      const model = 'Lorem Gibson';
      const element = TestUtils.compileTemplate(`
                <oui-textarea model="$ctrl.model"></oui-textarea>
            `, {
        model,
      });

      const textarea = getTextarea(element);
      expect(textarea.value).toEqual(model);
    });

    it('should show the placeholder', () => {
      const placeholder = 'Set the text here';
      const element = TestUtils.compileTemplate(`
                <oui-textarea
                    placeholder="${placeholder}"></oui-textarea>
            `);

      const textarea = getTextarea(element);
      expect(textarea.getAttribute('placeholder')).toEqual(placeholder);
    });

    it('should set the rows value on textarea', () => {
      const rows = '7';
      const element = TestUtils.compileTemplate(`
                <oui-textarea
                    rows="${rows}"></oui-textarea>
            `);

      const textarea = getTextarea(element);
      expect(textarea.getAttribute('rows')).toEqual(rows);
    });

    describe('Disabled state', () => {
      it('should be disabled without provided value', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea disabled></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        expect($textarea.prop('disabled')).toBeTruthy();
      });

      it('should be disabled with the binding set to true', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea disabled="true"></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        expect($textarea.prop('disabled')).toBeTruthy();
      });

      it('should not be disabled with the binding set to false', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea disabled="false"></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        expect($textarea.prop('disabled')).toBeFalsy();
      });

      it('should switch the disabled state on the component', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea disabled="$ctrl.disabled"></oui-textarea>
                `, {
          disabled: false,
        });
        const $scope = element.scope();
        const $textarea = angular.element(getTextarea(element));

        $timeout.flush();

        expect($textarea.prop('disabled')).toBeFalsy();

        $scope.$ctrl.disabled = true;

        // Trigger $onChanges
        $scope.$apply();

        expect($textarea.prop('disabled')).toBeTruthy();
      });
    });

    describe('Readonly state', () => {
      it('should be readonly without provider value', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea readonly></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        expect($textarea.prop('readonly')).toBeTruthy();
      });

      it('should be readonly with the binding set to true', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea readonly="true"></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        expect($textarea.prop('readonly')).toBeTruthy();
      });

      it('should not be readonly with the binding set to false', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea readonly="false"></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        expect($textarea.prop('readonly')).toBeFalsy();
      });

      it('should switch the readonly state on the component', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea readonly="$ctrl.readonly"></oui-textarea>
                `, {
          readonly: false,
        });
        const $scope = element.scope();
        const $textarea = angular.element(getTextarea(element));

        $timeout.flush();

        expect($textarea.prop('readonly')).toBeFalsy();

        $scope.$ctrl.readonly = true;

        // Trigger $onChanges
        $scope.$apply();

        expect($textarea.prop('readonly')).toBeTruthy();
      });
    });

    describe('Text length', () => {
      it('should set minlength on textarea', () => {
        const minlength = 12;
        const minlength2 = 24;
        const element = TestUtils.compileTemplate(`
                    <oui-textarea minlength="$ctrl.minlength"></oui-textarea>
                `, {
          minlength,
        });

        const textarea = getTextarea(element);
        expect(parseInt(textarea.getAttribute('ng-minlength'), 10)).toBe(minlength);

        // Change minlength
        const $scope = element.scope();
        $scope.$ctrl.minlength = minlength2;
        $scope.$apply();
        expect(parseInt(textarea.getAttribute('ng-minlength'), 10)).toBe(minlength2);
      });

      it('should set maxlength on textarea', () => {
        const maxlength = 12;
        const maxlength2 = 24;
        const element = TestUtils.compileTemplate(`
                    <oui-textarea maxlength="$ctrl.maxlength"></oui-textarea>
                `, {
          maxlength,
        });

        const textarea = getTextarea(element);
        expect(parseInt(textarea.getAttribute('ng-maxlength'), 10)).toBe(maxlength);

        // Change maxlength
        const $scope = element.scope();
        $scope.$ctrl.maxlength = maxlength2;
        $scope.$apply();
        expect(parseInt(textarea.getAttribute('ng-maxlength'), 10)).toBe(maxlength2);
      });

      it('should add error class when length > maxlength', () => {
        const validValue = 'aaa';
        const invalidValue = 'aaaa';
        const maxlength = 3;
        const element = TestUtils.compileTemplate(`
                    <oui-textarea maxlength="${maxlength}"></oui-textarea>
                `);
        const $textarea = angular.element(getTextarea(element));

        $timeout.flush();

        $textarea.val(validValue);
        $textarea.triggerHandler($sniffer.hasEvent('input') ? 'input' : 'change');
        expect($textarea.hasClass(errorClass)).toBeFalsy();

        $textarea.val(invalidValue);
        $textarea.triggerHandler($sniffer.hasEvent('input') ? 'input' : 'change');
        expect($textarea.hasClass(errorClass)).toBeTruthy();
      });
    });

    describe('Footer', () => {
      it('should show the number of characters in the textarea', () => {
        const maxlength = 12;
        const value = 'theValue';
        const element = TestUtils.compileTemplate(`
                    <oui-textarea maxlength="${maxlength}"></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        const footer = getFooter(element);

        // $postLink must entierly executed to make the controller get the textarea reference.
        $timeout.flush();

        expect(footer.innerHTML.trim()).toContain(`0/${maxlength}`);

        // Type some chars in textrea...
        $textarea.val(value);
        $textarea.triggerHandler($sniffer.hasEvent('input') ? 'input' : 'change');

        expect(footer.innerHTML.trim()).toContain(`${value.length}/${maxlength}`);
      });
    });

    describe('Required', () => {
      it('should be required without provider value', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea required></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        expect($textarea.prop('required')).toBeTruthy();
      });

      it('should be required with the binding set to true', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea required="true"></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        expect($textarea.prop('required')).toBeTruthy();
      });

      it('should not be required with the binding set to false', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-textarea required="false"></oui-textarea>
                `);

        const $textarea = angular.element(getTextarea(element));
        expect($textarea.prop('required')).toBeFalsy();
      });
    });

    describe('Inline', () => {
      it('should have inline classname', () => {
        const element = TestUtils.compileTemplate(`
          <oui-textarea inline></oui-textarea>
        `);

        $timeout.flush();

        expect(element.hasClass('oui-textarea__wrapper_inline')).toBeTruthy();
      });
    });

    describe('onChange', () => {
      it('should be required without provider value', () => {
        const newValue = 'new value';
        const changeSpy = jasmine.createSpy('changeSpy');
        const element = TestUtils.compileTemplate(`
                    <oui-textarea on-change="$ctrl.changeSpy(modelValue)"></oui-textarea>
                `, {
          changeSpy,
        });

        const $textarea = angular.element(getTextarea(element));
        $textarea.val(newValue);
        $textarea.triggerHandler($sniffer.hasEvent('input') ? 'input' : 'change');

        expect(changeSpy).toHaveBeenCalledWith(newValue);
      });
    });
  });
});
