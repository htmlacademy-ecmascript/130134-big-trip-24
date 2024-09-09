import { getRandomArrayElement, getRandomInt } from '../utils.js';
import { POINT_TYPE } from '../const.js';

const POINTS_COUNT = 5;

const mockPoints = [
  {
    'id': 1,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-12-10 12:00'),
    'date_to': new Date('2024-12-11 13:11'),
    'destination': 1,
    'is_favorite': false,
    'offers': ['2a', '1a', '4a'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
  {
    'id': 2,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-11-25 15:00'),
    'date_to': new Date('2024-12-1 10:10'),
    'destination': 2,
    'is_favorite': false,
    'offers': ['2a', '1a', '3a'],
    'type': 'flight',
  },
  {
    'id': 3,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-11-10 15:30'),
    'date_to': new Date('2024-11-11 13:00'),
    'destination': 3,
    'is_favorite': true,
    'offers': ['2a', '5a', '8a'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
  {
    'id': 4,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-12-10 12:00'),
    'date_to': new Date('2024-12-12 21:35'),
    'destination': 4,
    'is_favorite': false,
    'offers': ['2a', '1a', '3a', '6a', '7a'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
  {
    'id': 5,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-10-30 08:20'),
    'date_to': new Date('2024-11-01 23:05'),
    'destination': 5,
    'is_favorite': true,
    'offers': ['2a', '1a'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

function getMockPoints() {
  return Array.from({ length: POINTS_COUNT }, getRandomPoint);
}

export { getMockPoints };
