import { render, replace } from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import SortView from '../view/sort-view.js';
import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

export default class BoardPresenter {
  #pointsListComponent = new PointsListView();
  #mainContainer = null;
  #pointsModel = null;

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

  #renderBoard() {
    if (this.#points.length === 0) {
      render(new NoPointView(), this.#mainContainer);
      return;
    }
    render(new SortView(), this.#mainContainer);
    render(this.#pointsListComponent, this.#mainContainer);

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      point: point,
      offers: this.#offers,
      destinations: this.#destinations,
      onEditClick: () => {
        replacePointToEdit();
        document.addEventListener('keydown', escKeyDownHandler);
      },
    });

    const editPointComponent = new PointEditView({
      point,
      offers: this.#offers,
      destinations: this.#destinations,
      onFormSubmit: () => {
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onCloseClick: () => {
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
    });

    function replacePointToEdit() {
      replace(editPointComponent, pointComponent);
    }

    function replaceEditToPoint() {
      replace(pointComponent, editPointComponent);
    }

    render(pointComponent, this.#pointsListComponent.element);
  }
}
