import TableSelection from '@ui5/webcomponents/dist/TableSelection.js';

export default class HTableSelection extends TableSelection {
  constructor() {
    super();
  }
}

customElements.define('h-table-selection', HTableSelection);
