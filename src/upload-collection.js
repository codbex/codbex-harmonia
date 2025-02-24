import UploadCollection from '@ui5/webcomponents-fiori/dist/UploadCollection.js';

export default class HUploadCollection extends UploadCollection {
  constructor() {
    super();
  }
}

customElements.define('h-upload-collection', HUploadCollection);
