describe('ouiSkeleton', () => {
  let TestUtils;
  let $timeout;

  beforeEach(angular.mock.module('oui.skeleton'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$timeout_) => {
    TestUtils = _TestUtils_;
    $timeout = _$timeout_;
  }));

  describe('Component', () => {
    it('should display a oui-skeleton', () => {
      const element = TestUtils.compileTemplate('<oui-skeleton></oui-skeleton');
      expect(element).toBeTruthy();
    });

    it('should display a oui skeleton div', () => {
      const element = TestUtils.compileTemplate('<oui-skeleton size="m"></oui-skeleton');

      $timeout.flush();
      expect(element.hasClass('oui-skeleton_m')).toBeTruthy();
    });

    it('should display a oui skeleton div with a randomized width', () => {
      const element = TestUtils.compileTemplate('<oui-skeleton randomized></oui-skeleton');

      $timeout.flush();
      expect(!!element.css('width')).toBeTruthy();
    });
  });
});
