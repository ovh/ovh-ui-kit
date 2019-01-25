import { addBooleanParameter } from "@ovh/ui-kit.core/src/js/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "external");
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "sticky");

        if (this.external) {
            this.linkTarget = "_blank";
            this.linkRel = "noopener";
        }
    }

    $postLink () {
        this.$timeout(() => {
            this.$element
                .addClass("oui-dropdown-menu__item")
                .removeAttr("aria-label");

            if (this.sticky) {
                this.$element
                    .addClass("oui-dropdown-menu__item_sticky");
            }
        });
    }

    // Return value of "ui-sref"
    getFullSref () {
        return `${this.state}(${JSON.stringify(this.stateParams)})`;
    }
}
