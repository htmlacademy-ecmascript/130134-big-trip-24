import { render } from './framework/render.js';
import { nanoid } from 'nanoid';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';
import PointsApiService from './point-api-service.js';

const AUTHORIZATION = `Basic ${nanoid()}`;
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

const controlsElement = document.querySelector('.trip-main');
const filtersElement = controlsElement.querySelector('.trip-controls__filters');
const mainContentElement = document.querySelector('.trip-events');
const filterModel = new FilterModel();
const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION),
});

const boardPresenter = new BoardPresenter({
  mainContainer: mainContentElement,
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
boardPresenter.init();
pointsModel.init().finally(() => {
  render(newPointButtonComponent, controlsElement);
});
