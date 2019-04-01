import styles from './styles';

export function withCenteredLayout(getStory, context) {
  const story = getStory(context);
  const wrapper = document.createElement('div');
  Object.assign(wrapper.style, styles.wrapper);

  const inner = document.createElement('div');
  Object.assign(inner.style, styles.inner);

  wrapper.appendChild(inner);
  inner.appendChild(story);
  return wrapper;
}

export function compileTemplate(template, scope = {}) {
  return { template, scope };
}

export default { compileTemplate };
