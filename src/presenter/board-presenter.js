import { render, remove } from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import SortView from '../view/sort-view.js';
import PointsListView from '../view/points-list-view.js';
import PointPresenter from './point-presenter.js';
import { sortPointsByTime, sortPointsByPrice } from '../utils/point.js';
import { SortItems, UpdateType, UserAction } from '../const.js';

export default class BoardPresenter {
  #pointsListComponent = new PointsListView();
  #noPointsComponent = new NoPointView();
  #sortComponent = null;
  #mainContainer = null;
  #pointsModel = null;
  #pointPresenters = new Map();
  #currentSortType = SortItems.DEFAULT.name;

  #offers = [];
  #destinations = [];

  constructor({ boardContainer: mainContainer, pointsModel }) {
    this.#mainContainer = mainContainer;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    switch (this.#currentSortType) {
      case SortItems.TIME.name:
        return [...this.#pointsModel.points].sort(sortPointsByTime);
      case SortItems.PRICE.name:
        return [...this.#pointsModel.points].sort(sortPointsByPrice);
      default:
        return this.#pointsModel.points;
    }
  }

  init() {
    this.#offers = [...this.#pointsModel.offers];
    this.#destinations = [...this.#pointsModel.destinations];

    this.#renderBoard();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = (actionType, updateType, update) => {
    console.log('handleViewAction- ' + actionType, updateType, update);
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    console.log(updateType, data);
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data, this.#offers, this.#destinations);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({ resetSortType: true });
        this.#renderBoard();
        break;
    }
  };

  #renderBoard() {
    if (this.points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    render(this.#pointsListComponent, this.#mainContainer);

    this.points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #clearBoard({ resetSortType = false } = {}) {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#noPointsComponent);

    if (resetSortType) {
      this.#currentSortType = SortItems.DEFAULT.name;
    }
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListContainer: this.#pointsListComponent.element,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init(point, this.#offers, this.#destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderNoPoints() {
    render(this.#noPointsComponent, this.#mainContainer);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;

    this.#clearBoard();
    this.#renderBoard();
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSort: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#mainContainer);
  }
}
