const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'comfort',
        title: 'Switch to comfort class',
        price: 5,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'seats',
        title: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: 'luggage',
        title: 'Add luggage',
        price: 30,
      },
      {
        id: 'meal',
        title: 'Add meal',
        price: 10,
      },
    ],
  },
  {
    type: 'ship',
    offers: [],
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'comfort',
        title: 'Switch to comfort class',
        price: 5,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'luggage',
        title: 'Add luggage',
        price: 30,
      },
      {
        id: 'meal',
        title: 'Add meal',
        price: 10,
      },
      {
        id: 'seats',
        title: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'checkIn',
    offers: [
      {
        id: 'breakfast',
        title: 'Add breakfast',
        price: 7,
      },
      {
        id: 'time',
        title: 'Choose time',
        price: 5,
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 'guide',
        title: 'Take guide',
        price: 15,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'table',
        title: 'Choose table',
        price: 120,
      },
    ],
  },
];

function getMockOffers() {
  return mockOffers;
}

export { getMockOffers };
