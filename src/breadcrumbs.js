import Breadcrumbs from '@ui5/webcomponents/dist/Breadcrumbs.js';

export default class HBreadcrumbs extends Breadcrumbs {
  constructor() {
    super();
  }
}

customElements.define('h-breadcrumbs', HBreadcrumbs);
