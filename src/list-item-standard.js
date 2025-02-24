import ListItemStandard from '@ui5/webcomponents/dist/ListItemStandard.js';

export default class HListItemStandard extends ListItemStandard {
  constructor() {
    super();
  }
}

customElements.define('h-list-item-standard', HListItemStandard);
