import controller from "./navbar-link.controller";
import template from "./navbar-link.html";

export default {
    require: {
        navbarCtrl: "^^ouiNavbar"
    },
    bindings: {
        name: "@",
        text: "@",
        href: "@?",
        state: "@?",
        stateParams: "<?",
        label: "@?ariaLabel",
        variant: "@?",
        onClick: "&"
    },
    controller,
    template
};
