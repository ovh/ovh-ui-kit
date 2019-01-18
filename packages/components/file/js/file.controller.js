import { addBooleanParameter, addDefaultParameter } from "@ovh/ui-kit.utils/js/component-utils";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import remove from "lodash/remove";

export default class {
    constructor ($attrs, $compile, $element, $filter, $scope, $timeout, $window, ouiFileConfiguration) {
        "ngInject";

        this.$attrs = $attrs;
        this.$compile = $compile;
        this.$element = $element;
        this.$filter = $filter;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.$window = $window;

        this.translations = ouiFileConfiguration.translations;
        this.units = this.$filter("orderBy")(ouiFileConfiguration.units, "-size");
    }

    checkFileValidity (file) {
        if (file) {
            file.errors = {};

            // Check maxsize
            if (this.maxsize && file.size > this.maxsize) {
                file.errors.maxsize = true;
            }

            // Set form validation
            if (this.form && this.form[this.name]) {
                this.form[this.name].$setValidity("maxsize", !file.errors.maxsize);
                this.form[this.name].$setDirty();
            }

            // Clean errors
            if (isEmpty(file.errors)) {
                delete file.errors;
            }
        }

        return file;
    }

    loadFilePreview (file) {
        // Load preview only if image
        if (this.preview && !file.errors && file.type && file.type.search(/^image\//) !== -1) {
            file.loading = true;

            file.reader = new this.$window.FileReader();
            file.reader.readAsDataURL(file);
            file.reader.onload = () => {
                file.preview = `url("${file.reader.result}")`;

                this.$scope.$apply();
            };
        }

        return file;
    }

    addFile (file) {
        this.getFileInfos(file);
        this.checkFileValidity(file);

        this.model = [file];
        this.onSelect({ modelValue: this.model });
        this.$scope.$apply();

        // Set back focus on fake selector
        this.$element[0].querySelector(".oui-file-selector__label").focus();
    }

    addFiles (files) {
        if (!this.model) {
            this.model = [];
        }

        if (angular.isArray(files)) {
            files.forEach((file) => {
                // Check for duplicate before adding
                if (!find(this.model, (item) => file.name === item.name)) {
                    this.getFileInfos(file);
                    this.checkFileValidity(file);
                    this.loadFilePreview(file);
                    this.model.push(file);
                }
            });

            this.onSelect({ modelValue: this.model });
            this.$scope.$apply();
        }
    }

    removeFile (file) {
        if (angular.isArray(this.model)) {
            remove(this.model, (item) => item === file);
        }
    }

    resetFile () {
        this.model = undefined;
        this.fileSelector[0].value = "";

        if (this.form && this.form[this.name]) {
            this.form[this.name].$setValidity("maxsize", true);
        }
    }

    openFileSelector () {
        // triggerHandler("click") don't work here
        this.fileSelector[0].click();
    }

    getFileInfos (file) {
        const parts = file.name.split(".");
        const extension = parts.length > 1 ? parts.pop() : undefined;
        const name = parts.join(".");

        file.infos = {
            extension,
            name,
            size: this.getFileSize(file)
        };

        return file;
    }

    getFileSize (file) {
        let size;

        // Get best extension for file size
        for (const unit of this.units) {
            size = Math.floor(file.size / unit.size);
            if (size > 1) {
                size = `(${size} ${unit.suffix})`;
                break;
            }
        }

        return size;
    }

    setInputTouched () {
        if (this.form && this.form[this.name]) {
            // Set input[hidden] to touched for form validation
            this.form[this.name].$setTouched();
        }
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "required");
        addBooleanParameter(this, "multiple");
        addBooleanParameter(this, "droparea");
        addBooleanParameter(this, "preview");

        addDefaultParameter(this, "id", `ouiFile${this.$scope.$id}`);
        addDefaultParameter(this, "name", `ouiFile${this.$scope.$id}`);

        this.selectorId = `${this.id}Selector`;
        this.dropareaId = `${this.id}Droparea`;
        this.attachments = Boolean(this.multiple || this.droparea || this.preview);
    }

    $postLink () {
        this.$timeout(() => {
            this.$element
                .addClass("oui-file")
                .removeAttr("id")
                .removeAttr("name");

            // ngChange don't work on input file
            this.fileSelector = angular.element(this.$element[0].querySelector(`#${this.selectorId}`));
            this.fileSelector.on("change", (e) => {
                if (this.attachments) {
                    // FileList from input file is read-only
                    // Needed to be port as an array for manipulation
                    this.addFiles(Array.from(e.target.files));
                } else {
                    this.addFile(e.target.files[0]);
                }
            });

            if (this.droparea) {
                this.fileDroparea = angular.element(this.$element[0].querySelector(`#${this.dropareaId}`));
                this.fileDroparea
                    .on("drag dragstart dragend dragover dragenter dragleave drop", (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    })
                    .on("dragover dragenter", () => this.fileDroparea.addClass("oui-file-droparea_dragover"))
                    .on("dragleave dragend drop", () => this.fileDroparea.removeClass("oui-file-droparea_dragover"))
                    .on("drop", (e) => {
                        // FileList from input file is read-only
                        // Needed to be port as an array for manipulation
                        if (e.dataTransfer) {
                            this.addFiles(Array.from(e.dataTransfer.files));
                        }
                    });
            }
        });
    }
}
