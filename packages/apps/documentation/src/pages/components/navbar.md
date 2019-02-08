# Navbar

## Usage

### Basic

```html:preview
<oui-navbar
    brand="$ctrl.brand"
    active-link="lorem"
    main-links="$ctrl.mainLinks"
    aside-links="$ctrl.asideLinks"
    toggler-links="$ctrl.togglerLinks">
</oui-navbar>
```

### Advanced

```html:preview
<oui-navbar active-link="lorem">
    <oui-navbar-toggler links="$ctrl.togglerLinks"></oui-navbar-toggler>
    <oui-navbar-brand
        href="{{$ctrl.brand.url}}"
        aria-label="{{$ctrl.brand.label}}"
        icon-class="{{$ctrl.brand.iconClass}}"></oui-navbar-brand>
    <oui-navbar-main>
        <oui-navbar-link
            name="{{mainLink.name}}"
            text="{{mainLink.title}}"
            href="{{mainLink.url}}"
            variant="{{mainLink.isPrimary ? 'primary' : 'secondary'}}"
            aria-label="{{mainLink.label}}"
            ng-repeat="mainLink in $ctrl.mainLinks track by $index"></oui-navbar-link>
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
                align="end"
                fixed></oui-navbar-notification>
            <oui-navbar-menu ng-switch-when="user"
                header-breadcrumb="{{asideLink.nichandle}}"
                header-title="{{asideLink.fullName}}"
                name="{{asideLink.name}}"
                links="asideLink.subLinks"
                align="end"
                fixed></oui-navbar-menu>
            <oui-navbar-menu ng-switch-default
                header-class="oui-navbar_mobile-only"
                header-breadcrumb="{{asideLink.headerBreadcrumb}}"
                header-title="{{asideLink.headerTitle}}"
                name="{{asideLink.name}}"
                links="asideLink.subLinks"
                align="end"
                fixed></oui-navbar-menu>
        </oui-navbar-dropdown>
    </oui-navbar-aside>
</oui-navbar>
```

## Brand

### With attribute `brand`

```html:preview
<oui-navbar
    brand="$ctrl.brand">
</oui-navbar>
```

### Properties of attribute `brand`

- `label` **(optional)**: define `aria-label` of the brand link.
- `title`: **(optional)**: define the brand text.
- `url`: define `href` of the brand link.

#### Set a brand icon with a CSS class (for `oui-icon`)

- `iconClass`: define `class` of the brand icon.

The brand icon will be set as a `<span>`.

```json
{
    "label": String,
    "title": String,
    "url": String<Url>,
    "iconClass": String
}
```

#### Set a brand icon with an image

- `iconAlt` **(optional)**: define `alt` of the brand icon.
- `iconClass` **(optional)**: define `class` of the brand icon.
- `iconSrc`: define `src` of the brand icon.

The brand icon will be set as a `<img>`.

```json
{
    "label": String,
    "title": String,
    "url": String<Url>,
    "iconAlt": String,
    "iconClass": String,
    "iconSrc": String<Url>
}
```

### With component `oui-navbar-brand`

```html:preview
<oui-navbar>
    <oui-navbar-brand
        href="{{$ctrl.brand.url}}"
        aria-label="{{$ctrl.brand.label}}"
        icon-class="{{$ctrl.brand.iconClass}}"></oui-navbar-brand>
</oui-navbar>
```

## Links

### Common properties of attributes `*-links`

- `name`: define the navigation name of a menu.
- `class` **(optional)**: define `class` of the menu item (only used for root links).
- `label` **(optional)**: define `aria-label` of the menu item.
- `title`: define the menu item text.
- `headerTitle` **(optional)**: define the title of the menu header (default text is `title`).
- `headerBreadcrumb` **(optional)**: define the breadcrumb of the menu header.
- `headerTemplate` **(optional)**: define the HTML template of the menu header.
- `isActive` **(optional)**: define if the menu item has active variant `.oui-navbar-menu__item_active`.
- `acknowledged` **(optional)**: define if the menu item is acknowledged.

If `headerTemplate` is defined, `headerBreadcrumb` and `headerTitle` are not used.

#### Set a menu item as a link

- `url`: define `href` of the menu item.

The menu item will be set as a `<a>`.

```json
{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "url": String<Url>
}
```

#### Set a menu item as a link for ui-router

- `state`: define `ui-sref` of the menu item. The menu item will be set as a `<a>`, `click` and `url` will be ignored.
- `stateParams` **(optional)**: define parameters for `state`.

The menu item will be set as a `<a>`.

```json
{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "state": String,
    "stateParams": Object
}
```

#### Set a menu item as a button with a click function

- `click`: define `ng-click` of the menu item.

The menu item will be set as a `<button>`.

```json
{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "click": Function
}
```

#### Set a menu item as a button to open a menu

