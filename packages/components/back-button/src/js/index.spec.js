describe("ouiBackButton", () => {
    let $rootScope;
    let $compile;
    let $timeout;
    let $window;

    beforeEach(angular.mock.module("oui.back-button"));

    beforeEach(inject((_$rootScope_, _$compile_, _$timeout_, _$window_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $timeout = _$timeout_;
        $window = _$window_;
        spyOn($window.history, "back");
    }));

    const compile = (template) => {
        const element = angular.element(template);
        const scope = $rootScope.$new();
        $compile(element)(scope);
        scope.$digest();
        return element;
    };

    describe("Component", () => {
        it("should display a button with a chevron left icon", () => {
            const element = compile("<oui-back-button></oui-back-button>");
            expect(element.find("button").length).toBe(1);
            expect(element.find("button").find("span").length).toBe(1);
            expect(element.find("span").hasClass("oui-icon-chevron-left")).toBe(true);
        });

        it("should have a oui-back-button class", () => {
            const element = compile("<oui-back-button></oui-back-button>");

            expect(element.hasClass("oui-back-button")).toBe(true);
        });

        it("should have and id and name attribute, and remove it from root component", () => {
            const element = compile('<oui-back-button id="foo" name="bar"></oui-back-button>');

            $timeout.flush();

            expect(element.find("button").attr("id")).toBe("foo");
            expect(element.find("button").attr("name")).toBe("bar");
            expect(element.attr("id")).toBeUndefined();
            expect(element.attr("name")).toBeUndefined();
        });

        it("should have an aria-label attribute, and remove it from root component", () => {
            const ariaLabel = "foo";
            const element = compile(`<oui-back-button aria-label="${ariaLabel}"></oui-back-button>`);

            $timeout.flush();

            expect(element.find("button").attr("aria-label")).toBe(ariaLabel);
            expect(element.attr("aria-label")).toBeUndefined();
        });

        it("should have a title", () => {
            const title = "foo";
            const element = compile(`<oui-back-button>${title}</oui-back-button>`);

            $timeout.flush();

            expect(element.find("h2")[0].innerText).toBe(title);
        });

        it("should go back in history when clicking button if on-click and href are not defined", () => {
            const element = compile("<oui-back-button></oui-back-button>");
            expect($window.history.back).not.toHaveBeenCalled();
            element.find("button").triggerHandler("click");
            expect($window.history.back).toHaveBeenCalled();
        });

        it("should call on-clicked callback when clicked and not go back in history", () => {
            const element = compile('<oui-back-button on-click="foo()"></oui-back-button>');
            const scope = element.scope();
            scope.foo = jasmine.createSpy("foo");
            expect($window.history.back).not.toHaveBeenCalled();
            expect(scope.foo).not.toHaveBeenCalled();
            element.find("button").triggerHandler("click");
            expect($window.history.back).not.toHaveBeenCalled();
            expect(scope.foo).toHaveBeenCalled();
        });

        it("should generate href attribute and not go back in history", () => {
            const link = "#";
            const element = compile(`<oui-back-button href="${link}"></oui-back-button>`);
            const a = element.find("a").eq(0);
            expect(a.attr("href")).toBe(link);
            expect($window.history.back).not.toHaveBeenCalled();
        });
    });
});
