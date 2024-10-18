import dayjs from 'dayjs';

function sortPointsByTime(timeA, timeB) {
  const durationA = dayjs(timeA.dateTo).diff(dayjs(timeA.dateFrom));
  const durationB = dayjs(timeB.dateTo).diff(dayjs(timeB.dateFrom));
  return durationB - durationA;
}

function sortPointsByPrice(priceA, priceB) {
  return priceB.basePrice - priceA.basePrice;
}

function isDatesEqual(dateA, dateB) {
  return (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'm');
}

export { sortPointsByTime, sortPointsByPrice, isDatesEqual };
