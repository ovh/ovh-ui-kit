import { addBooleanParameter, addDefaultParameter } from "@ovh/ui-kit.core/src/js/component-utils";

export default class {
    constructor ($scope, $element, $attrs, $timeout) {
        "ngInject";

        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "thumbnail");
        addBooleanParameter(this, "required");
        addDefaultParameter(this, "id", `ouiRadio${this.$scope.$id}`);
        addDefaultParameter(this, "variant", "default");

        this.$element.addClass(this.radioToggleGroup ? "oui-radio-toggle" : "oui-radio");
        if (this.thumbnail && !this.radioToggleGroup) {
            this.$element.addClass(this.variant === "default" ? "oui-radio_thumbnail" : `oui-radio_thumbnail-${this.variant}`);
        }

        this.group = this.radioGroup || this.radioToggleGroup;
        if (this.group) {
            this.name = this.group.name;
            this.$scope.$watch("$ctrl.group.model", (value) => {
                this.model = value;
            });
        } else {
            addDefaultParameter(this, "name", this.id);
        }
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .removeAttr("id")
                .removeAttr("name")
        );
    }

    onRadioModelChange (event) {
        if (this.group) {
            this.group.setModelValue(event.modelValue);
        }

        if (this.onChange) {
            this.$timeout(() => this.onChange(event));
        }
    }

}
