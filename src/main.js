import {render} from './render.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import PointsListView from './view/points-list-view.js';
import PointView from './view/point-view.js';
import EditPointView from './view/edit-point-view.js';
// import NewPointView from './view/new-point-view.js';

const POINTS_COUNT = 3;
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteSortElement = document.querySelector('.trip-events');

render(new FilterView(), siteFiltersElement);
render(new SortView(), siteSortElement);
render(new PointsListView(), siteSortElement);

const sitePointsListElement = siteSortElement.querySelector('.trip-events__list');

render(new EditPointView(), sitePointsListElement);

for (let i = 0; i < POINTS_COUNT; i++) {
  render(new PointView(), sitePointsListElement);
}
