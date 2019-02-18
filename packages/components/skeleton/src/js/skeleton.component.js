import controller from './skeleton.controller';
import template from './skeleton.html';

export default {
  controller,
  template,
  bindings: {
    size: '@?',
    randomized: '<?',
  },
};
