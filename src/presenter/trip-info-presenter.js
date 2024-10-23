import { render, replace, remove, RenderPosition } from '../framework/render.js';
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
    console.log(this.#pointsModel.points);
    const prevTripInfoComponent = this.#tripInfoComponent;
    console.log('prev-component before code -'+prevTripInfoComponent);
    if (this.#pointsModel.points.length === 0) {
      remove(this.#tripInfoComponent);
      remove(prevTripInfoComponent);
      return;
    }

    console.log('length not 0');
    
    
    console.log(prevTripInfoComponent);
    

    this.#tripInfoComponent = new TripInfoView({
      points: this.#pointsModel.points,
      offers: this.#pointsModel.offers,
      destinations: this.#pointsModel.destinations,
    });

    if (prevTripInfoComponent === null) {
      console.log('try render');
      
      render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
      return;
    }

    console.log('try replaceee!!!');
    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };
}
