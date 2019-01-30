import capitalize from "lodash/capitalize";
import find from "lodash/find";

const LEVELS_ORDER = ["error", "warning", "info", "success"];

export default class {
    constructor (ComponentStatus) {
        "ngInject";

        this.readmeUrl = ComponentStatus.getReadmeUrl();
        this.ComponentStatus = ComponentStatus;
    }

    getMessageType () {
        return find(LEVELS_ORDER, (level) => this.ComponentStatus.findMessageTypeFunc(level, this.cxDesign, this.ux));
    }

    getCXDesignText () {
        return capitalize(this.cxDesign);
    }

    getUXText () {
        return capitalize(this.ux);
    }
}
