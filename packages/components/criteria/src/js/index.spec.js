import '@ovh/ui-kit.core/src/js/test-utils';
import './index';

describe('ouiCriteria', () => {
  let testUtils;
  let $timeout;

  const goodSearchText = 'aa';
  const tooShortSearchText = 'a';

  const criterion = {
    property: 'column1',
    operator: 'equal',
    value: 'test',
  };

  const criterion2 = {
    property: 'column2',
    operator: 'equal',
    value: 'test',
  };

  const previewCriterion = {
    property: 'column3',
    operator: 'equal',
    value: 'test',
    preview: true,
  };

  const previewCriterion2 = {
    property: 'column3',
    operator: 'equal',
    value: 'anotherTest',
    preview: true,
  };

  beforeEach(angular.mock.module('oui.criteria'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    testUtils = _TestUtils_;
  }));

  describe('Controller', () => {
    let component;
    let controller;

    beforeEach(() => {
      component = testUtils.compileTemplate('<oui-criteria model="$ctrl.model"></oui-criteria>', {
        model: [],
      });

      controller = component.controller('ouiCriteria');
      controller.onChange = jasmine.createSpy('onChange');
    });

    it('should init the criteria if not defined', () => {
      expect(controller.model).toEqual([]);
    });

    it('should add a criteria', () => {
      expect(controller.model.length).toEqual(0);

      controller.add(criterion);
      expect(controller.model.length).toEqual(1);
      expect(controller.model[0]).toEqual(criterion);

      expect(controller.onChange).toHaveBeenCalledWith({ modelValue: [criterion] });
    });

    it('should not add an existing criteria', () => {
      controller.model.push(criterion);
      expect(controller.model.length).toEqual(1);

      controller.add(criterion);
      expect(controller.model.length).toEqual(1);

      expect(controller.onChange).not.toHaveBeenCalled();
    });

    it('should delete a criteria', () => {
      controller.model.push(criterion);
      controller.model.push(criterion2);
      const expectedLength = 2;
      expect(controller.model.length).toEqual(expectedLength);

      controller.remove(criterion);
      expect(controller.model.length).toEqual(1);
      expect(controller.model[0]).toEqual(criterion2);

      expect(controller.onChange).toHaveBeenCalledWith({ modelValue: [criterion2] });
    });

    it('should not delete a nonexistent criteria', () => {
      controller.model.push(criterion);

      expect(() => controller.remove(criterion2)).not.toThrow();
      expect(controller.onChange).toHaveBeenCalled();
    });

    it('should set all criteria', () => {
      const criteria = [criterion, criterion2];
      expect(controller.model.length).toEqual(0);

      controller.set(criteria);
      const expectedLength = 2;
      expect(controller.model.length).toEqual(expectedLength);
    });

    it('should delete all criteria', () => {
      controller.model.push(criterion);
      controller.model.push(criterion2);
      const expectedLength = 2;
      expect(controller.model.length).toEqual(expectedLength);

      controller.clear();
      expect(controller.model.length).toEqual(0);
    });

    describe('Preview criterion', () => {
      it('should be added if nonexistent', () => {
        expect(controller.model.length).toEqual(0);

        controller.setPreviewCriterion(previewCriterion);
        expect(controller.model.length).toEqual(1);
      });

      it('should be removed', () => {
        controller.model.push(previewCriterion);
        expect(controller.model.length).toEqual(1);

        controller.deletePreviewCriterion();
        expect(controller.model.length).toEqual(0);
      });

      it('should replace previous preview criterion', () => {
        controller.model.push(previewCriterion);

        controller.setPreviewCriterion(previewCriterion2);
        expect(controller.model.length).toEqual(1);
        expect(controller.model[0]).toEqual(previewCriterion2);
      });

      it('should be deleted if an equivalent non-preview criterion is added', () => {
        const nonPreviewCriterion = Object.assign({}, previewCriterion);
        nonPreviewCriterion.preview = false;

        // Initial state
        controller.model.push(previewCriterion);

        controller.add(nonPreviewCriterion);

        expect(controller.model.length).toEqual(1);
        expect(controller.model[0]).toEqual(nonPreviewCriterion);
      });
    });
  });

  describe('With criteria container', () => {
    // Unfortunately, lodash prevent setTimeout to be mocked
    const debounceDelay = 800;

    describe('on submit', () => {
      it('should add criterion in criteria container', (done) => {
        const searchText = goodSearchText;
        const onChangeSpy = jasmine.createSpy();
        const element = testUtils.compileTemplate(`
                    <oui-criteria model="$ctrl.model" on-change="$ctrl.onChangeSpy(modelValue)" searchable></oui-criteria>
                `, {
          onChangeSpy,
        });

        const input = element.find('input');
        input.val(searchText).triggerHandler('input');

        // Need to flush for the debounce
        $timeout.flush();

        element.find('form').triggerHandler('submit');

        setTimeout(() => {
          expect(onChangeSpy).toHaveBeenCalledWith([
            {
              title: searchText,
              property: null,
              operator: 'contains',
              value: searchText,
            },
          ]);
          done();
        }, debounceDelay);
      });

      it('should not add criterion in criteria container if the text is too short', (done) => {
        const searchText = tooShortSearchText;
        const onChangeSpy = jasmine.createSpy();
        const element = testUtils.compileTemplate(`
                    <oui-criteria model="$ctrl.model" on-change="$ctrl.onChangeSpy(modelValue)" searchable></oui-criteria>
                `, {
          onChangeSpy,
        });

        const input = element.find('input');
        input.val(searchText).triggerHandler('input');

        // Need to flush for the debounce
        $timeout.flush();

        element.find('form').triggerHandler('submit');

        setTimeout(() => {
          expect(onChangeSpy).not.toHaveBeenCalled();
          done();
        }, debounceDelay);
      });
    });

    describe('on change', () => {
      it('should add criterion in criteria container', (done) => {
        const searchText = goodSearchText;
        const onChangeSpy = jasmine.createSpy();
        const element = testUtils.compileTemplate(`
                    <oui-criteria model="$ctrl.model" on-change="$ctrl.onChangeSpy(modelValue)" searchable></oui-criteria>
                `, {
          onChangeSpy,
        });

        const input = element.find('input');
        input.val(searchText).triggerHandler('input');

        // Need to flush for the debounce
        $timeout.flush();

        setTimeout(() => {
          expect(onChangeSpy).toHaveBeenCalledWith([{
            title: goodSearchText,
            property: null,
            operator: 'contains',
            value: goodSearchText,
            preview: true,
          }]);
          done();
        }, debounceDelay);
      });

      it('should not add criterion in criteria container if text is too short', (done) => {
        const onChangeSpy = jasmine.createSpy();
        const element = testUtils.compileTemplate(`
                    <oui-criteria model="$ctrl.model" on-change="$ctrl.onChangeSpy(modelValue)" searchable></oui-criteria>
                `, {
          onChangeSpy,
        });
        const delay = 850;

        setTimeout(() => {
          const input = element.find('input');
          input.val(tooShortSearchText).triggerHandler('input');
          expect(onChangeSpy).not.toHaveBeenCalled();
          done();
        }, delay);
      });

      it('should delete preview criterion if search becomes too short', (done) => {
        const searchText = goodSearchText;
        const onChangeSpy = jasmine.createSpy();
        const element = testUtils.compileTemplate(`
                    <oui-criteria model="$ctrl.model" on-change="$ctrl.onChangeSpy(modelValue)" searchable></oui-criteria>
                `, {
          onChangeSpy,
        });

        const input = element.find('input');
        input.val(searchText).triggerHandler('input');

        // Need to flush for the debounce
        $timeout.flush();

        setTimeout(() => {
          expect(onChangeSpy).toHaveBeenCalledWith([{
            title: goodSearchText,
            property: null,
            operator: 'contains',
            value: goodSearchText,
            preview: true,
          }]);

          input.val(tooShortSearchText);
          input.triggerHandler('input');

          // Need to flush for the debounce
          $timeout.flush();

          setTimeout(() => {
            expect(onChangeSpy).toHaveBeenCalledWith([]);
            done();
          }, debounceDelay);
        }, debounceDelay);
      });
    });

    describe('on reset', () => {
      it('should delete preview criterion', (done) => {
        const onChangeSpy = jasmine.createSpy();
        const element = testUtils.compileTemplate(`
                    <oui-criteria model="$ctrl.model" on-change="$ctrl.onChangeSpy(modelValue)" searchable></oui-criteria>
                `, {
          onChangeSpy,
        });

        const input = element.find('input');
        const resetButton = element.find('button').eq(0);

        // Add preview criterion.
        input.val(goodSearchText).triggerHandler('input');

        // Need to flush for the debounce
        $timeout.flush();

        setTimeout(() => {
          expect(onChangeSpy).toHaveBeenCalledWith([{
            title: goodSearchText,
            property: null,
            operator: 'contains',
            value: goodSearchText,
            preview: true,
          }]);

          resetButton.triggerHandler('click');

          setTimeout(() => {
            expect(onChangeSpy).toHaveBeenCalledWith([]);
            done();
          }, debounceDelay);
        }, debounceDelay);
      });
    });
  });
});
