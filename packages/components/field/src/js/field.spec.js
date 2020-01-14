import '@ovh-ux/ui-kit.checkbox';
import '@ovh-ux/ui-kit.radio';
import '@ovh-ux/ui-kit.select';

import noop from 'lodash/noop';

describe('ouiField', () => {
  let $timeout;
  let TestUtils;

  beforeEach(angular.mock.module('oui.field'));
  beforeEach(angular.mock.module('oui.checkbox'));
  beforeEach(angular.mock.module('oui.radio'));
  beforeEach(angular.mock.module('oui.select'));
  beforeEach(angular.mock.module('oui.test-utils'));

  beforeEach(inject((_$timeout_, _TestUtils_) => {
    $timeout = _$timeout_;
    TestUtils = _TestUtils_;
  }));

  const getField = (elt) => elt.find('oui-field');
  const getLabel = (elt) => elt[0].querySelector('label');
  const getPopover = (elt) => elt[0].querySelector('.oui-popover');
  const getError = (elt) => elt[0].querySelector('.oui-field__error');
  const getHelper = (elt) => elt[0].querySelector('.oui-field__helper');
  const getElementByClass = (element, value) => angular.element(element[0].querySelector(value));
  const getControl = (controller, name) => angular.element(controller.controls[name][0]);

  describe('Component', () => {
    describe('with wrong usage', () => {
      it("should throw an error if the form control has no 'name' attribute", () => {
        TestUtils.compileTemplate(`
                    <oui-field label="{{'Lastname'}}">
                        <input
                            class="oui-input"
                            type="text"
                            id="lastname">
                    </oui-field>
                `);

        // Name attribute validation is done on next tick with a $timeout.
        expect(() => $timeout.flush()).toThrow();
      });
    });

    describe('default behavior', () => {
      it('should decorate the field', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'Lastname'}}">
                        <input name="lastname"/>
                    </oui-field>
                `);
        $timeout.flush();

        expect(getLabel(element)).toBeDefined();
        expect(getError(element)).toBeDefined();
        expect(getHelper(element)).toBeDefined();
      });

      it('should not show the label tag if no label defined', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-field>
                        <input name="lastname"/>
                    </oui-field>
                `);
        $timeout.flush();

        expect(getLabel(element)).toBeNull();
      });

      it('should set auto as default field size', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-field>
                        <input name="lastname"/>
                    </oui-field>
                `);
        $timeout.flush();

        expect(getElementByClass(element, '.oui-field__control_auto').length).toEqual(1);
      });

      it('should set defined size as field size', () => {
        const size = 'xs';
        const element = TestUtils.compileTemplate(`
                    <oui-field size="${size}">
                        <input name="lastname"/>
                    </oui-field>
                `);
        $timeout.flush();

        expect(getElementByClass(element, `.oui-field__control_${size}`).length).toEqual(1);
      });

      it('should not add popover if label is not defined', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-field label-popover="{{'test'}}">
                        <input name="lastname"/>
                    </oui-field>
                `);
        $timeout.flush();

        expect(getLabel(element)).toBeNull();
        expect(getPopover(element)).toBeNull();
      });

      it('should add popover if label and label-popover is defined', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'Lastname'}}" label-popover="{{'test'}}">
                        <input name="lastname"/>
                    </oui-field>
                `);
        $timeout.flush();

        expect(getLabel(element)).toBeDefined();
        expect(getPopover(element)).toBeDefined();
      });

      it('should add aria-describedby to the input if label has popover', () => {
        const element = TestUtils.compileTemplate(`
                    <form name="form">
                        <oui-field label="{{'username'}}" label-popover="{{'test'}}">
                            <input type="text"
                                class="oui-input"
                                type="text"
                                id="username"
                                name="username"
                                minlength="6"
                                ng-model="$ctrl.username">
                        </oui-field>
                    </form>
                `);
        const controller = getField(element).controller('ouiField');

        $timeout.flush();

        const $control = getControl(controller, 'username');
        const $popoverContent = getElementByClass(element, '.oui-popover__content');
        expect($control[0].getAttribute('aria-describedby')).toEqual($popoverContent[0].getAttribute('id'));
      });
    });

    describe('with input', () => {
      it("should set the 'for' attribute on label", () => {
        const id = 'lastname';

        const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'Lastname'}}">
                        <input
                            class="oui-input"
                            type="text"
                            id="{{ $ctrl.id }}"
                            name="lastname"
                            ng-model="$ctrl.user.lastname">
                    </oui-field>
                `, {
          id,
        });

        $timeout.flush();

        expect(getLabel(element).getAttribute('for')).toEqual(id);
      });

      it('should trigger error when invalid format', () => {
        const element = TestUtils.compileTemplate(`
                    <form name="form">
                        <oui-field label="{{'username'}}">
                            <input type="text"
                                class="oui-input"
                                type="text"
                                id="username"
                                name="username"
                                ng-model="$ctrl.username"
                                ng-pattern="/^[a-zA-Z]{3,8}$/">
                        </oui-field>
                    </form>
                    `);
        const controller = getField(element).controller('ouiField');

        $timeout.flush();

        const $control = getControl(controller, 'username');
        $control.val('ch@t12');
        $control.triggerHandler('input');
        $control.triggerHandler('blur');

        expect(controller.getFirstError().pattern).toBeTruthy();
      });

      it('should trigger error when length too short', () => {
        const element = TestUtils.compileTemplate(`
                    <form name="form">
                        <oui-field label="{{'username'}}">
                            <input type="text"
                                class="oui-input"
                                type="text"
                                id="username"
                                name="username"
                                minlength="6"
                                ng-model="$ctrl.username">
                        </oui-field>
                    </form>
                    `);
        const controller = getField(element).controller('ouiField');

        $timeout.flush();

        const $control = getControl(controller, 'username');
        $control.val('abc');
        $control.triggerHandler('input');
        $control.triggerHandler('blur');

        expect(controller.getFirstError().minlength).toBeTruthy();
      });

      it('should set the name of the form field in the controller', () => {
        const name = 'lastname';

        const element = TestUtils.compileTemplate(`
                    <oui-field>
                        <input
                            class="oui-input"
                            type="text"
                            id="lastname"
                            name="{{ $ctrl.name }}"
                            ng-model="$ctrl.user.lastname">
                    </oui-field>
                `, {
          name,
        });

        $timeout.flush();

        const controller = element.controller('ouiField');
        expect(Object.keys(controller.controls)).toContain(name);
      });

      it('should be aware of validation parameters set on form control (HTML attributes)', () => {
        const validation = {
          min: 0,
          max: 140,
          minlength: 1,
          maxlength: 3,
        };

        const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'User'}}">
                        <input
                            class="oui-input"
                            type="number"
                            id="age"
                            name="age"
                            ng-model="$ctrl.user.age"
                            ng-min="{{$ctrl.validation.min}}"
                            ng-max="{{$ctrl.validation.max}}">
                        <input
                            class="oui-input"
                            type="text"
                            id="name"
                            name="name"
                            ng-model="$ctrl.user.name"
                            ng-minlength="{{$ctrl.validation.minlength}}"
                            ng-maxlength="{{$ctrl.validation.maxlength}}">
                    </oui-field>
                `, {
          validation,
        });

        $timeout.flush();

        const controller = element.controller('ouiField');
        expect(controller.validationParameters.age.min).toEqual(`${validation.min}`);
        expect(controller.validationParameters.age.max).toEqual(`${validation.max}`);
        expect(controller.validationParameters.name.minlength).toEqual(`${validation.minlength}`);
        expect(controller.validationParameters.name.maxlength).toEqual(`${validation.maxlength}`);
      });

      it('should be aware of validation parameters set on form control (NG attributes)', () => {
        const validation = {
          min: 0,
          max: 140,
          minlength: 1,
          maxlength: 3,
        };

        const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'Age'}}">
                        <input
                            class="oui-input"
                            type="number"
                            id="age"
                            name="age"
                            ng-model="$ctrl.user.age"
                            ng-min="{{$ctrl.validation.min}}"
                            ng-max="{{$ctrl.validation.max}}">
                        <input
                            class="oui-input"
                            type="number"
                            id="name"
                            name="name"
                            ng-model="$ctrl.user.name"
                            ng-minlength="{{$ctrl.validation.minlength}}"
                            ng-maxlength="{{$ctrl.validation.maxlength}}">
                    </oui-field>
                `, {
          validation,
        });

        $timeout.flush();

        const controller = element.controller('ouiField');
        expect(controller.validationParameters.age.min).toEqual(`${validation.min}`);
        expect(controller.validationParameters.age.max).toEqual(`${validation.max}`);
        expect(controller.validationParameters.name.minlength).toEqual(`${validation.minlength}`);
        expect(controller.validationParameters.name.maxlength).toEqual(`${validation.maxlength}`);
      });

      it('should show the error on blur', () => {
        const element = TestUtils.compileTemplate(`
                    <form name="form">
                        <oui-field label="{{'Age'}}">
                            <input
                                class="oui-input"
                                type="number"
                                id="age"
                                name="age"
                                ng-model="age"
                                required>
                        </oui-field>
                    </form>
                    `);

        $timeout.flush();

        expect(getError(element)).toBeNull();

        const controller = getField(element).controller('ouiField');
        getControl(controller, 'age').triggerHandler('blur');
        $timeout.flush();

        expect(getError(element)).not.toBeNull();
      });

      it('should show the error on focus, when the field is already in error', () => {
        const element = TestUtils.compileTemplate(`
                    <form name="form">
                        <oui-field label="{{'Age'}}">
                            <input
                                class="oui-input"
                                type="number"
                                id="age"
                                name="age"
                                ng-model="age"
                                required>
                        </oui-field>
                    </form>
                    `);
        const controller = getField(element).controller('ouiField');

        $timeout.flush();

        // Set initial state
        const $control = getControl(controller, 'age');
        $control.triggerHandler('blur');
        $timeout.flush();
        expect(getError(element)).not.toBeNull();

        $control.triggerHandler('focus');
        $timeout.flush();
        expect(getError(element)).not.toBeNull();
      });
    });

    // We assume that if ouiField is able to find the form field,
    // ouiField will also be able to find it's name and id.
    describe('with select', () => {
      it('should detect the select component', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'OS'}}">
                        <label class="oui-select">
                            <select id="os" name="os" class="oui-select__input">
                                <option>Select the OS</option>
                                <option value="freebsd">FreeBSD</option>
                                <option value="linux">Linux</option>
                                <option value="osx">OSX</option>
                                <option value="windows">Windows</option>
                            </select>
                            <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
                        </label>
                    </oui-field>
                    `);

        $timeout.flush();

        const controller = element.controller('ouiField');
        expect(getControl(controller, 'os')).toBeDefined();
      });
    });

    // We assume that if ouiField is able to find the form field,
    // ouiField will also be able to find it's name and id.
    describe('with textarea', () => {
      it('should detect the textarea component', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'OS'}}">
                        <textarea
                            class="oui-textarea"
                            id="description"
                            name="description"
                            ng-model="$ctrl.server.description">
                        </textarea>
                    </oui-field>
                    `);

        $timeout.flush();

        const controller = element.controller('ouiField');
        expect(getControl(controller, 'description')).toBeDefined();
      });
    });

    // Custom components

    describe('with radio buttons', () => {
      it('should detect all the radio buttons', () => {
        const name = 'protocol';
        const expectedLength = 3;

        const element = TestUtils.compileTemplate(`
                    <oui-field>
                        <oui-radio
                            name="{{ $ctrl.name }}"
                            model="$ctrl.protocol"
                            value="'http'">HTTP</oui-radio>
                        <oui-radio
                            name="{{ $ctrl.name }}"
                            model="$ctrl.protocol"
                            value="'tcp'">TCP</oui-radio>
                        <oui-radio
                            name="{{ $ctrl.name }}"
                            model="$ctrl.protocol"
                            value="'udp'"
                            disabled>UDP</oui-radio>
                    </oui-field>
                `, {
          name,
        });

        $timeout.flush();

        const controller = element.controller('ouiField');

        // There is 3 HTML elements with the same name
        expect(controller.controls[name].length).toEqual(expectedLength);
      });
    });

    describe('with checkboxes', () => {
      it('should detect all checkboxes', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-field>
                        <oui-checkbox
                            name="ssl"
                            model="$ctrl.ssl">SSL</oui-checkbox>
                        <oui-checkbox
                            name="hsts"
                            model="$ctrl.hsts">HSTS</oui-checkbox>
                    </oui-field>
                    `);

        $timeout.flush();

        const controller = element.controller('ouiField');
        expect(getControl(controller, 'ssl')).toBeDefined();
        expect(getControl(controller, 'hsts')).toBeDefined();
      });
    });

    describe('with oui-select', () => {
      const getDropdownButton = (element) => element[0].querySelector('.ui-select-match');
      const getSelectController = (element) => element.find('oui-select').controller('ouiSelect');

      it('should give focus to oui-select after on label click', () => {
        const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'Recovery OS'}}">
                        <oui-select name="recovery_os"
                            model="$ctrl.model"
                            data-title="Select the recovery OS"
                            placeholder="Select the recovery OS..."
                            items="$ctrl.list"
                            match="label">
                            <span ng-bind="$item.label"></span>
                        </oui-select>
                    </oui-field>
                `, {
          list: [
            { name: 'foo' },
            { name: 'bar' },
          ],
        });

        $timeout.flush();

        const selectController = getSelectController(element);
        const $label = angular.element(getLabel(element));
        selectController.$select.focusser[0].focus = jasmine.createSpy();

        $label.triggerHandler('click');
        expect(selectController.$select.focusser[0].focus).toHaveBeenCalled();
      });

      it('should show errors when blur is triggered on select', () => {
        const element = TestUtils.compileTemplate(`
                    <form>
                        <oui-field label="{{'Recovery OS'}}">
                            <oui-select name="recovery_os"
                                model="$ctrl.model"
                                data-title="Select the recovery OS"
                                placeholder="Select the recovery OS..."
                                items="$ctrl.list"
                                match="label">
                                <span ng-bind="$item.label"></span>
                            </oui-select>
                        </oui-field>
                    </form>
                `, {
          list: [
            { name: 'foo' },
            { name: 'bar' },
          ],
        });

        const $dropdownButton = angular.element(getDropdownButton(element));

        expect(element[0].querySelector('.oui-field__error')).toBeNull();

        // Pass the $postLink $timeout (ouiSelect).
        $timeout.flush();
        $dropdownButton.triggerHandler('blur');

        expect(element[0].querySelector('.oui-field__error')).toBeDefined();
      });

      it('should hide errors when focus is triggered on select', () => {
        const element = TestUtils.compileTemplate(`
                    <form>
                        <oui-field label="{{'Recovery OS'}}">
                            <oui-select name="recovery_os"
                                model="$ctrl.model"
                                data-title="Select the recovery OS"
                                placeholder="Select the recovery OS..."
                                items="$ctrl.list"
                                match="label">
                                <span ng-bind="$item.label"></span>
                            </oui-select>
                        </oui-field>
                    </form>
                `, {
          list: [
            { name: 'foo' },
            { name: 'bar' },
          ],
        });

        const $dropdownButton = angular.element(getDropdownButton(element));

        $timeout.flush();

        // Set errors visible
        $dropdownButton.triggerHandler('blur');
        expect(element[0].querySelector('.oui-field__error')).toBeDefined();

        $dropdownButton.triggerHandler('focus');

        expect(element[0].querySelector('.oui-field__error')).toBeNull();
      });
    });

    describe('with validation', () => {
      it('should retrieve custom error messages', () => {
        const message = 'Username must be a least 6 characters.';

        const element = TestUtils.compileTemplate(`
                    <form name="form">
                        <oui-field label="{{'username'}}"
                            error-messages="{minlength: '${message}'}">
                            <input type="text"
                                class="oui-input"
                                type="text"
                                id="username"
                                name="username"
                                ng-minlength="6"
                                ng-model="$ctrl.username">
                        </oui-field>
                    </form>
                    `);

        const controller = getField(element).controller('ouiField');

        $timeout.flush();

        const $control = getControl(controller, 'username');
        $control.val('abc');
        $control.triggerHandler('input');
        $control.triggerHandler('blur');

        $timeout.flush();

        expect(controller.getFirstError().minlength).toBeTruthy();
        expect(controller.getErrorMessage('minlength')).toBe(message);
      });

      it('should give a message containing parameters', () => {
        const messageMinlength = 5;

        const element = TestUtils.compileTemplate(`
                    <form name="form">
                        <oui-field label="{{'username'}}">
                            <input type="text"
                                class="oui-input"
                                type="text"
                                id="username"
                                name="username"
                                ng-minlength="${messageMinlength}"
                                ng-model="$ctrl.username">
                        </oui-field>
                    </form>
                    `);

        const controller = getField(element).controller('ouiField');

        $timeout.flush();

        const $control = getControl(controller, 'username');
        $control.val('abc');
        $control.triggerHandler('input');
        $control.triggerHandler('blur');

        $timeout.flush();

        expect(controller.getFirstError().minlength).toBeTruthy();
        expect(controller.getErrorMessage('minlength')).toContain(messageMinlength);
      });

      it('should show error on submit', () => {
        const element = TestUtils.compileTemplate(`
                    <form name="form" ng-submit="$ctrl.noop()">
                        <oui-field label="{{'username'}}">
                            <input type="text"
                                class="oui-input"
                                type="text"
                                id="username"
                                name="username"
                                required
                                ng-model="$ctrl.username">
                        </oui-field>
                    </form>
                `, {
          noop,
        });
        const controller = getField(element).controller('ouiField');
        $timeout.flush();

        expect(element[0].querySelector('.oui-field__error')).toBeNull();

        controller.form.$submitted = true;
        element.triggerHandler('submit');

        expect(element[0].querySelector('.oui-field__error')).not.toBeNull();
      });

      it('should show error on focus after on submit', () => {
        const element = TestUtils.compileTemplate(`
                    <form name="form" ng-submit="$ctrl.noop()">
                        <oui-field label="{{'username'}}">
                            <input type="text"
                                class="oui-input"
                                type="text"
                                id="username"
                                name="username"
                                required
                                ng-model="$ctrl.username">
                        </oui-field>
                        <button type="submit">Ok</button>
                    </form>
                `, {
          noop,
        });
        const controller = getField(element).controller('ouiField');
        $timeout.flush();

        const $control = getControl(controller, 'username');

        // Initial state
        controller.form.$submitted = true;
        element.triggerHandler('submit');
        expect(element[0].querySelector('.oui-field__error')).not.toBeNull();

        $control.triggerHandler('focus');
        $timeout.flush();
        expect(element[0].querySelector('.oui-field__error')).not.toBeNull();
      });
    });
  });
});
