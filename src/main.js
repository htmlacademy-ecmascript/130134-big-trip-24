import {render} from './render.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteMainContentElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter(siteMainContentElement);

render(new FilterView(), siteFiltersElement);

boardPresenter.init();
