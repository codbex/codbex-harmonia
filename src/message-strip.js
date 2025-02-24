import MessageStrip from '@ui5/webcomponents/dist/MessageStrip.js';

export default class HMessageStrip extends MessageStrip {
  constructor() {
    super();
  }
}

customElements.define('h-message-strip', HMessageStrip);
