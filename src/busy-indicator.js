import BusyIndicator from '@ui5/webcomponents/dist/BusyIndicator.js';

export default class HBusyIndicator extends BusyIndicator {
  constructor() {
    super();
  }
}

customElements.define('h-busy-indicator', HBusyIndicator);
