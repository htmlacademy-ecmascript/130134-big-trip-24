import AbstractView from '../framework/view/abstract-view';

function createNoPointTemplate() {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
}

export default class NoPointView extends AbstractView {
  #filters = [];

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createNoPointTemplate(this.#filters);
  }
}
