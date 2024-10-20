import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { FilterType } from '../const.js';

dayjs.extend(isBetween);

function isFuturePoint(point) {
  return point && dayjs().isBefore(point.dateFrom, 'D');
}

function isPresentPoint(point) {
  return point && dayjs().isBetween(point.dateFrom, point.dateTo, 'D', '[]');
}

function isPastPoint(point) {
  return point && dayjs().isAfter(point.dateTo, 'D');
}

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFuturePoint(point)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresentPoint(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastPoint(point)),
};

export { filter };
