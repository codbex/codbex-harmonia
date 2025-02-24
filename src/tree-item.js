import TreeItem from '@ui5/webcomponents/dist/TreeItem.js';

export default class HTreeItem extends TreeItem {
  constructor() {
    super();
  }
}

customElements.define('h-tree-item', HTreeItem);
