import Toast from '@ui5/webcomponents/dist/Toast.js';

export default class HToast extends Toast {
  constructor() {
    super();
  }
}

customElements.define('h-toast', HToast);
