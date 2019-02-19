import controller from './chips.controller';
import template from './chips.html';

export default {
  template,
  controller,
  bindings: {
    items: '=',
    closable: '<?',
    stacked: '<?',
    onRemove: '&',
  },
};
