import DatePicker from '@ui5/webcomponents/dist/DatePicker.js';

export default class HDatePicker extends DatePicker {
  constructor() {
    super();
  }
}

customElements.define('h-date-picker', HDatePicker);
