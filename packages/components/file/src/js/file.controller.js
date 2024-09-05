import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';
import remove from 'lodash/remove';

export default class {
  constructor($attrs, $compile, $element, $filter, $scope,
    $timeout, $window, ouiFileConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$compile = $compile;
    this.$element = $element;
    this.$filter = $filter;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$window = $window;

    this.translations = ouiFileConfiguration.translations;
    this.units = orderBy(this.$filter('orderBy')(ouiFileConfiguration.units, '-size'), 'size', 'desc');
  }

  checkFileValidity(_file_, errors) {
    const file = _file_;

    if (file) {
      file.errors = {};

      // Check maxsize
      if (this.maxsize && file.size > this.maxsize) {
        file.errors.maxsize = true;
      }

      // Check extension / type
      if (this.accept) {
        const [fileType, fileExtension] = file.type.split('/');
        const acceptedTypes = this.accept.split(',');
        const hasTypeError = !acceptedTypes.some((acceptedType) => {
          const [type, extension] = acceptedType.split('/');
          if (extension) {
            const isTypeValid = type === '*' || type.toLowerCase() === fileType.toLowerCase();
            const isExtensionValid = extension === '*' || extension.toLowerCase() === fileExtension.toLowerCase();
            return isTypeValid && isExtensionValid;
          }
          return type === '*' || type.replace('.', '').toLowerCase() === fileExtension.toLowerCase();
        });
        if (hasTypeError) {
          file.errors.type = true;
        }
      }

      // Set form validation
      if (this.form && this.form[this.name]) {
        if (file.errors.maxsize) {
          this.form[this.name].$setValidity('maxsize', false);
        }
        if (file.errors.type) {
          this.form[this.name].$setValidity('type', false);
        }
        if (errors?.notSingle) {
          this.form[this.name].$setValidity('not-single', false);
        }
        this.form[this.name].$setDirty();
      }

      if (!isEmpty(errors)) {
        file.errors = {
          ...file.errors,
          ...errors,
        };
      }

      // Clean errors
      if (isEmpty(file.errors)) {
        delete file.errors;
      }
    }

    return file;
  }

