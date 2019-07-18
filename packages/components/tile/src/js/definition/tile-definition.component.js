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
    actionMenuSlot: '?ouiActionMenu',
    actionsSlot: '?ouiTileActions',
    descriptionSlot: '?ouiTileDescription',
    termSlot: '?ouiTileTerm',
  },
};
