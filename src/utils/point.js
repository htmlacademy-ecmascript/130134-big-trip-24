import dayjs from 'dayjs';

function sortPointsByTime(timeA, timeB) {
  const durationA = dayjs(timeA.dateTo).diff(dayjs(timeA.dateFrom));
  const durationB = dayjs(timeB.dateTo).diff(dayjs(timeB.dateFrom));
  return durationB - durationA;
}

function sortPointsByPrice(priceA, priceB) {
  return priceB.basePrice - priceA.basePrice;
}

export { sortPointsByTime, sortPointsByPrice };
