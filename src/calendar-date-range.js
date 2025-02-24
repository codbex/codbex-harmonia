import CalendarDateRange from '@ui5/webcomponents/dist/CalendarDateRange.js';

export default class HCalendarDateRange extends CalendarDateRange {
  constructor() {
    super();
  }
}

customElements.define('h-calendar-date-range', HCalendarDateRange);
