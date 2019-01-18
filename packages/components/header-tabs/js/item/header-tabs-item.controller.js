import { addBooleanParameter } from "@ovh/ui-kit.utils/js/component-utils";
import template from "./header-tabs-item.html";

export default class {
    constructor ($attrs, $compile, $element, $scope, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$compile = $compile;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "active");
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "external");

        if (this.external) {
            this.linkTarget = "_blank";
            this.linkRel = "noopener";
        }
    }

    $postLink () {
        this.$compile(template)(this.$scope, clone => {
            this.$element.replaceWith(clone);
        });
    }

    // Return value of "ui-sref"
    getFullSref () {
        return `${this.state}(${JSON.stringify(this.stateParams)})`;
    }
}
