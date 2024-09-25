import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { FilterType } from '../const.js';

dayjs.extend(isBetween);

function isFuturePoint(point) {
  return point && dayjs().isBefore(point.date_from, 'D');
}

function isPresentPoint(point) {
  return point && dayjs().isBetween(point.date_from, point.date_to, 'D', '[]');
}

function isPastPoint(point) {
  return point && dayjs().isAfter(point.date_to, 'D');
}

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFuturePoint(point)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresentPoint(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastPoint(point)),
};

export { filter };
