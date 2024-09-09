import { getRandomArrayElement, getRandomInt } from '../utils.js';
import { DESCRIPTION, CITIES } from '../const.js';

function getRandomElement() {
  return getRandomArrayElement(DESCRIPTION);
}

function getDescription(item) {
  const description = Array.from({ length: getRandomInt(1, item.length) }, getRandomElement);
  return description.join('. ');
}

function getPictureItem() {
  return {
    src: `https://loremflickr.com/248/152?random=${getRandomInt()}`,
    description: 'parliament building',
  };
}

function getPictures() {
  return Array.from({ length: getRandomInt(0, 5) }, getPictureItem);
}

function getDestination(city, index) {
  return {
    id: index + 1,
    description: getDescription(DESCRIPTION),
    name: city,
    pictures: getPictures(),
  };
}

function getMockDestinations() {
  return CITIES.map((city, index) => getDestination(city, index));
}

export { getMockDestinations };
