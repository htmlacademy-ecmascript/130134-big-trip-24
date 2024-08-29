import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
// import NewPointView from '../view/new-point-view.js';

const POINTS_COUNT = 3;

export default class BoardPresenter {
  pointsListComponent = new PointsListView();

  constructor(mainContainer) {
    this.mainContainer = mainContainer;
  }

  init() {
    render(new SortView(), this.mainContainer);
    render(this.pointsListComponent, this.mainContainer);
    render(new EditPointView(), this.pointsListComponent.getElement());

    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new PointView(), this.pointsListComponent.getElement());
    }
  }
}
