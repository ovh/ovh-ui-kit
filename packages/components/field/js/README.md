# Field

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Input

```html:preview
<form novalidate name="inputForm">
    <oui-field label="Lastname"
        help-text="At least 3 chars"
        size="xl">
        <input
            class="oui-input"
            type="text"
            id="lastname"
            name="lastname"
            ng-model="$ctrl.user.lastname"
            required
            minlength="3"
            maxlength="32">
    </oui-field>

    <oui-field label="Email" size="xl">
        <input
            class="oui-input"
            type="email"
            id="email"
            name="email"
            ng-model="$ctrl.user.email">
    </oui-field>

    <oui-field label="Username"
        error-messages="{pattern: 'Username must be alphabetic with a length between 3 and 8.'}"
        size="xl">
        <input
            class="oui-input"
            type="text"
            id="username"
            name="username"
            ng-model="$ctrl.user.username"
            ng-pattern="/^[a-zA-Z]{3,8}$/">
    </oui-field>
</form>
```

### Label Popover

```html:preview
<form novalidate name="inputForm">
    <oui-field label="Lastname"
        help-text="At least 3 chars"
        label-popover="In the LastName field, enter your family name as the family name appears on your passport. The last name is required to complete the application."
        size="xl">
        <input
            class="oui-input"
            type="text"
            id="lastname"
            name="lastname"
            ng-model="$ctrl.user.lastname"
            required
            minlength="3"
            maxlength="32">
    </oui-field>
</form>
```

### Checkbox

```html:preview
<form novalidate name="checkboxForm">
    <oui-field label="Server options">
        <oui-checkbox
            name="ssl"
            text="SSL"
            model="$ctrl.ssl"
            required></oui-checkbox>
        <oui-checkbox
            name="hsts"
            text="HSTS"
            model="$ctrl.hsts"></oui-checkbox>
    </oui-field>
</form>
```
### Switch

```html:preview
<form novalidate name="switchForm">
    <oui-field label="Switch options" help-text="Helper text">
        <oui-switch
            name="switch"
            model="$ctrl.switch"
            required></oui-switch>
    </oui-field>
</form>
```

### Radio

```html:preview
<form novalidate name="radioForm">
    <oui-field label="Protocol">
        <oui-radio
            name="protocol"
            text="HTTP"
            model="$ctrl.protocol"
            value="'http'"></oui-radio>
        <oui-radio
            name="protocol"
            text="TCP"
            model="$ctrl.protocol"
            value="'tcp'"></oui-radio>
        <oui-radio
            name="protocol"
            text="UDP"
            model="$ctrl.protocol"
            value="'udp'"
            disabled></oui-radio>
    </oui-field>
</form>
```

### Textarea

```html:preview
<form novalidate name="textareaForm">
    <oui-field label="Server description" size="xl">
        <textarea
            class="oui-textarea"
            id="description"
            name="description"
            ng-model="$ctrl.server.description"
            required>
        </textarea>
    </oui-field>

    <oui-field label="{{'Cluster description'}}" size="xl">
        <oui-textarea
            model="$ctrl.text2"
            id="description-2"
            name="description-2"
            placeholder="Please insert your text..."
            maxlength="10"
            required></oui-textarea>
    </oui-field>
</form>
```

### Select

```html:preview
<form novalidate name="selectForm">
    <oui-field label="OS" size="m">
        <label class="oui-select">
            <select
                id="os"
                name="os"
                ng-model="os"
                class="oui-select__input"
                required>
                <option ng-value="undefined">Select the OS</option>
                <option value="freebsd">FreeBSD</option>
                <option value="linux">Linux</option>
                <option value="osx">OSX</option>
                <option value="windows">Windows</option>
            </select>
            <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
        </label>
    </oui-field>

    <oui-field label="Recovery OS" size="m">
        <oui-select name="recovery_os"
            model="$ctrl.recoveryOs"
            title="Select the recovery OS"
            placeholder="Select the recovery OS..."
            items="$ctrl.osList"
            match="label"
            required>
        </oui-select>
    </oui-field>

    <oui-field label="Recovery OS" size="m">
        <oui-select name="recovery_os2"
            model="$ctrl.recoveryOs2"
            title="Select the recovery OS"
            placeholder="Select the recovery OS..."
            items="$ctrl.osList"
            match="label"
            required
            multiple>
        </oui-select>
    </oui-field>
</form>
```

### Input numeric

```html:preview
<form novalidate name="numericForm">
    <oui-field label="Number of servers"
        help-text="Select the number of servers in your cluster">
        <oui-numeric
            id="serversCount"
            name="serversCount"
            model="$ctrl.serversCount"
            min="1">
        </oui-numeric>
    </oui-field>
</form>
```

### Input calendar

```html:preview
<form novalidate name="calendarForm">
    <oui-field label="Automatic renewal"
        size="xl">
        <oui-calendar
            id="date"
            name="date"
            model="$ctrl.dateModel"
            required>
        </oui-calendar>
    </oui-field>
<form>
```

### Submit button

```html:preview
<form novalidate name="simpleForm">
    <oui-field label="{{'Lastname'}}"
        help-text="At least 3 chars"
        size="xl">
        <input
            class="oui-input"
            type="text"
            id="lastname"
            name="lastname"
            ng-model="$ctrl.user.lastname"
            required
            minlength="3"
            maxlength="32">
    </oui-field>
    <button type="submit" class="oui-button oui-button_primary">Submit</button>
</form>
```

## API

| Attribute         | Type      | Binding   | One-time binding  | Values                            | Default   | Description
| ----              | ----      | ----      | ----              | ----                              | ----      | ----
| `label`           | string    | @?        | yes               | n/a                               | n/a       | field label
| `label-popover`   | string    | @?        | yes               | n/a                               | n/a       | text to describe the field or give more information
| `help-text`       | string    | @?        | yes               | n/a                               | n/a       | text to help fill the form field
| `size`            | string    | @?        | yes               | `xs`, `s`, `m`, `l`, `xl`, `auto` | `auto`    | field size
| `error-messages`  | object    | <?        | no                | n/a                               | n/a       | dictionary to override default messages

## Configuration

The validation messages can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.field"
]).config(ouiFieldConfigurationProvider => {
    ouiFieldConfigurationProvider.setTranslations({ // default translations
        errors: {
            required: "Mandatory.",
            number: "Invalid number.",
            email: "Invalid email.",
            min: "Too low ({{min}} min).",
            max: "Too high ({{max}} max).",
            minlength: "Too short ({{minlength}} characters min).",
            maxlength: "Too high ({{maxlength}} characters max).",
            pattern: "Invalid format."
        }
    });
});
```
