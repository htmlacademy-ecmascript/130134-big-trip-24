import AbstractView from '../framework/view/abstract-view';
import {getCapitalizedValue} from '../utils/common.js';
import { SortType, SortItems } from '../const.js';

function createSortItemsTemplate(sortItems, sortEnabledItems, currentSort) {
  return Object.values(sortItems).reduce((acc, sort) => {
    const sortItem = `<div class="trip-sort__item  trip-sort__item--${sort}">
        <input id="sort-${sort}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort}" ${Object.values(sortEnabledItems).includes(sort) ? '' : 'disabled'}  ${sort === currentSort ? 'checked' : ''}>
        <label class="trip-sort__btn" for="sort-${sort}">${getCapitalizedValue(sort)}</label>
      </div>`;
    return acc + sortItem;
  }, '');
}

function createSortTemplate(currentSort) {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${createSortItemsTemplate(SortItems, SortType, currentSort)}


    </form>`;
}

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;
  #currentSort = null;

  constructor({ currentSort, onSortTypeChange }) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.#currentSort = currentSort;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#currentSort);
  }

  #sortTypeChangeHandler = (evt) => {
    const sortType = evt.target.value.slice(5);

    this.#handleSortTypeChange(sortType);
  };
}
