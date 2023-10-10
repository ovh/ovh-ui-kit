import controller from './header.controller';
import template from './header.html';

export default {
  template,
  controller,
  bindings: {
    heading: '@?',
    description: '@?',
  },
  transclude: {
    back: '?ouiBackButton',
    guide: '?ouiGuideMenu',
    tabs: '?ouiHeaderTabs',
    heading: '?ouiHeaderHeading',
  },
};
