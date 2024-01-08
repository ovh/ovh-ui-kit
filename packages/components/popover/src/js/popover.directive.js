import controller from './popover.controller';

export default () => {
  'ngInject';

  return {
    restrict: 'A',
    bindToController: {
      text: '@ouiPopover',
      title: '@?',
      id: '@ouiPopoverId',
      placement: '@?ouiPopoverPlacement',
      size: '@?ouiPopoverSize',
      scope: '<?ouiPopoverScope',
      template: '@?ouiPopoverTemplate',
      open: '<?ouiPopoverOpen',
      onOpen: '&ouiPopoverOnOpen',
      onClose: '&ouiPopoverOnClose',
    },
    controller,
    controllerAs: '$popoverCtrl',
  };
};
