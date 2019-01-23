import controller from "./navbar-notification.controller";
import template from "./navbar-notification.html";

export default {
    require: {
        navbarCtrl: "^^ouiNavbar"
    },
    bindings: {
        menuName: "@name",
        menuLinks: "<links",
        limitTo: "<?",
        headerTemplate: "<?",
        headerTitle: "@?",
        footerTemplate: "<?",
        footerTitle: "@?",
        footerHref: "@?",
        align: "@?",
        fixed: "<?"
    },
    controller,
    template
};
