import ResponsivePopover from '@ui5/webcomponents/dist/ResponsivePopover.js';

export default class HResponsivePopover extends ResponsivePopover {
  constructor() {
    super();
  }
}

customElements.define('h-responsive-popover', HResponsivePopover);
