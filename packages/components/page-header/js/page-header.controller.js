export default class {
    constructor ($attrs, $transclude) {
        "ngInject";

        this.$attrs = $attrs;
        this.$transclude = $transclude;
    }

    $onInit () {
        this.transcludeGuide = this.$transclude.isSlotFilled("guide");
        this.transcludeTabs = this.$transclude.isSlotFilled("tabs");
    }

}
