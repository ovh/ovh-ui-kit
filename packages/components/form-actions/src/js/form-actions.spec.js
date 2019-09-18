describe('ouiFormActions', () => {
  let testUtils;
  const CANCEL_TEXT = 'CancelTest';
  const SUBMIT_TEXT = 'SubmitTest';

  beforeEach(angular.mock.module('oui.form-actions'));
  beforeEach(angular.mock.module('oui.test-utils'));
  beforeEach(angular.mock.module('test.formActionsConfig'));

  beforeEach(inject((_TestUtils_) => {
    testUtils = _TestUtils_;
  }));

  angular.module('test.formActionsConfig', [
    'oui.form-actions',
  ]).config((ouiFormActionsConfigurationProvider) => {
    ouiFormActionsConfigurationProvider.setTranslations({
      submit: SUBMIT_TEXT,
      cancel: CANCEL_TEXT,
    });
  });

  describe('Provider', () => {
    let ouiFormActions;

    beforeEach(inject((_ouiFormActionsConfiguration_) => {
      ouiFormActions = _ouiFormActionsConfiguration_;
    }));

    it('should have custom translation from provider', () => {
      expect(ouiFormActions.translations.submit).toEqual(SUBMIT_TEXT);
      expect(ouiFormActions.translations.cancel).toEqual(CANCEL_TEXT);
    });
  });

  describe('Component', () => {
    it('should have right button classes', () => {
      const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()">
                </oui-form-actions>`);
      const submitButton = component.find('button').eq(0);
      const cancelButton = component.find('button').eq(1);

      expect(submitButton.hasClass('oui-button_primary')).toBe(true);
      expect(cancelButton.hasClass('oui-button_ghost')).toBe(true);
    });

    it('should display buttons with default text values', () => {
      const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()">
                </oui-form-actions>`);
      const submitButton = component.find('button').eq(0);
      const cancelButton = component.find('button').eq(1);

      expect(submitButton.text().trim()).toBe(SUBMIT_TEXT);
      expect(cancelButton.text().trim()).toBe(CANCEL_TEXT);
    });

    it('should display buttons with custom text values', () => {
      const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()"
                    submit-text="testSubmit"
                    cancel-text="testCancel">
                </oui-form-actions>`);
      const submitButton = component.find('button').eq(0);
      const cancelButton = component.find('button').eq(1);

      expect(submitButton.text().trim()).toBe('testSubmit');
      expect(cancelButton.text().trim()).toBe('testCancel');
    });

    it('should have disabled submit button', () => {
      const component = testUtils.compileTemplate(`
          <oui-form-actions
              on-submit="$ctrl.submit()"
              on-cancel="$ctrl.cancel()"
              disabled>
          </oui-form-actions>`);
      const submitButton = component.find('button').eq(0);

      expect(submitButton.attr('disabled')).toBe('disabled');
    });

    it('should have visible cancel button when action provided', () => {
      const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()"
                    on-cancel="$ctrl.cancel()">
                </oui-form-actions>`);
      const cancelButton = component.find('button').eq(1);

      expect(cancelButton.hasClass('ng-hide')).toBe(false);
    });

    it('should have an hidden cancel button when no action provided', () => {
      const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.submit()">
                </oui-form-actions>`);

      expect(component.find('button').length).toBe(1);
    });

    it('should trigger click on submit button', () => {
      const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.onSubmitTest()"
                    on-cancel="$ctrl.onCancelTest()">
                </oui-form-actions>`, {
        onSubmitTest: jasmine.createSpy('onSubmit'),
      });
      component.find('button').eq(0).triggerHandler('click');

      expect(component.scope().$ctrl.onSubmitTest).toHaveBeenCalled();
    });

    it('should trigger click on cancel button', () => {
      const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.onSubmitTest()"
                    on-cancel="$ctrl.onCancelTest()">
                </oui-form-actions>`, {
        onCancelTest: jasmine.createSpy('onCancel'),
      });
      component.find('button').eq(1).triggerHandler('click');

      expect(component.scope().$ctrl.onCancelTest).toHaveBeenCalled();
    });

    it('should handle link on cancel button', () => {
      const link = '#';
      const component = testUtils.compileTemplate(`
                <oui-form-actions
                    on-submit="$ctrl.onSubmitTest()"
                    href="${link}">
                </oui-form-actions>`);
      const a = component.find('a').eq(0);

      expect(a.attr('href')).toBe(link);
    });
  });
});
