import { createElement } from '../render.js';
import { POINT_TYPE } from '../const.js';
import { getCapitalizedPointType, humanizeDate } from '../utils.js';

const BLANK_POINT = {
  id: 1,
  type: 'flight',
  destination: null,
  dateStart: new Date(),
  dateEnd: new Date(),
  price: '',
  isEdit: false,
  isFavorite: false,
  offers: [1],
};

function createPointTypeTemplate(type) {
  return POINT_TYPE.reduce((acc, pointType) => {
    const pointItem = `<div class="event__type-item">
        <input id="event-type-${pointType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType}" ${
      pointType === type ? 'checked' : ''
    }>
        <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-1">${getCapitalizedPointType(
      pointType
    )}</label>
      </div>`;

    return acc + pointItem;
  }, '');
}

function createDestinationsListTemplate(destinations) {
  return destinations.reduce((acc, destination) => {
    const destinationOption = `<option value="${getCapitalizedPointType(
      destination.destination
    )}"></option>`;
    return acc + destinationOption;
  }, '');
}

function createControlButtonsTemplate(isEdit) {
  return isEdit
    ? `<button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>`
    : '<button class="event__reset-btn" type="reset">Cancel</button>';
}

function createOffersList(offers, pointOffers) {
  return offers.reduce((acc, offer) => {
    const offerItem = `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${
                offer.name
              }-1" type="checkbox" name="event-offer-${offer.name}" ${
      pointOffers.includes(offer.id) ? 'checked' : ''
    }>
              <label class="event__offer-label" for="event-offer-${
                offer.name
              }-1">
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

  if (pointOffersItems.offers.length) {
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
  if (photos.length) {
    const photoItems = photos.reduce((acc, photoItem) => {
      const photosList = `<img class="event__photo" src="${photoItem}" alt="Event photo">`;
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
  const destination = destinations.find(
    (destinationItem) => destinationItem.destination === pointDestination
  );

  if (destination) {
    return `<section class="event__section  event__section--destination">
              <h3 class="event__section-title  event__section-title--destination">Destination</h3>
              <p class="event__destination-description">${
                destination.description
              }</p>
              ${createPhotosTemplate(destination.fotos)}
            </section>`;
  }

  return '';
}

function createEditPointTemplate(point, offers, destinations) {
  const pointTypesTemplate = createPointTypeTemplate(point.type);
  const pointTypeName = getCapitalizedPointType(point.type);
  const pointDestination = getCapitalizedPointType(point.destination);
  const destinationsList = createDestinationsListTemplate(destinations);
  const dateStart = humanizeDate(point.dateStart, 'DD/MM/YY HH:MM');
  const dateEnd = humanizeDate(point.dateEnd, 'DD/MM/YY HH:MM');
  const pointControls = createControlButtonsTemplate(point.isEdit);
  const offersList = createOffersTemplate(offers, point);
  const destination = createDestinationTemplate(
    destinations,
    point.destination
  );

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
              ${pointTypeName}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${pointDestination}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${destinationsList}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateStart}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateEnd}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.price}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          ${pointControls}
        </header>
        <section class="event__details">
          ${offersList}

          ${destination}
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
