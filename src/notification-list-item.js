import NotificationListItem from '@ui5/webcomponents-fiori/dist/NotificationListItem.js';

export default class HNotificationListItem extends NotificationListItem {
  constructor() {
    super();
  }
}

customElements.define('h-notification-list-item', HNotificationListItem);
