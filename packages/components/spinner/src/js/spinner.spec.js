describe('ouiSpinner', () => {
  let TestUtils;

  beforeEach(angular.mock.module('oui.spinner'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_) => {
    TestUtils = _TestUtils_;
  }));

  describe('Component', () => {
    it('should have a medium size by default', () => {
      const element = TestUtils.compileTemplate('<oui-spinner></oui-spinner>');

      expect(element.hasClass('oui-spinner_m')).toBe(true);
    });

    it('should have a small size', () => {
      const element = TestUtils.compileTemplate('<oui-spinner size="s"></oui-spinner>');

      expect(element.hasClass('oui-spinner_s')).toBe(true);
    });

    it('should have a medium size', () => {
      const element = TestUtils.compileTemplate('<oui-spinner size="m"></oui-spinner>');

      expect(element.hasClass('oui-spinner_m')).toBe(true);
    });

    it('should have a large size', () => {
      const element = TestUtils.compileTemplate('<oui-spinner size="l"></oui-spinner>');

      expect(element.hasClass('oui-spinner_l')).toBe(true);
    });
  });
});
