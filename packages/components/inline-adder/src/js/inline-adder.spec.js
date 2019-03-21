import '@ovh/ui-kit.test/src/test-utils';
import '../index';

describe('ouiInlineAdder', () => {
  let TestUtils;
  let $timeout;
  let configuration;

  beforeEach(angular.mock.module('oui.inline-adder'));
  beforeEach(angular.mock.module('oui.inline-adder.configuration'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_TestUtils_, _$timeout_) => {
    TestUtils = _TestUtils_;
    $timeout = _$timeout_;
  }));

  describe('Provider', () => {
    angular.module('oui.inline-adder.configuration', [
      'oui.inline-adder',
    ]).config((ouiInlineAdderConfigurationProvider) => {
      ouiInlineAdderConfigurationProvider.setTranslations({
        foo: 'bar',
      });
    });

    beforeEach(inject((_ouiInlineAdderConfiguration_) => {
      configuration = _ouiInlineAdderConfiguration_;
    }));

    it('should have custom options', () => {
      expect(configuration.translations.foo).toEqual('bar');
    });
  });

  describe('Component', () => {
    describe('oui-inline-adder', () => {
      it('should have a default classname', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-inline-adder>
                        <oui-inline-adder-row>
                            <oui-inline-adder-field>
                                <oui-field label="Field 1">
                                    <input type="text" class="oui-input" name="field1" required>
                                </oui-field>
                            </oui-inline-adder-field>
                        </oui-inline-adder-row>
                    </oui-inline-adder>`);

        $timeout.flush();

        expect(element.hasClass('oui-inline-adder')).toBeTruthy();
      });

      it('should have a form with a default id/name', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-inline-adder>
                        <oui-inline-adder-row>
                            <oui-inline-adder-field>
                                <oui-field label="Field 1">
                                    <input type="text" class="oui-input" name="field1" required>
                                </oui-field>
                            </oui-inline-adder-field>
                        </oui-inline-adder-row>
                    </oui-inline-adder>`);

        const form = element.find('form');
        const id = `${element.controller('ouiInlineAdder').id}_0`;
        const name = `${element.controller('ouiInlineAdder').name}_0`;

        expect(form.length).toBe(1);
        expect(form.attr('id')).toBe(id);
        expect(form.attr('name')).toBe(name);
      });

      it('should create a new form when submitted', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-inline-adder>
                        <oui-inline-adder-row>
                            <oui-inline-adder-field>
                                <oui-field label="Field 1">
                                    <input type="text" class="oui-input" name="field1" required>
                                </oui-field>
                            </oui-inline-adder-field>
                        </oui-inline-adder-row>
                    </oui-inline-adder>`);

        let { length } = element.find('form');

        // Will have 2 rows
        angular.element(element.find('form')[length - 1]).triggerHandler('submit');
        expect(element.find('form').length).toBe(length += 1);

        // Will have 3 rows
        angular.element(element.find('form')[length - 1]).triggerHandler('submit');
        expect(element.find('form').length).toBe(length += 1);
      });

      it('should hide a form when removed', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-inline-adder>
                        <oui-inline-adder-row>
                            <oui-inline-adder-field>
                                <oui-field label="Field 1">
                                    <input type="text" class="oui-input" name="field1" required>
                                </oui-field>
                            </oui-inline-adder-field>
                        </oui-inline-adder-row>
                    </oui-inline-adder>`);

        let { length } = element.find('form');
        const form = angular.element(element.find('form')[0]);

        // Will have 2 rows
        form.triggerHandler('submit');
        expect(element.find('form').length).toBe(length += 1);

        // Will have 1 row hidden
        form.find('button').triggerHandler('click');
        expect(form.hasClass('ng-hide')).toBeTruthy();
      });
    });

    describe('oui-inline-adder-row', () => {
      it('should have a default classname', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-inline-adder>
                        <oui-inline-adder-row>
                            <oui-inline-adder-field>
                                <oui-field label="Field 1">
                                    <input type="text" class="oui-input" name="field1" required>
                                </oui-field>
                            </oui-inline-adder-field>
                        </oui-inline-adder-row>
                    </oui-inline-adder>`);

        $timeout.flush();

        expect(element.find('oui-inline-adder-row').hasClass('oui-inline-adder__row')).toBeTruthy();
      });
    });

    describe('oui-inline-adder-field', () => {
      it('should have a default classname', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-inline-adder>
                        <oui-inline-adder-row>
                            <oui-inline-adder-field>
                                <oui-field label="Field 1">
                                    <input type="text" class="oui-input" name="field1" required>
                                </oui-field>
                            </oui-inline-adder-field>
                        </oui-inline-adder-row>
                    </oui-inline-adder>`);

        $timeout.flush();

        expect(element.find('oui-inline-adder-field').hasClass('oui-inline-adder__field')).toBeTruthy();
      });

      it('should have a variant classname', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-inline-adder>
                        <oui-inline-adder-row>
                            <oui-inline-adder-field adaptive>
                                <oui-field label="Field 1">
                                    <input type="text" class="oui-input" name="field1" required>
                                </oui-field>
                            </oui-inline-adder-field>
                        </oui-inline-adder-row>
                    </oui-inline-adder>`);

        $timeout.flush();

        expect(element.find('oui-inline-adder-field').hasClass('oui-inline-adder__field_adaptive')).toBeTruthy();
      });
    });
  });
});
