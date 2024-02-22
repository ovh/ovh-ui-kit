describe('ouiCalendar', () => {
  let $timeout;
  let testUtils;

  beforeEach(angular.mock.module('oui.calendar'));
  beforeEach(angular.mock.module('oui.calendar.configuration'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    testUtils = _TestUtils_;
  }));

  describe('Provider', () => {
    let configuration;

    angular.module('oui.calendar.configuration', [
      'oui.calendar',
    ]).config((ouiCalendarConfigurationProvider) => {
      const { options } = ouiCalendarConfigurationProvider;
      options.foo = 'bar';

      ouiCalendarConfigurationProvider.setOptions(options);
      ouiCalendarConfigurationProvider.setLocale('fr');
    });

    beforeEach(inject((_ouiCalendarConfiguration_) => {
      configuration = _ouiCalendarConfiguration_;
    }));

    it('should have custom options', () => {
      expect(configuration.options.foo).toEqual('bar');
    });

    it('should have custom locale', () => {
      expect(configuration.locale).toEqual('fr');
    });
  });

  describe('Component', () => {
    it('should add the classname .oui-calendar on the root element', () => {
      const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model"></oui-calendar>');

      $timeout.flush();

      expect(component.hasClass('oui-calendar')).toBe(true);
    });

    it('should have an attribute id and name on the input, and removed on the root component', () => {
      const component = testUtils.compileTemplate('<oui-calendar id="foo" name="bar" model="$ctrl.model"></oui-calendar>');
      const input = component.find('input');

      $timeout.flush();

      expect(component.attr('id')).toBe(undefined);
      expect(input.attr('id')).toBe('foo');

      expect(component.attr('name')).toBe(undefined);
      expect(input.attr('name')).toBe('bar');
    });

    it('should have tooltip', () => {
      const component = testUtils.compileTemplate('<oui-calendar id="foo" name="bar" tooltip="Click here to open the calendar" model="$ctrl.model"></oui-calendar>');
      const input = component.find('input');

      expect(input.attr('title')).toBe('Click here to open the calendar');
    });

    it('should set the picker inline', () => {
      const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" inline></oui-calendar>');
      const controller = component.controller('ouiCalendar');

      $timeout.flush();

      expect(controller.config.inline).toBe(true);
      expect(component.hasClass('oui-calendar_inline')).toBe(true);
    });

    it('should append the picker to the body', () => {
      const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" append-to-body></oui-calendar>');
      const controller = component.controller('ouiCalendar');
      const calendar = component[0].querySelector('.flatpickr-calendar');

      $timeout.flush();

      expect(controller.config.appendTo).toBeUndefined();
      expect(calendar).toBeNull();
    });

    it('should have disabled the input', () => {
      const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" disabled></oui-calendar>');
      const input = component.find('input');

      expect(input.attr('disabled')).toBe('disabled');
    });

    it('should have required the input', () => {
      const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" required></oui-calendar>');
      const input = component.find('input');

      expect(input.attr('required')).toBe('required');
    });

    it('should have a placeholder on the input', () => {
      const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" placeholder="foo"></oui-calendar>');
      const input = component.find('input');

      $timeout.flush();

      expect(input.attr('placeholder')).toBe('foo');
    });

    it("should update value of an option with the method 'setOptionsProperty()'", () => {
      const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model"></oui-calendar>');
      const ctrl = component.controller('ouiCalendar');

      ctrl.setOptionsProperty('foo', 'bar');
      expect(ctrl.config.foo).toBe('bar');
    });

    it('should change the value formatting of the model and the input', () => {
      const format = 'd-m-Y';
      const altFormat = 'F j, Y';
      const component = testUtils.compileTemplate(`<oui-calendar model="$ctrl.model"
                format="${format}"
                alt-format="${altFormat}">
            </oui-calendar>`, {
        model: 'today',
      });
      const ctrl = component.controller('ouiCalendar');
      const formatDate = ctrl.flatpickr.formatDate(new Date(), format);
      const altFormatDate = ctrl.flatpickr.formatDate(new Date(), altFormat);
      const input = component[0].querySelector('.oui-calendar__control');
      const altInput = component[0].querySelector('.oui-calendar__control_alt');

      expect(ctrl.config.dateFormat).toBe(format);
      expect(ctrl.config.altInput).toBe(true);
      expect(ctrl.config.altFormat).toBe(altFormat);
      expect(input.value).toBe(formatDate);
      expect(altInput.value).toBe(altFormatDate);
    });

    it("should update event hooks with the method 'setEventHooks'", () => {
      const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model"></oui-calendar>');
      const ctrl = component.controller('ouiCalendar');

      ctrl.setEventHooks(['foo']);
      expect(typeof ctrl.config.foo).toBe('function');
    });

    it('should call function of events attributes', () => {
      const onChangeSpy = jasmine.createSpy('onChangeSpy');
      const onCloseSpy = jasmine.createSpy('onCloseSpy');
      const onOpenSpy = jasmine.createSpy('onOpenSpy');
      const component = testUtils.compileTemplate(`<oui-calendar model="$ctrl.model"
                on-change="$ctrl.onChangeSpy(selectedDates, dateStr)"
                on-close="$ctrl.onCloseSpy(selectedDates, dateStr)"
                on-open="$ctrl.onOpenSpy(selectedDates, dateStr)">
            </oui-calendar>`, {
        onChangeSpy,
        onCloseSpy,
        onOpenSpy,
      });
      const ctrl = component.controller('ouiCalendar');
      const today = ctrl.flatpickr.parseDate('today', ctrl.config.dateFormat);

      ctrl.setModelValue(today);
      expect(onChangeSpy).toHaveBeenCalledWith([today], ctrl.model);
      ctrl.flatpickr.open();
      expect(onOpenSpy).toHaveBeenCalledWith([today], ctrl.model);
      ctrl.flatpickr.close();
      expect(onCloseSpy).toHaveBeenCalledWith([today], ctrl.model);
    });

    it('should disable component in "default" mode', () => {
      // setup
      const template = '<oui-calendar model="$ctrl.model" disabled="true"></oui-calendar>';

      // when
      const component = testUtils.compileTemplate(template);

      // expect
      const ctrl = component.controller('ouiCalendar');
      const input = component[0].querySelector('.oui-calendar__control');

      expect(ctrl.disabled).toBeTrue();
      expect(angular.element(input).attr('disabled')).toBe('disabled');
    });

    it('should disable and enable component in "inline" mode', () => {
      // setup: calendar inline
      const template = `<oui-calendar model="$ctrl.model" disabled="$ctrl.disabled"
       format="d-m-Y" alt-format="H:i" enable-time inline></oui-calendar>`;

      // when: component is disabled
      const component = testUtils.compileTemplate(template, { model: 'today', disabled: true });
      const ctrl = component.controller('ouiCalendar');
      $timeout.flush();

      // then: all inputs are disabled
      const input = angular.element(component[0].querySelector('.oui-calendar__control'));
      const inputs = component[0].querySelectorAll('.numInput');

      expect(ctrl.inline).toBeTrue();
      expect(ctrl.disabled).toBeTrue();
      expect(angular.element(input).attr('type')).toBe('hidden');
      expect(angular.element(input).attr('disabled')).toBe('disabled');
      angular.forEach(inputs, (i) => {
        expect(angular.element(i).attr('disabled')).toBe('disabled');
      });

      // when: component is enabled
      const scope = component.scope();
      scope.$ctrl.disabled = false;
      scope.$apply();

      // then: none of input are disabled
      expect(ctrl.disabled).toBeFalse();
      expect(angular.element(input).attr('disabled')).toBeUndefined();
      angular.forEach(inputs, (i) => {
        expect(angular.element(i).attr('disabled')).toBeUndefined();
      });
    });
  });
});
