import '@ovh/ui-kit.test/src/test-utils';
import '../index';

describe('ouiModal', () => {
  let TestUtils;

  const getModal = element => angular.element(element[0].querySelector('.oui-modal'));
  const getBody = element => angular.element(element[0].querySelector('.oui-modal__body'));
  const getTitle = element => angular.element(element[0].querySelector('.oui-modal__title'));
  const getFooter = element => angular.element(element[0].querySelector('.oui-modal__footer'));
  const getPrimaryButton = element => angular.element(element[0].querySelector('.oui-button_primary'));
  const getSecondaryButton = element => angular.element(element[0].querySelector('.oui-button_secondary'));
  const getDismissButton = element => angular.element(element[0].querySelector('.oui-modal__header .oui-icon'));

  const title = 'Modal title';
  const body = 'This is the modal content';
  const primaryLabel = 'Save';
  const secondaryLabel = 'Cancel';

  beforeEach(angular.mock.module('oui.modal'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_) => {
    TestUtils = _TestUtils_;
  }));

  describe('Component', () => {
    it('should display a modal', () => {
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Modal title">
                </oui-modal>
            `);

      expect(getModal(element)).toBeDefined();
    });

    it('should display a title', () => {
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="{{$ctrl.title}}">
                </oui-modal>
            `, {
        title,
      });

      const $title = getTitle(element);

      expect($title).toBeDefined();
      expect($title.html()).toContain(title);
    });

    it('should display a content', () => {
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title">
                    {{::$ctrl.body}}
                </oui-modal>
            `, {
        body,
      });

      const $body = getBody(element);

      expect($body).toBeDefined();
      expect($body.html()).toContain(body);
    });

    it('should display a footer', () => {
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title">
                </oui-modal>
            `);

      const $footer = getFooter(element);

      expect($footer).toBeDefined();
    });

    it('should display primary button in the footer', () => {
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title"
                    primary-label="{{::$ctrl.primaryLabel}}">
                </oui-modal>
            `, {
        primaryLabel,
      });

      const $footer = getFooter(element);
      const $primaryButton = getPrimaryButton($footer);

      expect($primaryButton).toBeDefined();
      expect($primaryButton.html()).toContain(primaryLabel);
    });

    it('should trigger primary action action', () => {
      const primarySpy = jasmine.createSpy('primaryClick');
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title"
                    primary-label="Save"
                    primary-action="$ctrl.primarySpy()">
                </oui-modal>
            `, {
        primarySpy,
      });

      getPrimaryButton(element).triggerHandler('click');
      expect(primarySpy).toHaveBeenCalled();
    });

    it('should display secondary button in the footer', () => {
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title"
                    secondary-label="{{::$ctrl.secondaryLabel}}">
                </oui-modal>
            `, {
        secondaryLabel,
      });

      const $footer = getFooter(element);
      const $secondaryButton = getSecondaryButton($footer);

      expect($secondaryButton).toBeDefined();
      expect($secondaryButton.html()).toContain(secondaryLabel);
    });

    it('should display an overlay when loading', () => {
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title"
                    loading="true">
                </oui-modal>
            `);

      const $body = getBody(element);

      expect($body.html()).toContain('oui-modal__loader');
      expect($body.html()).toContain('oui-spinner');
    });

    it('should display a warning modal', () => {
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title"
                    loading="true"
                    type="warning">
                </oui-modal>
            `);

      const $body = getBody(element);

      expect($body.html()).not.toContain('oui-modal__body_no-icon');
      expect($body.html()).toContain('oui-icon-warning_circle');
    });

    it('should disable buttons when loading', () => {
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title"
                    primary-label="{{::$ctrl.primaryLabel}}"
                    secondary-label="{{::$ctrl.secondaryLabel}}"
                    loading="true">
                </oui-modal>
            `, {
        primaryLabel,
        secondaryLabel,
      });

      const $footer = getFooter(element);
      const $primaryButton = getPrimaryButton($footer);
      const $secondaryButton = getSecondaryButton($footer);

      expect($primaryButton).toBeDefined();
      expect($primaryButton.attr('disabled')).toBe('disabled');
      expect($secondaryButton).toBeDefined();
      expect($secondaryButton.attr('disabled')).toBe('disabled');
    });

    it('should disable buttons when the conditions are met', () => {
      const primaryDisabled = true;
      const secondaryDisabled = true;

      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title"
                    primary-label="{{::$ctrl.primaryLabel}}"
                    primary-disabled="$ctrl.primaryDisabled"
                    secondary-label="{{::$ctrl.secondaryLabel}}"
                    secondary-disabled="$ctrl.secondaryDisabled">
                </oui-modal>
            `, {
        primaryLabel,
        secondaryLabel,
        primaryDisabled,
        secondaryDisabled,
      });

      const $footer = getFooter(element);
      const $primaryButton = getPrimaryButton($footer);
      const $secondaryButton = getSecondaryButton($footer);

      expect($primaryButton).toBeDefined();
      expect($primaryButton.attr('disabled')).toBe('disabled');
      expect($secondaryButton).toBeDefined();
      expect($secondaryButton.attr('disabled')).toBe('disabled');
    });

    it('should trigger secondary action', () => {
      const secondarySpy = jasmine.createSpy('secondaryClick');
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title"
                    secondary-label="Save"
                    secondary-action="$ctrl.secondarySpy()">
                </oui-modal>
            `, {
        secondarySpy,
      });

      getSecondaryButton(element).triggerHandler('click');
      expect(secondarySpy).toHaveBeenCalled();
    });

    it('should trigger on-dismiss action', () => {
      const dismissSpy = jasmine.createSpy('dismiss');
      const element = TestUtils.compileTemplate(`
                <oui-modal
                    heading="Title"
                    on-dismiss="$ctrl.dismissSpy()">
                </oui-modal>
            `, {
        dismissSpy,
      });

      getDismissButton(element).triggerHandler('click');
      expect(dismissSpy).toHaveBeenCalled();
    });
  });
});
