import pages from "../../pages.data.json";

export default class ShowcaseController {
    constructor ($transitions, $window) {
        "ngInject";

        this.$transitions = $transitions;
        this.$window = $window;

        this.navigation = pages.children;
    }

    $onInit () {
        console.log("pages", this.navigation);

        this.$transitions.onStart({}, () => {
            this.$window.scrollTo(0, 0);
        });
    }
}
