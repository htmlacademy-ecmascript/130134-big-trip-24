import AbstractView from '../framework/view/abstract-view';
import { getCapitalizedValue, humanizeDate, getTimeDuration } from '../utils/common.js';

function getPointName(destinations, pointDestination) {
  const destinationItem = destinations.find((destination) => destination.id === pointDestination);

  return getCapitalizedValue(destinationItem.name);
}

function getOffersListTemplate(offers, point) {
  const pointOffers = offers.find((offer) => offer.type === point.type);

  const pointOffersList = pointOffers.offers.filter((offer) => point.offers.includes(offer.id));

  if (pointOffersList.length > 0) {
    return pointOffersList.reduce((acc, offer) => {
      const item = `<li class="event__offer">
              <span class="event__offer-title">${offer.title}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${offer.price}</span>
            </li>`;
      const list = acc + item;
      return list;
    }, '');
  }

  return '';
}

function createPointTemplate(point, offers, destinations) {
  const pointName = getPointName(destinations, point.destination);
  const dateStartDay = humanizeDate(point.date_from, 'YYYY-MM-DD');
  const dateStartDayShowed = humanizeDate(point.date_from, 'MMM D');
  const dateStartTime = humanizeDate(point.date_from, 'YYYY-MM-DDTHH:MM');
  const dateStartTimeShowed = humanizeDate(point.date_from, 'HH:MM');
  const dateEndTime = humanizeDate(point.date_to, 'YYYY-MM-DDTHH:MM');
  const dateEndTimeShowed = humanizeDate(point.date_to, 'HH:MM');
  const durationTime = getTimeDuration(dateStartTime, dateEndTime);
  const offersListTemplate = getOffersListTemplate(offers, point);

  return `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateStartDay}">${dateStartDayShowed}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${getCapitalizedValue(point.type)} ${pointName}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateStartTime}">${dateStartTimeShowed}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateEndTime}">${dateEndTimeShowed}</time>
          </p>
          <p class="event__duration">${durationTime}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${point.base_price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersListTemplate}
        </ul>
        <button class="event__favorite-btn ${point.is_favorite ? 'event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
}

export default class PointView extends AbstractView {
  #point = [];
  #offers = [];
  #destinations = [];
  #handleEditClick = null;

  constructor({point, offers, destinations, onEditClick}) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleEditClick = onEditClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createPointTemplate(this.#point, this.#offers, this.#destinations);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}