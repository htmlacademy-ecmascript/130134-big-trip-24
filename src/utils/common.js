import dayjs from 'dayjs';

function getRandomInt(min = 0, max = 500) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getRandomArrayElement(items) {
  return items[getRandomInt(0, items.length)];
}

function getCapitalizedValue(anyValue) {
  return anyValue ? anyValue[0].toUpperCase() + anyValue.slice(1) : '';
}

function humanizeDate(pointDate, dateFormat) {
  return pointDate ? dayjs(pointDate).format(dateFormat) : '';
}

function getTimeDuration(startTime, endTime) {
  const duration = dayjs(endTime).diff(startTime, 'm');
  const days = dayjs(endTime).diff(startTime, 'd');
  const hours = dayjs(endTime).diff(startTime, 'h') % 24;
  const minutes = dayjs(endTime).diff(startTime, 'm') % 60;

  if (duration < 60) {
    return `${minutes.toString().padStart(2, '0')}M`;
  }
  if (duration < 1440) {
    return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }

  return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes
    .toString()
    .padStart(2, '0')}M`;
}

function updateItem(items, update) {
  return items.map((item) => (item.id === update.id ? update : item));
}

export {
  getRandomArrayElement,
  getRandomInt,
  humanizeDate,
  getCapitalizedValue,
  getTimeDuration,
  updateItem,
};
