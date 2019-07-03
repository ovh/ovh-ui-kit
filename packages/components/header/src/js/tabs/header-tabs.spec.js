describe('ouiHeaderTabs', () => {
  let TestUtils;
  let $timeout;

  beforeEach(angular.mock.module('oui.header'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$timeout_) => {
    TestUtils = _TestUtils_;
    $timeout = _$timeout_;
  }));

  describe('Component', () => {
    it('should display the header tabs with one item', () => {
      const element = TestUtils.compileTemplate(`
        <oui-header-tabs>
          <oui-header-tabs-item href="/#">Home</oui-header-tabs-item>
        </oui-header-tabs>`);

      $timeout.flush();

      const container = element[0].querySelector('.oui-header-tabs__container');
      const $container = angular.element(container);
      expect($container.children().length).toBe(1);
      expect($container.attr('role')).toBe('list');
    });

    it('should display the header tabs with external link', () => {
      const element = TestUtils.compileTemplate(`
        <oui-header-tabs>
          <oui-header-tabs-item href="/#" external>External</oui-header-tabs-item>
        </oui-header-tabs>`);

      $timeout.flush();

      const item = element[0].querySelector('.oui-header-tabs__item');
      expect(angular.element(item).attr('role')).toBe('listitem');
      const linkItem = item.querySelector('a');
      const $linkItem = angular.element(linkItem);
      expect($linkItem.attr('target')).toBe('_blank');
      expect($linkItem.attr('rel')).toBe('noopener');
      expect(linkItem.querySelector('.oui-icon-external-link')).not.toBeNull();
    });

    it('should display the header tabs with disabled items', () => {
      const element = TestUtils.compileTemplate(`
        <oui-header-tabs>
          <oui-header-tabs-item disabled>Disabled</oui-header-tabs-item>
          <oui-header-tabs-dropdown text="Dropdown">
            <oui-header-tabs-item disabled>Disabled 1</oui-header-tabs-item>
            <oui-header-tabs-item disabled>Disabled 2</oui-header-tabs-item>
          </oui-header-tabs-dropdown>
        </oui-header-tabs>`);

      $timeout.flush();

      const item = element[0].querySelector('.oui-header-tabs__item');
      expect(angular.element(item).hasClass('oui-header-tabs__item_disabled')).toBe(true);
      const trigger = element[0].querySelector('.oui-dropdown__trigger');
      expect(angular.element(trigger).attr('disabled')).toBe('disabled');
      const dropDown = element[0].querySelector('.oui-header-tabs__item_dropdown');
      expect(angular.element(dropDown).hasClass('oui-header-tabs__item_disabled')).toBe(true);
    });

    it('should display the header tabs with active items', () => {
      const element = TestUtils.compileTemplate(`
        <oui-header-tabs>
          <oui-header-tabs-item active>Active</oui-header-tabs-item>
          <oui-header-tabs-dropdown text="Dropdown">
            <oui-header-tabs-item active>Active 1</oui-header-tabs-item>
            <oui-header-tabs-item>Active 2</oui-header-tabs-item>
          </oui-header-tabs-dropdown>
        </oui-header-tabs>`);

      $timeout.flush();

      const item = element[0].querySelector('.oui-header-tabs__item');
      expect(angular.element(item).hasClass('oui-header-tabs__item_active')).toBe(true);
      const dropDown = element[0].querySelector('.oui-header-tabs__item_dropdown');
      expect(angular.element(dropDown).hasClass('oui-header-tabs__item_active')).toBe(true);
    });

    it('should display the header tabs with closed dropdown', () => {
      const element = TestUtils.compileTemplate(`
        <oui-header-tabs>
          <oui-header-tabs-dropdown text="Dropdown">
            <oui-header-tabs-item href="/#">Home</oui-header-tabs-item>
          </oui-header-tabs-dropdown>
        </oui-header-tabs>`);

      $timeout.flush();

      const container = element[0].querySelector('.oui-header-tabs__container');
      expect(angular.element(container).children().length).toBe(1);
      const trigger = container.querySelector('.oui-dropdown__trigger');
      const $trigger = angular.element(trigger);
      expect(angular.element(trigger.querySelector('span')).html()).toBe('Dropdown');
      expect($trigger.attr('aria-expanded')).toBe('false');
    });

    it('should display the header tabs with dropdown with separated items', () => {
      const element = TestUtils.compileTemplate(`
        <oui-header-tabs>
          <oui-header-tabs-dropdown text="Dropdown">
            <oui-header-tabs-item href="/#">Item 1</oui-header-tabs-item>
            <oui-header-tabs-divider></oui-header-tabs-divider>
            <oui-header-tabs-item href="/#">Item 2</oui-header-tabs-item>
          </oui-header-tabs-dropdown>
        </oui-header-tabs>`);

      $timeout.flush();

      const trigger = element[0].querySelector('.oui-dropdown__trigger');
      const $trigger = angular.element(trigger);
      $trigger.triggerHandler('click');
      const dropDownContent = element[0].querySelector('.oui-header-tabs__dropdown-container');
      const separator = dropDownContent.getElementsByTagName('oui-header-tabs-divider')[0];
      const $separator = angular.element(separator);
      expect($separator.hasClass('oui-dropdown-menu__divider')).toBe(true);
      expect($separator.attr('role')).toBe('separator');
    });

    it('should call function of onClick attribute, when header tab item is clicked', () => {
      const clickSpy = jasmine.createSpy('spy');
      const element = TestUtils.compileTemplate(`
        <oui-header-tabs>
          <oui-header-tabs-item text="Tab" href="/#" on-click="$ctrl.clickHandler()"></oui-header-tabs-item>
        </oui-header-tabs>`, {
        clickHandler: clickSpy,
      });

      const item = element[0].querySelector('.oui-header-tabs__item a');
      angular.element(item).triggerHandler('click');
      expect(clickSpy).toHaveBeenCalled();
      expect(clickSpy.calls.count()).toEqual(1);
    });
  });
});
