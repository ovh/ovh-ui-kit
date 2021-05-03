import mockData from './circle-chart.spec.data.json';

describe('ouiCircleChart', () => {
  let $timeout;
  let testUtils;

  beforeEach(angular.mock.module('oui.circle-chart'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    testUtils = _TestUtils_;
  }));

  describe('Component', () => {
    let component;
    let controller;
    let onRemoveSpy;

    beforeEach(() => {
      onRemoveSpy = jasmine.createSpy('onRemoveSpy');
      component = testUtils.compileTemplate(`
                <oui-circle-chart chart-title="/Go"
                                  chart-subtitle="storage data"
                                  aria-title="Example chart title"
                                  aria-description="Example chart description"
                                  min-bound="0"
                                  max-bound="100"
                                  with-legends
                                  segments="$ctrl.items">
                </oui-circle-chart>
            `, {
        items: mockData.items,
        onRemoveSpy,
      });
      controller = component.controller('ouiCircleChart');
    });

    it('should add the classname .oui-circle-chart__container on the root element', () => {
      $timeout.flush();
      expect(component.hasClass('oui-circle-chart__container')).toBe(true);
    });

    it("should add circle-chart from 'segments' attribute", () => {
      expect(component.children().length).toBe(controller.segments.length);
    });

    it("should have circle-chart with 'legends' variant, when 'with-legends' attribute is set", () => {
      expect(component.children().hasClass('oui-circle-chart__legends')).toBe(true);
    });
  });
});
