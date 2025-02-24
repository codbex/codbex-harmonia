import NotificationList from '@ui5/webcomponents-fiori/dist/NotificationList.js';

export default class HNotificationList extends NotificationList {
  constructor() {
    super();
  }
}

customElements.define('h-notification-list', HNotificationList);