- `subLinks`: define the array of links for the children menu.

The menu item will be set as a `<button>`.

```json
{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "headerTitle": String,
    "headerBreadcrumb": String,
    "subLinks": Array[]
}
```

**Note**: Root links can have `url` and `subLinks`. `subLinks` will only be used for the responsive menu.

## Main Links

### With attribute `main-links`

```html:preview
<oui-navbar
    active-link="lorem"
    main-links="$ctrl.mainLinks">
</oui-navbar>
```

#### Properties of attribute `main-links`

This property is only available for root links of `main-links`.

- `isPrimary`: define if the menu item has primary variant `.oui-navbar-link_primary`, else has secondary variant `.oui-navbar-link_secondary`.

```json
[{
    "name": String,
    "label": String,
    "title": String,
    "url": String<Url>,
    "isPrimary": Boolean,
    "click": Function,
    "subLinks": Array[{
        "label": String,
        "title": String,
        "url": String<Url>
    }]
}]
```

### With component `oui-navbar-main`

```html:preview
<oui-navbar active-link="lorem">
    <oui-navbar-main>
        <oui-navbar-link
            name="{{mainLink.name}}"
            text="{{mainLink.title}}"
            href="{{mainLink.url}}"
            variant="{{mainLink.isPrimary ? 'primary' : 'secondary'}}"
            aria-label="{{mainLink.label}}"
            ng-repeat="mainLink in $ctrl.mainLinks track by $index"></oui-navbar-link>
    </oui-navbar-main>
</oui-navbar>
```

## Toggler Links

It defines the menu in reponsive mode. It will be visible only for screen resolutions below `1024px` of width.

### With attributes `toggler-links`

```html:preview
<oui-navbar
    active-link="lorem"
    toggler-links="$ctrl.togglerLinks">
</oui-navbar>
```

**Note**: If there is no `toggler-links` attribute, it will use `main-links` instead to build the toggler menu.

```html:preview
<oui-navbar
    active-link="lorem"
    main-links="$ctrl.mainLinks">
</oui-navbar>
```

### With component `oui-navbar-toggler`

#### As toggler menu

```html:preview
<oui-navbar active-link="lorem">
    <oui-navbar-toggler links="$ctrl.togglerLinks"></oui-navbar-toggler>
</oui-navbar>
```

#### As toggler button

```html:preview
<div class="oui-doc-preview-only">
    <p>
        <button class="oui-button oui-button_primary" type="button" ng-class="{
                'oui-button_primary': $ctrl.togglerLoading,
                'oui-button_secondary': !$ctrl.togglerLoading
            }" ng-click="$ctrl.togglerLoading = !$ctrl.togglerLoading">
            Toggle loading
        </button>
    </p>
</div>
<oui-navbar active-link="lorem">
    <oui-navbar-toggler
        on-click="$ctrl.togglerActive = !$ctrl.togglerActive"
        active="$ctrl.togglerActive"
        loading="$ctrl.togglerLoading">
    </oui-navbar-toggler>
</oui-navbar>
<div class="oui-doc-preview-only">
    <p><strong>active value:</strong> {{!!$ctrl.togglerActive | json}}</p>
</div>
```

**Note**: By using this mode, you disable the internal `oui-navbar-backdrop` and toggler navigation.

## Aside Links

### With attribute `aside-links`

```html:preview
<oui-navbar
    aside-links="$ctrl.asideLinks">
</oui-navbar>
```

#### Properties of attribute `aside-links`

This property is only available for root links of `aside-links`.

- `iconClass`: define `class` of the menu item icon.
- `iconAnimated`: define if the menu item icon should be animated

```json
[{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "iconClass": String,
    "iconAnimated": Boolean,
    "subLinks": Array[{
        "label": String,
        "title": String,
        "url": String<Url>
    }]
}]
```

### With component `oui-navbar-aside`

```html:preview
<oui-navbar active-link="lorem">
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
            icon-animated="asideLink.name === 'notifications'"
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
                align="end"
                fixed></oui-navbar-notification>
            <oui-navbar-menu ng-switch-when="user"
                header-breadcrumb="{{asideLink.nichandle}}"
                header-title="{{asideLink.fullName}}"
                name="{{asideLink.name}}"
                links="asideLink.subLinks"
                align="end"
                fixed></oui-navbar-menu>
            <oui-navbar-menu ng-switch-default
                header-class="oui-navbar_mobile-only"
                header-breadcrumb="{{asideLink.headerBreadcrumb}}"
                header-title="{{asideLink.headerTitle}}"
                name="{{asideLink.name}}"
                links="asideLink.subLinks"
                align="end"
                fixed></oui-navbar-menu>
        </oui-navbar-dropdown>
    </oui-navbar-aside>
</oui-navbar>
```

## Variant `notifications` menu

The property `name` **must be** `"notifications"`.

