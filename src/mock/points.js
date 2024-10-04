import { getRandomArrayElement, getRandomInt } from '../utils/common.js';
import { POINT_TYPE } from '../const.js';
import { nanoid } from 'nanoid';

const POINTS_COUNT = 5;

const mockPoints = [
  {
    'base_price': getRandomInt(),
    'date_from': new Date('2024-12-10 12:00'),
    'date_to': new Date('2024-12-11 13:11'),
    'destination': 1,
    'isFavorite': false,
    'offers': ['2a', '1a', '4a'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
  {
    'base_price': getRandomInt(),
    'date_from': new Date('2024-9-25 12:10'),
    'date_to': new Date('2024-12-1 10:10'),
    'destination': 2,
    'isFavorite': false,
    'offers': ['2a', '1a', '3a'],
    'type': 'flight',
  },
  {
    'base_price': getRandomInt(),
    'date_from': new Date('2024-08-10 15:30'),
    'date_to': new Date('2024-09-11 13:00'),
    'destination': 3,
    'isFavorite': true,
    'offers': ['2a', '5a', '8a'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
  {
    'base_price': getRandomInt(),
    'date_from': new Date('2024-12-10 12:00'),
    'date_to': new Date('2024-12-12 21:35'),
    'destination': 4,
    'isFavorite': false,
    'offers': ['2a', '1a', '3a', '6a', '7a'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
  {
    'base_price': getRandomInt(),
    'date_from': new Date('2024-10-30 08:20'),
    'date_to': new Date('2024-11-01 23:05'),
    'destination': 5,
    'isFavorite': true,
    'offers': ['2a', '1a'],
    'type': getRandomArrayElement(POINT_TYPE),
  },
];

function getRandomPoint() {
  return {
    'id': nanoid(),
    ...getRandomArrayElement(mockPoints)
  };
}

function getMockPoints() {
  return Array.from({ length: POINTS_COUNT }, getRandomPoint);
}

export { getMockPoints };
