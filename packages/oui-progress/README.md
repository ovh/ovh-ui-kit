# oui-progress

<component-status cx-design="complete" ux="complete"></component-status>

oui-progress is a package which provide styles for the progress component.

## Installation

```less
  @import 'oui-progress/progress';
```

## Usage

### Variant

```html:preview
<div class="oui-progress">
  <div class="oui-progress__container">
    <div class="oui-progress__bar oui-progress__bar_info" role="progressbar" style="width: 1%;" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__text" style="width: 1%;">1%</div>
</div>

<div class="oui-progress">
  <div class="oui-progress__container">
    <div class="oui-progress__bar oui-progress__bar_success" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__text" style="width: 10%;">10%</div>
</div>

<div class="oui-progress">
  <div class="oui-progress__container">
    <div class="oui-progress__bar oui-progress__bar_warning" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__text" style="width: 75%;">75%</div>
</div>

<div class="oui-progress">
  <div class="oui-progress__container">
    <div class="oui-progress__bar oui-progress__bar_error" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__text" style="width: 90%;">90%</div>
</div>
```

### Thresholds

```html:preview
<div class="oui-progress">
  <div class="oui-progress__container">
    <div class="oui-progress__threshold" style="left: 60%"></div>
    <div class="oui-progress__bar oui-progress__bar_info" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__text" style="width: 75%;">75%</div>
</div>
```

### Compact mode

```html:preview
<div class="oui-progress oui-progress_compact">
  <div class="oui-progress__container">
    <div class="oui-progress__bar oui-progress__bar_info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__text">10 out of 50 complete</div>
</div>

<div class="oui-progress oui-progress_compact">
  <div class="oui-progress__container">
    <div class="oui-progress__bar oui-progress__bar_success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__text">10 instances up</div>
</div>

<div class="oui-progress oui-progress_compact">
  <div class="oui-progress__container">
    <div class="oui-progress__bar oui-progress__bar_warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__text">75% of storage being used</div>
</div>

<div class="oui-progress oui-progress_compact">
  <div class="oui-progress__container">
    <div class="oui-progress__bar oui-progress__bar_error" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div class="oui-progress__text">100% Quota utilized!</div>
</div>
```

### Native

```html:preview
<progress class="oui-progress oui-progress_info" value="5" max="100"></progress>

<progress class="oui-progress oui-progress_success" value="10" max="100"></progress>

<progress class="oui-progress oui-progress_warning" value="60" max="100"></progress>

<progress class="oui-progress oui-progress_error" value="100" max="100"></progress>
```
