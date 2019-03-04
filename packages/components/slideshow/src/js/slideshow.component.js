import controller from './slideshow.controller';
import template from './slideshow.html';

export default {
  template,
  controller,
  transclude: true,
  bindings: {
    theme: '@?',
    loading: '<?',
    loop: '<?',
    onDismiss: '&',
    onPanelChange: '&',
  },
};
