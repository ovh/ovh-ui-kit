# oui-animation

<component-status cx-design="none" ux="prototype"></component-status>

oui-animation is a package which provides tools as mixins for managing motion.

## Usage

```less
  @import 'oui-animation/_mixins';
```

## Mixins

| Name | Defaults | Description |
| --- | --- | --- |
| `#oui > .animate(@duration)` | `@duration: @oui-animation-default-timing` | will animate using the **default** animation timing function |
| `#oui > .animate-fast-out-slow-in` | `@duration: @oui-animation-default-timing` | the same but using **fast-out-slow-in** animation function instead |
