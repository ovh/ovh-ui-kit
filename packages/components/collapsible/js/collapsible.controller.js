import { addDefaultParameter } from "@ovh/ui-kit.utils/js/component-utils";

export default class {
    constructor ($attrs, $element, $scope, $timeout, $window) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.$window = $window;
    }

    $onInit () {
        addDefaultParameter(this, "id", `ouiCollapsible${this.$scope.$id}`);
        addDefaultParameter(this, "expanded", false);

        // Check body height for transition animation
        const body = this.$element[0].querySelector(".oui-collapsible__body");
        this.$scope.$watch(() => body.offsetHeight, (newHeight, oldHeight) => {
            if (newHeight !== oldHeight) {
                this.wrapperHeight = `${newHeight}px`;
            }
        });
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-collapsible")
                .attr("id", this.id)
                .removeAttr("aria-label")
        );

        // Apply on resize for new body height
        angular.element(this.$window)
            .on("resize", () => this.$scope.$apply());
    }

    toggle () {
        this.expanded = !this.expanded;
    }
}
