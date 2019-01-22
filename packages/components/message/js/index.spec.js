import filter from "lodash/filter";

describe("ouiMessage", () => {

    let TestUtils;
    beforeEach(angular.mock.module("oui.message"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {

        it("should display text message from transclusion", () => {
            const message = "My message";
            const element = TestUtils.compileTemplate(`<oui-message>${message}</oui-message>`);

            expect(getBody(element)).toBe(message);
        });

        describe("when info type", () => {
            it("should display info icon", () => {
                const element = TestUtils.compileTemplate('<oui-message type="info"></oui-message>');

                expect(getIcons(element, "oui-icon-info_circle").length).toBe(1);
            });

            it("should display close button", () => {
                const element = TestUtils.compileTemplate('<oui-message type="info"></oui-message>');

                expect(getCloseButton(element)).toBeDefined();
            });

            it("should dismiss message when close button is clicked", () => {
                const element = TestUtils.compileTemplate('<oui-message type="info"></oui-message>');

                getCloseButton(element).click();

                expect(isMessageDisplayed(element)).toBe(false);
            });

            it("should assign binding value to aria-label attribute on close button", () => {
                const closeButtonLabel = "My label";
                const element = TestUtils.compileTemplate(`<oui-message type="info" aria-close-button-label="${closeButtonLabel}"></oui-message>`);

                expect(angular.element(getCloseButton(element)).attr("aria-label")).toBe(closeButtonLabel);
            });


            it("should raise on-dismissed event after close button is clicked", () => {
                const onDismissedSpy = jasmine.createSpy("onDismissedSpy");
                const element = TestUtils.compileTemplate('<oui-message type="info" on-dismissed="$ctrl.onDismissed()"></oui-message>', {
                    onDismissed: onDismissedSpy
                });

                getCloseButton(element).click();

                expect(onDismissedSpy).toHaveBeenCalled();
            });
        });

        describe("when success type", () => {
            it("should display success icon", () => {
                const element = TestUtils.compileTemplate('<oui-message type="success"></oui-message>');

                expect(getIcons(element, "oui-icon-success_circle").length).toBe(1);
            });

            it("should display close button", () => {
                const element = TestUtils.compileTemplate('<oui-message type="success"></oui-message>');

                expect(getCloseButton(element)).toBeDefined();
            });

            it("should dismiss message when close button is clicked", () => {
                const element = TestUtils.compileTemplate('<oui-message type="success"></oui-message>');

                getCloseButton(element).click();

                expect(isMessageDisplayed(element)).toBe(false);
            });

            it("should assign binding value to aria-label attribute on close button", () => {
                const closeButtonLabel = "My label";
                const element = TestUtils.compileTemplate(`<oui-message type="success" aria-close-button-label="${closeButtonLabel}"></oui-message>`);

                expect(angular.element(getCloseButton(element)).attr("aria-label")).toBe(closeButtonLabel);
            });


            it("should raise on-dismissed event after close button is clicked", () => {
                const onDismissedSpy = jasmine.createSpy("onDismissedSpy");
                const element = TestUtils.compileTemplate('<oui-message type="success" on-dismissed="$ctrl.onDismissed()"></oui-message>', {
                    onDismissed: onDismissedSpy
                });

                getCloseButton(element).click();

                expect(onDismissedSpy).toHaveBeenCalled();
            });
        });

        describe("when error type", () => {
            let element;
            beforeEach(() => {
                element = TestUtils.compileTemplate('<oui-message type="error"></oui-message>');
            });

            it("should display error icon", () => {
                expect(getIcons(element, "oui-icon-error_circle").length).toBe(1);
            });

            it("should not display close button", () => {
                expect(getCloseButton(element)).not.toBeDefined();
            });
        });

        describe("when warning type", () => {
            let element;
            beforeEach(() => {
                element = TestUtils.compileTemplate('<oui-message type="warning"></oui-message>');
            });

            it("should display warning icon", () => {
                expect(getIcons(element, "oui-icon-warning_circle").length).toBe(1);
            });

            it("should not display close button", () => {
                expect(getCloseButton(element)).not.toBeDefined();
            });
        });

        describe("when dismissable property is defined", () => {
            it("should show the close button if no value", () => {
                const element = TestUtils.compileTemplate('<oui-message type="error" dismissable></oui-message>');
                expect(getCloseButton(element)).toBeDefined();
            });

            it("should show the close button if property is true", () => {
                const element = TestUtils.compileTemplate('<oui-message type="error" dismissable="true"></oui-message>');
                expect(getCloseButton(element)).toBeDefined();
            });

            it("should not show the close button if property is false", () => {
                const element = TestUtils.compileTemplate('<oui-message type="error" dismissable="false"></oui-message>');
                expect(getCloseButton(element)).not.toBeDefined();
            });
        });
    });

    function getCloseButton (element) {
        return getElementsByClassName(element, "button", "oui-message__close-button")[0];
    }

    function getBody (element) {
        return angular.element(getElementsByClassName(element, "div", "oui-message__body")[0]).text();
    }

    function getIcons (element, className) {
        return getElementsByClassName(element, "span", className);
    }

    function isMessageDisplayed (element) {
        return getElementsByClassName(element, "div", "oui-message").length > 0;
    }

    function getElementsByClassName (element, tag, className) {
        return filter(element.find(tag), x => angular.element(x).hasClass(className));
    }
});
