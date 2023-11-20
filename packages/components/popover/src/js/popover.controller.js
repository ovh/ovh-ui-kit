import { addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';
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
    this.id = this.id || `ouiPopover${this.$scope.$id}`;
    this.isPopoverOpen = false;

    addDefaultParameter(this, 'placement', 'auto');
  }

  $postLink() {
    this.setPopover()
      .then(() => this.setTrigger())
      .then(() => {
        if (this.open) {
          this.openPopover();
        }
      });
  }

  $onChanges(changes) {
    if (angular.isDefined(changes.open) && this.triggerElement) {
      if (changes.open.currentValue) {
        this.openPopover();
      } else {
        this.closePopover();
      }
    }
  }

  $onDestroy() {
    this.closePopover();
  }

  setPopover() {
    return this.$timeout(() => {
      // Create a new scope to compile the popover next to the trigger
      const popoverScope = angular.extend(this.$scope.$new(true), {
        $popoverCtrl: this,
        $ctrl: this.scope,
      });
      const popoverTemplate = this.$compile(template)(popoverScope);

      // Add compiled template after $element
      this.$element
        .removeAttr('title') // Remove title to avoid native tooltip
        .after(popoverTemplate);

      const { 0: popover } = this.$element.next();
      this.popperElement = popover;
    });
  }

  setTrigger() {
    return this.$timeout(() => {
      const { 0: trigger } = this.$element;
      this.triggerElement = trigger;

      this.$element
        .addClass('oui-popover__trigger')
        .attr({
          'aria-haspopup': true,
          'aria-expanded': false,
          'aria-describedby': this.id,
        });

      if (angular.isUndefined(this.$attrs.ouiPopoverOpen)) {
        this.$element
          .on('click', () => this.onTriggerClick());
      }
    });
  }

  onTriggerClick() {
    if (!this.isPopoverOpen) {
      this.openPopover();
    } else {
      this.closePopover();
    }
  }

  documentClickHandler(evt) {
    if (
      (evt && evt.type === 'click')
      && (this.triggerElement.contains(evt.target) || this.popperElement.contains(evt.target))
    ) {
      return;
    }

    this.$scope.$apply(() => this.closePopover());
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

    // Avoid events if the opening is handled from outside
    if (angular.isUndefined(this.$attrs.ouiPopoverOpen)) {
      this.$document.on(`click.${this.id}`, (evt) => this.documentClickHandler(evt));
      this.$document.on(`keydown.${this.id}`, (evt) => this.triggerKeyHandler(evt));
    }

    this.$element.attr('aria-expanded', true);

    // force the digest because the popover is outside the angular digest loop
    this.$timeout(() => this.onOpen(), 0);
  }

  closePopover() {
    this.isPopoverOpen = false;

    if (angular.isUndefined(this.$attrs.ouiPopoverOpen)) {
      this.$document.off(`click.${this.id}`);
      this.$document.off(`keydown.${this.id}`);
    }

    this.$element.attr('aria-expanded', false);

    // force the digest because the popover is outside the angular digest loop
    this.$timeout(() => this.onClose(), 0);
  }

  createPopper() {
    this.popperElement.style.minWidth = `${this.triggerElement.offsetWidth}px`;

    this.popper = new Popper(this.triggerElement, this.popperElement, {
      placement: this.placement,
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
