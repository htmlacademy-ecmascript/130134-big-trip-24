import {render} from './render.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const filtersElement = document.querySelector('.trip-controls__filters');
const mainContentElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: mainContentElement});

render(new FilterView(), filtersElement);

boardPresenter.init();
