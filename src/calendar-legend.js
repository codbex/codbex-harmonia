import CalendarLegend from '@ui5/webcomponents/dist/CalendarLegend.js';

export default class HCalendarLegend extends CalendarLegend {
  constructor() {
    super();
  }
}

customElements.define('h-calendar-legend', HCalendarLegend);
