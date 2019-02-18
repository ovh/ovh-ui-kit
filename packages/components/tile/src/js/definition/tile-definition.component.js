import controller from './tile-definition.controller';
import template from './tile-definition.html';

export default {
  template,
  controller,
  bindings: {
    term: '@?',
    termPopover: '@?',
    description: '@?',
  },
  transclude: {
    descriptionSlot: '?ouiTileDescription',
    actionSlot: '?ouiActionMenu',
  },
};
