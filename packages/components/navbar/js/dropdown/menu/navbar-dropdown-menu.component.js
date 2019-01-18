export default {
    bindings: {
        align: "@?"
    },
    controller: class {
        constructor ($element, $timeout) {
            "ngInject";

            this.$element = $element;
            this.$timeout = $timeout;
        }

        $postLink () {
            this.$timeout(() => {
                this.$element
                    .addClass("oui-navbar-menu")
                    .addClass("oui-navbar-menu_fixed");

                if (this.align) {
                    this.$element.addClass(`oui-navbar-menu_${this.align}`);
                }
            });
        }
    }
};
