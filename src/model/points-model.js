import Observable from '../framework/observable.js';
import {UpdateType} from '../const.js';

export default class PointsModel extends Observable {
  #points = [];
  #offers = [];
  #destinations = [];
  #pointsApiService = null;

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  async init() {
    try {
      const points = await this.#pointsApiService.points;
      this.#points = points.map(this.#adaptToClient);
      const destinations = await this.#pointsApiService.destinations;
      this.#destinations = destinations;
      const offers = await this.#pointsApiService.offers;
      this.#offers = offers;
    } catch(err) {
      this.#points = [];

    }

    // Promise.all([this.#pointsApiService.points, this.#pointsApiService.destinations, this.#pointsApiService.offers])
    //   .then(([points, destinations, offers]) => {
    //     this.#points = points.map(this.#adaptToClient);
    //     this.#destinations = destinations;
    //     this.#offers = offers;
    //     console.log(this.#points);
    //     console.log(this.#destinations);
    //     console.log(this.#offers);
    //   })
    //   .catch(() => {
    //     console.log('error');

    //     this.#points = [];
    //   });

    this._notify(UpdateType.INIT);
  }

  async updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    try {
      const response = await this.#pointsApiService.updatePoint(update);
      const updatedPoint = this.#adaptToClient(response);
      this.#points = [
        ...this.#points.slice(0, index),
        updatedPoint,
        ...this.#points.slice(index + 1),
      ];

      this._notify(updateType, updatedPoint);
    } catch (error) {
      throw new Error(`Can't update point, error - ${error}`);
    }
  }

  addPoint(updateType, update) {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  }

  #adaptToClient(point) {
    const adaptedPoint = {
      ...point,
      'basePrice': point['base_price'],
      'dateFrom': point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'],
      'dateTo': point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      'isFavorite': point['is_favorite'],
    };

    delete adaptedPoint['base_price'];
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
