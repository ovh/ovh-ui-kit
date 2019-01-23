// Deprecated: Support only for old use
export default class {
    constructor ($element, $scope, $timeout) {
        "ngInject";

        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-popover__trigger")
                .attr({
                    "aria-haspopup": true,
                    "aria-expanded": false
                })
                .on("click", () => this.popover.onTriggerClick())
        );
    }

    $onDestroy () {
        this.$element.off("click");
    }
}
