import { render, replace, remove, RenderPosition } from '../framework/render.js';
import { UpdateType } from '../const.js';
import TripInfoView from '../view/trip-info-view.js';

export default class TripInfoPresenter {
  #tripInfoContainer = null;
  #pointsModel = null;

  #tripInfoComponent = null;

  constructor({ tripInfoContainer, pointsModel }) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  init() {
    let prevTripInfoComponent = this.#tripInfoComponent;
    if (this.#pointsModel.points.length === 0) {
      remove(prevTripInfoComponent);
      remove(this.#tripInfoComponent);
      prevTripInfoComponent = null;
      this.#tripInfoComponent = null;
      return;
    }

    this.#tripInfoComponent = new TripInfoView({
      points: this.#pointsModel.points,
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
