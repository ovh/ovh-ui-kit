# oui-responsive

<component-status cx-design="none" ux="prototype"></component-status>

oui-responsive is a package which provides tools as mixins for managing responsive design.

## Usage

```less
@import 'oui-responsive/_mixins';

.information {
  display: block;

  // Tablet specific
  .tablet({
    display: inline;
  });

  // Phone specific
  .phone({
    display: none;
  });
}
```

You can define custom breakpoints by overwriting `@oui-responsive-breakpoint-phone`, `@oui-responsive-breakpoint-tablet` and `@oui-responsive-breakpoint-medium`.

## Mixins

| Name | Description |
| --- | --- | --- |
| `#oui > .phone(@rules)` | will define CSS rules for phones only (<768px) |
| `#oui > .tablet(@rules)` | will define CSS rules for phones and tablets only (<1024px) |
| `#oui > .medium(@rules)` | will define CSS rules for medium devices (<1200px) |
| `#oui > .responsive(@maxWidth; @rules)` | will define custom rules for screens up to `@maxWidth` |
| `#oui > .desktop(@rules)` | will define CSS rules for medium and large devices only (≥1024px) |
