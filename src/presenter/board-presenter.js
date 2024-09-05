import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import { getMockDestinations } from '../mock/destinations.js';
import { getMockOffers } from '../mock/offers.js';

const destinations = getMockDestinations();
const offers = getMockOffers();

export default class BoardPresenter {
  pointsListComponent = new PointsListView();
  mainContainer = null;
  pointsModel = null;

  constructor({ boardContainer: mainContainer, pointsModel }) {
    this.mainContainer = mainContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(new SortView(), this.mainContainer);
    render(this.pointsListComponent, this.mainContainer);
    render(
      new PointEditView({ point: this.points[40], offers, destinations }),
      this.pointsListComponent.getElement()
    );

    this.points.forEach((point) => {
      render(
        new PointView({ point: point, offers: offers }),
        this.pointsListComponent.getElement()
      );
    });
  }
}
