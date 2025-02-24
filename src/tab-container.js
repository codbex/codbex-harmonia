import TabContainer from '@ui5/webcomponents/dist/TabContainer.js';

export default class HTabContainer extends TabContainer {
  constructor() {
    super();
  }
}

customElements.define('h-tab-container', HTabContainer);
