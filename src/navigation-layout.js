import NavigationLayout from '@ui5/webcomponents-fiori/dist/NavigationLayout.js';
import NavigationLayoutMode from '@ui5/webcomponents-fiori/dist/types/NavigationLayoutMode.js';

export default class HNavigationLayout extends NavigationLayout {
  constructor() {
    super();
  }
}

export { NavigationLayoutMode };

customElements.define('h-navigation-layout', HNavigationLayout);
