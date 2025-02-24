import Carousel from '@ui5/webcomponents/dist/Carousel.js';

export default class HCarousel extends Carousel {
  constructor() {
    super();
  }
}

customElements.define('h-carousel', HCarousel);
