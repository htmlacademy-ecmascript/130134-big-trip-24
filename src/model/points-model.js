import { getMockPoints } from '../mock/points.js';
import { getMockOffers } from '../mock/offers.js';
import { getMockDestinations } from '../mock/destinations.js';

export default class PointsModel {
  points = getMockPoints();
  offers = getMockOffers();
  destinations = getMockDestinations();

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }
}
