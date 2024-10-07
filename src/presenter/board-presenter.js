import { render, remove } from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import SortView from '../view/sort-view.js';
import PointsListView from '../view/points-list-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/common.js';
import { sortPointsByTime, sortPointsByPrice } from '../utils/point.js';
import { SortType } from '../const.js';

export default class BoardPresenter {
  #pointsListComponent = new PointsListView();
  #noPointsComponent = new NoPointView();
  #sortComponent = null;
  #mainContainer = null;
  #pointsModel = null;
  #pointPresenters = new Map();
  #currentSortType = SortType.DEFAULT;
  #sourcedPoints = [];

  #points = [];
  #offers = [];
  #destinations = [];

  constructor({ boardContainer: mainContainer, pointsModel }) {
    this.#mainContainer = mainContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#sourcedPoints = [...this.#pointsModel.points];
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
    this.#sourcedPoints = updateItem(this.#sourcedPoints, updatedPoint);

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

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.TIME:
        this.#points.sort(sortPointsByTime);
        break;
      case SortType.PRICE:
        this.#points.sort(sortPointsByPrice);
        break;
      default:
        this.#points = [...this.#sourcedPoints];
        break;
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    remove(this.#sortComponent);
    this.#renderSort();
    this.#clearPointsList();
    this.#renderPointsList();
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSort: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });

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
