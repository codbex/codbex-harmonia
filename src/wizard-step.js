import WizardStep from '@ui5/webcomponents-fiori/dist/WizardStep.js';

export default class HWizardStep extends WizardStep {
  constructor() {
    super();
  }
}

customElements.define('h-wizard-step', HWizardStep);
