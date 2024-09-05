const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        name: 'comfort',
        title: 'Switch to comfort class',
        price: 5,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: 1,
        name: 'seats',
        title: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: 1,
        name: 'luggage',
        title: 'Add luggage',
        price: 30,
      },
      {
        id: 2,
        name: 'meal',
        title: 'Add meal',
        price: 10,
      },
    ],
  },
  {
    type: 'ship',
    offers: [
      {
        id: 1,
        name: 'seats',
        title: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: 1,
        name: 'comfort',
        title: 'Switch to comfort class',
        price: 5,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 1,
        name: 'luggage',
        title: 'Add luggage',
        price: 30,
      },
      {
        id: 2,
        name: 'meal',
        title: 'Add meal',
        price: 10,
      },
      {
        id: 3,
        name: 'seats',
        title: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'checkIn',
    offers: [
      {
        id: 1,
        name: 'breakfast',
        title: 'Add breakfast',
        price: 7,
      },
      {
        id: 2,
        name: 'time',
        title: 'Choose time',
        price: 5,
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 1,
        name: 'guide',
        title: 'Take guide',
        price: 15,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 1,
        name: 'table',
        title: 'Choose table',
        price: 5,
      },
    ],
  },
];

function getMockOffers() {
  return mockOffers;
}

export { getMockOffers };
