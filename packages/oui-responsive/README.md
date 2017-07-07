# oui-responsive

<component-status cx-design="none" ux="prototype"></component-status>

oui-responsive is a package which provides tools as mixins for managing responsive design.

## Usage

```less
@import 'oui-responsive/_mixins';

.information {
  display: block;

  // Tablet specific
  tablet({
    display: inline;
  });

  // Phone specific
  phone({
    display: none;
  });
}
```

You can define custom breakpoints by overwriting `@oui-responsive-breakpoint-phone` and `@oui-responsive-breakpoint-tablet`.

## Mixins

| Name | Description |
| --- | --- | --- |
| `#oui > .phone(@rules)` | will define CSS rules for phones only |
| `#oui > .tablet(@rules)` | will define CSS rules for phones and tablets only |
| `#oui > .responsive(@maxWidth; @rules)` | will define custom rules for screens up to `@maxWidth` |
