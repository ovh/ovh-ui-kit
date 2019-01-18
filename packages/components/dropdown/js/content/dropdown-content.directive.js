const dropdownContentClass = "oui-dropdown-menu";
const arrowDropdownContentModifierClass = "oui-dropdown-menu_arrow";
const arrowDropdownContentClass = "oui-dropdown-menu__arrow";

export default () => {
    "ngInject";

    return {
        restrict: "AE",
        require: "^ouiDropdown",
        scope: {},
        link: (scope, element, attrs, ctrl) => {
            element
                .addClass(dropdownContentClass)
                .attr("aria-labelledby", ctrl.id)
                .attr("role", "menu");

            if (ctrl.arrow) {
                element.addClass(arrowDropdownContentModifierClass);
                element.prepend(`<div class="${arrowDropdownContentClass}"></div>`);
            }

            // Set menu and arrow to the parent component
            ctrl.setDropdownMenu(element[0], element[0].querySelector(`.${arrowDropdownContentClass}`));
        }
    };
};
