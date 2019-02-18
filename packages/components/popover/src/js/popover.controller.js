import { addDefaultParameter } from '@ovh/ui-kit.core/src/js/component-utils';
import Popper from 'popper.js';
import template from './popover.html';

const KEY_ESCAPE = 27;

export default class PopoverController {
  constructor($attrs, $compile, $document, $element, $scope, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$compile = $compile;
    this.$document = $document;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.id = `ouiPopover${this.$scope.$id}`;
    this.isPopoverOpen = false;

    addDefaultParameter(this, 'placement', 'right');
  }

  $postLink() {
    this.setPopover();
    this.setTrigger();
  }

  $onDestroy() {
    this.closePopover();
  }

  setPopover() {
    this.$timeout(() => {
      // Support for attribute `oui-popover`
      // Create a new scope to compile the popover next to the trigger
      const popoverScope = angular.extend(this.$scope.$new(true), { $popoverCtrl: this });
      const popoverTemplate = this.$compile(template)(popoverScope);

      // Add compiled template after $element
      this.$element
        .removeAttr('title') // Remove title to avoid native tooltip
        .after(popoverTemplate);

      this.popperElement = this.$element.next()[0];
      this.arrowElement = this.popperElement.querySelector('.oui-popover__arrow');
    });
  }

  setTrigger() {
    this.$timeout(() => {
      // Support for attribute `oui-popover`
      this.triggerElement = this.$element[0];
      this.$triggerElement = angular.element(this.triggerElement);

      this.$triggerElement
        .addClass('oui-popover__trigger')
        .attr({
          'aria-haspopup': true,
          'aria-expanded': false,
        })
        .on('click', () => this.onTriggerClick());
    });
  }

  onTriggerClick() {
    if (!this.isPopoverOpen) {
      this.openPopover();
    } else {
      this.closePopover();
    }
  }

  triggerKeyHandler(evt) {
    if (evt && evt.type === 'keydown' && evt.which === KEY_ESCAPE) {
      this.$scope.$apply(() => {
        this.closePopover();
      });
    }
  }

  openPopover() {
    this.isPopoverOpen = true;
    this.updatePopper();

    this.$document.on('keydown', evt => this.triggerKeyHandler(evt));

    // Support for attribute `oui-popover`
    this.$element.attr('aria-expanded', true);
  }

  closePopover() {
    this.isPopoverOpen = false;

    this.$document.off('keydown', evt => this.triggerKeyHandler(evt));

    // Support for attribute `oui-popover`
    this.$element.attr('aria-expanded', false);
  }

  createPopper() {
    // Let Popper.js manage the arrow position when it's centered (default).
    if (this.arrowElement) {
      this.arrowElement.setAttribute('x-arrow', '');
    }

    this.popperElement.style.minWidth = `${this.triggerElement.offsetWidth}px`;

    this.popper = new Popper(this.triggerElement, this.popperElement, {
      placement: this.placement,
      modifiers: {
        preventOverflow: {
          boundariesElement: this.$document[0].body,
        },
      },
    });
  }

  updatePopper() {
    if (this.popper) {
      this.popper.scheduleUpdate();
    } else {
      this.createPopper();
    }
  }

  destroyPopper() {
    if (!this.popper) {
      return;
    }

    this.popper.destroy();
    this.popper = null;
  }
}
