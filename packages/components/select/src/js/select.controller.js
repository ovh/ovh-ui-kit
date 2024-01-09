import { addBooleanParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';
import get from 'lodash/get';

export default class {
  constructor(
    $attrs, $compile, $element, $rootScope, $scope, $timeout, $http, $q, ouiSelectConfiguration,
  ) {
    'ngInject';

    this.$attrs = $attrs;
    this.$compile = $compile;
    this.$element = $element;
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$http = $http;
    this.$q = $q;
    this.ouiSelectConfiguration = ouiSelectConfiguration;
  }

  $onInit() {
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'inline');
    addBooleanParameter(this, 'required');
    addBooleanParameter(this, 'multiple');
    addBooleanParameter(this, 'searchable');
  }

  $onChanges(changes) {
    if (changes.load?.currentValue) {
      this.loadCursor = null;
      this.loadItems();
    }
    if (changes.placeholder) {
      this.placeholder = changes.placeholder.currentValue;
    }
  }

  $postLink() {
    const $htmlContent = angular.element(this.htmlContent);

    if (this.multiple) {
      $htmlContent.attr('multiple', true);
    }

    this.$compile($htmlContent)(this.$scope, (clone) => {
      this.$element.append(clone);
    });

    this.$timeout(() => {
      this.$element
        .addClass('oui-select')
        .removeAttr('name')
        .removeAttr('title');

      if (this.inline) {
        this.$element.addClass('oui-select_inline');
      }

      if (this.$select.focusInput) {
        this.$select.focusInput
          .on('blur', () => this.onUiSelectBlur())
          .on('focus', () => this.onUiSelectFocus());
      }
    });

    // For focus from oui-field label
    this.unregisterFocus = this.$scope.$on('oui:focus', () => this.$select.setFocus());

    this.$scope.$on('oui-select:closeAll', () => {
      this.$select.close();
    });
  }

  $onDestroy() {
    if (this.unregisterFocus) {
      this.unregisterFocus();
    }
  }

  removeChoice(e, index, item, callback) {
    e.preventDefault();
    e.stopPropagation();

    if (this.onConfirmRemove) {
      this.onConfirmRemove({ item, index }).then((response) => {
        if (response) {
          // Call $selectMultiple.removeChoice of ui-select
          callback(index, this);
        }
      });
    } else {
      // Call $selectMultiple.removeChoice of ui-select
      callback(index, this);
    }
  }

  onUiSelectClick() {
    // Close others instances of oui-select before opening it
    if (!this.$select.open) {
      this.$rootScope.$broadcast('oui-select:closeAll');
    }

    if (!this.$select.focus) {
      this.$select.setFocus();
    }

    // The plugin toggle open/close by itself
    this.$select.activate();
  }

  onUiSelectChange(modelValue) {
    this.onChange({ modelValue });

    // Fix focus input (unfocus on select in multiple mode)
    if (this.multiple) {
      this.$select.setFocus();
    }
  }

  onUiSelectBlur() {
    // Fix focus property (no focusser in multiple mode)
    this.$select.focus = false;

    // Need $timeout to get the refreshed value of $select.open from UI Select
    this.$timeout(() => {
      // Since UI Select toggle focus between focusInput and searchInput
      // We need to check if the blur event is the one we really need (only in single mode)
      if (this.multiple || !this.$select.open) {
        if (this.fieldCtrl) {
          this.fieldCtrl.checkControlErrors(this.$select.$element[0], this.name);
        }

        this.onBlur();
      } else {
        this.isOpen = true;
      }
    });
  }

  onUiSelectFocus() {
    // Fix focus property (no focusser in multiple mode)
    this.$select.focus = true;

    // Need $timeout to get the refreshed value of $select.open from UI Select
    this.$timeout(() => {
      // Since UI Select toggle focus between focusInput and searchInput
      // We need to check if the focus event is the one we really need (only in single mode)
      if (this.multiple || this.$select.open || (!this.$select.open && !this.isOpen)) {
        this.onFocus();
      } else {
        this.isOpen = false;
      }
    });
  }

  onUiSelectRemove() {
    if (this.multiple) {
      this.onChange({ modelValue: this.$select.selected });
    }
  }

  getValue(item) {
    return get(item, this.valueProperty, item);
  }

  getPropertyValue(item) {
    return get(item, this.match, item);
  }

  loadItems() {
    const { load, loadCursor, loadOptions } = this;
    const { paginationHeaders } = this.ouiSelectConfiguration;
    let request = {
      ...loadOptions?.global,
      method: loadOptions?.method || 'GET',
      url: load,
      timeout: Number.isInteger(loadOptions?.timeout) && loadOptions.timeout >= 0
        ? loadOptions.timeout
        : 30000,
      headers: {
        ...loadOptions?.headers,
        ...(loadCursor && { [paginationHeaders.cursor]: loadCursor }),
        ...(() => {
          if (Number.isInteger(loadOptions?.size)) {
            return loadOptions.size > 0 ? { [paginationHeaders.size]: loadOptions.size } : null;
          }
          return { [paginationHeaders.size]: 25 };
        })(),
      },
    };

    if (this.onBeforeLoad) {
      request = this.onBeforeLoad({ request });
    }

    this.loading = true;

    return this.$http(request).then((response) => {
      if (response.config.url !== this.load) return;

      const { data, headers } = response;
      const next = headers(paginationHeaders.nextCursor);

      response.nextCursor = next;
      this.loadCursor = next;

      if (loadCursor) {
        this.items = [
          ...this.items.filter(({ isSpinner }) => !isSpinner),
          ...data,
        ];
      } else {
        this.items = data || [];
      }
      if (this.onLoad) {
        this.onLoad({ request, response });
      }
      if (next) {
        this.items = [...this.items, { isSpinner: true, isInView: false }];
      }
    }).catch((error) => {
      if (this.onError) {
        this.onError({ request, error });
      }
    }).finally(() => {
      this.loading = false;
    });
  }

  onSpinnerInView(spinner) {
    const { isInView } = spinner;
    if (!isInView) {
      Object.assign(spinner, { isInView: true });
      this.loadItems();
    }
  }
}
