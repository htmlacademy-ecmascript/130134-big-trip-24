const mockOffers = [
  {
    type: 'Taxi',
    offers: [
      {
        id: 1,
        name: 'Switch to comfort class',
        price: 5,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: 1,
        name: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: 1,
        name: 'Add luggage',
        price: 30,
      },
      {
        id: 2,
        name: 'Add meal',
        price: 10,
      },
    ],
  },
  {
    type: 'ship',
    offers: [
      {
        id: 1,
        name: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: 1,
        name: 'Switch to comfort class',
        price: 5,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 1,
        name: 'Add luggage',
        price: 30,
      },
      {
        id: 2,
        name: 'Add meal',
        price: 10,
      },
      {
        id: 3,
        name: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 1,
        name: 'Choose time',
        price: 5,
      },
      {
        id: 2,
        name: 'Add breakfast',
        price: 5,
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 1,
        name: 'Take guide',
        price: 15,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 1,
        name: 'Choose table',
        price: 5,
      },
    ],
  },
];

function getMockOffers() {
  return mockOffers;
}

export { getMockOffers };
