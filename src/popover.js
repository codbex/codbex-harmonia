import Popover from '@ui5/webcomponents/dist/Popover.js';

export default class HPopover extends Popover {
  constructor() {
    super();
  }
}

customElements.define('h-popover', HPopover);
