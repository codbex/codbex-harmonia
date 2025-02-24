import TableHeaderRow from '@ui5/webcomponents/dist/TableHeaderRow.js';

export default class HTableHeaderRow extends TableHeaderRow {
  constructor() {
    super();
  }
}

customElements.define('h-table-header-row', HTableHeaderRow);
