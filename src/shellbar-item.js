import ShellBarItem from '@ui5/webcomponents-fiori/dist/ShellBarItem.js';

export default class HShellBarItem extends ShellBarItem {
  constructor() {
    super();
  }
}

customElements.define('h-shellbar-item', HShellBarItem);
