import { getRandomArrayElement, getRandomInt } from '../utils.js';
import { POINT_TYPE } from '../const.js';
import { getMockDestinations } from './destinations.js';

const POINTS_COUNT = 5;

const destination = getMockDestinations();
const mockPoints = [
  {
    id: 1,
    type: getRandomArrayElement(POINT_TYPE),
    destination: getRandomArrayElement(destination)[destination],
    dateStart: new Date(),
    dateEnd: new Date(),
    price: getRandomInt(),
    isEdit: false,
    isFavorite: false,
    offers: [1],
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

function getMockPoints() {
  return Array.from({ length: POINTS_COUNT }, getRandomPoint);
}

export { getMockPoints };
