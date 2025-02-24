import UploadCollectionItem from '@ui5/webcomponents-fiori/dist/UploadCollectionItem.js';

export default class HUploadCollectionItem extends UploadCollectionItem {
  constructor() {
    super();
  }
}

customElements.define('h-upload-collection-item', HUploadCollectionItem);
