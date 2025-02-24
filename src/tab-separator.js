import TabSeparator from '@ui5/webcomponents/dist/TabSeparator.js';

export default class HTabSeparator extends TabSeparator {
  constructor() {
    super();
  }
}

customElements.define('h-tab-separator', HTabSeparator);
