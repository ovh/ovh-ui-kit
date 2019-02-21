import { addBooleanParameter, addDefaultParameter } from '@ovh/ui-kit.core/src/js/component-utils';
import Popper from 'popper.js';

const KEY_ESCAPE = 27;

export default class {
  constructor($attrs, $document, $element, $scope, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$document = $document;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.isDropdownOpen = false;
    this.hasFocus = false;
    this.currentFocusedElement = null;

    addBooleanParameter(this, 'arrow');
    addBooleanParameter(this, 'persistent');
    addDefaultParameter(this, 'placement', 'start');

    // Use internal id to map trigger and content with aria-label and aria-labelledby.
    this.id = `ouiDropdown${this.$scope.$id}`;

    this.documentClickHandler = (evt) => {
      if ((evt && evt.type === 'click')
        && (!evt.target || !evt.target.getAttribute || evt.target.getAttribute('type') !== 'submit')
        && (
          this.triggerElement.contains(evt.target)
          || (this.persistent && this.popperElement.contains(evt.target))
        )
      ) {
        return;
      }
      this.$scope.$apply(() => this.closeDropdown());
    };

    // Handle espace key press
    this.triggerKeyHandler = (evt) => {
      if (evt && evt.type === 'keydown' && evt.which === KEY_ESCAPE) {
        this.$scope.$apply(() => {
          this.closeDropdown();
        });
      }
    };

    this.triggerBlurHandler = (evt) => {
      // Disable blur management if dropdown is persitent.
      if (this.persistent) {
        return;
      }

      if (evt.relatedTarget && !this.$element[0].contains(evt.relatedTarget)) {
        // Sometime Angular is already in a digest loop here.
        // Let's delay dropdown closing after that instead of $applying again.
        this.$timeout(() => this.closeDropdown());
      }

      // This part allows to press tab and keeps dropdown open
      // as long as focused element is in the dropdown.
      if (this.currentFocusedElement) {
        angular.element(this.currentFocusedElement).off('blur', this.triggerBlurHandler);
      }
      angular.element(evt.relatedTarget).on('blur', this.triggerBlurHandler);
      this.currentFocusedElement = evt.relatedTarget;
    };
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-dropdown'));
  }

  $onDestroy() {
    this.destroyPopper();
  }

  setDropdownTrigger(trigger, ctrl) {
    this.triggerElement = trigger;
    this.triggerCtrl = ctrl;
  }

  setDropdownMenu(menu, arrow) {
    this.popperElement = menu;
    this.arrowElement = arrow;
  }

  // Handle click, space key press and enter key press
  onTriggerClick() {
    this.toggle();
  }

  toggle() {
    if (!this.isDropdownOpen) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  }

  openDropdown() {
    // Don't use ng-class here, it could cause issue on positionning.
    this.isDropdownOpen = true;
    this.updatePopper();

    this.$document.on('click', this.documentClickHandler);
    this.$document.on('keydown', evt => this.triggerKeyHandler(evt));

    // Update trigger
    if (this.triggerCtrl.afterOpen) {
      this.triggerCtrl.afterOpen();
    }
  }

  closeDropdown() {
    // Don't use ng-class here, it could cause issue on positionning.
    this.isDropdownOpen = false;
    this.destroyPopper();

    this.$document.off('click', this.documentClickHandler);

    // Update trigger
    if (this.triggerCtrl.afterClose) {
      this.triggerCtrl.afterClose();
    }
  }

  createPopper() {
    let placement = 'bottom';

    if (['start', 'end'].indexOf(this.placement) >= 0) {
      placement += `-${this.placement}`;
    }

    // Let Popper.js manage the arrow position when it's centered (default).
    if (this.arrowElement && placement === 'bottom') {
      this.arrowElement.setAttribute('x-arrow', '');
    }

    this.popperElement.style.minWidth = `${this.getTriggerWidth()}px`;

    this.popper = new Popper(this.triggerElement, this.popperElement, {
      placement,
      modifiers: {
        flip: {
          boundariesElement: 'viewport',
        },
        keepTogether: {
          enabled: true,
        },
        preventOverflow: {
          boundariesElement: 'viewport',
          escapeWithReference: true,
        },
      },
    });
  }

  updatePopper() {
    if (!this.popper) {
      this.createPopper();
    }

    this.popper.scheduleUpdate();
  }

  destroyPopper() {
    if (!this.popper) {
      return;
    }

    this.popper.destroy();
    this.popper = null;
  }

  getTriggerWidth() {
    const MINWIDTH = 140;
    return Math.max(this.triggerElement.offsetWidth, MINWIDTH);
  }
}
