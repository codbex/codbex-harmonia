import Tree from '@ui5/webcomponents/dist/Tree.js';

export default class HTree extends Tree {
  constructor() {
    super();
  }
}

customElements.define('h-tree', HTree);
