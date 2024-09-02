import { getMockPoints } from '../mock/points.js';

export default class PointsModel {
  points = getMockPoints();

  getPoints() {
    return this.points;
  }
}
