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

  function getText(element) {
    return angular.element(element).text().trim();
  }

  function getDescriptionElement(element) {
    return element[0].querySelector('.oui-header__description');
  }

  describe('Component', () => {
    it('should display header with title only', () => {
      const element = TestUtils.compileTemplate('<oui-header heading="title"></oui-header>');

      const titleElement = getTitleElement(element);
      expect(getText(titleElement)).toBe('title');
    });

    it('should display header with custom slot', () => {
      const element = TestUtils.compileTemplate(`
        <oui-header>
          <oui-header-heading>title using slot</oui-header-heading>
        </oui-header>
      `);

      const titleElement = getTitleElement(element);
      expect(getText(titleElement)).toBe('title using slot');
    });

    it('should display header with title and subtitle', () => {
      const element = TestUtils.compileTemplate('<oui-header heading="title" description="subtitle"></oui-header>');

      const titleElement = getTitleElement(element);
      const subtitleElement = getDescriptionElement(element);
      expect(getText(titleElement)).toBe('title');
      expect(getText(subtitleElement)).toBe('subtitle');
    });
  });
});
