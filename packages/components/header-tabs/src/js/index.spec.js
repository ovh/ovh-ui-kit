describe("ouiHeaderTabs", () => {
    let TestUtils;
    let $timeout;

    beforeEach(angular.mock.module("oui.header-tabs"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $timeout = _$timeout_;
    }));

    describe("Component", () => {
        it("should display the header tabs with one item", () => {
            const element = TestUtils.compileTemplate(`
                <oui-header-tabs>
                    <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
                </oui-header-tabs>`
            );

            $timeout.flush();

            const container = element[0].querySelector(".oui-header-tabs__container");
            const $container = angular.element(container);
            expect($container.children().length).toBe(1);
            expect($container.attr("role")).toBe("list");
        });

        it("should display the header tabs with external link", () => {
            const element = TestUtils.compileTemplate(`
                <oui-header-tabs>
                    <oui-header-tabs-item text="External" href="/#" external></oui-header-tabs-item>
                </oui-header-tabs>`
            );

            $timeout.flush();

            const item = element[0].querySelector(".oui-header-tabs__item");
            expect(angular.element(item).attr("role")).toBe("listitem");
            const linkItem = item.querySelector("a");
            const $linkItem = angular.element(linkItem);
            expect($linkItem.attr("target")).toBe("_blank");
            expect($linkItem.attr("rel")).toBe("noopener");
            expect(linkItem.querySelector(".oui-icon-external_link")).not.toBeNull();
        });

        it("should display the header tabs with disabled items", () => {
            const element = TestUtils.compileTemplate(`
                <oui-header-tabs>
                    <oui-header-tabs-item text="Disabled" disabled></oui-header-tabs-item>
                    <oui-header-tabs-dropdown text="Dropdown">
                        <oui-header-tabs-item text="Disabled 1" disabled></oui-header-tabs-item>
                        <oui-header-tabs-item text="Disabled 2" disabled></oui-header-tabs-item>
                    </oui-header-tabs-dropdown>
                </oui-header-tabs>`
            );

            $timeout.flush();

            const item = element[0].querySelector(".oui-header-tabs__item");
            expect(angular.element(item).hasClass("oui-header-tabs__item_disabled")).toBe(true);
            const trigger = element[0].querySelector(".oui-dropdown__trigger");
            expect(angular.element(trigger).attr("disabled")).toBe("disabled");
            const dropDown = element[0].querySelector(".oui-header-tabs__item_dropdown");
            expect(angular.element(dropDown).hasClass("oui-header-tabs__item_disabled")).toBe(true);
        });

        it("should display the header tabs with active items", () => {
            const element = TestUtils.compileTemplate(`
                <oui-header-tabs>
                    <oui-header-tabs-item text="Active" active></oui-header-tabs-item>
                    <oui-header-tabs-dropdown text="Dropdown">
                        <oui-header-tabs-item text="Active 1" active></oui-header-tabs-item>
                        <oui-header-tabs-item text="Active 2"></oui-header-tabs-item>
                    </oui-header-tabs-dropdown>
                </oui-header-tabs>`
            );

            $timeout.flush();

            const item = element[0].querySelector(".oui-header-tabs__item");
            expect(angular.element(item).hasClass("oui-header-tabs__item_active")).toBe(true);
            const dropDown = element[0].querySelector(".oui-header-tabs__item_dropdown");
            expect(angular.element(dropDown).hasClass("oui-header-tabs__item_active")).toBe(true);
        });

        it("should display the header tabs with closed dropdown", () => {
            const element = TestUtils.compileTemplate(`
                <oui-header-tabs>
                    <oui-header-tabs-dropdown text="Dropdown">
                        <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
                    </oui-header-tabs-dropdown>
                </oui-header-tabs>`
            );

            $timeout.flush();

            const container = element[0].querySelector(".oui-header-tabs__container");
            expect(angular.element(container).children().length).toBe(1);
            const trigger = container.querySelector(".oui-dropdown__trigger");
            const $trigger = angular.element(trigger);
            expect(angular.element(trigger.querySelector("span")).html()).toBe("Dropdown");
            expect($trigger.attr("aria-expanded")).toBe("false");
        });

        it("should display the header tabs with dropdown with separated items", () => {
            const element = TestUtils.compileTemplate(`
                <oui-header-tabs>
                    <oui-header-tabs-dropdown text="Dropdown">
                        <oui-header-tabs-item text="Item 1" href="/#"></oui-header-tabs-item>
                        <oui-header-tabs-divider></oui-header-tabs-divider>
                        <oui-header-tabs-item text="Item 2" href="/#"></oui-header-tabs-item>
                    </oui-header-tabs-dropdown>
                </oui-header-tabs>`
            );

            $timeout.flush();

            const trigger = element[0].querySelector(".oui-dropdown__trigger");
            const $trigger = angular.element(trigger);
            $trigger.triggerHandler("click");
            const dropDownContent = element[0].querySelector(".oui-header-tabs__dropdown-container");
            const separator = dropDownContent.getElementsByTagName("oui-header-tabs-divider")[0];
            const $separator = angular.element(separator);
            expect($separator.hasClass("oui-dropdown-menu__divider")).toBe(true);
            expect($separator.attr("role")).toBe("separator");
        });
    });
});
