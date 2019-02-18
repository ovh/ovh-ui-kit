import controller from './navbar-group.controller';

export default () => ({
  restrict: 'A',
  require: {
    navbarCtrl: '^ouiNavbar',
  },
  bindToController: {
    groupName: '@ouiNavbarGroup',
    isLast: '<?ouiNavbarGroupLast',
  },
  controller,
});
