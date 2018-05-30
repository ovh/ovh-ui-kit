# oui-progress

<component-status cx-design="complete" ux="complete"></component-status>

oui-progress is a package which provide styles for the progress component.

## Installation

```less
  @import 'oui-progress/progress';
```

## Usage

### Info

```html:preview
<div class="oui-progress">
  <div class="oui-progress__bar-container">
    <div class="oui-progress__bar oui-progress__bar_info" role="progressbar" style="width: 1%;" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__label" style="width: 1%;">1%</div>
</div>
```

### Success

```html:preview
<div class="oui-progress">
  <div class="oui-progress__bar-container">
    <div class="oui-progress__bar oui-progress__bar_success" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__label" style="width: 10%;">10%</div>
</div>
```

### Warning

```html:preview
<div class="oui-progress">
  <div class="oui-progress__bar-container">
    <div class="oui-progress__bar oui-progress__bar_warning" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__label" style="width: 75%;">75%</div>
</div>
```

### Error

```html:preview
<div class="oui-progress">
  <div class="oui-progress__bar-container">
    <div class="oui-progress__bar oui-progress__bar_error" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__label" style="width: 90%;">90%</div>
</div>
```

### Thresholds

```html:preview
<div class="oui-progress">
  <div class="oui-progress__bar-container">
    <div class="oui-progress__threshold" style="left: 60%"></div>
    <div class="oui-progress__bar oui-progress__bar_info" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__label" style="width: 75%;">75%</div>
</div>
```

### Compact mode

```html:preview
<div class="oui-progress oui-progress_compact">
  <div class="oui-progress__bar-container">
    <div class="oui-progress__bar oui-progress__bar_info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__label">10 out of 50 complete</div>
</div>
<div class="oui-progress oui-progress_compact">
  <div class="oui-progress__bar-container">
    <div class="oui-progress__bar oui-progress__bar_success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__label">10 instances up</div>
</div>
<div class="oui-progress oui-progress_compact">
  <div class="oui-progress__bar-container">
    <div class="oui-progress__bar oui-progress__bar_warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__label">75% of storage being used</div>
</div>
<div class="oui-progress oui-progress_compact">
  <div class="oui-progress__bar-container">
    <div class="oui-progress__bar oui-progress__bar_error" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__label">100% Quota utilized!</div>
</div>
```
