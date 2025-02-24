import FileUploader from '@ui5/webcomponents/dist/FileUploader.js';

export default class HFileUploader extends FileUploader {
  constructor() {
    super();
  }
}

customElements.define('h-file-uploader', HFileUploader);
