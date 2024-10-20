import { render } from './framework/render.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';

const controlsElement = document.querySelector('.trip-main');
const filtersElement = controlsElement.querySelector('.trip-controls__filters');
const mainContentElement = document.querySelector('.trip-events');
const filterModel = new FilterModel();
const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({
  boardContainer: mainContentElement,
  pointsModel,
  filterModel,
  onNewPointDestroy: handleNewPointClose,
});

const filterPresenter = new FilterPresenter({
  filterContainer: filtersElement,
  filterModel,
  pointsModel,
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick,
});

function handleNewPointClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

filterPresenter.init();
render(newPointButtonComponent, controlsElement);
boardPresenter.init();
