import Table from '@ui5/webcomponents/dist/Table.js';

export default class HTable extends Table {
  constructor() {
    super();
  }
}

customElements.define('h-table', HTable);
