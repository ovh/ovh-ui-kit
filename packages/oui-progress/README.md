# oui-progress

<component-status cx-design="partial" ux="prototype"></component-status>

oui-progress is a package which provide styles for the progress component.

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
  <div class="oui-progress__bar oui-progress__bar_info" role="progressbar" style="width: 1%" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">1%</span>
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

### Thresholds

```html:preview
<div class="oui-progress oui-progress_error">
  <div class="oui-progress__threshold" style="left: 70%"></div>
  <div class="oui-progress__bar oui-progress__bar_error oui-progress__bar_text-left" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">Progression: 80%</span>
  </div>
</div>
<div class="oui-progress oui-progress_info">
  <div class="oui-progress__threshold" style="left: 25%"></div>
  <div class="oui-progress__threshold" style="left: 50%"></div>
  <div class="oui-progress__threshold" style="left: 75%"></div>
  <div class="oui-progress__bar oui-progress__bar_success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">30%</span>
  </div>
  <div class="oui-progress__bar oui-progress__bar_error" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">25%</span>
  </div>
</div>
```

### Label alignment

```html:preview
<div class="oui-progress oui-progress_info">
  <div class="oui-progress__bar oui-progress__bar_success oui-progress__bar_text-left" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <span class="oui-progress__label">Progression: 30%</span>
  </div>
</div>
```

### Indeterminate

```html:preview
<progress class="oui-progress oui-progress_info oui-progress_indeterminate"></progress>
<div class="oui-progress oui-progress_warning oui-progress_indeterminate" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
```
