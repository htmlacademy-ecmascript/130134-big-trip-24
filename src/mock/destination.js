import { getRandomArrayElement, getRandomInt } from '../utils.js';
import { DESCRIPTION, CITIES } from '../const.js';

// function shuffleArray(item) {
//   for (let i = item.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [item[i], item[j]] = [item[j], item[i]];
//   }
//   return item;
// }

// function getDescription(item) {
//   return shuffleArray(item).slice(getRandomInt(0, item.length)).join('. ');
// }

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

const mockDestination = [
  {
    destination: getRandomArrayElement(CITIES),
    description: getDescription(DESCRIPTION),
    fotos: `https://loremflickr.com/248/152?random=${getRandomInt()}`,
  },
  {
    destination: getRandomArrayElement(CITIES),
    description: getDescription(DESCRIPTION),
    fotos: `https://loremflickr.com/248/152?random=${getRandomInt()}`,
  },
  {
    destination: getRandomArrayElement(CITIES),
    description: getDescription(DESCRIPTION),
    fotos: `https://loremflickr.com/248/152?random=${getRandomInt()}`,
  },
  {
    destination: getRandomArrayElement(CITIES),
    description: getDescription(DESCRIPTION),
    fotos: `https://loremflickr.com/248/152?random=${getRandomInt()}`,
  },
];

export { mockDestination };
