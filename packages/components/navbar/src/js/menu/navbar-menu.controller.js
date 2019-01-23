import { addBooleanParameter } from "@ovh/ui-kit.core/src/js/component-utils";

export default class {
    constructor ($attrs, $element, $timeout, ouiNavbarConfiguration, KEYBOARD_KEYS) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
        this.config = ouiNavbarConfiguration;
        this.KEYBOARD_KEYS = KEYBOARD_KEYS;
    }

    closeMenu (state, isInternalNav) {
        // Update navbar navigation
        this.navbarCtrl.toggleMenu(state, isInternalNav);

        // Set focus on menu toggler, preceding $element
        const prev = this.$element[0].previousElementSibling;
        if (prev) {
            prev.focus();
        }
    }

    // Close method for button with click function
    closeMenuWithCallback ($event, callback) {
        // Call the callback function
        if (typeof callback === "function") {
            callback($event);
        }

        // Then close all menus
        this.navbarCtrl.toggleMenu();
    }

    // Return value of "ui-sref"
    static getFullSref (item) {
        return `${item.state}(${JSON.stringify(item.stateParams)})`;
    }

    // Build breadcrumb for child menu
    getChildBreadcrumb () {
        return this.headerBreadcrumb ? `${this.headerBreadcrumb} › ${this.headerTitle}` : this.headerTitle;
    }

    $onInit () {
        addBooleanParameter(this, "backButton");
        addBooleanParameter(this, "fixed");
    }

    $postLink () {
        // Avoid $element DOM unsync for jqLite methods
        this.$timeout(() => {
            // Add classnames on root $element
            this.$element.addClass("oui-navbar-menu");

            if (this.fixed) {
                this.$element.addClass("oui-navbar-menu_fixed");
            }

            if (this.align) {
                this.$element.addClass(`oui-navbar-menu_${this.align}`);
            }

            // Add "role" attribute for accessibility
            this.$element.attr("role", "menu");
        });
    }
}