  loadFilePreview(_file_) {
    const file = _file_;

    // Load preview only if image
    if (this.preview && !file.errors && file.type && file.type.search(/^image\//) !== -1) {
      file.loading = true;

      file.reader = new this.$window.FileReader();
      file.reader.readAsDataURL(file);
      file.reader.onload = () => {
        file.loading = false;
        file.preview = `url("${file.reader.result}")`;

        this.$scope.$apply();
      };
    }

    return file;
  }

  addFile(file) {
    if (!file) return;
    this.getFileInfos(file);
    this.checkFileValidity(file);

    this.model = [file];
    this.onSelect({ modelValue: this.model });
    this.$scope.$apply();

    // Set back focus on fake selector
    this.$element[0].querySelector('.oui-file-selector__label').focus();
  }

  addFiles(files) {
    if (!this.model) {
      this.model = [];
    }

    const errors = {};
    if ((!this.multiple && this.droparea) && (files.length + this.model?.length || 0) > 1) {
      errors.notSingle = true;
      this.model.forEach((_item_) => {
        const item = _item_;
        if (!item.errors) item.errors = {};
        item.errors.notSingle = true;
      });
    }

    if (angular.isArray(files)) {
      files.forEach((file) => {
        // Check for duplicate before adding
        if (!find(this.model, (item) => file.name === item.name)) {
          this.getFileInfos(file);
          this.checkFileValidity(file, errors);
          this.loadFilePreview(file);
          this.model.push(file);
        }
      });

      this.onSelect({ modelValue: this.model });
      this.$scope.$apply();
    }
  }

  removeFile(file) {
    if (angular.isArray(this.model)) {
      remove(this.model, (item) => item === file);
      if (file.errors) {
        let hasMaxsizeErrors = false;
        let hasTypeErrors = false;
        let hasNotSingleError = false;

        if (!this.multiple && this.droparea) {
          hasNotSingleError = (this.model?.length || 0) > 1;
        }

        this.model.forEach((_item_) => {
          const item = _item_;
          hasMaxsizeErrors = hasMaxsizeErrors || item.errors?.maxsize;
          hasTypeErrors = hasTypeErrors || item.errors?.type;
          if (hasNotSingleError) {
            if (!item.errors) item.errors = {};
            item.errors.notSingle = true;
          } else if (item.errors?.notSingle) {
            delete item.errors.notSingle;
          }
          if (isEmpty(item.errors)) {
            delete item.errors;
          }
        });

        if (this.form && this.form[this.name]) {
          this.form[this.name].$setValidity('maxsize', !hasMaxsizeErrors);
          this.form[this.name].$setValidity('type', !hasTypeErrors);
          this.form[this.name].$setValidity('not-single', !hasNotSingleError);
        }
      }
      this.onRemove({ modelValue: this.model });
    }
  }

  resetFile() {
    this.model = undefined;
    this.fileSelector[0].value = '';
    this.onRemove({ modelValue: this.model });

    if (this.form && this.form[this.name]) {
      this.form[this.name].$setValidity('maxsize', true);
      this.form[this.name].$setValidity('type', true);
      this.form[this.name].$setValidity('not-single', true);
    }
  }

  openFileSelector() {
    // triggerHandler("click") don't work here
    this.fileSelector[0].click();
  }

  getFileInfos(_file_) {
    const file = _file_;
    const parts = file.name.split('.');
    const extension = parts.length > 1 ? parts.pop() : undefined;
    const name = parts.join('.');

    file.infos = {
      extension,
      name,
      size: this.getFileSize(file),
    };

    return file;
  }

  getFileSize(file) {
    let fileSize;

    // Parse units dictionnary in desc order
    // and break when the best units for file size is found
    // (when above 1 or last of dictionnary)
    let size = 0;
    this.units.forEach((unit) => {
      if (unit.size && angular.isNumber(unit.size)) {
        const unitSize = Math.floor(file.size / unit.size);

        // Should be the closest to 1
        if (!size) {
          size = Math.max(unitSize, size);
        } else {
          size = Math.min(unitSize, size);
        }

        // Update only if the right unit
        if (size === unitSize) {
          fileSize = `(${size} ${unit.suffix})`;
        }
      }
    });

    return fileSize;
  }

  setInputTouched() {
    if (this.form && this.form[this.name]) {
      // Set input[hidden] to touched for form validation
      this.form[this.name].$setTouched();
    }
  }

  parseAcceptAttribute() {
    const acceptedTypes = this.accept?.split(',') || [];
    let accept = '';
    acceptedTypes.forEach((acceptedType) => {
      const isExtension = acceptedType.indexOf('/') === -1;
      const isValid = isExtension
        ? acceptedType.startsWith('.')
        : /^([\x20-\x7F]+|\*)\/([\x20-\x7F]+|\*)$/.test(acceptedType);// match "string/string","*/string" and "string/*"
      if (isValid) {
        accept = accept ? `${accept},${acceptedType}` : acceptedType;
      }
    });
    return accept;
  }

  $onInit() {
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'required');
    addBooleanParameter(this, 'multiple');
    addBooleanParameter(this, 'droparea');
    addBooleanParameter(this, 'preview');

    addDefaultParameter(this, 'id', `ouiFile${this.$scope.$id}`);
    addDefaultParameter(this, 'name', `ouiFile${this.$scope.$id}`);
    addDefaultParameter(this, 'placeholder', this.translations.filePlaceholder);

    this.selectorId = `${this.id}Selector`;
    this.dropareaId = `${this.id}Droparea`;
    this.attachments = Boolean(this.multiple || this.droparea || this.preview);

    this.accept = this.parseAcceptAttribute();
  }

  $postLink() {
    this.$timeout(() => {
      this.$element
        .addClass('oui-file')
        .removeAttr('id')
        .removeAttr('name');

      // ngChange don't work on input file
      this.fileSelector = angular.element(this.$element[0].querySelector(`#${this.selectorId}`));
      this.fileSelector.on('change', (e) => {
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
          .on('drag dragstart dragend dragover dragenter dragleave drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
          })
          .on('dragover dragenter', () => this.fileDroparea.addClass('oui-file-droparea_dragover'))
          .on('dragleave dragend drop', () => this.fileDroparea.removeClass('oui-file-droparea_dragover'))
          .on('drop', (e) => {
            // FileList from input file is read-only
            // Needed to be port as an array for manipulation
            const dataTransfer = e.dataTransfer || e.originalEvent.dataTransfer;
            if (!this.disabled && dataTransfer) {
              this.addFiles(Array.from(dataTransfer.files));
            }
          });
      }
    });
  }
}
