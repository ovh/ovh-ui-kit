import Bloodhound from 'bloodhound-js';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import merge from 'lodash/merge';
import Popper from 'popper.js';
import template from './autocomplete.html';

const KEYBOARD_KEYS = {
  TAB: 9,
  SHIFT: 16,
  ESC: 27,
  UP: 38,
  DOWN: 40,
};

export default class {
  constructor($compile, $document, $element, $scope, $timeout, ouiAutocompleteConfiguration) {
    'ngInject';

    this.$compile = $compile;
    this.$document = $document;
    this.$element = $element;
    this.$timeout = $timeout;
    this.$scope = $scope;
    this.providerOptions = ouiAutocompleteConfiguration.options;
  }

  createDatalist() {
    const input = this.$element[0];
    const autocomplete = this.$element.next()[0];

    // Let Popper.js position the datalist
    this.popper = new Popper(input, autocomplete, {
      placement: 'bottom-start',
    });

    this.triggerWidth = `${this.popper.reference.clientWidth}px`;
  }

  openDatalist(datum) {
    if (!datum.length) {
      this.closeDatalist();
      return;
    }

    this.$timeout(() => {
      // Refresh keyboard navigation
      this.navItems = undefined;
      this.navIndex = undefined;

      this.datalist = datum;
      this.isOpen = true;

      // Init keyboard navigation
      if (!this.isNavigable) {
        this.isNavigable = true;
        this.$document
          .one('click', () => this.closeDatalist())
          .on('keydown', e => this.triggerKeyHandler(e))
          .on('keyup', e => delete this.keys[e.which]);
      }
    });
  }

  closeDatalist() {
    this.$timeout(() => {
      this.datalist = [];
      this.isOpen = false;

      // Clear keyboard navigation
      if (this.isNavigable) {
        this.isNavigable = false;
        this.keys = {};

        this.$document
          .off('click')
          .off('keydown')
          .off('keyup');
      }
    });
  }

  initSearchEngine(suggestions) {
    if (!this.engine && angular.isArray(suggestions)) {
      this.engine = new Bloodhound({
        local: suggestions,
        datumTokenizer: (datum) => {
          const value = this.getProperty(datum);
          return Bloodhound.tokenizers.whitespace(value);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
      });

      this.engine.initialize();

      // Watch model value for search engine
      this.$scope.$watch(
        () => this.model.$modelValue,
        debounce(
          value => this.searchQuery(value),
          this.options.debounceDelay,
        ),
      );
    }
  }

  updateSearchEngine(suggestions) {
    if (this.engine && angular.isArray(suggestions)) {
      this.engine.clear();
      this.engine.local = suggestions;
      this.engine.initialize(true);
    }
  }

  searchQuery(query) {
    if (angular.isString(query) && query !== this.selectedValue) {
      this.$timeout(() => {
        if (query.length >= this.options.minLength) {
          this.engine.search(
            query,
            datum => this.openDatalist(datum), // Sync
            datum => this.openDatalist(datum), // Async
          );
        } else if (this.isOpen) {
          this.closeDatalist();
        }

        // Needed for highlight filter
        this.query = query;
      });
    }
  }

  updateValue(value) {
    this.$element[0].focus();
    this.selectedValue = this.getProperty(value);
    this.closeDatalist();

    // Update value and notify model change
    this.model.$setViewValue(this.selectedValue);
    this.model.$render();

    // Callback
    this.onSelect({
      value: angular.copy(value), // Clean $$hashKey
    });
  }

  getProperty(item) {
    return get(item, this.property, item);
  }

  focusNavItem(direction) {
    if (angular.isUndefined(this.navItems)) {
      this.navItems = this.autocomplete.find('button');
      this.navItems.push(this.$element[0]);
      this.navLastIndex = this.navItems.length - 1;
    }

    // Set index of trigger input if undefined
    if (angular.isUndefined(this.navIndex)) {
      this.navIndex = this.navLastIndex;
    }

    if (direction === 'next') {
      this.navIndex = this.navIndex >= this.navLastIndex ? 0 : this.navIndex + 1;
    } else if (direction === 'prev') {
      this.navIndex = this.navIndex <= 0 ? this.navLastIndex : this.navIndex - 1;
    }

    this.navItems[this.navIndex].focus();
  }

  triggerKeyHandler(e) {
    if (this.isNavigable) {
      const key = e.which;

      if ([
        KEYBOARD_KEYS.TAB,
        KEYBOARD_KEYS.SHIFT,
        KEYBOARD_KEYS.UP,
        KEYBOARD_KEYS.DOWN,
        KEYBOARD_KEYS.ESC,
      ].indexOf(key) > -1) {
        e.preventDefault();
        e.stopPropagation();

        // Add key in array for key combination
        this.keys[key] = true;

        if (
          (this.keys[KEYBOARD_KEYS.TAB] && !this.keys[KEYBOARD_KEYS.SHIFT])
                    || this.keys[KEYBOARD_KEYS.DOWN]
        ) {
          // Move Down
          this.focusNavItem('next');
        } else if (
          (this.keys[KEYBOARD_KEYS.TAB] && this.keys[KEYBOARD_KEYS.SHIFT])
                    || this.keys[KEYBOARD_KEYS.UP]
        ) {
          // Move Up
          this.focusNavItem('prev');
        } else if (this.keys[KEYBOARD_KEYS.ESC]) {
          // Escape
          this.closeDatalist();
        }
      }
    }
  }

  $onChanges(changes) {
    if (changes.suggestions && changes.suggestions.currentValue) {
      this.updateSearchEngine(changes.suggestions.currentValue);
    }
  }

  $onInit() {
    this.id = `ouiAutocomplete${this.$scope.$id}`;
    this.options = merge(this.providerOptions, this.options);
    this.keys = {};

    this.initSearchEngine(this.suggestions);
  }

  $postLink() {
    this.$timeout(() => {
      // Create a new scope to compile the autocomplete next to the input
      const autocompleteScope = angular.extend(this.$scope.$new(true), { $autocompleteCtrl: this });
      this.autocomplete = this.$compile(template)(autocompleteScope);

      this.$element
        .attr('autocomplete', 'off')
        .attr('list', this.id)
        .one('focus', () => this.createDatalist()) // One time bind to create the popper helper
        .on('click', e => e.stopPropagation()) // Avoid click propagation on $element
        .after(this.autocomplete); // Add compiled template after $element
    });
  }

  $onDestroy() {
    if (this.engine) {
      this.engine.clear();
    }

    if (this.isNavigable) {
      this.$element
        .off('click')
        .off('keydown');
    }
  }
}
