import TableCell from '@ui5/webcomponents/dist/TableCell.js';

export default class HTableCell extends TableCell {
  constructor() {
    super();
  }
}

customElements.define('h-table-cell', HTableCell);
