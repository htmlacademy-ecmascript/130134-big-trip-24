import { render } from './framework/render.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';

const filters = [
  {
    type: 'everything',
    count: 0,
  },
];

const filtersElement = document.querySelector('.trip-controls__filters');
const mainContentElement = document.querySelector('.trip-events');
const filterModel = new FilterModel();
const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({
  boardContainer: mainContentElement,
  pointsModel,
});

render(
  new FilterView({
    filters,
    currentFilterType: 'everything',
    onFilterTypeChange: () => {},
  }),
  filtersElement
);

boardPresenter.init();
