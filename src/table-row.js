import TableRow from '@ui5/webcomponents/dist/TableRow.js';

export default class HTableRow extends TableRow {
  constructor() {
    super();
  }
}

customElements.define('h-table-row', HTableRow);
