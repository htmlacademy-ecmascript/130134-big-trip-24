import dayjs from 'dayjs';

function getRandomInt(min = 0, max = 500) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getRandomArrayElement(items) {
  return items[getRandomInt(0, items.length)];
}

function getCapitalizedPointType(pointType) {
  return pointType ? pointType[0].toUpperCase() + pointType.slice(1) : '';
}

function humanizeDate(pointDate, dateFormat) {
  return pointDate ? dayjs(pointDate).format(dateFormat) : '';
}

export {
  getRandomArrayElement,
  getRandomInt,
  humanizeDate,
  getCapitalizedPointType,
};
