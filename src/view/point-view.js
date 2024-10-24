import AbstractView from '../framework/view/abstract-view';
import { getCapitalizedValue, humanizeDate, getTimeDuration } from '../utils/common.js';

function getPointName(destinations, pointDestination) {
  const destinationItem = destinations.find((destination) => destination.id === pointDestination);

  if (typeof destinationItem !== 'undefined') {
    return getCapitalizedValue(destinationItem.name);
  }

  return '';
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
  const dateStartDay = humanizeDate(point.dateFrom, 'YYYY-MM-DD');
  const dateStartDayShowed = humanizeDate(point.dateFrom, 'MMM D');
  const dateStartTime = humanizeDate(point.dateFrom, 'YYYY-MM-DDTHH:mm');
  const dateStartTimeShowed = humanizeDate(point.dateFrom, 'HH:mm');
  const dateEndTime = humanizeDate(point.dateTo, 'YYYY-MM-DDTHH:mm');
  const dateEndTimeShowed = humanizeDate(point.dateTo, 'HH:mm');
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
          &euro;&nbsp;<span class="event__price-value">${point.basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersListTemplate}
        </ul>
        <button class="event__favorite-btn ${point.isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
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
  #point = null;
  #offers = [];
  #destinations = [];
  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({ point, offers, destinations, onEditClick, onFavoriteClick }) {
    super();
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createPointTemplate(this.#point, this.#offers, this.#destinations);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
