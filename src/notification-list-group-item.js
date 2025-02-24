import NotificationListGroupItem from '@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js';

export default class HNotificationListGroupItem extends NotificationListGroupItem {
  constructor() {
    super();
  }
}

customElements.define('h-notification-list-group-item', HNotificationListGroupItem);
