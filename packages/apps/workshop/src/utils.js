import styles from './styles';

const wrapperId = 'centered-layout-wrapper';

function getOrCreateWrapper(story) {
  let wrapper = document.getElementById(wrapperId);

  if(wrapper) {
    return wrapper;
  }

  wrapper = document.createElement('div');
  wrapper.setAttribute('id', wrapperId);
  Object.assign(wrapper.style, styles.wrapper);
  const inner = document.createElement('div');
  Object.assign(inner.style, styles.inner);
  wrapper.appendChild(inner);
  inner.appendChild(story);

  return wrapper;
}

export function withCenteredLayout(getStory, context) {
  const story = getStory(context);
  return getOrCreateWrapper(story);
}

export function compileTemplate(template, scope = {}) {
  return { template, scope };
}

export default {
  compileTemplate,
  withCenteredLayout,
};
