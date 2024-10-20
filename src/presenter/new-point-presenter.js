import { remove, render, RenderPosition } from '../framework/render.js';
import PointEditView from '../view/point-edit-view.js';
import { nanoid } from 'nanoid';
import { UserAction, UpdateType } from '../const.js';

export default class NewPointPresenter {
  #newPointComponent = null;
  #pointsListContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;

  constructor({ pointsListContainer, onDataChange, onDestroy }) {
    this.#pointsListContainer = pointsListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init(offers, destinations) {
    this.#newPointComponent = new PointEditView({
      offers,
      destinations,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleCancelClick,
    });

    render(this.#newPointComponent, this.#pointsListContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#newPointComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#newPointComponent);
    this.#newPointComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (update) => {
    this.#handleDataChange(UserAction.ADD_POINT, UpdateType.MAJOR, { ...update, id: nanoid() });
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.destroy();
    }
  };

  #handleCancelClick = () => {
    this.destroy();
  };
}
