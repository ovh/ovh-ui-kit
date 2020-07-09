import mockData from './navbar.spec.data.json';

describe('ouiNavbar', () => {
  let testUtils;
  let $document;
  let $timeout;
  let configuration;

  beforeEach(angular.mock.module('oui.navbar'));
  beforeEach(angular.mock.module('oui.navbar.configuration'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$document_, _$timeout_, _TestUtils_) => {
    $document = _$document_;
    $timeout = _$timeout_;
    testUtils = _TestUtils_;
  }));

  describe('Provider', () => {
    angular.module('oui.navbar.configuration', [
      'oui.navbar',
    ]).config((ouiNavbarConfigurationProvider) => {
      ouiNavbarConfigurationProvider.setTranslations({
        foo: 'bar',
      });
    });

    beforeEach(inject((_ouiNavbarConfiguration_) => {
      configuration = _ouiNavbarConfiguration_;
    }));

    it('should have custom options', () => {
      expect(configuration.translations.foo).toEqual('bar');
    });
  });

  describe('Component', () => {
    const navbarClass = 'oui-navbar';
    const navbarFixedClass = `${navbarClass}_fixed`;
    const navbarDropdownClass = `${navbarClass}-dropdown`;
    const navbarMenuClass = `${navbarClass}-menu`;
    const navbarMenuFixedClass = `${navbarMenuClass}_fixed`;
    const navbarMenuPanelClass = `${navbarMenuClass}_panel`;
    const navbarMenuEndClass = `${navbarMenuClass}_end`;
    const navbarListItemClass = `${navbarClass}-list__item`;

    it('should display a navbar', () => {
      const component = testUtils.compileTemplate(`
                <oui-navbar
                    brand="$ctrl.brand"
                    active-link="{{$ctrl.activeLink}}"
                    main-links="$ctrl.mainLinks"
                    aside-links="$ctrl.asideLinks"
                    toggler-links="$ctrl.togglerLinks">
                </oui-navbar>`, {
        brand: mockData.brand,
        activeLink: mockData.mainLinks[0].name,
        mainLinks: mockData.mainLinks,
        asideLinks: mockData.asideLinks,
        togglerLinks: mockData.togglerLinks,
      });
      const controller = component.controller('ouiNavbar');

      $timeout.flush();

      expect(angular.copy(controller.brand)).toEqual(mockData.brand);
      expect(angular.copy(controller.activeLink)).toEqual(mockData.mainLinks[0].name);
      expect(angular.copy(controller.mainLinks)).toEqual(mockData.mainLinks);
      expect(angular.copy(controller.asideLinks)).toEqual(mockData.asideLinks);
      expect(angular.copy(controller.togglerLinks)).toEqual(mockData.togglerLinks);
    });

    describe('Navbar', () => {
      const item = 'foo';
      const groupName = 'bar';
      const menuName = 'lorem';
      const internalMenuName = 'ipsum';

      let component;
      let navbar;
      let controller;

      beforeEach(() => {
        component = testUtils.compileTemplate('<oui-navbar></oui-navbar>');
        navbar = component.find('nav');
        controller = component.controller('ouiNavbar');

        $timeout.flush();
      });

      it('should have default classname', () => {
        expect(navbar.hasClass(navbarClass)).toBeTruthy();
        expect(navbar.hasClass(navbarFixedClass)).toBeFalsy();
      });

      it("should have role 'navigation'", () => {
        expect(navbar.attr('role')).toBe('navigation');
      });

      it("should add item 'foo' to group 'bar'", () => {
        controller.addItemToGroup(item, groupName);

        expect(Array.isArray(controller.keyboardNav[groupName])).toBeTruthy();
        expect(controller.keyboardNav[groupName].length).toBe(1);
        expect(controller.keyboardNav[groupName][0]).toBe(item);
      });

      it("should return group 'bar'", () => {
        controller.addItemToGroup(item, groupName);
        const group = controller.getGroup(groupName);

        expect(Array.isArray(group)).toBeTruthy();
        expect(group.length).toBe(1);
        expect(group[0]).toBe(item);
      });

      it("should toggle navigation state of Menu 'lorem' ", () => {
        expect(controller.navigation).toBeUndefined();

        controller.toggleMenu(menuName);
        expect(controller.navigation[menuName]).toBeTruthy();

        controller.toggleMenu(menuName);
        expect(controller.navigation).toBeNull();
      });

      it("should toggle navigation state of internal Menu 'lorem'", () => {
        controller.toggleMenu(menuName);
        controller.toggleMenu(internalMenuName, true);
        expect(controller.navigation[internalMenuName]).toBeTruthy();

        controller.toggleMenu(internalMenuName, true);
        expect(controller.navigation[internalMenuName]).toBeFalsy();
      });

      it('should clear navigation', () => {
        controller.toggleMenu(menuName);
        controller.toggleMenu(internalMenuName, true);
        controller.toggleMenu();
        expect(controller.navigation).toBeNull();

        // Simulate external click
        controller.toggleMenu(menuName);
        controller.toggleMenu(internalMenuName, true);
        $document.triggerHandler('click');

        $timeout.flush();
        expect(controller.navigation).toBeNull();

        // Simulate ESC keydown
        controller.toggleMenu(menuName);
        controller.toggleMenu(internalMenuName, true);
        $document.triggerHandler({
          type: 'keydown',
          which: controller.KEYBOARD_KEYS.ESC,
        });

        $timeout.flush();
        expect(controller.navigation).toBeNull();
      });

      it('should not clear navigation', () => {
        controller.toggleMenu(menuName);
        controller.toggleMenu(internalMenuName, true);

        const { navigation } = controller;
        component.triggerHandler('click');

        $timeout.flush();
        expect(controller.navigation).toEqual(navigation);
      });

      it('should be fixed', () => {
        // Test without value, should be true
        component = testUtils.compileTemplate('<oui-navbar fixed></oui-navbar>');
        navbar = component.find('nav');
        controller = component.controller('ouiNavbar');

        $timeout.flush();

        expect(navbar.hasClass(navbarFixedClass)).toBeTruthy();
        expect(controller.fixed).toBeTruthy();

        // Test with value
        component = testUtils.compileTemplate('<oui-navbar fixed="true"></oui-navbar>');
        navbar = component.find('nav');
        controller = component.controller('ouiNavbar');

        $timeout.flush();

        expect(navbar.hasClass(navbarFixedClass)).toBeTruthy();
        expect(controller.fixed).toBeTruthy();
      });

      it('should not be fixed', () => {
        component = testUtils.compileTemplate('<oui-navbar fixed="false"></oui-navbar>');
        navbar = component.find('nav');
        controller = component.controller('ouiNavbar');

        $timeout.flush();

        expect(navbar.hasClass(navbarFixedClass)).toBeFalsy();
        expect(controller.fixed).toBeFalsy();
      });

      it('should focus element when menu is opened', () => {
        const { name } = mockData.asideLinks[0];
        component = testUtils.compileTemplate('<oui-navbar aside-links="$ctrl.asideLinks"></oui-navbar>', {
          asideLinks: mockData.asideLinks,
        });
        controller = component.controller('ouiNavbar');

        const button = controller.keyboardNav[name][0];
        spyOn(button, 'focus');
        controller.toggleMenu(name);

        $timeout.flush();
        expect(button.focus).toHaveBeenCalled();
      });

      it('should have mainLinks equal togglerLinks', () => {
        component = testUtils.compileTemplate('<oui-navbar main-links="$ctrl.mainLinks"></oui-navbar>', {
          mainLinks: mockData.mainLinks,
        });
        controller = component.controller('ouiNavbar');

        expect(controller.mainLinks).toEqual(controller.togglerLinks);
      });
    });

    describe('Brand', () => {
      const data = mockData.brand;

      let brand;
      let component;
      let controller;

      beforeEach(() => {
        component = testUtils.compileTemplate(`
                    <oui-navbar>
                        <oui-navbar-brand
                            href="{{$ctrl.brand.url}}"
                            aria-label="{{$ctrl.brand.label}}"
                            icon-class="{{$ctrl.brand.iconClass}}"></oui-navbar-brand>
                        <oui-navbar-main>
                    </oui-navbar>`, {
          brand: data,
        });
        controller = component.find('oui-navbar-brand').controller('ouiNavbarBrand');

        $timeout.flush();

        brand = angular.element(component[0].querySelector('.oui-navbar__brand'));
      });

      it('should remove aria-label', () => {
        expect(controller.$element.attr('aria-label')).toBeUndefined();
      });

      it('should create a link', () => {
        expect(brand.length).toEqual(1);
        expect(brand[0].tagName).toBe('A');
        expect(brand.attr('href')).toBe(data.url);
      });

      it('should have an accessibility label', () => {
        expect(brand.attr('aria-label')).toBe(data.label);
      });

      it('should have an icon', () => {
        const icon = brand.find('span').eq(0);

        expect(icon.hasClass(data.iconClass)).toBe(true);
      });
    });

    describe('Dropdown', () => {
      let component;
      let onClickSpy;

      beforeEach(() => {
        onClickSpy = jasmine.createSpy('onClickSpy');
        component = testUtils.compileTemplate(`
                    <oui-navbar>
                        <oui-navbar-aside>
                            <oui-navbar-dropdown
                                name="{{$ctrl.name}}"
                                text="{{$ctrl.title}}"
                                aria-label="{{$ctrl.label}}"
                                icon-badge="$ctrl.badge"
                                icon-class="{{asideLink.icon}}"
                                on-click="$ctrl.onClick(open)">
                                <oui-navbar-dropdown-menu
                                    ng-bind="$ctrl.text">
                                </oui-navbar-dropdown-menu>
                            </oui-navbar-dropdown>
                        <oui-navbar-aside>
                    </oui-navbar>`, {
          name: 'foo',
          title: 'bar',
          label: 'lorem',
          badge: 5,
          icon: 'oui-icon oui-icon-help',
          text: 'Lorem ipsum',
          onClick: onClickSpy,
        });

        $timeout.flush();
      });

      it('should have default classname', () => {
        const dropdown = component.find('oui-navbar-dropdown');
        const dropdownMenu = component.find('oui-navbar-dropdown-menu');

        expect(dropdown.hasClass(navbarDropdownClass)).toBeTruthy();
        expect(dropdown.hasClass(navbarListItemClass)).toBeTruthy();

        expect(dropdownMenu.hasClass(navbarMenuClass)).toBeTruthy();
        expect(dropdownMenu.hasClass(navbarMenuFixedClass)).toBeTruthy();
        expect(dropdownMenu.hasClass(navbarMenuPanelClass)).toBeFalsy();
      });

      it('should call click callback with arguments', () => {
        const link = angular.element(component[0].querySelector('.oui-navbar-link'));

        link.triggerHandler('click');
        expect(onClickSpy).toHaveBeenCalledWith(true);

        link.triggerHandler('click');
        expect(onClickSpy).toHaveBeenCalledWith(false);
      });

      it('should have content transcluded', () => {
        const dropdownMenu = component.find('oui-navbar-dropdown-menu');

        expect(dropdownMenu.text()).toBe('Lorem ipsum');
      });

      it("should have alignment 'end'", () => {
        component = testUtils.compileTemplate(`
                    <oui-navbar>
                        <oui-navbar-aside>
                            <oui-navbar-dropdown
                                name="{{$ctrl.name}}"
                                text="{{$ctrl.title}}"
                                aria-label="{{$ctrl.label}}"
                                icon-badge="$ctrl.badge"
                                icon-class="{{asideLink.icon}}">
                                <oui-navbar-dropdown-menu
                                    placement="end"
                                    ng-bind="$ctrl.text">
                                </oui-navbar-dropdown-menu>
                            </oui-navbar-dropdown>
                        <oui-navbar-aside>
                    </oui-navbar>`, {
          name: 'foo',
          title: 'bar',
          label: 'lorem',
          badge: 5,
          icon: 'oui-icon oui-icon-help',
          text: 'Lorem ipsum',
        });
        const dropdownMenu = component.find('oui-navbar-dropdown-menu');

        $timeout.flush();

        expect(dropdownMenu.hasClass(navbarMenuEndClass)).toBeTruthy();
      });
    });

    describe('Menu', () => {
      const data = mockData.asideLinks[0];

      let component;
      let menu;

      beforeEach(() => {
        component = testUtils.compileTemplate(`
                    <oui-navbar>
                        <oui-navbar-aside>
                            <oui-navbar-dropdown
                                name="{{$ctrl.name}}"
                                text="{{$ctrl.title}}">
                                <oui-navbar-menu
                                    name="{{$ctrl.name}}"
                                    links="$ctrl.subLinks">
                                </oui-navbar-menu>
                            </oui-navbar-dropdown>
                        <oui-navbar-aside>
                    </oui-navbar>`, {
          name: data.name,
          title: data.title,
          headerTitle: data.headerTitle,
          subLinks: data.subLinks,
        });

        $timeout.flush();

        menu = component.find('oui-navbar-menu');
      });

      it('should have default classname', () => {
        expect(menu.hasClass(navbarMenuClass)).toBeTruthy();
        expect(menu.hasClass(navbarMenuFixedClass)).toBeFalsy();
        expect(menu.hasClass(navbarMenuPanelClass)).toBeFalsy();
        expect(menu.hasClass(navbarMenuEndClass)).toBeFalsy();
      });

      it("should have role 'menu'", () => {
        expect(menu.attr('role')).toBe('menu');
      });

      it('should have alignment', () => {
        component = testUtils.compileTemplate(`
                    <oui-navbar>
                        <oui-navbar-aside>
                            <oui-navbar-dropdown
                                name="{{$ctrl.name}}"
                                text="{{$ctrl.title}}">
                                <oui-navbar-menu
                                    name="{{$ctrl.name}}"
                                    links="$ctrl.subLinks"
                                    placement="end">
                                </oui-navbar-menu>
                            </oui-navbar-dropdown>
                        <oui-navbar-aside>
                    </oui-navbar>`, {
          name: data.name,
          title: data.title,
          headerTitle: data.headerTitle,
          subLinks: data.subLinks,
        });

        $timeout.flush();

        menu = component.find('oui-navbar-menu');
        expect(menu.hasClass(navbarMenuEndClass)).toBeTruthy();
      });

      it('should be fixed', () => {
        component = testUtils.compileTemplate(`
                    <oui-navbar>
                        <oui-navbar-aside>
                            <oui-navbar-dropdown
                                name="{{$ctrl.name}}"
                                text="{{$ctrl.title}}">
                                <oui-navbar-menu
                                    name="{{$ctrl.name}}"
                                    links="$ctrl.subLinks"
                                    fixed>
                                </oui-navbar-menu>
                            </oui-navbar-dropdown>
                        <oui-navbar-aside>
                    </oui-navbar>`, {
          name: data.name,
          title: data.title,
          headerTitle: data.headerTitle,
          subLinks: data.subLinks,
        });

        $timeout.flush();

        menu = component.find('oui-navbar-menu');
        expect(menu.hasClass(navbarMenuFixedClass)).toBeTruthy();
      });

      it("should have a variant 'panel' classname", () => {
        component = testUtils.compileTemplate(`
          <oui-navbar>
              <oui-navbar-aside>
                  <oui-navbar-dropdown
                      name="{{$ctrl.name}}"
                      text="{{$ctrl.title}}">
                      <oui-navbar-menu
                          name="{{$ctrl.name}}"
                          links="$ctrl.subLinks"
                          variant="panel">
                      </oui-navbar-menu>
                  </oui-navbar-dropdown>
              <oui-navbar-aside>
          </oui-navbar>`, {
          name: data.name,
          title: data.title,
          headerTitle: data.headerTitle,
          subLinks: data.subLinks,
        });

        $timeout.flush();

        menu = component.find('oui-navbar-menu');
        expect(menu.hasClass(navbarMenuPanelClass)).toBeTruthy();
      });

      it('should have custom content', () => {
        component = testUtils.compileTemplate(`
                    <oui-navbar>
                        <oui-navbar-aside>
                            <oui-navbar-dropdown
                                name="{{$ctrl.name}}"
                                text="{{$ctrl.title}}">
                                <oui-navbar-menu
                                    name="{{$ctrl.name}}"
                                    header-title="'Title'"
                                    links="$ctrl.subLinks"
                                    fixed>
                                    <oui-navbar-menu-header>
                                        <p>This is a custom header</p>
                                    </oui-navbar-menu-header>
                                </oui-navbar-menu>
                            </oui-navbar-dropdown>
                        <oui-navbar-aside>
                    </oui-navbar>`, {
          name: data.name,
          title: data.title,
          headerTitle: data.headerTitle,
          subLinks: data.subLinks,
        });

        $timeout.flush();

        const customHeader = angular.element(component.find('p')[0]);
        expect(customHeader.text().trim()).toEqual('This is a custom header');
      });

      it('should have a header that is a link', () => {
        component = testUtils.compileTemplate(`
            <oui-navbar>
                <oui-navbar-aside>
                    <oui-navbar-dropdown
                        name="{{$ctrl.name}}"
                        text="{{$ctrl.title}}">
                        <oui-navbar-menu
                            name="{{$ctrl.name}}"
                            header-title="'Title'"
                            header-href="#/menu"
                            fixed>
                        </oui-navbar-menu>
                    </oui-navbar-dropdown>
                <oui-navbar-aside>
            </oui-navbar>`, {
          name: data.name,
          title: data.title,
          headerTitle: data.headerTitle,
          subLinks: data.subLinks,
        });

        $timeout.flush();
        const hrefHeader = angular.element(component.find('a')[0]);
        expect(hrefHeader.attr('href')).toEqual('#/menu');
      });
    });

    describe('Main links', () => {
      const data = mockData.mainLinks;
      const activeIndex = 0;

      let component;
      let menu;
      let links;

      beforeEach(() => {
        component = testUtils.compileTemplate(`<oui-navbar active-link="{{$ctrl.mainLinks[${activeIndex}].name}}" main-links="$ctrl.mainLinks"></oui-navbar>`, {
          mainLinks: data,
        });

        $timeout.flush();

        menu = angular.element(component[0].querySelector('.oui-navbar-list_main'));
        links = menu.children('li');
      });

      it('should create a list of links', () => {
        expect(menu.length).toEqual(1);
        expect(links.length).toEqual(data.length);
      });

      it('should have an active link from activeLink attribute value', () => {
        const activeLink = links.eq(activeIndex).children('a');

        expect(activeLink.hasClass('oui-navbar-link_active')).toBe(true);
      });

      it('should have a link with a primary variant', () => {
        const linkIndex = 0;
        const primaryLink = links.eq(linkIndex).children('a');

        expect(data[linkIndex].isPrimary).toBe(true);
        expect(primaryLink.hasClass('oui-navbar-link_primary'));
      });

      it('should have a link with a secondary variant', () => {
        const linkIndex = data.length - 1;
        const secondaryLink = links.eq(linkIndex).children('a');

        expect(data[linkIndex].isPrimary).toBe(false);
        expect(secondaryLink.hasClass('oui-navbar-link_secondary'));
      });
    });

    describe('Aside links', () => {
      const data = mockData.asideLinks;

      let component;
      let menu;
      let links;

      beforeEach(() => {
        component = testUtils.compileTemplate('<oui-navbar aside-links="$ctrl.asideLinks"></oui-navbar>', {
          asideLinks: data,
        });

        $timeout.flush();

        menu = angular.element(component[0].querySelector('.oui-navbar-list_aside'));
        links = menu.children();
      });

      it('should create a list of links', () => {
        expect(menu.length).toEqual(1);
        expect(links.length).toEqual(data.length);
      });

      it('should have links with tertiary variant', () => {
        expect(links.eq(0).children().hasClass('oui-navbar-link_dropdown')).toBe(true);
      });

      it('should have links with icon', () => {
        const index = 1;

        expect(links.eq(index).children('span').hasClass(data[index].iconClass));
      });

      it('should open the menu when button is clicked', () => {
        const button = links.eq(0).children('button');

        expect(!!data[0].subLinks).toBe(true);
        button.triggerHandler('click');
        expect(button.attr('aria-expanded')).toBe('true');
      });

      it('should have a notifications menu', () => {
        const notificationsIndex = 1;
        const notificationsMenu = angular.element(links[notificationsIndex].querySelector('.oui-navbar-menu_notifications'));

        expect(data[notificationsIndex].name).toBe('notifications');
        expect(notificationsMenu.hasClass('oui-navbar-menu_notifications')).toBe(true);
      });

      it('should have a user menu', () => {
        const userIndex = 3;
        const userMenu = angular.element(links[userIndex].querySelector('.oui-navbar-menu_user'));

        expect(data[userIndex].name).toBe('user');
        expect(userMenu.hasClass('oui-navbar-menu_user')).toBe(true);
      });

      it('should animate menu item icon', () => {
        const notificationsIndex = 1;
        const notificationsMenu = angular.element(menu.children('oui-navbar-dropdown')[notificationsIndex].querySelector('.oui-icon'));
        expect(notificationsMenu.hasClass('oui-icon_shake')).toBe(true);
      });
    });

    describe('Responsive menu', () => {
      const data = mockData.mainLinks;

      let component;
      let toggler;
      let responsiveMenu;

      beforeEach(() => {
        component = testUtils.compileTemplate('<oui-navbar toggler-links="$ctrl.togglerLinks"></oui-navbar>', {
          togglerLinks: data,
        });

        $timeout.flush();

        toggler = angular.element(component[0].querySelector('.oui-navbar-toggler'));
        responsiveMenu = angular.element(component[0].querySelector('.oui-navbar-menu_toggle'));
      });

      it('should create a toggler button', () => {
        expect(toggler.length).toEqual(1);
      });

      it('should create a responsive menu', () => {
        expect(responsiveMenu.length).toEqual(1);
        expect(responsiveMenu[0].tagName).toBe('OUI-NAVBAR-MENU');
      });

      it('should open the responsive menu when the toggler button is clicked', () => {
        toggler.triggerHandler('click');
        expect(toggler.attr('aria-expanded')).toBe('true');
      });
    });

    describe('Toggler', () => {
      it('should set the toggler active', () => {
        const component = testUtils.compileTemplate(`<oui-navbar>
                    <oui-navbar-toggler active="$ctrl.active"></oui-navbar-toggler>
                </oui-navbar>`);
        const scope = component.scope();
        const toggler = angular.element(component[0].querySelector('.oui-navbar-toggler'));

        expect(toggler.attr('aria-expanded')).toBe('false'); // Check when undefined

        scope.$ctrl.active = true;
        scope.$apply();
        expect(toggler.attr('aria-expanded')).toBe('true');

        scope.$ctrl.active = false;
        scope.$apply();
        expect(toggler.attr('aria-expanded')).toBe('false');
      });

      it('should set the toggler loading', () => {
        const component = testUtils.compileTemplate(`<oui-navbar>
                    <oui-navbar-toggler loading="$ctrl.loading"></oui-navbar-toggler>
                </oui-navbar>`);
        const scope = component.scope();
        const toggler = angular.element(component[0].querySelector('.oui-navbar-toggler_button'));

        expect(toggler.hasClass('ng-hide')).toBeFalsy(); // ngHide: Check when undefined
        expect(angular.element(component[0].querySelector('.oui-navbar-toggler_loading')).length).toBe(0); // ngIf

        scope.$ctrl.loading = true;
        scope.$apply();
        expect(toggler.hasClass('ng-hide')).toBeTruthy();
        expect(angular.element(component[0].querySelector('.oui-navbar-toggler_loading')).length).toBe(1);

        scope.$ctrl.loading = false;
        scope.$apply();
        expect(toggler.hasClass('ng-hide')).toBeFalsy();
        expect(angular.element(component[0].querySelector('.oui-navbar-toggler_loading')).length).toBe(0);
      });
    });

    describe('Backdrop', () => {
      const data = mockData.mainLinks;

      let component;
      let backdrop;
      let toggler;

      beforeEach(() => {
        component = testUtils.compileTemplate('<oui-navbar main-links="$ctrl.mainLinks"></oui-navbar>', {
          mainLinks: data,
        });

        $timeout.flush();

        backdrop = angular.element(component[0].querySelector('.oui-navbar-backdrop'));
        toggler = angular.element(component[0].querySelector('.oui-navbar-toggler'));
      });

      it('should have a backdrop', () => {
        expect(backdrop.length).toEqual(1);
      });

      it('should be active when a menu is open', () => {
        toggler.triggerHandler('click');
        expect(backdrop.hasClass('oui-navbar-backdrop_active')).toBe(true);
      });

      it('should close all opened menus when clicked', () => {
        toggler.triggerHandler('click');
        backdrop.triggerHandler('click');
        expect(toggler.attr('aria-expanded')).toBe('false');
      });
    });

    describe('Links', () => {
      const data = mockData.mainLinks[0];

      it('should call click callback', () => {
        const onClickSpy = jasmine.createSpy('onClickSpy');
        const navbar = testUtils.compileTemplate(
          `<oui-navbar>
                        <oui-navbar-main>
                            <oui-navbar-link
                                name="name"
                                href="url"
                                on-click="$ctrl.onClick()">
                                title
                            </oui-navbar-link>
                        <oui-navbar-main>
                    </oui-navbar>`, {
            name: data.name,
            title: data.title,
            url: data.url,
            onClick: onClickSpy,
          },
        );

        $timeout.flush();

        const link = angular.element(navbar[0].querySelector('.oui-navbar-link'));
        link.triggerHandler('click');

        expect(onClickSpy).toHaveBeenCalled();
      });
    });
  });
});
