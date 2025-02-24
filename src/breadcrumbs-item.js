import BreadcrumbsItem from '@ui5/webcomponents/dist/BreadcrumbsItem.js';

export default class HBreadcrumbsItem extends BreadcrumbsItem {
  constructor() {
    super();
  }
}

customElements.define('h-breadcrumbs-item', HBreadcrumbsItem);
