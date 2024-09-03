import dayjs from 'dayjs';

const DATE_FORMAT = 'DD/MM/YYYY/ HH:mm';

function getRandomInt(min = 0, max = 500) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getRandomArrayElement(items) {
  return items[getRandomInt(0, items.length)];
}

function humanizeDate(pointDate, dateFormat) {
  return pointDate ? dayjs(pointDate).format(dateFormat) : 'xxx';
}

export { getRandomArrayElement, getRandomInt, humanizeDate };
