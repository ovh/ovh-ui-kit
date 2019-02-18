import merge from 'lodash/merge';

export default class {
  constructor() {
    this.translations = {
      notification: {
        errorInNotification: 'Oups, there’s an error!',
        errorInNotificationDescription: 'We can’t initialize the menu.',
        markRead: 'Mark as read',
        markUnread: 'Mark as unread',
        noNotification: 'You are all caught up!',
        noNotificationDescription: "You don't have any notification.",
      },
    };
  }

  /**
     * Set the translations
     * @param {Object} translations a map of translations
     */
  setTranslations(translations) {
    this.translations = merge(this.translations, translations);
    return this;
  }

  $get() {
    return {
      translations: this.translations,
    };
  }
}
