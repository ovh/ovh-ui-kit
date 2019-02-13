import pages from "../../pages.data.json";

export default class ShowcaseController {
    constructor () {
        "ngInject";

        this.navigation = pages.children;
    }
}
