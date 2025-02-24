import DateTimePicker from '@ui5/webcomponents/dist/DateTimePicker.js';

export default class HDateTimePicker extends DateTimePicker {
  constructor() {
    super();
  }
}

customElements.define('h-date-time-picker', HDateTimePicker);
