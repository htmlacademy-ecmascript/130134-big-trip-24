import AbstractView from '../framework/view/abstract-view';
import { getCapitalizedValue } from '../utils/common.js';

function createFilterListTemplate(filtersList) {
  return filtersList.reduce((acc, filter, index) => {
    const filterItem = `<div class="trip-filters__filter">
        <input id="filter-${filter.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.type}" ${index === 0 ? 'checked' : ''} ${filter.count === 0 ? 'disabled' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filter.type}">${getCapitalizedValue(filter.type)}</label>
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

  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate(this.#filters);
  }
}
