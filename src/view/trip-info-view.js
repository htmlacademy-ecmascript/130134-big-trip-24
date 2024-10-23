import AbstractView from '../framework/view/abstract-view';
import { humanizeDate } from '../utils/common.js';

function getRouteTemplate(points, destinations) {
  if (points.length > 3) {
    const pointStartId = points[0].destination;
    const pointEndId = points[points.length - 1].destination;
    const pointStart = destinations.find((destination) => destination.id === pointStartId);
    const pointEnd = destinations.find((destination) => destination.id === pointEndId);

    return `<h1 class="trip-info__title">${pointStart.name} &mdash; ... &mdash; ${pointEnd.name}</h1>`;
  }

  const route = points.map((point) => {
    const destinationItem = destinations.find((destination) => destination.id === point.destination);
    return destinationItem.name;
  });
  const routeTemplate = route.reduce((acc, city, index) => {
    let itemCity = null;
    if (index !== 0) {
      itemCity = ` &mdash; ${city}`;
    } else {
      itemCity = city;
    }

    const routeList = acc + itemCity;
    return routeList;
  }, '');

  return `<h1 class="trip-info__title">${routeTemplate}</h1>`;
}

function getDatesTemplate(points) {
  const dateStart = points[0].dateFrom;
  const dateEnd = points[points.length - 1].dateTo;
  const isOneMonthDuration = humanizeDate(dateStart, 'M') === humanizeDate(dateEnd, 'M');

  return isOneMonthDuration ?
    `<p class="trip-info__dates">${humanizeDate(dateStart, 'DD')}&nbsp;&mdash;&nbsp;${humanizeDate(dateEnd, 'DD MMM')}</p>`
    : `<p class="trip-info__dates">${humanizeDate(dateStart, 'DD MMM')}&nbsp;&mdash;&nbsp;${humanizeDate(dateEnd, 'DD MMM')}</p>`;
}

function getTotalPrice(points, offers) {
  return points.reduce((acc, point) => {
    const pointOffers = offers.find((offer) => offer.type === point.type);
    const pointOffersList = pointOffers.offers.filter((offer) => point.offers.includes(offer.id));
    const offersPrice = pointOffersList.reduce((curr, item) => curr + item.price, 0);

    const pointPrice = point.basePrice + offersPrice;

    const totalPrice = acc + pointPrice;
    return totalPrice;
  }, 0);
}

function createTripInfoTemplate(points, offers, destinations) {
  return`<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              ${getRouteTemplate(points, destinations)}

              ${getDatesTemplate(points)}
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${getTotalPrice(points, offers)}</span>
            </p>
          </section>`;
}

export default class TripInfoView extends AbstractView {
  #points = [];
  #offers = [];
  #destinations = [];

  constructor({ points, offers, destinations }) {
    super();
    this.#points = points;
    this.#offers = offers;
    this.#destinations = destinations;
  }

  get template() {
    return createTripInfoTemplate(this.#points, this.#offers, this.#destinations);
  }
}
