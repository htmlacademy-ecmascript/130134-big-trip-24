import { getRandomArrayElement, getRandomInt } from '../utils.js';
import { POINT_TYPE } from '../const.js';

const POINTS_COUNT = 5;

const mockPoints = [
  {
    'id': 1,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-12-10 12:00'),
    'date_to': new Date('2024-12-11 13:11'),
    'destination': '',
    'is_favorite': false,
    'offers': ['seats', 'comfort', 'luggage'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
  {
    'id': 2,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-11-25 15:00'),
    'date_to': new Date('2024-12-1 10:10'),
    'destination': 2,
    'is_favorite': false,
    'offers': ['seats', 'comfort', 'luggage'],
    'type': 'flight',
  },
  {
    'id': 3,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-11-10 15:30'),
    'date_to': new Date('2024-11-11 13:00'),
    'destination': 3,
    'is_favorite': true,
    'offers': ['seats', 'comfort', 'luggage'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
  {
    'id': 4,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-12-10 12:00'),
    'date_to': new Date('2024-12-12 21:35'),
    'destination': 4,
    'is_favorite': false,
    'offers': ['seats', 'comfort', 'luggage'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
  {
    'id': 5,
    'base_price': getRandomInt(),
    'date_from': new Date('2024-10-30 08:20'),
    'date_to': new Date('2024-11-01 23:05'),
    'destination': 5,
    'is_favorite': true,
    'offers': ['seats', 'comfort'],
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
