import controller from "./navbar.controller";
import template from "./navbar.html";

export default {
    bindings: {
        brand: "<?",
        activeLink: "@?",
        mainLinks: "<?",
        asideLinks: "<?",
        togglerLinks: "<?",

        fixed: "<?"
    },
    controller,
    template,
    transclude: {
        asideSlot: "?ouiNavbarAside",
        brandSlot: "?ouiNavbarBrand",
        mainSlot: "?ouiNavbarMain",
        togglerSlot: "?ouiNavbarToggler"
    }
};