- `template`: define the HTML template in the menu item.
- `limitTo` **(optional)**: define the maximum of menu links displayed.
- `footerTitle`: define the text of the link in the menu footer.
- `footerUrl`: define `href` of the link in the menu footer.
- `footerTemplate` **(optional)**: define the HTML template of the menu footer.

If `footerTemplate` is defined, `footerTitle` and `footerUrl` are not used.

```json
{
    "name": "notifications",
    "class": String,
    "label": String,
    "title": String,
    "iconClass": String,
    "limitTo": Number,
    "headerTemplate": String<Html>,
    "footerTitle": String,
    "footerUrl": String<Url>,
    "onClick": Function,
    "subLinks": Array[{
        "subject": String,
        "description": String,
        "url": String<Url>,
        "time": String<Html>,
        "actionClicked": Function,
        "linkClicked": Function,
        "isActive": Boolean,
        "acknowledged": Boolean
    }]
}
```

### Placeholder for notification
In the notification submenu, a placeholder is shown depending if there's no notification or if variable `subLinks` is not defined inside an `aside-links`.
```javascript
// Something went wong with the notification
subLinks = undefined;
// No notification
subLinks = [];
```

```html:preview
<div class="oui-doc-preview-only" style="margin-bottom: 15px;">
<oui-radio-toggle-group id="xxxxx" model="$ctrl.placeholderNotification[0].subLinks">
    <oui-radio text="Error in notification" value="null"></oui-radio>
    <oui-radio text="No notification" value="[]" default></oui-radio>
</oui-radio-toggle-group>
</div>
<div class="oui-doc-preview-only-keep-children" style="margin-bottom: 15px;">
<oui-navbar
    aside-links="$ctrl.placeholderNotification">
</oui-navbar>
</div>
<div class="oui-doc-preview-only-keep-children" style="margin-bottom: 15px;">
<oui-navbar>
    <oui-navbar-aside>
        <oui-navbar-dropdown
            name="{{$ctrl.placeholderNotification[0].name}}"
            text="{{$ctrl.placeholderNotification[0].title}}"
            icon-class="{{$ctrl.placeholderNotification[0].iconClass}}">
            <oui-navbar-notification
                name="{{$ctrl.placeholderNotification[0].name}}"
                links="$ctrl.placeholderNotification[0].subLinks"
                limit-to="$ctrl.placeholderNotification[0].limitTo"
                header-title="{{$ctrl.placeholderNotification[0].headerTitle}}"
                align="end"
                fixed></oui-navbar-notification>
        </oui-navbar-dropdown>
    </oui-navbar-aside>
</oui-navbar>
</div>
```

## Variant `user` menu

The property `name` **must be** `"user"`.

- `nichandle`: Define the nichandle in the menu header.
- `fullName`: Define the fullname in the menu header.

```json
{
    "name": "user",
    "class": String,
    "label": String,
    "title": String,
    "iconClass": String,
    "nichandle": String,
    "fullName": String,
    "subLinks": Array[{
        "label": String,
        "title": String,
        "url": String<Url>
    }]
}
```

## API

### oui-navbar

| Attribute             | Type      | Binding   | One-time Binding  | Values                                | Default   | Description
| ----                  | ----      | ----      | ----              | ----                                  | ----      | ----
| `brand`               | object    | <?        | yes               | _see example above_                   | n/a       | object for the brand logo of the navbar
| `active-link`         | string    | @?        | yes               | n/a                                   | n/a       | current active-link of the navbar
| `main-links`          | array     | <?        | yes               | _see example above_                   | n/a       | array of objects for the items on the left and the toggler (for responsive)
| `aside-links`         | array     | <?        | yes               | _see example above_                   | n/a       | array of objects for the items on the right
| `toggler-links`       | array     | <?        | yes               | _see example above_                   | n/a       | array of objects for the responsive menu
| `fixed`               | boolean   | <?        | yes               | `true`, `false`                       | `false`   | set the navbar in position fixed

### oui-navbar-brand

| Attribute             | Type      | Binding   | One-time Binding  | Values                                | Default   | Description
| ----                  | ----      |           | ----              | ----                                  | ----      | ----
| `heading`             | string    | @?        | yes               | n/a                                   | n/a       | title of the brand link
| `aria-label`          | string    | @?        | yes               | n/a                                   | n/a       | accessibility label of the brand link
| `icon-alt`            | string    | @?        | yes               | n/a                                   | n/a       | alternative text of the brand icon
| `icon-class`          | string    | @?        | yes               | n/a                                   | n/a       | classname of the brand icon
| `icon-src`            | string    | @?        | yes               | n/a                                   | n/a       | url of the brand icon
| `href`                | string    | @?        | yes               | n/a                                   | n/a       | link href of the brand link

### oui-navbar-dropdown

