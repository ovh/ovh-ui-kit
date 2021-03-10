# Breaking Changes

With this major update, we support component modularization. From this version onwards, it will be possible to import only the components needed and used. This will reduce bundle size and improve page load performance.

Previous way of importing everything at once is still supported. However, this will be depricated and will be removed in next major release. We strongly recomend you to upgrade your existing modules/projects to version 5.0 to take performance benifits.

## Stable changes

Moving from v4.x to v5.x does not require any code changes. All the styles and components are backward compatible and will work as they used to work.

However, we strongly recomend you to upgrade your existing modules/projects to use new feature, "component modularization", available with this release. This allows you to selectively import only components used/required.

## Project

## Components

Two ways of importing components

* Old and depricated way is to import all components using "import @ovh-ux/ui-kit/dist/js/oui.js".
* Alternative, recomended and more modern way of importing using "import @ovh-ux/ui-kit/dist/js/<component-name>.js".
