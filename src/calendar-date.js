import CalendarDate from '@ui5/webcomponents/dist/CalendarDate.js';

export default class HCalendarDate extends CalendarDate {
  constructor() {
    super();
  }
}

customElements.define('h-calendar-date', HCalendarDate);
