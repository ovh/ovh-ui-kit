import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

import {
  brand, asideLinks, mainLinks, placeholderNotification,
} from '../_data/navbar.data.json';

// Create mock module for the stories
const moduleName = 'oui-navbar-stories';
angular.module(moduleName, ['oui.navbar', 'oui.radio']);

storiesOf('Components/Navbar', module)
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-navbar
      brand="$ctrl.brand"
      active-link="lorem"
      main-links="$ctrl.mainLinks"
      aside-links="$ctrl.asideLinks"
      toggler-links="$ctrl.togglerLinks">
    </oui-navbar>
    `, {
      $ctrl: {
        brand,
        asideLinks,
        mainLinks,
        togglerLinks: mainLinks,
      },
    })), {
      notes: 'If there is no `toggler-links` attribute, it will use `main-links` instead to build the toggler menu.',
    },
  )
  .add(
    'Advanced',
    forModule(moduleName).createElement(() => compileTemplate(`

    <oui-navbar
      active-link="lorem">
      <oui-navbar-toggler
        links="$ctrl.togglerLinks">
      </oui-navbar-toggler>
      <oui-navbar-brand
        href="{{$ctrl.brand.url}}"
        aria-label="{{$ctrl.brand.label}}"
        icon-class="{{$ctrl.brand.iconClass}}">
      </oui-navbar-brand>
      <oui-navbar-main>
        <oui-navbar-link
          name="{{mainLink.name}}"
          href="{{mainLink.url}}"
          variant="{{mainLink.isPrimary ? 'primary' : 'secondary'}}"
          aria-label="{{mainLink.label}}"
          ng-repeat="mainLink in $ctrl.mainLinks track by $index">
          {{mainLink.title}}
        </oui-navbar-link>
      </oui-navbar-main>
      <oui-navbar-aside>
        <oui-navbar-dropdown
          name="{{asideLink.name}}"
          text="{{asideLink.title}}"
          aria-label="{{asideLink.label}}"
          icon-badge="(asideLink.subLinks | filter: {
            isActive: 'true',
            acknowledged: '!true'
          }).length"
          icon-class="{{asideLink.iconClass}}"
          on-click="asideLink.onClick"
          ng-repeat="asideLink in $ctrl.asideLinks track by $index"
          ng-class="asideLink.class"
          ng-switch="asideLink.name">
          <oui-navbar-notification ng-switch-when="notifications"
            name="{{asideLink.name}}"
            links="asideLink.subLinks"
            limit-to="asideLink.limitTo"
            header-template="asideLink.headerTemplate"
            header-title="{{asideLink.headerTitle}}"
            footer-template="asideLink.footerTemplate"
            footer-title="{{asideLink.footerTitle}}"
            footer-href="{{asideLink.footerUrl}}"
            placement="end"
            fixed>
          </oui-navbar-notification>
          <oui-navbar-menu ng-switch-when="user"
            header-breadcrumb="{{asideLink.nichandle}}"
            header-title="{{asideLink.fullName}}"
            name="{{asideLink.name}}"
            links="asideLink.subLinks"
            placement="end"
            fixed>
          </oui-navbar-menu>
          <oui-navbar-menu ng-switch-default
            header-class="oui-navbar_mobile-only"
            header-breadcrumb="{{asideLink.headerBreadcrumb}}"
            header-title="{{asideLink.headerTitle}}"
            name="{{asideLink.name}}"
            links="asideLink.subLinks"
            placement="end"
            fixed>
          </oui-navbar-menu>
        </oui-navbar-dropdown>
      </oui-navbar-aside>
    </oui-navbar>
    `, {
      $ctrl: {
        brand,
        asideLinks,
        mainLinks,
        togglerLinks: mainLinks,
      },
    })),
  )
  .add(
    'Placeholder for notification',
    forModule(moduleName).createElement(() => compileTemplate(`
    <p>
      <oui-radio-toggle-group
        model="$ctrl.placeholderNotification[0].subLinks">
        <oui-radio value="null">Error in notification</oui-radio>
        <oui-radio value="[]" default>No notification</oui-radio>
      </oui-radio-toggle-group>
    </p>

    <oui-navbar
      aside-links="$ctrl.placeholderNotification">
    </oui-navbar>
    `, {
      $ctrl: {
        placeholderNotification,
      },
    })), {
      notes: 'In the notification submenu, a placeholder is shown depending if there’s no notification or if variable `subLinks` is not defined inside an `aside-links`.',
    },
  );
