import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';

function getRandomInt(min = 0, max = 500) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getRandomArrayElement(items) {
  return items[getRandomInt(0, items.length)];
}

function humanizeDate(pointDate) {
  return pointDate ? dayjs(pointDate).format(DATE_FORMAT) : '';
}

export { getRandomArrayElement, getRandomInt, humanizeDate };
