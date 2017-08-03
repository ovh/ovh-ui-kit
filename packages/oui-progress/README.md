# oui-progress

<component-status cx-design="partial" ux="prototype"></component-status>

oui-progress is a package which provides styles for the progress component.

## Installation

```less
  @import 'oui-progress/progress';
```

## Usage

### Native

```html:preview
<progress class="oui-progress oui-progress_info" value="5" max="100"></progress>
<progress class="oui-progress oui-progress_success" value="10" max="100"></progress>
<progress class="oui-progress oui-progress_warning" value="60" max="100"></progress>
<progress class="oui-progress oui-progress_error" value="100" max="100"></progress>
```

### Advanced

```html:preview
<div class="oui-progress oui-progress_info">
  <div class="oui-progress__bar oui-progress__bar_info" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">5%</span>
  </div>
</div>
<div class="oui-progress oui-progress_success">
  <div class="oui-progress__bar oui-progress__bar_success" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">10%</span>
  </div>
</div>
<div class="oui-progress oui-progress_warning">
  <div class="oui-progress__bar oui-progress__bar_warning" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">60%</span>
  </div>
</div>
<div class="oui-progress oui-progress_error">
  <div class="oui-progress__bar oui-progress__bar_error" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">100%</span>
  </div>
</div>
```

### Stacked

```html:preview
<div class="oui-progress oui-progress_info">
  <div class="oui-progress__bar oui-progress__bar_success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">30%</span>
  </div>
  <div class="oui-progress__bar oui-progress__bar_error" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">15%</span>
  </div>
</div>
```

### Indeterminate

```html:preview
<progress class="oui-progress oui-progress_info oui-progress_indeterminate"></progress>
<div class="oui-progress oui-progress_warning oui-progress_indeterminate" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
```

## Mixins

```less
@import 'oui-progress/_mixins';
```

### .progress-base

Define the base styles for a progress container.

```less
#oui > .progress-base();
```

```less
#oui > .progress-base(
  @height: Number,
  @margin: Object
);
```

### .progress

Will stylize your progress container with specific colors.

```less
#oui > .progress();
```

```less
#oui > .progress(
  @background-color: Color,
  @foreground-color: Color,
  @height: Number
);
```

### .progress-bar-base

Define the base styles for a progress bar.

```less
#oui > .progress-bar-base();
```

```less
#oui > .progress-bar-base(
  @height: Number
);
```

### .progress-bar

Will stylize your progress bar with specific colors.

```less
#oui > .progress-bar();
```

```less
#oui > .progress-bar(
  @background-color: Color,
  @text-color: Color
);
```

## Classes

### Block

The block class is `oui-progress` (top-level element).

