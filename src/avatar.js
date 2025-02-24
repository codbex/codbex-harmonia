import Avatar from '@ui5/webcomponents/dist/Avatar.js';

export default class HAvatar extends Avatar {
  constructor() {
    super();
  }
}

customElements.define('h-avatar', HAvatar);
