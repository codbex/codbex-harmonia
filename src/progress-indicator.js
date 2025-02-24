import ProgressIndicator from '@ui5/webcomponents/dist/ProgressIndicator.js';

export default class HProgressIndicator extends ProgressIndicator {
  constructor() {
    super();
  }
}

customElements.define('h-progress-indicator', HProgressIndicator);
