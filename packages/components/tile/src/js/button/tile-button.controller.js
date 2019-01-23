import { addBooleanParameter } from "@ovh/ui-kit.core/src/js/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "external");
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .addClass("oui-tile__item oui-tile__item_button")
        );
    }
}
