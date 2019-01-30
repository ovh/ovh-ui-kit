export default class FieldController {
    $onInit () {
        this.osList = FieldController.getOS();
    }

    static getOS () { // eslint-disable-line class-methods-use-this
        return [{
            name: "freebsd",
            label: "FreeBSD"
        }, {
            name: "linux",
            label: "Linux"
        }, {
            name: "osx",
            label: "OSX"
        }, {
            name: "windows",
            label: "Windows"
        }];
    }
}
