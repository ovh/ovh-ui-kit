# [WIP] Decisions

1. Use two-way bindings with `ng-model` and one-way bindings for read-only components
2. Add class to the root component element instead of using the deprecated directive `replace: true` attribute
3. Use `component` method for **elements** only and `directive` method for **attributes**
4. Use `id` and `name` attributes on form components
5. Use `aria-label` attribute to get aria label
6. Use `data-` only on native html element attributes with no `ng-` attribute when directive
7. Prefer bootstrap classes instead of inline style inside preview html blocks
8. Keep translation outside this library
9. Components
    1. For now, keep component code as simple as possible
    2. Expose only form events that are really used
    3. Group together states that are exclusive in a single attribute
    4. Be more restrictive on component attributes and signature
    5. Return model value on change
    6. Generate ids when label can not be wrapped around input and the id is missing but mandatory
    7. Prefer `ng-bind` to `{{}}`

## Use two-way bindings with `ng-model` and one-way bindings for read-only components

When a component requires something with `ng-model` (like an input, checkbox, ...) you should use two-way bindings. If the component only show values and no interaction are made with them you should use one-way bindings.

After some tests it has been found that, in angularJs, none of those solutions seems better but angularJs gives more tools for two-ways bindings than one-way. With two-ways bindings we can reuse ng-model with validations and it is easier to be propagate value changes to parent. Maybe it is not what angular 2 recommends, but it is easier and will cost less in development in short term.

## Add class to the root component element instead of using the deprecated directive `replace: true` attribute

Because the `replace: true` directive attribute has been deprecated since angular 1.5 this method should be prohibited. Also, this technic can create futur problem because angular produce conflit and they are hard to debug. Example: If you put an `ng-if` condition at the component's root element and the parent also put an `ng-if` on the component, the component can have weird behavior like never being added to DOM.

So, because `replace: true` can't be used, how use `:first-child` css classes if components are always wrapped? To resolve this problem lot of libraries are adding classes to the root element of component in the `link` method.

```javascript
angular.directive("test", function () {
  return {
    link: function ($scope, $element) {
      $element.addClass("test");
    }
  }
});
```

## Use `component` method for **elements** only and `directive` method for **attributes**

Since we can access `postLink` and `$element` from components we can still use the `component` method for components that are made for **elements** (`restrict: "E"`).

**Important:** Try to never use `$element` outside the `$postLink` method.

```javascript
angular.component("test", {
  controller: class TestCtrl {
    constructor($element) {
      this.$element = $element;
    }

    $postLink() {
      this.$element.addClass("test");
    }
  }
})
```

If a component is required on **attributes** (`restrict: "A"`) directive should used.

```javascript
angular.directive("test", function () {
  return {
    restrict: "A",
    link: function ($scope, $element) {
      $element.addClass("test");
    }
  }
});
```

## Use `id` and `name` attributes on form components

When a form input requires an `id` or `name` inside a component, those attributes should be asked through `id` and `name` bindings on the component. Those bindings need to be removed from DOM on `link` method otherwise ids and names could be duplicated and wrong element could be targeted.

## Use `aria-label` attribute to get aria label

When a form input requires an `aria-label` inside a component, this attribute should be asked through `aria-label` binding on the component. This binding needs to be removed from DOM on `link` method otherwise some tools could have weird behavior with this attribute on wrong element.

## Use `data-` only on native html element attributes with no `ng-` attribute when directive

The goal of this library is not to be W3C valid. So, html5 only requires `data-` on attribute with only one word, so angular directive on native html does not require `data-` prefix. Also, custom element are valid and their attributes are all considered valid.

So, `data-` prefix is only required on directive with one word used on native html element.

## Prefer bootstrap classes instead of inline style inside preview html blocks

Because people are doing lot of "copy-paste" of html preview blocks, prefer bootstrap classes instead of inline style to position examples inside html preview blocks.

## Keep translation outside this library

No translation should be stored in the library and strings should be given to the component in attributes.

## Components

### For now, keep component code as simple as possible

Because we can always add extra features later, in first place components should be kept as simple as possible and some features should be done later. There is some example of what has been pushed later:

* Warnings on attributes values typos

### Expose only form events that are really used

Only form events really used from the component external point-of-view should be exposed through bindings. For example, on `oui-button` it has been chosen to expose only `on-click`, even if `on-focus` could exist, because only `on-click` will be used in real world. Other events, like `on-focus` may be used, but from the `link` method in first place.

### Use the `text` attribute for component inner text without html inside

On component that needs text inside of it but this text also needs to not contains html, like `oui-button`, the `text` attribute should be used.

### Group together states that are exclusive in a single attribute

When a component has multiple states that are exclusive, like the `primary` and `secondary` states on `oui-button`, they should be grouped together in a single attribute like `variant`.

```html
<oui-button variant="primary|secondary|link"></oui-button>
```

instead

```html
<oui-button primary secondary link></oui-button>
```

By grouping those states in a single attribute no validation is required and it behaves more closely to what html does.

### Be more restrictive on component attributes and signature

When a new component is in development phase and attributes and signatures are about to be choose, make sure to be restrictive as possible because the developer still can use native html/css to do its things.

### Return model value on change

When a component needs to notify parent of model has changed, the `onChange` binding should be called with an object like this:

```html
<input ng-model="$ctrl.model" ng-change="$ctrl.onChange({ modelValue: $ctrl.model })">
```

The `modelValue` name has been chosen to differenciate it from the model containing the `$viewValue`. Those angular specific properties are not mandatory and should not be used from the external, even if they are available.

### Generate ids when label can not be wrapped around input and the id is missing but mandatory

When a form component is developped and label can not wrap the input form, an id will be required to link the label on the input form. When no id is given as component binding an id should be generated using this format `oui-<componentName>-<$scope.$id>`.

### Prefer `ng-bind` to `{{}}`

For performance, prefer `ng-bind` instead of `{{}}`, at least the component is not used a lot and this is really the best solution for this case.
