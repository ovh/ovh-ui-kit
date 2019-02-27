# Password

## Usage

### Basic

```html:preview
<form name="form" novalidate>
  <oui-password model="$ctrl.modelBasic"></oui-password>
</form>
```

### Placeholder

```html:preview
<form name="form" novalidate>
  <oui-password model="$ctrl.modelPlaceholder" placeholder="Password"></oui-password>
</form>
```

### Disabled

```html:preview
<form name="form" novalidate>
  <oui-password model="$ctrl.modelDisabled" disabled></oui-password>
</form>
```

### Form validation

```html:preview
<form name="form" novalidate>
    <oui-field label="Password" size="xl">
        <oui-password model="$ctrl.modelForm" 
            minlength="4"
            maxlength="16"
            pattern="^[a-zA-Z0-9]+$"
            required>
        </oui-password>
    </oui-field>
</form>
```

### Password rules & strength

<oui-message type="warning">
    The component doesn't include any password strength estimator. You can use one like <a href="https://github.com/dropbox/zxcvbn">zxcvbn</a> to provide a score, like in this example.
</oui-message>

```html:preview
<form name="form2" novalidate>
    <oui-field label="Password" size="xl">
        <oui-password model="$ctrl.modelPasswordRules" on-change="$ctrl.getPasswordScore(modelValue)">
            <oui-password-strength score="$ctrl.passwordScore"></oui-password-strength>
            <oui-password-rule validator="$ctrl.checkPasswordLength(modelValue)">
                Must contain between 8 and 30 characters
            </oui-password-rule>
            <oui-password-rule pattern="[0-9]+">
                Have at least one number
            </oui-password-rule>
            <oui-password-rule pattern="[A-Z]+">
                Have at least capital letter
            </oui-password-rule>
        </oui-password>
    </oui-field>
</form>
```

#### Custom strength feedback

The feedback of password strength can be overridden by adding your custom feedback in `oui-password-strength`.
It can also be globally changed with `ouiPasswordProvider` (see **Configuration** below).

```html:preview
<form name="form" novalidate>
  <oui-password model="$ctrl.modelCustomFeedback" on-change="$ctrl.getPasswordScore(modelValue)">
      <oui-password-strength score="$ctrl.passwordScore" ng-switch="$ctrl.passwordScore">
          <span ng-switch-when="4">Score 4: Etiam volutpat congue odio imperdiet tincidunt.</span>
          <span ng-switch-when="3">Score 3: Suspendisse vehicula ut nisl non laoreet.</span>
          <span ng-switch-when="2">Score 2: Curabitur malesuada mi lectus, eget pharetra erat malesuada sed.</span>
          <span ng-switch-when="1">Score 1: Vestibulum pulvinar congue lacus sed ultricies.</span>
          <span ng-switch-default="">Score 0: Lorem ipsum dolor sit amet.</span>
      </oui-password-strength>
  </oui-password>
</form>
```

#### Score scale

`oui-password-strength`'s score scale is based on <a href="https://github.com/dropbox/zxcvbn#usage">zxcvbn</a> scale:

* `0`: Risky password,
* `1`: Bad password,
* `2`: Weak password,
* `3`: Good password,
* `4`: Strong password

## API

### oui-password

| Attribute     | Type                  | Binding   | One-time binding  | Values                | Default   | Description
| ----          | ----                  | ----      | ----              | ----                  | ----      | ----
| `model`       | string                | =         | no                | n/a                   | n/a       | model bound to component
| `id`          | string                | @?        | yes               | n/a                   | n/a       | id attribute of the input
| `name`        | string                | @?        | yes               | n/a                   | n/a       | name attritebu of the input
| `placeholder` | string                | @?        | yes               | `true`, `false`       | `false`   | placeholder text
| `disabled`    | boolean               | <?        | no                | n/a                   | n/a       | disabled flag
| `maxlength`   | number                | <?        | yes               | n/a                   | n/a       | max length of the model value
| `minlength`   | number                | <?        | yes               | n/a                   | n/a       | min length of the model value
| `pattern`     | string&lt;regexp&gt;  | @?        | yes               | n/a                   | n/a       | pattern of the model value
| `required`    | boolean               | <?        | no                | `true`, `false`       | `false`   | required flag
| `on-change`   | function              | &         | no                | n/a                   | n/a       | handler triggered when value has changed

### oui-rule

| Attribute     | Type                  | Binding   | One-time binding  | Values                | Default   | Description
| ----          | ----                  | ----      | ----              | ----                  | ----      | ----
| `pattern`     | string&lt;regexp&gt;  | @?        | no                | n/a                   | n/a       | pattern of the model value
| `validator`   | function              | &         | no                | n/a                   | n/a       | validator function to test the password value; should return a boolean

### oui-strength

| Attribute     | Type                  | Binding   | One-time binding  | Values                | Default   | Description
| ----          | ----                  | ----      | ----              | ----                  | ----      | ----
| `score`       | number                | <?        | no                | See **Score scale**   | n/a       | score provided by a password strength estimator

## Configuration

The password translations can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.password"
]).config(ouiPasswordConfigurationProvider => {
    ouiPasswordConfigurationProvider.setTranslations({
        allRulesValidLabel: "All password rules are met.",
        ariaHidePasswordLabel: "Hide password",
        ariaShowPasswordLabel: "Show password",
        ariaValidRuleLabel: "Valid rule.",
        ariaInvalidRuleLabel: "Invalid rule.",
        riskyPasswordLabel: "Risky password.",
        badPasswordLabel: "Bad password.",
        weakPasswordLabel: "Weak password.",
        goodPasswordLabel: "Good password.",
        strongPasswordLabel: "Strong password."
    });
});
```
