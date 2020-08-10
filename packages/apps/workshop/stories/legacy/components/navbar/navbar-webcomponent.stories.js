import { forModule } from 'storybook-addon-angularjs';
import { action } from '@storybook/addon-actions';

import Navbar from '@ovh-ux/ui-kit.navbar';
import Radio from '@ovh-ux/ui-kit.radio';

import readme from '@ovh-ux/ui-kit.navbar/README.md';
import { compileTemplate } from '../../../../src/utils';

import {
  brand,
  asideLinks,
  mainLinks,
  placeholderNotification,
} from '../../../_data/navbar.data.json';

// Create mock module for the stories
const moduleName = 'navbar-webcomponent.stories';
angular.module(moduleName, [
  Navbar,

  // For examples
  Radio,
]);

export default {
  title: 'Legacy/Components/Navbar/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-navbar
      brand="$ctrl.brand"
      active-link="lorem"
      main-links="$ctrl.mainLinks"
      aside-links="$ctrl.asideLinks"
      toggler-links="$ctrl.togglerLinks"
      fixed>
    </oui-navbar>
    `, {
      $ctrl: {
        brand,
        asideLinks,
        mainLinks,
        togglerLinks: mainLinks,
      },
    },
  ),
);

export const Advanced = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-navbar
      active-link="lorem"
      fixed>
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
          on-click="$ctrl.onClick(open)"
          ng-repeat="asideLink in $ctrl.asideLinks track by $index"
          ng-class="asideLink.class">
          <oui-navbar-notification
            ng-if="asideLink.name === 'notifications'"
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
          <oui-navbar-menu
            ng-if="asideLink.name === 'user'"
            header-breadcrumb="{{asideLink.nichandle}}"
            header-title="{{asideLink.fullName}}"
            name="{{asideLink.name}}"
            links="asideLink.subLinks"
            placement="end"
            fixed>
          </oui-navbar-menu>
          <oui-navbar-menu
            ng-if="asideLink.name !== 'notifications' && asideLink.name !== 'user'"
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
    </oui-navbar>`,
    {
      $ctrl: {
        brand,
        asideLinks,
        mainLinks,
        togglerLinks: mainLinks,
        onClick: action('onClick'),
      },
    },
  ),
);

export const CustomPanels = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-navbar
      active-link="lorem"
      fixed>
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
          on-click="$ctrl.onClick(open)"
          ng-repeat="asideLink in $ctrl.asideLinks track by $index"
          ng-class="asideLink.class">
          <oui-navbar-notification
            ng-if="asideLink.name === 'notifications'"
            name="{{asideLink.name}}"
            links="asideLink.subLinks"
            limit-to="asideLink.limitTo"
            header-template="asideLink.headerTemplate"
            header-title="{{asideLink.headerTitle}}"
            footer-template="asideLink.footerTemplate"
            footer-title="{{asideLink.footerTitle}}"
            footer-href="{{asideLink.footerUrl}}"
            placement="end"
            variant="panel">
          </oui-navbar-notification>
          <oui-navbar-menu
            ng-if="asideLink.name === 'user'"
            header-breadcrumb="{{asideLink.nichandle}}"
            header-title="{{asideLink.fullName}}"
            name="{{asideLink.name}}"
            links="asideLink.subLinks"
            placement="end"
            variant="panel">
          </oui-navbar-menu>
          <oui-navbar-menu
            ng-if="asideLink.name !== 'notifications' && asideLink.name !== 'user'"
            header-class="oui-navbar_mobile-only"
            header-breadcrumb="{{asideLink.headerBreadcrumb}}"
            header-title="{{asideLink.headerTitle}}"
            name="{{asideLink.name}}"
            links="asideLink.subLinks"
            placement="end"
            variant="panel">
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
        onClick: action('onClick'),
      },
    },
  ),
);

CustomPanels.story = {
  name: 'Custom panels',
};

export const CustomMenus = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-navbar fixed>
      <oui-navbar-aside>
        <oui-navbar-dropdown
          name="custom"
          text="Custom menu with a badge"
          icon-badge="3"
          icon-class="oui-icon oui-icon-bell">

          <div class="oui-navbar-menu oui-navbar-menu_panel oui-navbar-menu_end">
            <nav class="oui-list oui-list_nav">
              <ul class="oui-list__items">
                <li class="oui-list__item"><a href="" class="oui-list__link">Item 1</a></li>
                <li class="oui-list__item"><a href="" class="oui-list__link">Item 2</a></li>
                <li class="oui-list__item"><a href="" class="oui-list__link">Item 3</a></li>
                <li class="oui-list__item oui-list__item_current"><a href="" class="oui-list__link">Item 4</a></li>
                <li class="oui-list__item"><a href="" class="oui-list__link">Item 5</a></li>
                <li class="oui-list__item"><a href="" class="oui-list__link">Item 6</a></li>
              </ul>
            </nav>
          </div>

        </oui-navbar-dropdown>
      </oui-navbar-aside>
    </oui-navbar>
    `,
  ),
);

CustomMenus.story = {
  name: 'Custom menus',
};

export const PlaceholderForNotification = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <p>
      <oui-radio-toggle-group
        model="$ctrl.placeholderNotification[0].subLinks">
        <oui-radio value="null">Error in notification</oui-radio>
        <oui-radio value="[]" default>No notification</oui-radio>
      </oui-radio-toggle-group>
    </p>

    <oui-navbar
      aside-links="$ctrl.placeholderNotification"
      fixed>
    </oui-navbar>
    `, {
      $ctrl: {
        placeholderNotification,
      },
    },
  ),
);

PlaceholderForNotification.story = {
  name: 'Placeholder for notification',
};
