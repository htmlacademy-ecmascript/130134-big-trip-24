import { render, replace, remove, RenderPosition } from '../framework/render.js';
import { UpdateType } from '../const.js';
import { sortPointsByDate } from '../utils/point.js';
import TripInfoView from '../view/trip-info-view.js';

export default class TripInfoPresenter {
  #tripInfoContainer = null;
  #pointsModel = null;
  #points = [];

  #tripInfoComponent = null;

  constructor({ tripInfoContainer, pointsModel }) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  init() {
    this.#points = [...this.#pointsModel.points].sort(sortPointsByDate);
    console.log(this.#points);

    let prevTripInfoComponent = this.#tripInfoComponent;
    if (this.#points.length === 0) {
      remove(prevTripInfoComponent);
      remove(this.#tripInfoComponent);
      prevTripInfoComponent = null;
      this.#tripInfoComponent = null;
      return;
    }

    this.#tripInfoComponent = new TripInfoView({
      points: this.#points,
      offers: this.#pointsModel.offers,
      destinations: this.#pointsModel.destinations,
    });

    if (prevTripInfoComponent === null) {
      render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

  #handleModelEvent = (eventType) => {
    if (eventType === UpdateType.MAJOR || eventType === UpdateType.INIT) {
      this.init();
    }
  };
}
