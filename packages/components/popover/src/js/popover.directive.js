import controller from './popover.controller';

export default () => {
  'ngInject';

  return {
    restrict: 'AE',
    bindToController: {
      text: '@ouiPopover',
      title: '@?',
      placement: '@?ouiPopoverPlacement',
      template: '@?ouiPopoverTemplate',
    },
    controller,
    controllerAs: '$popoverCtrl',
  };
};
