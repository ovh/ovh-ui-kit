describe("ouiDropdown", () => {
    let TestUtils;
    let $document;
    let $timeout;

    beforeEach(angular.mock.module("oui.dropdown"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$document_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $document = _$document_;
        $timeout = _$timeout_;
    }));

    describe("Component", () => {
        it("should display the default trigger", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown>
                  <oui-dropdown-trigger text="TRIGGER"></oui-dropdown-trigger>
                  <oui-dropdown-content>
                    <b>the menu</b>
                  </oui-dropdown-content>
                </oui-dropdown>`
            );

            $timeout.flush();

            const trigger = element[0].querySelector(".oui-dropdown__trigger");
            expect(angular.element(trigger).hasClass("oui-button_dropdown")).toBeTruthy();
        });

        it("should have trigger and dropdown elements but no arrow", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown>
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const trigger = element[0].querySelector("[oui-dropdown-trigger]");
            const dropdown = element[0].querySelector("[oui-dropdown-content]");
            const arrow = element[0].querySelector(".oui-dropdown-menu__arrow");

            expect(angular.element(trigger)
                .hasClass("oui-dropdown__trigger")).toBeTruthy();
            expect(angular.element(dropdown)
                .hasClass("oui-dropdown-menu")).toBeTruthy();
            expect(arrow).toBeFalsy();
        });

        it("should have arrow element", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown arrow>
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const dropdown = element[0].querySelector("[oui-dropdown-content]");
            const $dropdown = angular.element(dropdown);
            const arrow = element[0].querySelector(".oui-dropdown-menu__arrow");

            expect(arrow).toBeTruthy();
            expect($dropdown.hasClass("oui-dropdown-menu_arrow")).toBeTruthy();
        });

        it("should display at bottom with the arrow centered by default", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown arrow>
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const controller = element.controller("ouiDropdown");
            controller.toggle();

            expect(controller.popper.options.placement).toEqual("bottom-start");
            expect(element[0].querySelector("[x-arrow]")).toBeDefined();
        });

        it("should display the dropdown aligned with the left border", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown align="start">
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const controller = element.controller("ouiDropdown");
            controller.toggle();

            expect(controller.popper.options.placement).toEqual("bottom-start");

            // Popper.js must not manage the arrow position in this case.
            expect(element[0].querySelector("[x-arrow]")).toBeNull();
        });

        it("should display the dropdown aligned with the right border", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown align="end">
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const controller = element.controller("ouiDropdown");
            controller.toggle();

            expect(controller.popper.options.placement).toEqual("bottom-end");

            // Popper.js must not manage the arrow position in this case.
            expect(element[0].querySelector("[x-arrow]")).toBeNull();
        });

        describe("Item", () => {
            it("should have default classname", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                        <oui-dropdown-trigger text="Actions"></oui-dropdown-trigger>
                        <oui-dropdown-content>
                            <oui-dropdown-item text="Lorem ipsum"></oui-dropdown-item>
                        </oui-dropdown-content>
                    </oui-dropdown>
                `);

                $timeout.flush();

                expect(element.find("oui-dropdown-item").hasClass("oui-dropdown-menu__item")).toBeTruthy();
            });

            it("should be sticky", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                        <oui-dropdown-trigger text="Actions"></oui-dropdown-trigger>
                        <oui-dropdown-content>
                            <oui-dropdown-item text="Lorem ipsum" href="#" sticky></oui-dropdown-item>
                        </oui-dropdown-content>
                    </oui-dropdown>
                `);

                $timeout.flush();

                expect(element.find("oui-dropdown-item").hasClass("oui-dropdown-menu__item_sticky")).toBeTruthy();
            });

            it("should be a button", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                        <oui-dropdown-trigger text="Actions"></oui-dropdown-trigger>
                        <oui-dropdown-content>
                            <oui-dropdown-item text="Lorem ipsum"></oui-dropdown-item>
                        </oui-dropdown-content>
                    </oui-dropdown>
                `);
                const button = element.find("oui-dropdown-item").find("button");

                expect(button.length).toBe(1);
                expect(button.hasClass("oui-dropdown-option")).toBeTruthy();
            });

            it("should be links", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                        <oui-dropdown-trigger text="Actions"></oui-dropdown-trigger>
                        <oui-dropdown-content>
                            <oui-dropdown-item text="Lorem ipsum" href="#"></oui-dropdown-item>
                            <oui-dropdown-item text="Lorem ipsum" state="lorem"></oui-dropdown-item>
                        </oui-dropdown-content>
                    </oui-dropdown>
                `);
                const links = element.find("oui-dropdown-item").find("a");
                const expectedLength = 2;

                expect(links.length).toBe(expectedLength);
                expect(links.hasClass("oui-dropdown-option")).toBeTruthy();
            });

            it("should be an external link", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                        <oui-dropdown-trigger text="Actions"></oui-dropdown-trigger>
                        <oui-dropdown-content>
                            <oui-dropdown-item text="Lorem ipsum" href="#" external></oui-dropdown-item>
                        </oui-dropdown-content>
                    </oui-dropdown>
                `);
                const link = element.find("oui-dropdown-item").find("a");

                $timeout.flush();

                expect(link.attr("target")).toBe("_blank");
                expect(link.attr("rel")).toBe("noopener");
            });

            it("should call click callback", () => {
                const onLinkClickSpy = jasmine.createSpy("onLinkClickSpy");
                const onButtonClickSpy = jasmine.createSpy("onButtonClickSpy");
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                        <oui-dropdown-trigger text="Actions"></oui-dropdown-trigger>
                        <oui-dropdown-content>
                            <oui-dropdown-item text="Lorem ipsum" href="#" on-click="$ctrl.onLinkClick()"></oui-dropdown-item>
                            <oui-dropdown-item text="Lorem ipsum" on-click="$ctrl.onButtonClick()"></oui-dropdown-item>
                            <oui-dropdown-item text="Lorem ipsum" href="#"></oui-dropdown-item>
                        </oui-dropdown-content>
                    </oui-dropdown>
                `, {
                    onLinkClick: onLinkClickSpy,
                    onButtonClick: onButtonClickSpy
                });

                $timeout.flush();
                const items = angular.element(element[0].querySelectorAll("oui-dropdown-item")).children();
                angular.element(items[0]).triggerHandler("click");
                angular.element(items[1]).triggerHandler("click");

                expect(onLinkClickSpy).toHaveBeenCalled();
                expect(onButtonClickSpy).toHaveBeenCalled();
            });
        });

        describe("Group", () => {
            it("should have default classname", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                        <oui-dropdown-trigger text="Actions"></oui-dropdown-trigger>
                        <oui-dropdown-content>
                            <oui-dropdown-group label="Lorem ipsum">
                                <oui-dropdown-item text="Action 1"></oui-dropdown-item>
                                <oui-dropdown-item text="Action 2"></oui-dropdown-item>
                            </oui-dropdown-group>
                        </oui-dropdown-content>
                    </oui-dropdown>
                `);

                $timeout.flush();

                expect(element.find("oui-dropdown-group").hasClass("oui-dropdown-group")).toBeTruthy();
            });
        });

        describe("Events", () => {
            it("should not be visible", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                      <button class="oui-button" oui-dropdown-trigger></button>
                      <div oui-dropdown-content>
                        <b>the menu</b>
                      </div>
                    </oui-dropdown>`
                );

                $timeout.flush();

                const trigger = element[0].querySelector("[oui-dropdown-trigger]");
                const $trigger = angular.element(trigger);

                expect($trigger.attr("aria-expanded")).toBe("false");
            });

            it("should display and hide dropdown on click", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                      <button class="oui-button" oui-dropdown-trigger></button>
                      <div oui-dropdown-content>
                        <b>the menu</b>
                      </div>
                    </oui-dropdown>`
                );

                $timeout.flush();

                const trigger = element[0].querySelector("[oui-dropdown-trigger]");
                const $trigger = angular.element(trigger);

                expect($trigger.attr("aria-expanded")).toBe("false");
                $trigger.triggerHandler("click");
                expect($trigger.attr("aria-expanded")).toBe("true");
                $trigger.triggerHandler("click");
                expect($trigger.attr("aria-expanded")).toBe("false");
                $trigger.triggerHandler("click");
                expect($trigger.attr("aria-expanded")).toBe("true");
                $document.triggerHandler("click");
                expect($trigger.attr("aria-expanded")).toBe("false");
            });
        });
    });
});
