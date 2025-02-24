import SegmentedButton from '@ui5/webcomponents/dist/SegmentedButton.js';

export default class HSegmentedButton extends SegmentedButton {
  constructor() {
    super();
  }
}

customElements.define('h-segmented-button', HSegmentedButton);
