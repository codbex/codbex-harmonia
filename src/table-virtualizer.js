import TableVirtualizer from '@ui5/webcomponents/dist/TableVirtualizer.js';

export default class HTableVirtualizer extends TableVirtualizer {
  constructor() {
    super();
  }
}

customElements.define('h-table-virtualizer', HTableVirtualizer);
