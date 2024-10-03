import { render } from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import SortView from '../view/sort-view.js';
import PointsListView from '../view/points-list-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/common.js';

export default class BoardPresenter {
  #pointsListComponent = new PointsListView();
  #noPointsComponent = new NoPointView();
  #sortComponent = new SortView();
  #mainContainer = null;
  #pointsModel = null;
  #pointPresenters = new Map();

  #points = [];
  #offers = [];
  #destinations = [];

  constructor({ boardContainer: mainContainer, pointsModel }) {
    this.#mainContainer = mainContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#offers = [...this.#pointsModel.offers];
    this.#destinations = [...this.#pointsModel.destinations];

    this.#renderBoard();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.#offers, this.#destinations);
  };

  #renderBoard() {
    if (this.#points.length === 0) {
      this.#renderNoPoint();
      return;
    }
    this.#renderSort();
    this.#renderPointsList();
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListContainer: this.#pointsListComponent.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init(point, this.#offers, this.#destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderNoPoint() {
    render(this.#noPointsComponent, this.#mainContainer);
  }

  #renderSort() {
    render(this.#sortComponent, this.#mainContainer);
  }

  #renderPointsList() {
    render(this.#pointsListComponent, this.#mainContainer);

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }
}
