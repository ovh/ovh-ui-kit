export default class {
    constructor ($attrs, $element, ouiNavbarConfiguration, KEYBOARD_KEYS) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.config = ouiNavbarConfiguration;

        this.KEYBOARD_KEYS = KEYBOARD_KEYS;
    }

    bindGroup (groupName) {
        const keys = {};
        const keysRegex = new RegExp([
            this.KEYBOARD_KEYS.TAB,
            this.KEYBOARD_KEYS.SHIFT
        ].join("|"));

        const tabbableItems = this.navbarCtrl.getGroup(groupName);
        const lastIndex = tabbableItems.length - 1;
        const focusElement = (e, groupIndex) => {
            let index = groupIndex;
            keys[e.which] = true;

            if (keys[this.KEYBOARD_KEYS.TAB] && !keys[this.KEYBOARD_KEYS.SHIFT]) {
                // Move Down
                index = index >= lastIndex ? 0 : index + 1;
            } else if (keys[this.KEYBOARD_KEYS.TAB] && keys[this.KEYBOARD_KEYS.SHIFT]) {
                // Move Up
                index = index <= 0 ? lastIndex : index - 1;
            }

            // Check if element is visible
            if (tabbableItems[index].clientHeight) {
                tabbableItems[index].focus();
            } else {
                focusElement(e, index);
            }
        };

        angular.element(tabbableItems)
            .on("keydown", (e) => {
                if (keysRegex.test(e.which) && this.isOpen(groupName)) {
                    e.preventDefault();
                    focusElement(e, this.navbarCtrl.getGroup(groupName).indexOf(e.target));
                }
            })
            .on("keyup", (e) => {
                delete keys[e.which];
            });
    }

    isOpen (state) {
        return this.navbarCtrl.navigation && this.navbarCtrl.navigation[state];
    }

    $onInit () {
        // Support presence of attribute 'oui-navbar-group-last'
        if (angular.isDefined(this.$attrs.ouiNavbarGroupLast) && angular.isUndefined(this.isLast)) {
            this.isLast = true;
        }
    }

    $postLink () {
        this.navbarCtrl.addItemToGroup(this.$element[0], this.groupName);

        // Bind items when it's the last item
        if (this.isLast) {
            this.bindGroup(this.groupName);
        }
    }
}
