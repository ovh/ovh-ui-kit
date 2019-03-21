import '@ovh/ui-kit.test/src/test-utils';
import '../index';

import mockData from './chips.spec.data.json';

describe('ouiChips', () => {
  let $timeout;
  let testUtils;

  beforeEach(angular.mock.module('oui.chips'));
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
                <oui-chips closable stacked
                    items="$ctrl.items"
                    on-remove="$ctrl.onRemoveSpy(items, removed)">
                </oui-chips>
            `, {
        items: mockData.items,
        onRemoveSpy,
      });
      controller = component.controller('ouiChips');
    });

    it('should add the classname .oui-chip__container on the root element', () => {
      $timeout.flush();
      expect(component.hasClass('oui-chip__container')).toBe(true);
    });

    it("should add chips from 'items' attribute", () => {
      expect(component.children().length).toBe(controller.items.length);
    });

    it("should have chips with 'full-width' variant, when 'stacked' attribute is set", () => {
      expect(component.children().hasClass('oui-chip_full-width')).toBe(true);
    });

    it("should have chips with close button, when 'closable' attribute is set", () => {
      expect(component.find('button').length).toBeGreaterThan(0);
      expect(component.find('button').length).toBe(controller.items.length);
    });

    it('should remove a chip when close button is clicked', () => {
      const initialLength = controller.items.length;

      component.find('button').eq(0).triggerHandler('click');
      expect(initialLength).toBeGreaterThan(controller.items.length);
    });

    it('should call function of onRemove attribute, when a chip is removed, with the items value as callback', () => {
      const firstChip = mockData.items[0];
      component.find('button').eq(0).triggerHandler('click');

      const controllerItems = angular.copy(controller.items);
      expect(onRemoveSpy).toHaveBeenCalledWith(controllerItems, firstChip);
    });
  });
});
