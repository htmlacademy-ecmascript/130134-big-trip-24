const POINT_TYPE = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'checkIn',
  'sightseeing',
  'restaurant',
];

const CITIES = [
  'Amsterdam',
  'Geneva',
  'Chamonix',
  'Moscow',
  'Tula',
  'Krasnodar',
  'Vladivostok',
  'Samara',
];

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'.split(
    '. '
  );

const FilterType = {
  'EVERYTHING':'everything',
  'FUTURE':'future',
  'PRESENT':'present',
  'PAST':'past'
};

const SortType = {
  DEFAULT: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const SortItems = {
  DEFAULT: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

export { POINT_TYPE, DESCRIPTION, CITIES, FilterType, SortType, SortItems };
