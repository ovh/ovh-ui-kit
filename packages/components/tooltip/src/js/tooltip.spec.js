import '@ovh/ui-kit.core/src/js/test-utils';
import '../index';

describe('ouiTooltip', () => {
  let $timeout;
  let testUtils;

  beforeEach(angular.mock.module('oui.tooltip'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    testUtils = _TestUtils_;
  }));

  describe('Directive', () => {
    it('should create a tooltip, next to the trigger, with the attribute value as text', () => {
      const component = testUtils.compileTemplate('<div><button class="trigger" oui-tooltip="foo"></button></div>');

      $timeout.flush();

      const tooltip = angular.element(component[0].querySelector('.trigger')).next();

      expect(tooltip.length).toBe(1);
      expect(tooltip.hasClass('oui-tooltip')).toBe(true);
      expect(tooltip.text().trim()).toBe('foo');
    });

    it('should create a tooltip, next to the trigger, with the attribute value as text', () => {
      const component = testUtils.compileTemplate('<div><button class="trigger" title="foo" oui-tooltip></button></div>');

      $timeout.flush();

      const tooltip = angular.element(component[0].querySelector('.trigger')).next();

      expect(tooltip.length).toBe(1);
      expect(tooltip.hasClass('oui-tooltip')).toBe(true);
      expect(tooltip.text().trim()).toBe('foo');
    });

    it('should add an attribute aria-label, if there is none on the trigger', () => {
      const component = testUtils.compileTemplate('<div><button class="trigger" oui-tooltip="foo"></button></div>');

      $timeout.flush();

      const trigger = angular.element(component[0].querySelector('.trigger'));

      expect(trigger.attr('aria-label')).toBe('foo');
    });

    it('should keep the value of the attribute aria-label, if there is one on the trigger', () => {
      const component = testUtils.compileTemplate('<div><button class="trigger" oui-tooltip="foo" aria-label="bar"></button></div>');

      $timeout.flush();

      const trigger = angular.element(component[0].querySelector('.trigger'));

      expect(trigger.attr('aria-label')).toBe('bar');
    });

    it('should position the tooltip with top-center direction when trigger is focused, if there is no placement defined', () => {
      const component = testUtils.compileTemplate('<div><button class="trigger" oui-tooltip="foo"></button></div>');

      $timeout.flush();

      const trigger = angular.element(component[0].querySelector('.trigger')).triggerHandler('focus');
      const tooltip = trigger.next();

      expect(tooltip.attr('x-placement')).toBe('top');
    });

    it('should position the tooltip with placement attribute value, when trigger is focused', () => {
      const component = testUtils.compileTemplate('<div><button class="trigger" oui-tooltip="foo" oui-tooltip-placement="bottom-start"></button></div>');

      $timeout.flush();

      const trigger = angular.element(component[0].querySelector('.trigger')).triggerHandler('focus');
      const tooltip = trigger.next();

      expect(tooltip.attr('x-placement')).toBe('bottom-start');
    });
  });
});
