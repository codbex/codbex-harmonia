import Calendar from '@ui5/webcomponents/dist/Calendar.js';

export default class HCalendar extends Calendar {
  constructor() {
    super();
  }
}

customElements.define('h-calendar', HCalendar);
