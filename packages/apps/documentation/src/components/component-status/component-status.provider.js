class ComponentStatusService {
    constructor (readmeUrl, findMessageTypeFunc) {
        this.readmeUrl = readmeUrl;
        this.findMessageTypeFunc = findMessageTypeFunc;
    }

    getReadmeUrl () {
        return this.readmeUrl;
    }
}

export default class {
    constructor () {
        "ngInject";

        this.readmeUrl = [];
    }

    setReadmeUrl (readmeUrl) {
        this.readmeUrl = readmeUrl;
    }

    setFindMessageTypeFunc (findMessageTypeFunc) {
        this.findMessageTypeFunc = findMessageTypeFunc;
    }

    $get () {
        return new ComponentStatusService(this.readmeUrl, this.findMessageTypeFunc);
    }
}
