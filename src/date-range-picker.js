import DateRangePicker from '@ui5/webcomponents/dist/DateRangePicker.js';

export default class HDateRangePicker extends DateRangePicker {
  constructor() {
    super();
  }
}

customElements.define('h-date-range-picker', HDateRangePicker);
