import Wizard from '@ui5/webcomponents-fiori/dist/Wizard.js';

export default class HWizard extends Wizard {
  constructor() {
    super();
  }
}

customElements.define('h-wizard', HWizard);
