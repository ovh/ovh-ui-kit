import controller from "./navbar-menu.controller";
import template from "./navbar-menu.html";

export default {
    require: {
        navbarCtrl: "^^ouiNavbar"
    },
    bindings: {
        backButton: "<?",
        headerBreadcrumb: "@?",
        headerClass: "@?",
        headerTitle: "@?",
        menuLinks: "<links",
        menuName: "@name",
        placement: "@?",
        fixed: "<?"
    },
    controller,
    template
};
