import styles from './styles';

const wrapperId = 'vcentered-layout-wrapper';

function getOrCreateWrapper() {
  let wrapper = document.getElementById(wrapperId);

  if (wrapper) {
    return wrapper;
  }

  wrapper = document.createElement('div');
  wrapper.setAttribute('id', wrapperId);
  Object.assign(wrapper.style, styles.wrapper);

  return wrapper;
}

function replaceStory(wrapper, story) {
  const centered = document.createElement('div');
  Object.assign(centered.style, styles.centered);

  const inner = document.createElement('div');
  Object.assign(inner.style, styles.inner);

  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  centered.appendChild(inner);
  wrapper.appendChild(centered);

  if (typeof story === 'string') {
    inner.innerHTML = story;
  } else if (story instanceof Node) {
    inner.appendChild(story);
  } else {
    return story;
  }

  return wrapper;
}

export function withCenteredLayout(getStory, context) {
  const story = getStory(context);
  const wrapper = getOrCreateWrapper();
  return replaceStory(wrapper, story);
}

export default {
  withCenteredLayout,
};
