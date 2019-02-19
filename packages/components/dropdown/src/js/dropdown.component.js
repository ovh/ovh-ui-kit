import controller from './dropdown.controller';

export default {
  controller,
  bindings: {
    placement: '@?',
    arrow: '<?',
    persistent: '<?',
  },
};
