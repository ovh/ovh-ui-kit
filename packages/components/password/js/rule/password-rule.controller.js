export default class {
    constructor ($attrs, $element, $scope, $timeout, ouiPasswordConfiguration) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
        this.$scope = $scope;
        this.translations = ouiPasswordConfiguration.translations;
    }

    setValidity (value) {
        if (this.pattern) {
            const regexp = new RegExp(this.pattern);
            this.valid = regexp.test(value);
        } else if (this.validator) {
            this.valid = this.validator({ modelValue: value });
        }

        this.password.updateValidity(this.name, this.valid);
    }

    $onInit () {
        this.name = `ouiPasswordRule${this.$scope.$id}`;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-password-rule")
        );

        this.$scope.$watch(
            () => this.password.model,
            (value) => this.setValidity(value)
        );
    }
}
