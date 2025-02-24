import SpecialCalendarDate from '@ui5/webcomponents/dist/SpecialCalendarDate.js';

export default class HSpecialCalendarDate extends SpecialCalendarDate {
  constructor() {
    super();
  }
}

customElements.define('h-special-calendar-date', HSpecialCalendarDate);
