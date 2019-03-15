import '@ovh/ui-kit.core/src/js/test-utils';
import '../index';

describe('ouiGuideMenu', () => {
  let TestUtils;

  beforeEach(angular.mock.module('oui.guide-menu'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_) => {
    TestUtils = _TestUtils_;
  }));

  const getButtonTextEl = element => angular.element(element[0].querySelector('.oui-guide-button__text'));

  describe('Component', () => {
    it('should display a guide menu', () => {
      const text = 'Guides';
      const element = TestUtils.compileTemplate(`
                <oui-guide-menu text="${text}"></oui-guide-menu>`);

      const buttonText = getButtonTextEl(element);
      expect(buttonText.html()).toBe(text);
    });
  });
});
