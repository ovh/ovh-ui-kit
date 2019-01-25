import merge from "lodash/merge";
export default class {
    constructor () {
        this.translations = {
            copyToClipboardLabel: "Copy to clipboard",
            copiedLabel: "Copied",
            notSupported: "Copy to clipboard not supported. Please copy the text manually"
        };
    }

    /**
     * Set the translations
     * @param {Object} translations a map of translations
     */
    setTranslations (translations) {
        this.translations = merge(this.translations, translations);
        return this;
    }

    $get () {
        return {
            translations: this.translations
        };
    }
}
