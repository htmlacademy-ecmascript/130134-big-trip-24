import { createElement } from '../render.js';
import { humanizeDate } from '../utils.js';
import dayjs from 'dayjs';

function getTimeDuration(duration, days, hours, minutes) {
  if (duration < 60) {
    return `${minutes.toString().padStart(2, '0')}M`;
  }
  if (duration < 1440) {
    return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }

  return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
}

function createPointTemplate(point, offersData) {
  const { type, destination, dateStart, dateEnd, price, isFavorite, offers } = point;

  const isFavoriteClass = 'event__favorite-btn--active';
  const dateStartDay = humanizeDate(dateStart, 'YYYY-MM-DD');
  const dateStartDayShowed = humanizeDate(dateStart, 'MMM D');
  const dateStartTime = humanizeDate(dateStart, 'YYYY-MM-DDTHH:MM');
  const dateStartTimeShowed = humanizeDate(dateStart, 'HH:MM');
  const dateEndTime = humanizeDate(dateEnd, 'YYYY-MM-DDTHH:MM');
  const dateEndTimeShowed = humanizeDate(dateEnd, 'HH:MM');
  const duration = dayjs(dateEndTime).diff(dateStartTime, 'm');
  const days = dayjs(dateEndTime).diff(dateStartTime, 'd');
  const hours = dayjs(dateEndTime).diff(dateStartTime, 'h') % 24;
  const minutes = dayjs(dateEndTime).diff(dateStartTime, 'm') % 60;
  const durationTime = getTimeDuration(duration, days, hours, minutes);
  const offersList = getOffersList();

  function getOffersList() {
    const pointOffers = offersData.find((offer) => offer.type === type);

    const offersListElements = pointOffers.offers.filter((offer) => offers.includes(offer.id));

    if (offersListElements.length) {
      return offersListElements.reduce((acc, offer) => {
        const item = `<li class="event__offer">
                <span class="event__offer-title">${offer.name}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </li>`;
        const list = acc + item;
        return list;
      }, '');
    }

    return '';
  }

  function getCapitalizedPointType() {
    return type[0].toUpperCase() + type.slice(1);
  }

  return `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateStartDay}">${dateStartDayShowed}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${getCapitalizedPointType()} ${destination}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateStartTime}">${dateStartTimeShowed}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateEndTime}">${dateEndTimeShowed}</time>
          </p>
          <p class="event__duration">${durationTime}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersList}
        </ul>
        <button class="event__favorite-btn ${isFavorite ? isFavoriteClass : ''}" type="button">
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

export default class PointView {
  constructor(point, offers) {
    this.point = point;
    this.offers = offers;
  }

  getTemplate() {
    return createPointTemplate(this.point, this.offers);
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
