const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '1a',
        title: 'Switch to comfort class',
        price: 5,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: '2a',
        title: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: '3a',
        title: 'Add luggage',
        price: 30,
      },
      {
        id: '4a',
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
        id: '1a',
        title: 'Switch to comfort class',
        price: 5,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: '3a',
        title: 'Add luggage',
        price: 30,
      },
      {
        id: '4a',
        title: 'Add meal',
        price: 10,
      },
      {
        id: '2a',
        title: 'Choose seats',
        price: 3,
      },
    ],
  },
  {
    type: 'checkIn',
    offers: [
      {
        id: '5a',
        title: 'Add breakfast',
        price: 7,
      },
      {
        id: '6a',
        title: 'Choose time',
        price: 5,
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: '7a',
        title: 'Take guide',
        price: 15,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '8a',
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
