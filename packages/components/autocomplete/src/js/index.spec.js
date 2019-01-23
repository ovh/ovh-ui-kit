import data from "./index.spec.data.json";

describe("ouiAutocomplete", () => {
    let $document;
    let $timeout;
    let testUtils;

    beforeEach(angular.mock.module("oui.autocomplete"));
    beforeEach(angular.mock.module("oui.autocomplete.configuration"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$document_, _$timeout_, _TestUtils_) => {
        $document = _$document_;
        $timeout = _$timeout_;
        testUtils = _TestUtils_;
    }));

    describe("Provider", () => {
        let configuration;

        angular.module("oui.autocomplete.configuration", [
            "oui.autocomplete"
        ]).config(ouiAutocompleteConfigurationProvider => {
            ouiAutocompleteConfigurationProvider.setOptions({
                foo: "bar"
            });
        });

        beforeEach(inject(_ouiAutocompleteConfiguration_ => {
            configuration = _ouiAutocompleteConfiguration_;
        }));

        it("should have custom options", () => {
            expect(configuration.options.foo).toEqual("bar");
        });
    });

    describe("Directive", () => {
        describe("Init", () => {
            let component;
            let input;
            let autocomplete;
            let autocompleteCtrl;
            let controller;

            beforeEach(() => {
                component = testUtils.compileTemplate(`<div><input type="text" class="trigger"
                    oui-autocomplete="$ctrl.suggestions"
                    ng-model="$ctrl.model"></div>`, {
                    suggestions: data.strings
                });

                $timeout.flush();

                input = angular.element(component[0].querySelector(".trigger"));
                autocomplete = input.next();
                autocompleteCtrl = component.scope().$$childHead.$autocompleteCtrl;
                controller = component.scope().$ctrl;
            });

            it("should prepare trigger input and create a datalist, next to it", () => {
                expect(input.attr("list")).toBeDefined();
                expect(input.attr("autocomplete")).toBe("off");

                expect(autocomplete.length).toBe(1);
                expect(autocomplete.attr("id")).toBeDefined();
                expect(autocomplete.hasClass("oui-autocomplete")).toBeTruthy();
            });

            it("should create popper helper when input is focused", () => {
                expect(autocompleteCtrl.popper).toBeUndefined();

                input.triggerHandler("focus");
                expect(autocompleteCtrl.popper).toBeDefined();
            });

            it("should initialize search engine", () => {
                const engine = autocompleteCtrl.engine;
                expect(engine.local.length).toBe(controller.suggestions.length);
            });

            it("should update search engine", () => {
                controller.suggestions = [];
                component.scope().$apply();

                const engine = autocompleteCtrl.engine;
                expect(engine.local.length).toBe(controller.suggestions.length);
            });
        });

        describe("Search", () => {
            const debounceDelay = 500;
            const searchValue = "belgium";
            const KEYBOARD_KEYS = {
                TAB: 9,
                SHIFT: 16,
                ESC: 27,
                UP: 38,
                DOWN: 40
            };

            let component;
            let input;
            let autocomplete;
            let autocompleteCtrl;

            beforeEach((done) => {
                component = testUtils.compileTemplate(`<div><input type="text" class="trigger"
                    oui-autocomplete="$ctrl.suggestions"
                    ng-model="$ctrl.model"></div>`, {
                    suggestions: data.strings
                });

                $timeout.flush();

                input = angular.element(component[0].querySelector(".trigger"));
                autocomplete = input.next();
                autocompleteCtrl = component.scope().$$childHead.$autocompleteCtrl;

                // Update input value and notify change to angularjs
                input.val(searchValue);
                input.triggerHandler("input");

                // Autocomplete has debounce delay before showing up
                setTimeout(() => {
                    $timeout.flush();
                    done();
                }, debounceDelay);
            });

            it("should update input value", () => {
                const suggestion = autocomplete.find("button");

                expect(autocomplete.find("button").length).toBe(1);
                expect(suggestion.text().toLowerCase()).toBe(searchValue);

                suggestion.triggerHandler("click");
                expect(input.val()).toBe(suggestion.text());
            });

            it("should navigate through suggestions with keyboard", () => {
                // Navigation start at last index of array (trigger input)
                // And is initialized on first keydown
                expect(autocompleteCtrl.navIndex).toBeUndefined();

                // Should be first item (loop)
                $document.triggerHandler({ type: "keydown", which: KEYBOARD_KEYS.DOWN });
                $document.triggerHandler({ type: "keyup", which: KEYBOARD_KEYS.DOWN });
                expect(autocompleteCtrl.navIndex).toBe(0);

                // Should be next item
                $document.triggerHandler({ type: "keydown", which: KEYBOARD_KEYS.TAB });
                $document.triggerHandler({ type: "keyup", which: KEYBOARD_KEYS.TAB });
                expect(autocompleteCtrl.navIndex).toBe(autocompleteCtrl.navLastIndex);

                // Should be prev item
                $document.triggerHandler({ type: "keydown", which: KEYBOARD_KEYS.UP });
                $document.triggerHandler({ type: "keyup", which: KEYBOARD_KEYS.UP });
                expect(autocompleteCtrl.navIndex).toBe(0);

                // Should be last item (loop)
                $document.triggerHandler({ type: "keydown", which: KEYBOARD_KEYS.SHIFT });
                $document.triggerHandler({ type: "keydown", which: KEYBOARD_KEYS.TAB });
                $document.triggerHandler({ type: "keyup", which: KEYBOARD_KEYS.SHIFT });
                $document.triggerHandler({ type: "keyup", which: KEYBOARD_KEYS.TAB });
                expect(autocompleteCtrl.navIndex).toBe(autocompleteCtrl.navLastIndex);

                // Should close datalist
                $document.triggerHandler({ type: "keydown", which: KEYBOARD_KEYS.ESC });
                $document.triggerHandler({ type: "keyup", which: KEYBOARD_KEYS.ESC });

                $timeout.flush();

                expect(autocomplete.hasClass("ng-hide")).toBeTruthy();
            });

            it("should close datalist when below minimum length", (done) => {
                input.val("");
                input.triggerHandler("input");

                setTimeout(() => {
                    $timeout.flush();
                    expect(autocomplete.hasClass("ng-hide")).toBeTruthy();
                    done();
                }, debounceDelay);
            });

            it("should close datalist when clicked outside", () => {
                $document.triggerHandler("click");

                $timeout.flush();

                expect(autocomplete.hasClass("ng-hide")).toBeTruthy();
            });
        });
    });
});
