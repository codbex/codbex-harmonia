import ListItemCustom from '@ui5/webcomponents/dist/ListItemCustom.js';

export default class HListItemCustom extends ListItemCustom {
  constructor() {
    super();
  }
}

customElements.define('h-list-item-custom', HListItemCustom);
