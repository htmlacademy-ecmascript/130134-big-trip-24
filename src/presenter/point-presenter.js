import { remove, render, replace } from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #pointComponent = null;
  #editPointComponent = null;
  #pointsListContainer = null;
  #handleDataChange = null;
  #point = null;
  #handleModeChange = null;

  #mode = Mode.DEFAULT;

  constructor({ pointsListContainer, onDataChange, onModeChange }) {
    this.#pointsListContainer = pointsListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point, offers, destinations) {
    this.#point = point;
    const prevPointComponent = this.#pointComponent;
    const prevEditPointComponent = this.#editPointComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      offers,
      destinations,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#editPointComponent = new PointEditView({
      point: this.#point,
      offers,
      destinations,
      onFormSubmit: this.#handleFormSubmit,
      onCloseClick: this.#handleCloseClick,
    });

    if (prevPointComponent === null || prevEditPointComponent === null) {
      render(this.#pointComponent, this.#pointsListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editPointComponent, prevEditPointComponent);
    }

    remove(prevPointComponent);
    remove(prevEditPointComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editPointComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceEditToPoint();
    }
  }

  #replacePointToEdit() {
    replace(this.#editPointComponent, this.#pointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceEditToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
    this.#mode = Mode.DEFAULT;
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceEditToPoint();
  };

  #handleEditClick = () => {
    this.#replacePointToEdit();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditToPoint();
    }
  };

  #handleCloseClick = () => {
    this.#replaceEditToPoint();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({ ...this.#point, isFavorite: !this.#point.isFavorite });
  };
}