| Attribute             | Type      | Binding   | One-time Binding  | Values                                | Default   | Description
| ----                  | ----      | ----      | ----              | ----                                  | ----      | ----
| `name`                | string    | @         | yes               | n/a                                   | n/a       | group name of the dropdown
| `text`                | string    | @         | yes               | n/a                                   | n/a       | text of the button
| `aria-label`          | string    | @?        | yes               | n/a                                   | n/a       | accessibility label of the button
| `icon-class`          | string    | @?        | yes               | n/a                                   | n/a       | classname of the button icon
| `icon-animated`        | boolean   | <?        | no                | `true`, `false`                       | `false`   | defines if the menu item icon should be shaking 
| `icon-badge`          | number    | <?        | no                | n/a                                   | n/a       | number on the badge of the button icon
| `on-click`            | function  | &         | no                | n/a                                   | n/a       | click callback

### oui-navbar-menu

| Attribute             | Type      | Binding   | One-time Binding  | Values                                | Default   | Description
| ----                  | ----      | ----      | ----              | ----                                  | ----      | ----
| `name`                | string    | @         | yes               | n/a                                   | n/a       | group name of the menu
| `links`               | array     | <         | yes               | _see example above_                   | n/a       | array of links for the menu
| `header-class`        | string    | @?        | yes               | n/a                                   | n/a       | classname of the header
| `header-title`        | string    | @?        | yes               | n/a                                   | n/a       | text of the header title
| `header-breadcrumb`   | string    | @?        | yes               | n/a                                   | n/a       | text of the header breadcrumb
| `align`               | string    | @?        | yes               | `start`, `end`                        | `start`   | alignment of the menu to his trigger
| `back-button`         | boolean   | <?        | yes               | `true`, `false`                       | `false`   | display a back button in the header title
| `fixed`               | boolean   | <?        | yes               | `true`, `false`                       | `false`   | flag for responsive menu

### oui-navbar-notification

| Attribute             | Type      | Binding   | One-time Binding  | Values                                | Default   | Description
| ----                  | ----      | ----      | ----              | ----                                  | ----      | ----
| `name`                | string    | @         | yes               | n/a                                   | n/a       | group name of the menu
| `links`               | array     | <         | yes               | _see example above_                   | n/a       | array of links for the notifications menu
| `limit-to`            | number    | <?        | yes               | n/a                                   | `10`      | maximum displayed notifications
| `header-template`     | string    | <?        | yes               | n/a                                   | n/a       | HTML template of the menu header
| `header-title`        | string    | @?        | yes               | n/a                                   | n/a       | text of the header title
| `footer-template`     | string    | <?        | yes               | n/a                                   | n/a       | HTML template of the menu footer
| `footer-title`        | string    | @?        | yes               | n/a                                   | n/a       | text of the footer link
| `footer-href`         | string    | @?        | yes               | n/a                                   | n/a       | url of the footer link
| `align`               | string    | @?        | yes               | `start`, `end`                        | `start`   | alignment of the menu to his trigger
| `fixed`               | boolean   | <?        | yes               | `true`, `false`                       | `false`   | flag for responsive menu

### oui-navbar-toggler

| Attribute             | Type      | Binding   | One-time Binding  | Values                                | Default   | Description
| ----                  | ----      | ----      | ----              | ----                                  | ----      | ----
| `links`               | array     | <         | yes               | _see example above_                   | n/a       | array of links for the responsive menu

### oui-navbar-link

| Attribute             | Type      | Binding   | One-time Binding  | Values                                | Default   | Description
| ----                  | ----      | ----      | ----              | ----                                  | ----      | ----
| `name`                | string    | @         | yes               | n/a                                   | n/a       | group name of the link
| `text`                | string    | @         | yes               | n/a                                   | n/a       | text of the link
| `aria-label`          | string    | @?        | yes               | n/a                                   | n/a       | accessibility label of the link
| `href`                | string    | @?        | yes               | n/a                                   | n/a       | href of the link
| `state`               | string    | @?        | yes               | n/a                                   | n/a       | state of the link
| `state-params`        | object    | <?        | yes               | n/a                                   | n/a       | state-params of the link
| `variant`             | string    | @?        | yes               | `primary`, `secondary`, `tertiary`    | n/a       | style modifier of the link
| `on-click`            | function  | &         | no                | n/a                                   | n/a       | click callback

## Configuration

The navbar can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.navbar"
]).config(ouiNavbarConfigurationProvider => {
    ouiNavbarConfigurationProvider.setTranslations({ // default translations
        notification: {
            errorInNotification: "Oups, there’s an error!",
            errorInNotificationDescription: "We can’t initialize the menu.",
            markRead: "Mark as read",
            markUnread: "Mark as unread",
            noNotification: "You are all caught up!",
            noNotificationDescription: "You don't have any notification."
        }
    });
});
```
