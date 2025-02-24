import ShellBarSpacer from '@ui5/webcomponents-fiori/dist/ShellBarSpacer.js';

export default class HShellBarSpacer extends ShellBarSpacer {
  constructor() {
    super();
  }
}

customElements.define('h-shellbar-spacer', HShellBarSpacer);
