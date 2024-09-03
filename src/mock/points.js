import { getRandomArrayElement, getRandomInt } from '../utils.js';
import { POINT_TYPE } from '../const.js';
import { getMockDestinations } from './destinations.js';

const POINTS_COUNT = 5;

const destination = getMockDestinations();
const mockPoints = [
  {
    id: 1,
    type: getRandomArrayElement(POINT_TYPE),
    destination: getRandomArrayElement(destination).destination,
    dateStart: new Date('2024-12-10 12:00'),
    dateEnd: new Date('2024-12-11 13:11'),
    price: getRandomInt(),
    isEdit: false,
    isFavorite: false,
    offers: [1],
  },
  {
    id: 2,
    type: 'flight',
    destination: getRandomArrayElement(destination).destination,
    dateStart: new Date('2024-11-25 15:00'),
    dateEnd: new Date('2024-12-1 10:10'),
    price: getRandomInt(),
    isEdit: false,
    isFavorite: false,
    offers: [1, 2, 3],
  },
  {
    id: 3,
    type: getRandomArrayElement(POINT_TYPE),
    destination: getRandomArrayElement(destination).destination,
    dateStart: new Date('2024-11-10 15:30'),
    dateEnd: new Date('2024-11-11 13:00'),
    price: getRandomInt(),
    isEdit: true,
    isFavorite: true,
    offers: [1],
  },
  {
    id: 4,
    type: getRandomArrayElement(POINT_TYPE),
    destination: getRandomArrayElement(destination).destination,
    dateStart: new Date('2024-12-10 12:00'),
    dateEnd: new Date('2024-12-12 21:35'),
    price: getRandomInt(),
    isEdit: false,
    isFavorite: false,
    offers: [1],
  },
  {
    id: 5,
    type: getRandomArrayElement(POINT_TYPE),
    destination: getRandomArrayElement(destination).destination,
    dateStart: new Date('2024-10-30 08:20'),
    dateEnd: new Date('2024-11-01 23:05'),
    price: getRandomInt(),
    isEdit: false,
    isFavorite: true,
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
