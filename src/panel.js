import Panel from '@ui5/webcomponents/dist/Panel.js';

export default class HPanel extends Panel {
  constructor() {
    super();
  }
}

customElements.define('h-panel', HPanel);
