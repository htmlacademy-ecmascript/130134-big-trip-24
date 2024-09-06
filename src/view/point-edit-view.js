import { createElement } from '../render.js';
import { getCapitalizedPointType, humanizeDate } from '../utils.js';

const BLANK_POINT = {
  'id': null,
  'date_start': new Date(),
  'date_to': new Date(),
  'base_price': '',
  'destination': null,
  'is_favorite': false,
  'offers': [1],
  'type': 'flight',
};

function createPointTypesTemplate(type, offers) {
  return offers.reduce((acc, pointType) => {
    const pointItem = `<div class="event__type-item">
        <input id="event-type-${pointType.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType.type}" ${pointType.type === type ? 'checked' : ''}>
        <label class="event__type-label  event__type-label--${pointType.type}" for="event-type-${pointType.type}-1">${getCapitalizedPointType(pointType.type)}</label>
      </div>`;

    return acc + pointItem;
  }, '');
}

function createDestinationsListTemplate(destinations) {
  return destinations.reduce((acc, destination) => {
    const destinationOption = `<option value="${getCapitalizedPointType(destination.name)}"></option>`;
    return acc + destinationOption;
  }, '');
}

function createControlButtonsTemplate(pointId) {
  return pointId !== null
    ? `<button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>`
    : '<button class="event__reset-btn" type="reset">Cancel</button>';
}

function createOffersList(offers, pointOffers) {
  return offers.reduce((acc, offer) => {
    const offerItem = `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}-1" type="checkbox" name="event-offer-${offer.id}" ${pointOffers.includes(offer.id) ? 'checked' : ''}>
              <label class="event__offer-label" for="event-offer-${offer.id}-1">
                <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </label>
            </div>`;
    return acc + offerItem;
  }, '');
}

function createOffersTemplate(offers, point) {
  const pointOffersItems = offers.find((offer) => offer.type === point.type);

  if (pointOffersItems.offers.length > 0) {
    return `<section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              ${createOffersList(pointOffersItems.offers, point.offers)}
            </div>
          </section>`;
  }

  return '';
}

function createPhotosTemplate(photos) {
  if (photos.length > 0) {
    const photoItems = photos.reduce((acc, photoItem) => {
      const photosList = `<img class="event__photo" src="${photoItem.src}" alt="Event photo">`;
      return acc + photosList;
    }, '');

    return `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${photoItems}
        </div>
      </div>`;
  }

  return '';
}

function createDestinationTemplate(destinations, pointDestination) {
  const destinationItem = destinations.find((destination) => destination.id === pointDestination);

  if (typeof destinationItem !== 'undefined') {
    return `<section class="event__section  event__section--destination">
              <h3 class="event__section-title  event__section-title--destination">Destination</h3>
              <p class="event__destination-description">${destinationItem.description}</p>
              ${createPhotosTemplate(destinationItem.pictures)}
            </section>`;
  }

  return '';
}

function getPointName(destinations, pointDestination) {
  const destinationItem = destinations.find((destination) => destination.id === pointDestination);

  if (typeof destinationItem !== 'undefined') {
    return getCapitalizedPointType(destinationItem.name);
  }

  return '';
}

function createEditPointTemplate(point, offers, destinations) {
  const pointName = getPointName(destinations, point.destination);
  const pointTypesTemplate = createPointTypesTemplate(point.type, offers);
  const destinationsOptionsTemplate = createDestinationsListTemplate(destinations);
  const pointControlsTemplate = createControlButtonsTemplate(point.id);
  const offersTemplate = createOffersTemplate(offers, point);
  const destinationTemplate = createDestinationTemplate(destinations, point.destination);
  const dateFrom = humanizeDate(point.date_from, 'DD/MM/YY HH:MM');
  const dateTo = humanizeDate(point.date_to, 'DD/MM/YY HH:MM');

  return `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${pointTypesTemplate}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${getCapitalizedPointType(point.type)}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${pointName}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${destinationsOptionsTemplate}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFrom}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateTo}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.base_price}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          ${pointControlsTemplate}
        </header>
        <section class="event__details">
          ${offersTemplate}

          ${destinationTemplate}
        </section>
      </form>
    </li>`;
}

export default class PointEditView {
  constructor({ point = BLANK_POINT, offers, destinations }) {
    this.point = point;
    this.offers = offers;
    this.destinations = destinations;
  }

  getTemplate() {
    return createEditPointTemplate(this.point, this.offers, this.destinations);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
