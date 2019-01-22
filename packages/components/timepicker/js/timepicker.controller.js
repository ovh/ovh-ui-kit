import { addBooleanParameter, addDefaultParameter } from "@ovh/ui-kit.core/js/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;

        this.options = {
            enableTime: true,
            enableSeconds: false,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true
        };
    }

    setOptionsProperty (property, value) {
        if (angular.isDefined(value)) {
            this.options[property] = value;
        }
    }

    $onInit () {
        addDefaultParameter(this, "id", `ouiTimepicker${this.$id}`);
        addDefaultParameter(this, "name", `ouiTimepicker${this.$id}`);
        addDefaultParameter(this, "format", this.options.dateFormat);
        addDefaultParameter(this, "altFormat", this.format || this.options.dateFormat);

        addBooleanParameter(this, "appendToBody");
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "enableSeconds");
        addBooleanParameter(this, "enableAmPm");
        addBooleanParameter(this, "inline");
        addBooleanParameter(this, "required");
        addBooleanParameter(this, "static");

        this.setOptionsProperty("enableSeconds", this.enableSeconds);
        this.setOptionsProperty("time_24hr", !this.enableAmPm);

        // flatpickr's timepicker need a default value to work in inline mode
        if (this.inline) {
            this.setOptionsProperty("defaultDate", this.model || "today");
        }
    }

    $postLink () {
        this.$timeout(() => {
            this.$element
                .addClass("oui-timepicker")
                .removeAttr("id")
                .removeAttr("name");

            if (this.inline) {
                this.$element.addClass("oui-timepicker_inline");
            }
        });
    }
}
