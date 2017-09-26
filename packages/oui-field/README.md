# oui-field

<component-status cx-design="partial" ux="beta"></component-status>

oui-field is a package which provides styles for form fields.

## Installation

```less
  @import 'oui-form/form';
```

## Usage

### Standard sizes

```html:preview
<div class="oui-field">
  <label for="text-1" class="oui-field__label oui-label">Input size 1</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_1">
      <input type="text" id="text-1" name="text-1" class="oui-input" value="Input text" />
    </div>
    <div class="oui-field-helper">An input with oui-field-control_1 class</div>
  </div>
</div>

<div class="oui-field">
  <label for="select-2" class="oui-field__label oui-label">Input size 2</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_2">
      <label class="oui-select">
        <select id="select-2" name="select-2" class="oui-select__input">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
      </label>
    </div>
    <div class="oui-field-helper">
      A select box with oui-field-control_2 class with a BIG help. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisl est. Aenean sit amet libero et metus suscipit condimentum. Ut feugiat ultricies tincidunt. Quisque in lobortis urna. Phasellus feugiat, tortor eu dictum facilisis, mi erat scelerisque mauris, sed feugiat quam enim sit amet metus. Nulla et rhoncus metus. Aliquam tristique urna ligula, vel tempus massa porttitor eu. Sed vel nunc lectus.</div>
  </div>
</div>

<div class="oui-field">
  <label for="email-3" class="oui-field__label oui-label">Input size 3 (no helper)</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_3">
      <div class="oui-input-group">
        <input class="oui-input" id="email-3" name="email-3" type="email" placeholder="Email">
        <button type="button" class="oui-button">Find</button>
      </div>
    </div>
  </div>
</div>

<div class="oui-field">
  <label for="textarea-4" class="oui-field__label oui-label">Input size 4</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_4">
      <textarea class="oui-textarea" id="textarea-4" name="textarea-4">Textarea text</textarea>
    </div>
    <div class="oui-field-helper oui-field-helper_top">A textarea with oui-field-control_4 class</div>
  </div>
</div>

<div class="oui-field">
  <label for="select-5" class="oui-field__label oui-label">Input size 5</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_5">
      <label class="oui-select">
        <select id="select-5" name="select-5" class="oui-select__input">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
      </label>
    </div>
    <div class="oui-field-helper">A select box with oui-field-control_5 class</div>
  </div>
</div>

<div class="oui-field">
  <label for="textarea-6" class="oui-field__label oui-label">Input size 6</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_6">
      <textarea class="oui-textarea" id="textarea-6" name="textarea-6">Textarea text</textarea>
    </div>
    <div class="oui-field-helper oui-field-helper_top">A textarea with oui-field-control_6 class</div>
  </div>
</div>
```

### Default size

```html:preview
<div class="oui-field">
  <label for="text-7" class="oui-field__label oui-label">Input default size</label>
  <div class="oui-field__content">
    <div class="oui-field-control">
      <input type="text" id="text-7" name="text-7" class="oui-input" value="Input text" />
    </div>
  </div>
</div>
```

### Errors

```html:preview
<div class="oui-field oui-field_error">
  <label for="text-8" class="oui-field__label oui-label">Input size 4 with error</label>
  <div class="oui-field__content">
    <div class="oui-field-control oui-field-control_4">
      <input type="text" id="text-8" name="text-8" class="oui-input oui-input_error" value="Input text" />
    </div>
    <div class="oui-field-helper">An error input</div>
  </div>
</div>
```
