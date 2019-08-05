describe('ouiStepper', () => {
  let TestUtils;
  let $timeout;

  const rootClass = 'oui-stepper';
  const disabledClass = 'oui-stepper__container_disabled';
  const completeClass = 'oui-stepper__container_complete';

  beforeEach(angular.mock.module('oui.stepper'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$timeout_) => {
    TestUtils = _TestUtils_;
    $timeout = _$timeout_;
  }));

  describe('Component', () => {
    describe('StepForm', () => {
      it('should add a custom name and id to step', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-stepper>
                        <oui-step-form name="formName" id="formId"></oui-step-form>
                    </oui-stepper>`);
        const form = element.find('form').eq(0);

        $timeout.flush();

        expect(form.attr('name')).toBe('formName');
        expect(form.attr('id')).toBe('formId');
      });

      it('should add a header and a description to step', () => {
        const header = 'Header';
        const description = 'Description';
        const element = TestUtils.compileTemplate(`
            <oui-stepper>
              <oui-step-form header="${header}" description="${description}"></oui-step-form>
            </oui-stepper>`);
        const headerTag = angular.element(element[0].querySelector('.oui-stepper__title'));
        const descriptionTag = angular.element(element[0].querySelector('.oui-stepper__description'));

        expect(headerTag.html()).toContain(header);
        expect(descriptionTag.html()).toContain(description);
      });

      it('should display an active step', () => {
        const element = TestUtils.compileTemplate('<oui-stepper><oui-step-form></oui-step-form></oui-stepper>');
        const form = element.find('form').eq(0);

        $timeout.flush();

        expect(form.hasClass(disabledClass)).toBe(false);
        expect(form.hasClass(completeClass)).toBe(false);
      });

      it('should display a disabled step', () => {
        const element = TestUtils.compileTemplate('<oui-stepper><oui-step-form disabled></oui-step-form></oui-stepper>');
        const form = element.find('form').eq(0);

        $timeout.flush();

        expect(form.hasClass(disabledClass)).toBe(true);
        expect(form.hasClass(completeClass)).toBe(false);
      });

      it('should display a editable step', () => {
        let stepForm;
        const element = TestUtils.compileTemplate(`
          <oui-stepper>
              <oui-step-form name='form' on-submit="$ctrl.onSubmitTest(form)"></oui-step-form>
          </oui-stepper>`, {
          onSubmitTest: (form) => {
            stepForm = form;
          },
        });
        const form = element.find('form').eq(0);
        $timeout.flush();

        form.triggerHandler('submit');

        // $submitted is settled to false, fake it by access form directly and set it to true
        stepForm.$submitted = true;
        element.scope().$digest();

        const editLink = angular.element(element[0].querySelector('button.oui-button.oui-button_link'));
        expect(editLink.length).toBe(1);
      });

      it('should display a not-editable step', () => {
        let stepForm;
        const element = TestUtils.compileTemplate(`
          <oui-stepper>
              <oui-step-form name='form' on-submit="$ctrl.onSubmitTest(form)" editable="false"></oui-step-form>
          </oui-stepper>`, {
          onSubmitTest: (form) => {
            stepForm = form;
          },
        });
        const form = element.find('form').eq(0);
        $timeout.flush();

        form.triggerHandler('submit');

        // $submitted is settled to false, fake it by access form directly and set it to true
        stepForm.$submitted = true;
        element.scope().$digest();

        const editLink = angular.element(element[0].querySelector('button.oui-button.oui-button_link'));
        expect(editLink.length).toBe(0);
      });

      it('should display a loader', () => {
        const element = TestUtils.compileTemplate('<oui-stepper><oui-step-form loading></oui-step-form></oui-stepper>');
        $timeout.flush();

        expect(element.html()).toContain('oui-spinner');
      });

      it('should display a skippable step', () => {
        const element = TestUtils.compileTemplate('<oui-stepper><oui-step-form skippable></oui-step-form></oui-stepper>');
        const button = angular.element(element[0].querySelector('.oui-stepper__skippable-link'));

        expect(button.length).toBe(1);
      });

      it('should disable next button when the form is invalid', () => {
        const element = TestUtils.compileTemplate(`
          <oui-stepper>
            <oui-step-form prevent-next>
              <oui-field><input ng-model="$ctrl.model" name="input" type="text" required /></oui-field>
            </oui-step-form>
          </oui-stepper>`);
        $timeout.flush();
        const button = angular.element(element[0].querySelector('button[type="submit"][disabled="disabled"]'));

        expect(button.length).toBe(1);
      });

      it('should disable next button when a custom validation is not fulfilled', () => {
        const element = TestUtils.compileTemplate(`
        <oui-stepper>
          <oui-step-form
            valid="$ctrl.favorite"
            prevent-next>
            <oui-field>
              <input ng-model="$ctrl.model" name="input" type="text" />
            </oui-field>
          </oui-step-form>
        </oui-stepper>`,
        {
          favorite: false,
        });
        $timeout.flush();

        let button = angular.element(element[0].querySelector('button[type="submit"][disabled="disabled"]'));
        expect(button.length).toBe(1);

        element.scope().$ctrl.favorite = true;
        element.scope().$digest();

        button = angular.element(element[0].querySelector('button[type="submit"][disabled="disabled"]'));
        expect(button.length).toBe(0);
      });

      it('should submit a step', () => {
        const onSubmitSpy = jasmine.createSpy();
        const element = TestUtils.compileTemplate(`
                    <oui-stepper>
                        <oui-step-form name='form' on-submit="$ctrl.onSubmitSpy(form)"></oui-step-form>
                    </oui-stepper>`, { onSubmitSpy });
        const form = element.find('form').eq(0);
        $timeout.flush();

        form.triggerHandler('submit');
        expect(onSubmitSpy).toHaveBeenCalled();
      });
    });

    describe('Stepper', () => {
      it('should affects rootClass to stepper', () => {
        const element = TestUtils.compileTemplate('<oui-stepper></oui-stepper>');
        $timeout.flush();

        expect(element.hasClass(rootClass)).toBe(true);
      });

      it('should add a custom name and id to step', () => {
        const element = TestUtils.compileTemplate("<oui-stepper name='stepperName' id='stepperId'></oui-stepper>");
        const div = element.find('div').eq(0);
        $timeout.flush();

        expect(div.attr('name')).toBe('stepperName');
        expect(div.attr('id')).toBe('stepperId');
      });

      it('should call onInit and onFinish', () => {
        const onInit = jasmine.createSpy();
        const onFinish = jasmine.createSpy();
        const element = TestUtils.compileTemplate(`
                    <oui-stepper on-init="$ctrl.onInit()" on-finish="$ctrl.onFinish()">
                        <oui-step-form></oui-step-form>
                    </oui-stepper>`, {
          onInit,
          onFinish,
        });
        $timeout.flush();

        // Initial condition
        expect(onInit).toHaveBeenCalled();
        expect(onFinish).not.toHaveBeenCalled();

        const form = element.find('form').eq(0);
        form.triggerHandler('submit');

        // Final condition
        expect(onFinish).toHaveBeenCalled();
      });

      it('should have a linear behavior', () => {
        const onSubmitSpy = jasmine.createSpy();
        const element = TestUtils.compileTemplate(`
                    <oui-stepper>
                        <oui-step-form name="form1" on-submit="$ctrl.onSubmitSpy(form1)"></oui-step-form>
                        <oui-step-form name="form2" on-submit="$ctrl.onSubmitSpy(form2)"></oui-step-form>
                    </oui-stepper>`, { onSubmitSpy });
        const form1 = element.find('form').eq(0);
        const form2 = element.find('form').eq(1);

        $timeout.flush();

        // Initial condition
        expect(form1.hasClass(disabledClass)).toBe(false);
        expect(form2.hasClass(disabledClass)).toBe(true);

        form1.triggerHandler('submit');

        // Final condition
        expect(form2.hasClass(disabledClass)).toBe(false);
      });

      it('should display dynamically steps', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-stepper>
                        <oui-step-form name="form1"></oui-step-form>
                        <oui-step-form name="form2" data-ng-if="$ctrl.isForm2" data-position="2"></oui-step-form>
                        <oui-step-form name="form3"></oui-step-form>
                    </oui-stepper>`, { isForm2: false });

        $timeout.flush();

        // it should be 2 forms
        expect(element.find('form').length).toBe(2);

        element.scope().$ctrl.isForm2 = true;

        element.scope().$digest();

        // it should be 3 forms
        expect(element.find('form').length).toBe(3);

        const form1 = element.find('form').eq(0);
        const form2 = element.find('form').eq(1);
        const form3 = element.find('form').eq(2);

        // submit the form and be sure that second form is active
        element.find('form').eq(0).triggerHandler('submit');
        element.scope().$digest();
        expect(form1.hasClass(completeClass)).toBe(true);
        expect(form2.hasClass(disabledClass)).toBe(false);
        expect(form3.hasClass(disabledClass)).toBe(true);
      });

      it('should open designated step', () => {
        const element = TestUtils.compileTemplate(`
          <oui-stepper current-index="$ctrl.index">
            <oui-step-form name="form1"></oui-step-form>
            <oui-step-form name="form2"></oui-step-form>
            <oui-step-form name="form3"></oui-step-form>
          </oui-stepper>`, {
          index: 1,
        });

        $timeout.flush();

        const form1 = element.find('form').eq(0);
        const form2 = element.find('form').eq(1);
        const form3 = element.find('form').eq(2);

        expect(form1.scope().$ctrl.stepper.focused).toBe(false);
        expect(form2.scope().$ctrl.stepper.focused).toBe(true);
        expect(form3.scope().$ctrl.stepper.focused).toBe(false);

        element.scope().$ctrl.index = 2;

        element.scope().$digest();

        expect(form1.scope().$ctrl.stepper.focused).toBe(false);
        expect(form2.scope().$ctrl.stepper.focused).toBe(false);
        expect(form3.scope().$ctrl.stepper.focused).toBe(true);
      });
    });
  });
});
