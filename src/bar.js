import Bar from '@ui5/webcomponents/dist/Bar.js';

export default class HBar extends Bar {
  constructor() {
    super();
  }
}

customElements.define('h-bar', HBar);
