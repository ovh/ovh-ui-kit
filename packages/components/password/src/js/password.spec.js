import '@ovh/ui-kit.test/src/test-utils';
import '../index';

describe('ouiPassword', () => {
  let $timeout;
  let TestUtils;

  const getInput = element => angular.element(element[0].querySelector('.oui-password__input'));
  const getStrengthMeter = element => angular.element(element[0].querySelector('.oui-progress'));
  const getVisibilityButton = element => angular.element(element[0].querySelector('.oui-password__visibility'));

  beforeEach(angular.mock.module('oui.password'));
  beforeEach(angular.mock.module('oui.password.configuration'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    TestUtils = _TestUtils_;
  }));

  describe('Provider', () => {
    let configuration;
    const foo = { foo: 'bar' };

    angular.module('oui.password.configuration', [
      'oui.password',
    ]).config((ouiPasswordConfigurationProvider) => {
      ouiPasswordConfigurationProvider.setTranslations(foo);
    });

    beforeEach(inject((_ouiPasswordConfiguration_) => {
      configuration = _ouiPasswordConfiguration_;
    }));

    it('should have custom translations', () => {
      expect(configuration.translations.foo).toEqual('bar');
    });
  });

  describe('Component', () => {
    describe('Basic', () => {
      let element;
      let input;
      let controller;

      beforeEach(() => {
        element = TestUtils.compileTemplate('<oui-password id="foo" name="bar" model="$ctrl.model" disabled></oui-password>');

        $timeout.flush();

        controller = element.controller('ouiPassword');
        input = getInput(element);
      });

      it('should have a default classname, id and name', () => {
        expect(element.hasClass('oui-password')).toBeTruthy();
      });

      it('should move id and name on input', () => {
        expect(element.attr('id')).toBeUndefined();
        expect(element.attr('name')).toBeUndefined();

        expect(input.attr('id')).toBe('foo');
        expect(input.attr('name')).toBe('bar');
      });

      it('should switch between input password and text', () => {
        const button = getVisibilityButton(element);

        expect(input.attr('type')).toBe('password');
        button.triggerHandler('click');
        expect(input.attr('type')).toBe('text');
        button.triggerHandler('click');
        expect(input.attr('type')).toBe('password');
      });

      it('should have disabled input', () => {
        expect(input.attr('disabled')).toBeDefined();

        controller.disabled = false;
        element.scope().$digest();
        expect(input.attr('disabled')).toBeUndefined();

        controller.disabled = true;
        element.scope().$digest();
        expect(input.attr('disabled')).toBeDefined();
      });
    });

    describe('Validation', () => {
      let form;
      let element;
      let controller;
      let input;

      beforeEach(() => {
        form = TestUtils.compileTemplate(`
                <form name="form">
                    <oui-password id="foo" name="bar"
                        model="$ctrl.model"
                        minlength="4"
                        maxlength="16"
                        pattern="^[a-zA-Z0-9]+$"
                        required>
                    </oui-password>
                </form>`);

        $timeout.flush();

        element = form.find('oui-password');
        controller = element.controller('ouiPassword');
        input = getInput(element);
      });

      it("should get an error 'minlength'", () => {
        input.val('foo');
        input.triggerHandler('input');

        expect(controller.form.$error).toBeTruthy();
        expect(controller.form.$error.minlength).toBeTruthy();
      });

      it("should get an error 'maxlength'", () => {
        input.val('valueoversixteencharacters');
        input.triggerHandler('input');

        expect(controller.form.$error).toBeTruthy();
        expect(controller.form.$error.maxlength).toBeTruthy();
      });

      it("should return error 'pattern'", () => {
        input.val('!&()$');
        input.triggerHandler('input');

        expect(controller.form.$error).toBeTruthy();
        expect(controller.form.$error.pattern).toBeTruthy();
      });

      it("should return error 'required'", () => {
        form.triggerHandler('submit');

        expect(controller.form.$error).toBeTruthy();
        expect(controller.form.$error.required).toBeTruthy();
      });
    });

    describe('Strength', () => {
      const compileStrength = score => TestUtils.compileTemplate(`
            <oui-password id="foo" name="bar" model="$ctrl.model">
                <oui-password-strength score="$ctrl.score"></oui-password-strength>
            </oui-password>`, {
        score,
      });

      it('should have a default classname', () => {
        const element = compileStrength();
        $timeout.flush();

        const strength = element.find('oui-password-strength');
        expect(strength.hasClass('oui-password-strength')).toBeTruthy();

        const meter = getStrengthMeter(element);
        expect(meter.hasClass('oui-progress_error')).toBeTruthy();
      });

      it('should have bad score', () => {
        const element = compileStrength(1);
        const meter = getStrengthMeter(element);
        expect(meter.hasClass('oui-progress_error')).toBeTruthy();
      });

      it('should have weak score', () => {
        const element = compileStrength(2);
        const meter = getStrengthMeter(element);
        expect(meter.hasClass('oui-progress_warning')).toBeTruthy();
      });

      it('should have good score', () => {
        const element = compileStrength(3);
        const meter = getStrengthMeter(element);
        expect(meter.hasClass('oui-progress_success')).toBeTruthy();
      });

      it('should have strong score', () => {
        const element = compileStrength(4);
        const meter = getStrengthMeter(element);
        expect(meter.hasClass('oui-progress_success')).toBeTruthy();
      });
    });

    describe('Rule', () => {
      let form;
      let element;
      let controller;
      let input;

      beforeEach(() => {
        form = TestUtils.compileTemplate(`
                <form name="form">
                    <oui-password id="foo" name="bar" model="$ctrl.model">
                        <oui-password-rule validator="$ctrl.checkPasswordLength(modelValue)">
                            Must contain between 8 and 30 characters
                        </oui-password-rule>
                        <oui-password-rule pattern="[0-9]+">
                            Have at least one number
                        </oui-password-rule>
                        <oui-password-rule pattern="[A-Z]+">
                            Have at least capital letter
                        </oui-password-rule>
                    </oui-password>
                </form>`, {
          checkPasswordLength: (password) => {
            const minLength = 8;
            const maxLength = 30;
            return angular.isString(password)
              && password.length >= minLength
              && password.length <= maxLength;
          },
        });

        $timeout.flush();

        element = form.find('oui-password');
        controller = element.controller('ouiPassword');
        input = getInput(element);
      });

      it('should have a default classname', () => {
        expect(element.find('oui-password-rule').hasClass('oui-password-rule')).toBeTruthy();
      });

      it("should return error 'password' for invalid rules", () => {
        const invalidRules = 3;
        input.val('foo');
        input.triggerHandler('input');

        expect(controller.valid).toBeFalsy();
        expect(Object.keys(controller.errors).length).toBe(invalidRules);
        expect(controller.form.$error).toBeTruthy();
        expect(controller.form.$error.password).toBeTruthy();
        expect(controller.form.$invalid).toBeTruthy();
      });

      it("should return error 'password' for invalid rules", () => {
        const invalidRules = 0;
        input.val('F0azeruiop');
        input.triggerHandler('input');

        expect(controller.valid).toBeTruthy();
        expect(Object.keys(controller.errors).length).toBe(invalidRules);
        expect(controller.form.$valid).toBeTruthy();
      });
    });
  });
});
