import Clipboard from "clipboard";

export default class {
    constructor ($attrs, $element, $timeout, ouiClipboardConfiguration) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
        this.translations = angular.copy(ouiClipboardConfiguration.translations);
    }

    $onInit () {
        this.tooltipText = this.translations.copyToClipboardLabel;
        this.trigger = this.$element[0].querySelector(".oui-clipboard__button");
        this.target = this.$element[0].querySelector(".oui-clipboard__control");
    }

    $onDestroy () {
        this.clipboard.destroy();
    }

    $postLink () {
        this.$timeout(() => {
            this.$element
                .addClass("oui-input-group oui-input-group_clipboard")
                .removeAttr("id")
                .removeAttr("name");
        });

        // Init the clipboard instance
        this.clipboard = new Clipboard(this.trigger, {
            target: () => this.target,
            text: () => this.model
        });

        // Events for updating the tooltip
        this.clipboard
            .on("success", () => this.selectInputText(this.translations.copiedLabel))
            .on("error", () => this.selectInputText(this.translations.notSupported));
    }

    selectInputText (tooltipText) {
        const selectionEnd = this.model.length || 0;

        this.$timeout(() => {
            // Need to focus before selecting
            this.target.focus();

            // Select text on the target
            this.target.selectionStart = 0;
            this.target.selectionEnd = selectionEnd;
            this.target.setSelectionRange(0, selectionEnd);
            this.target.select();

            // Update tooltip text
            this.tooltipText = tooltipText;

            // Need to bind the reset like this because
            // ClipboardJS triggered the "blur" event
            // By copying in a fake textarea
            angular.element(this.target).one("blur", () => this.reset());
        });
    }

    onInputClick () {
        this.trigger.click();
    }

    reset () {
        const resetDelay = 500;

        // Add delay for resetting after tooltip animation
        this.$timeout(() => {
            this.tooltipText = this.translations.copyToClipboardLabel;
        }, resetDelay);
    }
}
