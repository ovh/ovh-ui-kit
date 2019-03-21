import '@ovh/ui-kit.test/src/test-utils';
import '../index';

describe('ouiPageHeader', () => {
  let TestUtils;

  beforeEach(angular.mock.module('oui.header'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_) => {
    TestUtils = _TestUtils_;
  }));

  function getTitleElement(element) {
    return element[0].querySelector('.oui-header__title');
  }

  function getDescriptionElement(element) {
    return element[0].querySelector('.oui-header__description');
  }

  describe('Component', () => {
    it('should display header with title only', () => {
      const element = TestUtils.compileTemplate('<oui-header heading="title"></oui-header>');

      const titleElement = getTitleElement(element);
      expect(angular.element(titleElement).html()).toBe('title');
    });

    it('should display header with title and subtitle', () => {
      const element = TestUtils.compileTemplate('<oui-header heading="title" description="subtitle"></oui-header>');

      const titleElement = getTitleElement(element);
      const subtitleElement = getDescriptionElement(element);
      expect(angular.element(titleElement).html()).toBe('title');
      expect(angular.element(subtitleElement).html()).toBe('subtitle');
    });
  });
});
