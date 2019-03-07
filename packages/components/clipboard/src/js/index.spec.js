import '@ovh/ui-kit.core/src/js/test-utils';
import './index';

describe('ouiClipboard', () => {
  let $timeout;
  let testUtils;
  let configuration;

  beforeEach(angular.mock.module('oui.clipboard'));
  beforeEach(angular.mock.module('oui.clipboard.configuration'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    testUtils = _TestUtils_;
  }));

  describe('Provider', () => {
    angular.module('oui.clipboard.configuration', [
      'oui.clipboard',
    ]).config((ouiClipboardConfigurationProvider) => {
      ouiClipboardConfigurationProvider.setTranslations({
        foo: 'bar',
      });
    });

    beforeEach(inject((_ouiClipboardConfiguration_) => {
      configuration = _ouiClipboardConfiguration_;
    }));

    it('should have custom options', () => {
      expect(configuration.translations.foo).toEqual('bar');
    });
  });

  describe('Component', () => {
    it('should generate an input with the given text', () => {
      const model = 'foo';
      const element = testUtils.compileTemplate("<oui-clipboard model='$ctrl.model'></oui-clipboard>", {
        model,
      });

      const inputElement = element[0].querySelector('input[type=text]');
      expect(angular.element(inputElement).val()).toMatch(model);
    });

    it('should generate an input with name and id attribute', () => {
      const element = testUtils.compileTemplate("<oui-clipboard id='id' name='name'></oui-clipboard>");
      const inputElement = element[0].querySelector('input[type=text]');

      $timeout.flush();

      expect(angular.element(inputElement).attr('id')).toBe('id');
      expect(angular.element(inputElement).attr('name')).toBe('name');
    });

    it('should have an instance of clipboardjs', () => {
      const model = 'foo';
      const element = testUtils.compileTemplate("<oui-clipboard model='$ctrl.model'></oui-clipboard>", {
        model,
      });
      const $ctrl = element.controller('ouiClipboard');

      expect($ctrl.clipboard).toBeDefined();

      const target = angular.element($ctrl.clipboard.target());
      expect(target.hasClass('oui-clipboard__control')).toBeTruthy();
      expect($ctrl.clipboard.text()).toBe(model);
    });

    it('should update tooltip text when copied on click', () => {
      const model = 'bar';
      const element = testUtils.compileTemplate("<oui-clipboard model='$ctrl.model'></oui-clipboard>", {
        model,
      });
      const btnElement = element[0].querySelector('.oui-clipboard__button');
      const $ctrl = element.controller('ouiClipboard');

      btnElement.click();
      $timeout.flush();

      // Will display the notSupported text because of Karma
      expect($ctrl.tooltipText).toEqual($ctrl.translations.notSupported);
    });

    it('should reset tooltip text', () => {
      const element = testUtils.compileTemplate("<oui-clipboard model='$ctrl.model'></oui-clipboard>", {
        model: 'foo',
      });
      const btnElement = element[0].querySelector('.oui-clipboard__button');
      const $ctrl = element.controller('ouiClipboard');

      // Simulate click
      btnElement.click();
      $timeout.flush();

      // Then reset
      $ctrl.reset();
      $timeout.flush();

      expect($ctrl.tooltipText).toEqual($ctrl.translations.copyToClipboardLabel);
    });
  });
});
