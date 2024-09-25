import AbstractView from '../framework/view/abstract-view';
import { getCapitalizedValue } from '../utils/common.js';

function createFilterListTemplate(filters) {
  return filters.reduce((acc, filter, i) => {
    const filterItem = `<div class="trip-filters__filter">
        <input id="filter-${
          filter.id
        }" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${
      filter.type
    }" ${i === 0 ? 'checked' : ''} ${filter.count === 0 ? 'disabled' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filter.id}">${getCapitalizedValue(
      filter.type
    )}</label>
      </div>`;
    return acc + filterItem;
  }, '');
}

function createFilterTemplate(filters) {
  return `<form class="trip-filters" action="#" method="get">
      ${createFilterListTemplate(filters)}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
}

export default class FilterView extends AbstractView {
  #filters = [];

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate(this.#filters);
  }
}
