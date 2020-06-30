import { addBooleanParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';
import get from 'lodash/get';

export default class {
  constructor($attrs, $document, $element, $timeout, ouiNavbarConfiguration, KEYBOARD_KEYS) {
    'ngInject';

    this.$attrs = $attrs;
    this.$document = $document;
    this.$element = $element;
    this.$timeout = $timeout;
    this.config = ouiNavbarConfiguration;

    this.keyboardNav = {};
    this.KEYBOARD_KEYS = KEYBOARD_KEYS;
  }

  addItemToGroup(item, groupName) {
    // Create the group if it doesn't exist
    if (angular.isUndefined(this.keyboardNav[groupName])) {
      this.keyboardNav[groupName] = [];
    }

    // Add item to the group
    this.keyboardNav[groupName].push(item);
  }

  getGroup(groupName) {
    return this.keyboardNav[groupName];
  }

  // Set focus to an item of a group
  setFocusTo(groupName, index) {
    // Add a delay to force focus
    const delay = 50;
    this.$timeout(() => {
      if (get(this.keyboardNav, [groupName, index])) {
        this.keyboardNav[groupName][index].focus();
      }
    }, delay);
  }

  toggleMenu(state, isInternalNav) {
    if (state) {
      // Reset navigation if not internal navigation
      if (!isInternalNav && (!this.navigation || !this.navigation[state])) {
        this.navigation = {};
      }

      if (isInternalNav || !this.navigation[state]) {
        // Toggle menu if internal navigation or state is undefined
        this.navigation[state] = !this.navigation[state];
      } else if (this.navigation[state]) {
        // Else close all menus
        this.navigation = null;
      }

      // Focus first list item when opened
      if (this.navigation && this.navigation[state]) {
        // Add a little delay to avoid transition bug on Webkit
        this.setFocusTo(state, 0);
      }
    } else {
      // Close all menus
      this.navigation = null;
    }
  }

  $onInit() {
    // If no togglerLinks attribute, we use the value of mainLinks
    if (!angular.isDefined(this.$attrs.togglerLinks) && angular.isDefined(this.$attrs.mainLinks)) {
      this.togglerLinks = this.mainLinks;
    }

    // Support presence of attribute 'fixed'
    addBooleanParameter(this, 'fixed');
  }

  $onDestroy() {
    this.$document
      .off('click')
      .off('keydown');
  }

  $postLink() {
    // Avoid $element DOM unsync for jqLite methods
    this.$timeout(() => {

      // Close navbar menu on document click, only if a menu is open
      this.$document.on('click', () => {
        if (this.navigation) {
          this.$timeout(() => this.toggleMenu());
        }
      });

      // Avoid click propagation on $element
      this.$element.on('click', (e) => {
        e.stopPropagation();
      });

      // Support keyboard
      this.$document.on('keydown', (e) => {
        // ESC to close menu
        if (this.navigation && e.which === this.KEYBOARD_KEYS.ESC) {
          this.$timeout(() => this.toggleMenu());
        }
      });
    });
  }
}
