import 'flatpickr';
import 'flatpickr/dist/l10n/fr';

import '@ovh/ui-kit.core/src/js/test-utils';
import '../index';

describe('ouiTimepicker', () => {
  let $timeout;
  let testUtils;

  beforeEach(angular.mock.module('oui.timepicker'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    testUtils = _TestUtils_;
  }));

  describe('Component', () => {
    it('should add the classname .oui-timepicker on the root element', () => {
      const component = testUtils.compileTemplate('<oui-timepicker model="$ctrl.model"></oui-timepicker>');

      $timeout.flush();

      expect(component.hasClass('oui-timepicker')).toBe(true);
    });

    it('should have an attribute id and name on the input, and removed on the root component', () => {
      const component = testUtils.compileTemplate('<oui-timepicker id="foo" name="bar" model="$ctrl.model"></oui-timepicker>');
      const input = component.find('input');

      $timeout.flush();

      expect(component.attr('id')).toBe(undefined);
      expect(input.attr('id')).toBe('foo');

      expect(component.attr('name')).toBe(undefined);
      expect(input.attr('name')).toBe('bar');
    });

    it('should set the picker inline', () => {
      const component = testUtils.compileTemplate('<oui-timepicker model="$ctrl.model" inline></oui-timepicker>');
      const controller = component.controller('ouiTimepicker');

      $timeout.flush();

      expect(controller.inline).toBe(true);
      expect(component.hasClass('oui-timepicker_inline')).toBe(true);
    });

    it('should append the picker to the body', () => {
      const component = testUtils.compileTemplate('<oui-timepicker model="$ctrl.model" append-to-body></oui-timepicker>');
      const picker = component[0].querySelector('.flatpickr-calendar');

      $timeout.flush();

      expect(picker).toBeNull();
    });

    it('should have disabled the input', () => {
      const component = testUtils.compileTemplate('<oui-timepicker model="$ctrl.model" disabled></oui-timepicker>');
      const input = component.find('input');

      expect(input.attr('disabled')).toBe('disabled');
    });

    it('should have required the input', () => {
      const component = testUtils.compileTemplate('<oui-timepicker model="$ctrl.model" required></oui-timepicker>');
      const input = component.find('input');

      expect(input.attr('required')).toBe('required');
    });

    it('should have a placeholder on the input', () => {
      const component = testUtils.compileTemplate('<oui-timepicker model="$ctrl.model" placeholder="foo"></oui-timepicker>');
      const input = component.find('input');

      $timeout.flush();

      expect(input.attr('placeholder')).toBe('foo');
    });

    it("should set 'enableSeconds' to true", () => {
      const component = testUtils.compileTemplate('<oui-timepicker model="$ctrl.model" enable-seconds></oui-timepicker>');
      const controller = component.controller('ouiTimepicker');

      expect(controller.options.enableSeconds).toBe(true);
    });

    it("should set 'time_24hr' to false", () => {
      const component = testUtils.compileTemplate('<oui-timepicker model="$ctrl.model" enable-am-pm></oui-timepicker>');
      const controller = component.controller('ouiTimepicker');

      expect(controller.options.time_24hr).toBe(false);
    });
  });
});
