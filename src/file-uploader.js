import FileUploader from '@ui5/webcomponents/dist/FileUploader.js';

FileUploader.styles.push('.ui5-file-uploader-input { flex-grow: 1 }');

export default class HFileUploader extends FileUploader {
  constructor() {
    super();
    this._model = {
      init: false,
    };
    for (const attr of this.attributes) {
      if (attr.name.startsWith('x-model')) {
        this._model.init = true;
        if (attr.name.includes('.fill')) {
          console.error('h-file-uploader: Input does not support the ".fill" modifier.');
        }
        break;
      }
    }
  }

  valueChange(event) {
    if (event.detail.files) this._x_model.set(event.detail.files);
    else this._x_model.set([]);
  }

  connectedCallback() {
    super.connectedCallback();
    if (this._model.init) {
      const intervalID = setInterval(() => {
        if (this._x_model) {
          clearInterval(intervalID);
          if (this._x_removeModelListeners['default']) {
            this._x_removeModelListeners['default']();
            delete this._x_removeModelListeners['default'];
            this._x_forceModelUpdate = () => {};
          }
          this.addEventListener('change', this.valueChange);
        }
      }, 1);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this.valueChange);
  }
}

customElements.define('h-file-uploader', HFileUploader);
