import AvatarGroup from '@ui5/webcomponents/dist/AvatarGroup.js';

export default class HAvatarGroup extends AvatarGroup {
  constructor() {
    super();
  }
}

customElements.define('h-avatar-group', HAvatarGroup);
