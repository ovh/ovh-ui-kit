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
      scope: '<?ouiPopoverScope',
      template: '@?ouiPopoverTemplate',
    },
    controller,
    controllerAs: '$popoverCtrl',
  };
};
