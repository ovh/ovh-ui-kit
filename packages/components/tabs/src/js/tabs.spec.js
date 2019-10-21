describe('ouiTabs', () => {
  let TestUtils;
  let $timeout;

  beforeEach(angular.mock.module('oui.tabs'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$timeout_) => {
    TestUtils = _TestUtils_;
    $timeout = _$timeout_;
  }));

  describe('Components', () => {
    it('should add default classname', () => {
      const element = TestUtils.compileTemplate(`
        <oui-tabs>
          <oui-tabs-item></oui-tabs-item>
        </oui-tabs>
      `);

      $timeout.flush();

      expect(element.hasClass('oui-tabs')).toBeTruthy();
      expect(element.find('oui-tabs-item').hasClass('oui-tabs-item')).toBeTruthy();
    });

    it('should have accessibility attribute', () => {
      const element = TestUtils.compileTemplate(`
        <oui-tabs aria-label="tablist">
          <oui-tabs-item aria-label="heading"></oui-tabs-item>
        </oui-tabs>
      `);

      $timeout.flush();

      const content = angular.element(element[0].querySelector('.oui-tabs-item__content'));
      const contentId = content.attr('id');
      expect(content.attr('role')).toBe('tabpanel');
      expect(content.attr('aria-hidden')).toBeDefined();

      const tablist = angular.element(element[0].querySelector('.oui-tabs__tablist'));
      expect(tablist.attr('role')).toBe('tablist');
      expect(tablist.attr('aria-label')).toBe('tablist');

      const tab = angular.element(element[0].querySelector('.oui-tabs-tab'));
      expect(tab.attr('aria-label')).toBe('heading');
      expect(tab.attr('aria-controls')).toBe(contentId);
      expect(tab.attr('aria-selected')).toBeDefined();

      const button = angular.element(element[0].querySelector('.oui-tabs-item__button'));
      expect(button.attr('aria-label')).toBe('heading');
      expect(button.attr('aria-controls')).toBe(contentId);
      expect(button.attr('aria-expanded')).toBeDefined();
    });

    it('should set tabs with heading', () => {
      const element = TestUtils.compileTemplate(`
        <oui-tabs aria-label="tablist">
          <oui-tabs-item heading="lorem"></oui-tabs-item>
          <oui-tabs-item heading="ipsum"></oui-tabs-item>
        </oui-tabs>
      `);

      $timeout.flush();

      const items = element.find('oui-tabs-item');
      const tabs = angular.element(element[0].querySelector('.oui-tabs__tablist')).find('button');
      expect(tabs.length).toBe(items.length);

      angular.forEach(items, (item, index) => {
        const heading = angular.element(item).attr('heading');
        const tab = angular.element(tabs[index]).text().trim();
        expect(tab).toBe(heading);
      });
    });

    it('should set tabs with subheading', () => {
      const element = TestUtils.compileTemplate(`
        <oui-tabs>
          <oui-tabs-item subheading="lorem"></oui-tabs-item>
          <oui-tabs-item subheading="ipsum"></oui-tabs-item>
        </oui-tabs>
      `);

      $timeout.flush();

      const items = element.find('oui-tabs-item');
      const tabs = angular.element(element[0].querySelector('.oui-tabs__tablist')).find('button');
      expect(tabs.length).toBe(items.length);

      angular.forEach(items, (item, index) => {
        const subheading = angular.element(item).attr('subheading');
        const tab = angular.element(tabs[index]).text().trim();
        expect(tab).toBe(subheading);
      });
    });

    it('should set a variant', () => {
      const element = TestUtils.compileTemplate(`
        <oui-tabs>
          <oui-tabs-item variant="lorem"></oui-tabs-item>
          <oui-tabs-item variant="ipsum"></oui-tabs-item>
        </oui-tabs>
      `);

      $timeout.flush();

      const items = element.find('oui-tabs-item');
      const tabs = angular.element(element[0].querySelector('.oui-tabs__tablist')).find('button');
      expect(tabs.length).toBe(items.length);

      angular.forEach(items, (item, index) => {
        const classname = `oui-tabs-tab_${angular.element(item).attr('variant')}`;
        const tab = angular.element(tabs[index]);
        expect(tab.hasClass(classname)).toBeTruthy();
      });
    });

    it('should update active tab', () => {
      const element = TestUtils.compileTemplate(`
        <oui-tabs aria-label="tablist">
          <oui-tabs-item heading="lorem"></oui-tabs-item>
          <oui-tabs-item heading="ipsum"></oui-tabs-item>
        </oui-tabs>
      `);

      $timeout.flush();

      const items = element.find('oui-tabs-item');
      const button = angular.element(items[1]).find('button');
      button.triggerHandler('click');

      const id = button.next().attr('id');
      const tabsCtrl = element.controller('ouiTabs');
      expect(tabsCtrl.model).toBe(id);
    });

    it('should active default tab', () => {
      const element = TestUtils.compileTemplate(`
        <oui-tabs aria-label="tablist" model="$ctrl.activeTab">
          <oui-tabs-item id="tab1" heading="lorem"></oui-tabs-item>
          <oui-tabs-item id="tab2" heading="ipsum"></oui-tabs-item>
        </oui-tabs>`, {
        activeTab: 'tab2',
      });

      $timeout.flush();

      const items = element.find('oui-tabs-item');
      const button = angular.element(items[1]).find('button');

      const id = button.next().attr('id');
      const expanded = button.attr('aria-expanded');
      const tabsCtrl = element.controller('ouiTabs');

      expect(tabsCtrl.model).toBe(id);
      expect(expanded).toBe('true');
    });

    it('should update model when active tab change', () => {
      const element = TestUtils.compileTemplate(`
        <oui-tabs aria-label="tablist" model="$ctrl.activeTab">
          <oui-tabs-item id="tab1" heading="lorem"></oui-tabs-item>
          <oui-tabs-item id="tab2" heading="ipsum"></oui-tabs-item>
        </oui-tabs>`, {
        activeTab: 'tab1',
      });

      $timeout.flush();

      const items = element.find('oui-tabs-item');
      const button = angular.element(items[1]).find('button');
      button.triggerHandler('click');

      expect(TestUtils.getElementController(element).activeTab).toEqual('tab2');
    });
  });

  describe('Methods', () => {
    it('should add item in items array', () => {
      const element = TestUtils.compileTemplate('<oui-tabs></oui-tabs>');
      const tabsCtrl = element.controller('ouiTabs');

      tabsCtrl.items = ['ipsum'];
      tabsCtrl.addItem('lorem', 0); // Should be added at index 0
      tabsCtrl.addItem('dolor'); // Should be added at the end

      expect(tabsCtrl.items.indexOf('lorem')).toBe(0);
      expect(tabsCtrl.items.indexOf('dolor')).toBe(tabsCtrl.items.length - 1);
    });

    it('should remove item in items array', () => {
      const element = TestUtils.compileTemplate('<oui-tabs></oui-tabs>');
      const tabsCtrl = element.controller('ouiTabs');

      tabsCtrl.items = ['lorem', 'ipsum', 'dolor'];
      tabsCtrl.removeItem('ipsum');

      expect(tabsCtrl.items.indexOf('ipsum')).toBe(-1);
    });
  });
});
