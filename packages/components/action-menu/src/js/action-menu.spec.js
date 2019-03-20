import '@ovh/ui-kit.core/src/js/test-utils';
import '../index';

describe('ouiActionMenu', () => {
  let TestUtils;

  beforeEach(angular.mock.module('oui.action-menu'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_) => {
    TestUtils = _TestUtils_;
  }));

  describe('Component', () => {
    it('should display an action menu', () => {
      const element = TestUtils.compileTemplate(`
                <oui-action-menu>
                  <oui-action-menu-item>Action 1</oui-action-menu-item>
                </oui-action-menu>`);

      const ulElement = element.find('ul');
      expect(ulElement).toBeTruthy();
    });

    it('should display a button item', () => {
      const clickSpy = jasmine.createSpy('spy');
      const element = TestUtils.compileTemplate(
        `<oui-action-menu>
                  <oui-action-menu-item on-click="$ctrl.clickHandler()">Action 1</oui-action-menu-item>
                </oui-action-menu>`, {
          clickHandler: clickSpy,
        },
      );

      const buttonElement = element[0].querySelector('button');
      expect(buttonElement).toBeTruthy();
      expect(angular.element(buttonElement).text()).toBe('Action 1');

      angular.element(buttonElement).triggerHandler('click');
      expect(clickSpy).toHaveBeenCalled();
      expect(clickSpy.calls.count()).toEqual(1);
    });

    it('should display a link item', () => {
      const element = TestUtils.compileTemplate(`
                <oui-action-menu>
                  <oui-action-menu-item href="http://foo.bar">Action 1</oui-action-menu-item>
                </oui-action-menu>`);

      const linkElement = element[0].querySelector('a');
      expect(linkElement).toBeTruthy();
      expect(angular.element(linkElement).attr('href')).toBe('http://foo.bar');
    });

    describe('when disabled', () => {
      it('should display a disabled button item', () => {
        const element = TestUtils.compileTemplate(
          `<oui-action-menu>
                      <oui-action-menu-item
                        on-click="$ctrl.clickHandler()"
                        disabled>Action 1</oui-action-menu-item>
                    </oui-action-menu>`,
        );

        const $buttonElement = element.find('button');
        expect($buttonElement.prop('disabled')).toBe(true);
      });

      it('should display a disabled button item with dynamic binding', () => {
        const element = TestUtils.compileTemplate(
          `<oui-action-menu>
                      <oui-action-menu-item
                        on-click="$ctrl.clickHandler()"
                        disabled="$ctrl.isDisabled">Action 1</oui-action-menu-item>
                    </oui-action-menu>`, {
            isDisabled: true,
          },
        );

        expect(element.find('button').prop('disabled')).toBe(true);

        const scope = element.scope();
        scope.$ctrl.isDisabled = false;
        scope.$apply();

        expect(element.find('button').prop('disabled')).toBe(false);
      });
    });
  });
});
