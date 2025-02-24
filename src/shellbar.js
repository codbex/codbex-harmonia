import ShellBar from '@ui5/webcomponents-fiori/dist/ShellBar.js';

export default class HShellBar extends ShellBar {
  constructor() {
    super();
  }
}

customElements.define('h-shellbar', HShellBar);
