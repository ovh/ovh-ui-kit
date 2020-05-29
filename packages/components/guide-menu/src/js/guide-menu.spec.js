describe('ouiGuideMenu', () => {
  let TestUtils;

  beforeEach(angular.mock.module('oui.guide-menu'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_) => {
    TestUtils = _TestUtils_;
  }));

  const getButtonTextEl = (element) => angular.element(element[0].querySelector('.oui-dropdown__trigger'));

  describe('Component', () => {
    it('should display a guide menu', () => {
      const text = 'Guides';
      const element = TestUtils.compileTemplate(`
                <oui-guide-menu text="${text}"></oui-guide-menu>`);

      const buttonText = getButtonTextEl(element);
      expect(buttonText.text().trim()).toBe(text);
    });
  });
});
