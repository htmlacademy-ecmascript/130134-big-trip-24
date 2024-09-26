import { filter } from '../utils/filter.js';

function generateFilter(points) {
  return Object.entries(filter).map(([filterType, filterPoints], i) => ({
    id: i + 1,
    type: filterType,
    count: filterPoints(points).length,
  }));
}

export { generateFilter };
