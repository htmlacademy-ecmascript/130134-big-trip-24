import AbstractView from '../framework/view/abstract-view';
import { getCapitalizedValue } from '../utils/common.js';

function createFilterListTemplate(filtersList, currentFilter) {
  return filtersList.reduce((acc, filter) => {
    const filterItem = `<div class="trip-filters__filter">
        <input id="filter-${filter.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.type}" ${filter.type === currentFilter ? 'checked' : ''} ${filter.count === 0 ? 'disabled' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filter.type}">${getCapitalizedValue(filter.type)}</label>
      </div>`;
    return acc + filterItem;
  }, '');
}

function createFilterTemplate(filters, currentFilter) {
  return `<form class="trip-filters" action="#" method="get">
      ${createFilterListTemplate(filters, currentFilter)}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
}

export default class FilterView extends AbstractView {
  #filters = [];
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFilterTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };

}
