describe('ouiTile', () => {
  let $timeout;
  let TestUtils;

  beforeEach(angular.mock.module('oui.tile'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    TestUtils = _TestUtils_;
  }));

  const getTileHeading = element => angular.element(element[0].querySelector('.oui-tile__title'));
  const getTileDesc = element => angular.element(element[0].querySelector('.oui-tile__legend'));
  const getTileButton = element => angular.element(element[0].querySelector('.oui-tile__button'));
  const getTileDefinitionTerm = element => angular.element(element[0].querySelector('.oui-tile__term'));
  const getTileDefinitionDesc = element => angular.element(element[0].querySelector('.oui-tile__description'));
  const getTileDefinitionActions = element => angular.element(element[0].querySelector('.oui-tile__actions'));
  const getActionMenu = element => angular.element(element[0].querySelector('.oui-tile__actions'));

  describe('Component', () => {
    it('should have the default classname', () => {
      const element = TestUtils.compileTemplate('<oui-tile></oui-tile>');

      $timeout.flush();

      expect(element.hasClass('oui-tile')).toBeTruthy();
    });

    it('should display a tile with title and legend', () => {
      const title = 'My title';
      const legend = 'My legend';
      const element = TestUtils.compileTemplate(`<oui-tile heading="${title}" description="${legend}"></oui-tile>`);

      const tileTitle = getTileHeading(element);
      const tileLegend = getTileDesc(element);
      expect(tileTitle.html()).toBe(title);
      expect(tileLegend.html()).toBe(legend);
    });
  });

  describe('Component tile button', () => {
    it('should have the default classnames', () => {
      const text = 'button text';
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-button>${text}</oui-tile-button>
        </oui-tile>`,
      );

      $timeout.flush();

      const button = element.find('oui-tile-button');
      expect(button.hasClass('oui-tile__item')).toBeTruthy();
      expect(button.hasClass('oui-tile__item_button')).toBeTruthy();
    });

    it('should display a button tile using attr', () => {
      const text = 'button text';
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-button>${text}</oui-tile-button>
        </oui-tile>`,
      );

      const button = getTileButton(element);
      expect(button.html()).toContain(text);
    });

    it('should display a button tile using transclusion', () => {
      const text = 'button text';
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-button>${text}</oui-tile-button>
        </oui-tile>`,
      );

      const button = getTileButton(element);
      expect(button.html()).toContain(text);
    });

    it('should display a button tile with link', () => {
      const url = 'http://my.url';
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-button href="${url}">text</oui-tile-button>
        </oui-tile>`,
      );

      const button = getTileButton(element);
      expect(button.attr('href')).toBe(url);
    });

    it('should add rel and target attributes if tile button is external link', () => {
      const relAttr = 'noopener';
      const targetAttr = '_blank';
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-button href="http://myurl.com" external>text</oui-tile-button>
        </oui-tile>`,
      );

      const button = getTileButton(element);

      expect(button.attr('rel')).toBe(relAttr);
      expect(button.attr('target')).toBe(targetAttr);
    });

    it('should handle click in a button tile', () => {
      const clickSpy = jasmine.createSpy('click');
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-button on-click="$ctrl.clickSpy()">text</oui-tile-button>
        </oui-tile>`, {
          clickSpy,
        },
      );

      getTileButton(element).triggerHandler('click');
      expect(clickSpy).toHaveBeenCalled();
    });

    it('should disable the button', () => {
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-button disabled>text</oui-tile-button>
        </oui-tile>`,
      );

      expect(getTileButton(element).attr('disabled')).toBe('disabled');
    });

    it('should display a disabled button instead of a link', () => {
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-button href="#" disabled>text</oui-tile-button>
        </oui-tile>`,
      );

      expect(getTileButton(element).attr('disabled')).toBe('disabled');
    });
  });

  describe('Component tile definition', () => {
    it('should have the default classname', () => {
      const term = 'my term';
      const description = 'my description';
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-definition term="${term}" description="${description}"></oui-tile-definition>
        </oui-tile>`,
      );

      $timeout.flush();

      const definition = element.find('oui-tile-definition');
      expect(definition.hasClass('oui-tile__item')).toBeTruthy();
    });

    it('should display term and description', () => {
      const term = 'my term';
      const description = 'my description';
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-definition term="${term}" description="${description}"></oui-tile-definition>
        </oui-tile>`,
      );

      const element2 = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-definition>
                <oui-tile-term>${term}</oui-tile-term>
                <oui-tile-description>${description}</oui-tile-description>
            </oui-tile-button>
        </oui-tile>`,
      );

      expect(getTileDefinitionTerm(element).html()).toContain(term);
      expect(getTileDefinitionDesc(element).html()).toContain(description);

      expect(getTileDefinitionTerm(element2).html()).toContain(term);
      expect(getTileDefinitionDesc(element2).html()).toContain(description);
    });

    it('should display actions', () => {
      const actions = 'my actions';
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-definition>
                <oui-tile-actions>${actions}</oui-tile-actions>
            </oui-tile-definition>
        </oui-tile>`,
      );

      expect(getTileDefinitionActions(element).html()).toContain(actions);
    });

    it('should define a term-popover', () => {
      const termPopover = 'my popover';

      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-definition term-popover="${termPopover}"></oui-tile-button>
        </oui-tile>`,
      );

      $timeout.flush();

      const popoverButton = angular.element(element[0].querySelector('.oui-popover__trigger'));
      const popoverContent = angular.element(element[0].querySelector('.oui-popover__content'));

      expect(popoverButton).toBeDefined();
      expect(popoverContent.html()).toContain(termPopover);
    });

    it('should define an action-menu', () => {
      const element = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-definition>
                <oui-action-menu>
                    <oui-action-menu-item></oui-action-menu-item>
                </oui-action-menu>
            </oui-tile-button>
        </oui-tile>`,
      );

      const element2 = TestUtils.compileTemplate(
        `<oui-tile>
            <oui-tile-definition></oui-tile-definition>
        </oui-tile>`,
      );

      expect(getActionMenu(element).length).not.toBe(0);
      expect(getActionMenu(element2).length).toBe(0);
    });
  });
});
