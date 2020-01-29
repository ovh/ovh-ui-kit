import readme from '@ovh-ux/ui-kit.radio/README.md';

export default {
  title: 'Version 4/Components/Radio/Native',

  parameters: {
    notes: readme,
  },
};

export const Simple = () => `
<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-1" value="oui-radio-1-1" id="oui-radio-1-1" />
  <label class="oui-radio__label-container" for="oui-radio-1-1">
    <span class="oui-radio__label">Radio Unchecked</span>
  </label>
</div>

<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-1" value="oui-radio-1-2" id="oui-radio-1-2" checked />
  <label class="oui-radio__label-container" for="oui-radio-1-2">
    <span class="oui-radio__label">Radio Checked</span>
  </label>
</div>

<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-2" value="oui-radio-2-1" id="oui-radio-2-1" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-2-1">
    <span class="oui-radio__label">Radio Disabled</span>
  </label>
</div>

<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-2" value="oui-radio-2-2" id="oui-radio-2-2" disabled="disabled" checked />
  <label class="oui-radio__label-container" for="oui-radio-2-2">
    <span class="oui-radio__label">Radio Disabled Checked</span>
  </label>
</div>

<div class="oui-radio oui-radio_error">
  <input class="oui-radio__input" type="radio" name="oui-radio-3" value="oui-radio-3-1" id="oui-radio-3-1" />
  <label class="oui-radio__label-container" for="oui-radio-3-1">
    <span class="oui-radio__label">Radio Error</span>
  </label>
</div>

<div class="oui-radio oui-radio_error">
  <input class="oui-radio__input" type="radio" name="oui-radio-3" value="oui-radio-3-2" id="oui-radio-3-2" checked />
  <label class="oui-radio__label-container" for="oui-radio-3-2">
    <span class="oui-radio__label">Radio Error Checked</span>
  </label>
</div>`;

export const Inline = () => `
<div class="oui-radio oui-radio_inline">
  <input class="oui-radio__input" type="radio" name="oui-radio-inline" value="oui-radio-inline-1" id="oui-radio-inline-1" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-inline-1">
    <span class="oui-radio__label">Radio 1</span>
  </label>
</div>

<div class="oui-radio oui-radio_inline">
  <input class="oui-radio__input" type="radio" name="oui-radio-inline" value="oui-radio-inline-2" id="oui-radio-inline-2" />
  <label class="oui-radio__label-container" for="oui-radio-inline-2">
    <span class="oui-radio__label">Radio 2</span>
  </label>
</div>`;

export const WithDescription = () => `
<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-1" value="oui-radio-1-1" id="oui-radio-1-1" />
  <label class="oui-radio__label-container" for="oui-radio-1-1">
    <span class="oui-radio__label">Radio Unchecked</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-2" value="oui-radio-1-2" id="oui-radio-1-2" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-1-2">
    <span class="oui-radio__label">Radio Checked</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-3" value="oui-radio-1-3" id="oui-radio-1-3" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-1-3">
    <span class="oui-radio__label">Radio Disabled</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_error">
  <input class="oui-radio__input" type="radio" name="oui-radio-1-4" value="oui-radio-1-4" id="oui-radio-1-4" />
  <label class="oui-radio__label-container" for="oui-radio-1-4">
    <span class="oui-radio__label">Radio Error</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>`;

WithDescription.story = {
  name: 'With description',
};

export const Thumbnail = () => `
<div class="oui-radio oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-1" value="oui-radio-1-1" id="oui-radio-1-1" />
  <label class="oui-radio__label-container" for="oui-radio-1-1">
    <span class="oui-radio__label">Radio Thumbnail</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-1" value="oui-radio-1-2" id="oui-radio-1-2" checked="checked" />
  <label class="oui-radio__label-container" for="oui-radio-1-2">
    <span class="oui-radio__label">Radio Thumbnail Checked</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-2" value="oui-radio-2-1" id="oui-radio-2-1" disabled="disabled" />
  <label class="oui-radio__label-container" for="oui-radio-2-1">
    <span class="oui-radio__label">Radio Thumbnail Disabled</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail">
  <input class="oui-radio__input" type="radio" name="oui-radio-2" value="oui-radio-2-2" id="oui-radio-2-2" disabled="disabled" checked />
  <label class="oui-radio__label-container" for="oui-radio-2-2">
    <span class="oui-radio__label">Radio Thumbnail Disabled Checked</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail oui-radio_error">
  <input class="oui-radio__input" type="radio" name="oui-radio-3" value="oui-radio-3-1" id="oui-radio-3-1" />
  <label class="oui-radio__label-container" for="oui-radio-3-1">
    <span class="oui-radio__label">Radio Thumbnail Error</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>
</div>

<div class="oui-radio oui-radio_thumbnail oui-radio_error">
  <input class="oui-radio__input" type="radio" name="oui-radio-3" value="oui-radio-3-2" id="oui-radio-3-2" checked />
  <label class="oui-radio__label-container" for="oui-radio-3-2">
    <span class="oui-radio__label">Radio Thumbnail Error Checked</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue.
      Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla.
    </span>
  </label>`;
