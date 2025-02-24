import CalendarLegendItem from '@ui5/webcomponents/dist/CalendarLegendItem.js';

export default class HCalendarLegendItem extends CalendarLegendItem {
  constructor() {
    super();
  }
}

customElements.define('h-calendar-legend-item', HCalendarLegendItem);
