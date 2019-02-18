export function hasProperty(obj, prop = '') {
  const props = prop.split('.');
  let theObject = obj;
  for (let i = 0; i < props.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(theObject, props[i])) {
      return false;
    }
    theObject = theObject[props[i]] || {};
  }
  return true;
}

export default {
  hasProperty,
};
