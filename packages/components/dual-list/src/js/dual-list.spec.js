import get from 'lodash/get';
import data from './dual-list.spec.data.json';

describe('ouiDualList', () => {
  let TestUtils;
  let $timeout;
  let configuration;

  const sourceString = data.string.source;
  const sourceStrings = data.strings.source;
  const sourceObject = data.object.source;
  const sourceNestedObject = data.nestedObject.source;

  const targetString = data.string.target;
  const targetStrings = data.strings.target;
  const targetObject = data.object.target;
  const targetNestedObject = data.nestedObject.target;

  const getDualList = (source, target) => TestUtils.compileTemplate(`
        <oui-dual-list source="$ctrl.source" target="$ctrl.target">
            <oui-dual-list-source></oui-dual-list-source>
            <oui-dual-list-target></oui-dual-list-target>
        </oui-dual-list>`, {
    source,
    target,
  });

  const getDualListWithProperty = (property, source, target) => TestUtils.compileTemplate(`
        <oui-dual-list property="{{ $ctrl.property }}" source="$ctrl.source" target="$ctrl.target">
            <oui-dual-list-source></oui-dual-list-source>
            <oui-dual-list-target></oui-dual-list-target>
        </oui-dual-list>`, {
    property,
    source,
    target,
  });

  const getDualListWithEvents = (onAddSpy, onChangeSpy, onRemoveSpy, source, target) => TestUtils.compileTemplate(`
        <oui-dual-list source="$ctrl.source" target="$ctrl.target"
            on-add="$ctrl.onAddSpy(item)"
            on-change="$ctrl.onChangeSpy(item)"
            on-remove="$ctrl.onRemoveSpy(item)">
            <oui-dual-list-source></oui-dual-list-source>
            <oui-dual-list-target></oui-dual-list-target>
        </oui-dual-list>`, {
    onAddSpy,
    onChangeSpy,
    onRemoveSpy,
    source,
    target,
  });

  beforeEach(angular.mock.module('oui.dual-list'));
  beforeEach(angular.mock.module('oui.dual-list.configuration'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    TestUtils = _TestUtils_;
  }));

  describe('Provider', () => {
    angular.module('oui.dual-list.configuration', [
      'oui.dual-list',
    ]).config((ouiDualListConfigurationProvider) => {
      ouiDualListConfigurationProvider.setTranslations({
        foo: 'bar',
      });
    });

    beforeEach(inject((_ouiDualListConfiguration_) => {
      configuration = _ouiDualListConfiguration_;
    }));

    it('should have custom options', () => {
      expect(configuration.translations.foo).toEqual('bar');
    });
  });

  describe('Component', () => {
    describe('oui-dual-list', () => {
      it('should have a default classname', () => {
        const element = getDualList(sourceStrings, targetStrings);

        $timeout.flush();

        expect(element.hasClass('oui-dual-list')).toBeTruthy();
      });

      it('should load the source and target data', () => {
        const element = getDualList(sourceStrings, targetStrings);

        const source = element.find('oui-dual-list-source')[0];
        const sourceLength = sourceStrings.length;
        const sourceItemsLength = angular.element(source.querySelectorAll('.oui-dual-list-item')).length;

        expect(sourceItemsLength).toBe(sourceLength);

        const target = element.find('oui-dual-list-target')[0];
        const targetLength = targetStrings.length;
        const targetItemsLength = angular.element(target.querySelectorAll('.oui-dual-list-item')).length;

        expect(targetItemsLength).toBe(targetLength);
      });

      it('should display value from array of strings', () => {
        const element = getDualList(sourceString, targetString);

        const source = element.find('oui-dual-list-source')[0];
        const sourceItem = angular.element(source.querySelector('.oui-dual-list-item:first-child .oui-dual-list-item__property'));

        expect(sourceItem.text()).toBe(sourceString[0]);

        const target = element.find('oui-dual-list-target')[0];
        const targetItem = angular.element(target.querySelector('.oui-dual-list-item:first-child .oui-dual-list-item__property'));

        expect(targetItem.text()).toBe(targetString[0]);
      });

      it('should display property value from array of objects', () => {
        const property = 'name';
        const element = getDualListWithProperty(property, sourceObject, targetObject);

        const source = element.find('oui-dual-list-source')[0];
        const sourceItem = angular.element(source.querySelector('.oui-dual-list-item:first-child .oui-dual-list-item__property'));

        expect(sourceItem.text()).toBe(get(sourceObject[0], property));

        const target = element.find('oui-dual-list-target')[0];
        const targetItem = angular.element(target.querySelector('.oui-dual-list-item:first-child .oui-dual-list-item__property'));

        expect(targetItem.text()).toBe(get(targetObject[0], property));
      });

      it('should display property value from array of nested objects', () => {
        const property = 'name.firstName';
        const element = getDualListWithProperty(property, sourceNestedObject, targetNestedObject);

        const source = element.find('oui-dual-list-source')[0];
        const sourceItem = angular.element(source.querySelector('.oui-dual-list-item:first-child .oui-dual-list-item__property'));

        expect(sourceItem.text()).toBe(get(sourceNestedObject[0], property));

        const target = element.find('oui-dual-list-target')[0];
        const targetItem = angular.element(target.querySelector('.oui-dual-list-item:first-child .oui-dual-list-item__property'));

        expect(targetItem.text()).toBe(get(targetNestedObject[0], property));
      });

      it('should move first source item to target', () => {
        const element = getDualList(sourceStrings, targetStrings);
        const controller = element.controller('ouiDualList');

        const source = element.find('oui-dual-list-source')[0];
        const sourceItem = angular.element(source.querySelector('.oui-dual-list-item:first-child'));

        sourceItem.triggerHandler('click');

        const sourceLength = sourceStrings.length - 1;
        const sourceItemsLength = controller.source.length;

        expect(sourceItemsLength).toBe(sourceLength);

        const targetLength = targetStrings.length + 1;
        const targetItemsLength = controller.target.length;

        expect(targetItemsLength).toBe(targetLength);
      });

      it('should move all source items to target', () => {
        const element = getDualList(sourceStrings, targetStrings);
        const controller = element.controller('ouiDualList');

        const source = element.find('oui-dual-list-source')[0];
        const sourceAction = angular.element(source.querySelector('.oui-dual-list__action button'));

        sourceAction.triggerHandler('click');

        const sourceLength = 0;
        const sourceItemsLength = controller.source.length;

        expect(sourceItemsLength).toBe(sourceLength);

        const targetLength = sourceStrings.length + targetStrings.length;
        const targetItemsLength = controller.target.length;

        expect(targetItemsLength).toBe(targetLength);
      });

      it('should move first target item to source', () => {
        const element = getDualList(sourceStrings, targetStrings);
        const controller = element.controller('ouiDualList');

        const target = element.find('oui-dual-list-target')[0];
        const targetItem = angular.element(target.querySelector('.oui-dual-list-item:first-child'));

        targetItem.triggerHandler('click');

        const sourceLength = sourceStrings.length + 1;
        const sourceItemsLength = controller.source.length;

        expect(sourceItemsLength).toBe(sourceLength);

        const targetLength = targetStrings.length - 1;
        const targetItemsLength = controller.target.length;

        expect(targetItemsLength).toBe(targetLength);
      });

      it('should move all target items to source', () => {
        const element = getDualList(sourceStrings, targetStrings);
        const controller = element.controller('ouiDualList');

        const target = element.find('oui-dual-list-target')[0];
        const targetAction = angular.element(target.querySelector('.oui-dual-list__action button'));

        targetAction.triggerHandler('click');

        const sourceLength = sourceStrings.length + targetStrings.length;
        const sourceItemsLength = controller.source.length;

        expect(sourceItemsLength).toBe(sourceLength);

        const targetLength = 0;
        const targetItemsLength = controller.target.length;

        expect(targetItemsLength).toBe(targetLength);
      });

      it('should call events callbacks', () => {
        const onAddSpy = jasmine.createSpy('onAddSpy');
        const onChangeSpy = jasmine.createSpy('onChangeSpy');
        const onRemoveSpy = jasmine.createSpy('onRemoveSpy');

        const element = getDualListWithEvents(
          onAddSpy,
          onChangeSpy,
          onRemoveSpy,
          sourceStrings,
          targetStrings,
        );

        // Source click
        const source = element.find('oui-dual-list-source')[0];
        const sourceItem = angular.element(source.querySelector('.oui-dual-list-item:first-child'));
        sourceItem.triggerHandler('click');

        expect(onAddSpy).toHaveBeenCalled();
        expect(onChangeSpy).toHaveBeenCalled();

        // Target click
        const target = element.find('oui-dual-list-target')[0];
        const targetItem = angular.element(target.querySelector('.oui-dual-list-item:first-child'));
        targetItem.triggerHandler('click');

        expect(onRemoveSpy).toHaveBeenCalled();
        expect(onChangeSpy).toHaveBeenCalled();
      });
    });
  });
});
