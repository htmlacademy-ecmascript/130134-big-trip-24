import { getRandomArrayElement, getRandomInt } from '../utils.js';
import { POINT_TYPE } from '../const.js';
import { mockDestination } from './destination.js';

const mockPoints = [
  {
    id: 1,
    type: getRandomArrayElement(POINT_TYPE),
    destination: getRandomArrayElement(mockDestination)[mockDestination],
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

export { getRandomPoint };
