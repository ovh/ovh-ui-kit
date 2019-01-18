import { addBooleanParameter, addDefaultParameter } from "@ovh/ui-kit.utils/js/component-utils";

export default class {
    constructor ($attrs, $element, $filter, $scope, $timeout, ouiDualListConfiguration) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$filter = $filter;
        this.$timeout = $timeout;
        this.$scope = $scope;
        this.translations = ouiDualListConfiguration.translations.source;
    }

    $onInit () {
        addDefaultParameter(this, "heading", this.translations.heading);
        addDefaultParameter(this, "placeholder", this.translations.placeholder);
        addBooleanParameter(this, "loading");
        addBooleanParameter(this, "searchable");

        this.id = `ouiDualListSource${this.$scope.id}`;
        this.expanded = true;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element.addClass("oui-dual-list-source")
        );
    }

    isLoading () {
        return this.loading || angular.isUndefined(this.dualList.source);
    }

    toggle () {
        this.expanded = !this.expanded;
    }
}
