import List from '@ui5/webcomponents/dist/List.js';

export default class HList extends List {
  constructor() {
    super();
  }
}

customElements.define('h-list', HList);
