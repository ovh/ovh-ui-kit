# oui-checkbox

oui-checkbox is a package which provide styles for the checkbox component.

## Installation

```less
  @import 'oui-checkbox/checkbox';
```

## Usage

### Label

```html:preview
<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-1" name="oui-checkbox-1" checked="checked" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-1">
    <span class="oui-checkbox__label">Checked</span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-2" name="oui-checkbox-2" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-2">
    <span class="oui-checkbox__label">Unchecked</span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-3" name="oui-checkbox-3" disabled="disabled" checked="checked" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-3">
    <span class="oui-checkbox__label">Disabled [Checked]</span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-4" name="oui-checkbox-4" disabled="disabled" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-4">
    <span class="oui-checkbox__label">Disabled [Unchecked]</span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-5" name="oui-checkbox-5" disabled="disabled" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-5">
    <span class="oui-checkbox__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_big">
  <input class="oui-checkbox__input" id="oui-checkbox-6" name="oui-checkbox-6" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-6">
    <span class="oui-checkbox__label">Big [Checked]</span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_big">
  <input class="oui-checkbox__input" id="oui-checkbox-7" name="oui-checkbox-7" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-7">
    <span class="oui-checkbox__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>
```

### Description

```html:preview
<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-8" name="oui-checkbox-8" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-8">
    <span class="oui-checkbox__label">Big [Checked]</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox">
  <input class="oui-checkbox__input" id="oui-checkbox-9" name="oui-checkbox-9" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox-9">
    <span class="oui-checkbox__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_big">
  <input class="oui-checkbox__input" id="oui-checkbox-10" name="oui-checkbox-10" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-10">
    <span class="oui-checkbox__label">Big [Checked]</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_big">
  <input class="oui-checkbox__input" id="oui-checkbox-11" name="oui-checkbox-11" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox-11">
    <span class="oui-checkbox__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>
```

### Thumbnail

```html:preview
<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox-12" name="oui-checkbox-12" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-12">
    <span class="oui-checkbox__label">Thumbnail</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox-13" name="oui-checkbox-13" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-13">
    <span class="oui-checkbox__label">Thumbnail [Checked]</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox-14" name="oui-checkbox-14" type="checkbox" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox-14">
    <span class="oui-checkbox__label">Thumbnail [Disabled]</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox-15" name="oui-checkbox-15" type="checkbox" checked="checked" disabled="disabled">
  <label class="oui-checkbox__label-container" for="oui-checkbox-15">
    <span class="oui-checkbox__label">Thumbnail [Checked + Disabled]</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox-16" name="oui-checkbox-16" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-16">
    <span class="oui-checkbox__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_big oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox-17" name="oui-checkbox-17" type="checkbox" checked="checked">
  <label class="oui-checkbox__label-container" for="oui-checkbox-17">
    <span class="oui-checkbox__label">Thumbnail + Big [Checked]</span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>

<div class="oui-checkbox oui-checkbox_big oui-checkbox_thumbnail">
  <input class="oui-checkbox__input" id="oui-checkbox-18" name="oui-checkbox-18" type="checkbox">
  <label class="oui-checkbox__label-container" for="oui-checkbox-18">
    <span class="oui-checkbox__label">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <span class="oui-checkbox__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
    <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
      <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
      <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
    </svg>
  </label>
</div>
```

## Mixins

```less
  @import 'oui-checkbox/checkbox/_mixins';
```

### .checkbox

Define the base styles for a checkbox.

```less
#oui > .checkbox(oui-checkbox);
```

```less
#oui > .checkbox(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @outline-color: Color,
  @outline-color_hover: Color,
  @outline-color_checked: Color,
  @outline-color_checked-hover: Color,
  @spacing: Number
);
```

### .checkbox-size

Change the size of a checkbox

```less
#oui > .checkbox-size(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @size: Number,
  @apply-padding-to-description: Boolean // [Optional: true] Apply the same padding than label if true, otherwise padding will be 0
)
```

### .checkbox-label

Change the label properties of a checkbox

```less
#oui > .checkbox-label(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @font-size: Number,
  @line-height: Number
)
```

### .checkbox-thumbnail

Will stylize your checkbox as a thumbnail one.

```less
.checkbox-thumbnail(
  @selector: Class, // Class name that will be prefixed on each subclasses
  @border-color: Color,
  @border-hover-color: Color,
  @border-checked-color: Color,
  @background: Color,
  @background-checked: Color,
  @border-size: Color,
  @border-radius: Number,
  @padding: Number
)
```

## Classes

### Block

The block class is `oui-checkbox` (top-level element).

### Element

Inner elements:

| Element                   | Class                                                   |
| ------------------------- | ------------------------------------------------------- |
| __input[type=checkbox]__  | `oui-checkbox__input`                                   |
| __label__                 | `oui-checkbox__label-container`                         |
| __span__                  | `oui-checkbox__label`                                   |
| __span__                  | `oui-checkbox__description`                             |
| __svg__                   | `oui-checkbox__facade`                                  |
| path                      | `oui-checkbox__false-bottom`                            |
| path                      | `oui-checkbox__outline oui-checkbox__outline_unchecked` |
| path                      | `oui-checkbox__outline oui-checkbox__outline_checked`   |
| path                      | `oui-checkbox__checkmark`                               |

### Modifier

The provided modifiers are:

| Class                    | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `oui-checkbox_big`       | Make the checkbox looks bigger                 |
| `oui-checkbox_thumbnail` | Make the checkbox looks like a thumbnail       |
