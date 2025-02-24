import RatingIndicator from '@ui5/webcomponents/dist/RatingIndicator.js';

export default class HRatingIndicator extends RatingIndicator {
  constructor() {
    super();
  }
}

customElements.define('h-rating-indicator', HRatingIndicator);
