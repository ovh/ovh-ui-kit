/**
 * Define a boolean attribute to a component.
 *
 * This gives the possibility to to have an attribute without value evaluated to true.
 * Controller must inject $attrs.
 *
 * @param {Object} controller    the controller
 * @param {string} parameterName the lowerCamelCased attribute name
 */
export function addBooleanParameter(controller, parameterName) {
  const ctrl = controller;
  if (ctrl.$attrs) {
    if (angular.isDefined(ctrl.$attrs[parameterName]) && ctrl.$attrs[parameterName] === '') {
      ctrl[parameterName] = true;
    }
  }
}

/**
 * Define a default attribute to a component.
 *
 * This gives the possibility to set a default value if an attribute is not defined.
 * Controller must inject $attrs.
 *
 * @param {Object} controller    the controller
 * @param {string} parameterName the lowerCamelCased attribute name
 * @param {string} defaultValue  the default value
 */
export function addDefaultParameter(controller, parameterName, defaultValue) {
  const ctrl = controller;
  if (ctrl.$attrs) {
    if (!angular.isDefined(ctrl.$attrs[parameterName])
            || (angular.isDefined(ctrl.$attrs[parameterName]) && ctrl.$attrs[parameterName].trim() === '')) {
      ctrl[parameterName] = defaultValue;
    }
  }
}

/**
 * Check if an attribute is present (even if it has no value) in a HTML element.
 * @param  {HTMLElement}  element        a HTML element
 * @param  {string}       attributeName  the attribute name
 * @return {Boolean}                     true if it exists
 */
export function hasAttribute(element, attributeName) {
  return element.getAttribute(attributeName) !== null
        || element.getAttribute(`data-${attributeName}`) !== null;
}

/**
 * Check if an attribute is present and have a value in an HTML element.
 * @param  {HTMLElement}  element        a HTML element
 * @param  {string}       attributeName  the attribute name
 * @return {Boolean}                     true if it exists and have a value
 */
export function hasAttributeValue(element, attributeName) {
  const attribute = element.getAttribute(attributeName) || element.getAttribute(`data-${attributeName}`);
  return attribute && attribute !== '';
}

/**
 * Return the value of an attribute of an HTML Element.
 * @param  {HTMLElement}  element       a HTML element
 * @param  {string}       attributeName the attribute name
 * @return {string}                     the attribute value
 */
export function getAttribute(element, attributeName) {
  return element.getAttribute(attributeName) || element.getAttribute(`data-${attributeName}`);
}

export default {
  addBooleanParameter,
  addDefaultParameter,
  hasAttribute,
  hasAttributeValue,
  getAttribute,
};
