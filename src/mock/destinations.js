import { getRandomArrayElement, getRandomInt } from '../utils.js';
import { DESCRIPTION, CITIES } from '../const.js';

function getRandomElement() {
  return getRandomArrayElement(DESCRIPTION);
}

function getDescription(item) {
  const description = Array.from(
    { length: getRandomInt(1, item.length) },
    getRandomElement
  );
  return description.join('. ');
}

const mockDestinations = [
  {
    destination: getRandomArrayElement(CITIES),
    description: getDescription(DESCRIPTION),
    fotos: [],
  },
  {
    destination: getRandomArrayElement(CITIES),
    description: getDescription(DESCRIPTION),
    fotos: [
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
    ],
  },
  {
    destination: getRandomArrayElement(CITIES),
    description: getDescription(DESCRIPTION),
    fotos: [
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
    ],
  },
  {
    destination: getRandomArrayElement(CITIES),
    description: getDescription(DESCRIPTION),
    fotos: [
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
      `https://loremflickr.com/248/152?random=${getRandomInt()}`,
    ],
  },
];

function getMockDestinations() {
  return mockDestinations;
}

export { getMockDestinations };
