import merge from "lodash/merge";
import union from "lodash/union";

export default class {
    constructor () {
        this.translations = {
            attachmentsHeading: "Attachment(s)",
            dropArea: "Attach document(s) by drap and drop or",
            dropAreaSelector: "select a file",
            fileSelector: "Select file",
            filesSelector: "Select file(s)...",
            maxsizeError: "This file exceeds the size limit",
            removeFile: "Remove file from selector"
        };

        this.units = [
            { size: 1000000000, suffix: "GB" },
            { size: 1000000, suffix: "MB" },
            { size: 1000, suffix: "KB" },
            { size: 1, suffix: "B" }
        ];
    }

    /**
     * Set the translations for the file component
     * @param {Object} translations a map of translations
     */
    setTranslations (translations) {
        this.translations = merge(this.translations, translations);
        return this;
    }

    /**
     * Set the units for the file component
     * @param {Array} units array
     */
    setUnits (units) {
        this.units = union(this.units, units);
        return this;
    }

    $get () {
        return angular.copy({
            translations: this.translations,
            units: this.units
        });
    }
}
