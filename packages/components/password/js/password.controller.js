import { addBooleanParameter, addDefaultParameter } from "@ovh/ui-kit.utils/js/component-utils";

export default class {
    constructor ($attrs, $element, $scope, $timeout, ouiPasswordConfiguration) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$id = $scope.$id;
        this.$timeout = $timeout;
        this.translations = ouiPasswordConfiguration.translations;
    }

    toggleVisibility () {
        this.isVisible = !this.isVisible;
    }

    updateValidity (key, isValid) {
        if (isValid) {
            delete this.errors[key];
        } else {
            this.errors[key] = true;
        }

        this.valid = !Object.keys(this.errors).length;
        this.form[this.name].$setValidity("password", this.valid);
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "required");

        addDefaultParameter(this, "id", `ouiPassword${this.$id}`);
        addDefaultParameter(this, "name", `ouiPassword${this.$id}`);

        this.errors = {};
        this.isVisible = false;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .removeAttr("id")
                .removeAttr("name")
                .addClass("oui-password")
        );
    }
}
