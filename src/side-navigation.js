import SideNavigation from '@ui5/webcomponents-fiori/dist/SideNavigation.js';

export default class HSideNavigation extends SideNavigation {
  constructor() {
    super();
  }
}

customElements.define('h-side-navigation', HSideNavigation);
