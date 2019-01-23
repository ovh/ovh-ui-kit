export default class {
    constructor ($element) {
        "ngInject";

        this.$element = $element;
    }

    $onInit () {
        this.size = this.size || "m";
    }

    $postLink () {
        // Add Classnames on root element
        this.$element.addClass(`oui-spinner oui-spinner_${this.size}`);
    }
}
