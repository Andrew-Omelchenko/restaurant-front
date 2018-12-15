export const API = {
  BASE_URL: 'http://localhost:3000',
  ENDPOINTS: {
    CREATE_USER: '/register',
    LOGIN: '/signin',
    PROFILE: '/profile',
    MENU: '/menu',
    DRINKS: '/winecard',
    HOURS: '/hours',
    RESERVE: '/reserve',
    EVENTS: '/events'
  }
};

export const MAP_API = {
  LAT: 49.224908799999994,
  LON: 28.401664
}

export const RESERVATIONS = {
  TABLES: [
    {
      ID: 1,
      STR: 'Table #1',
      PATH: `<polygon id="table-1" class="st0" points="23.7,278.7 27.7,278.7 27.7,246.7 101.7,246.7 101.7,278.7 105.7,278.7 105.7,286 133,286 133,310.7 105.7,310.7 105,318.7 101,318.7 101,349.3 29.7,349.3 29.7,318 23.7,318 	"/>`,
      SEATS: 6
    },
    {
      ID: 2,
      STR: 'Table #2',
      PATH: `<polygon id="table-2" class="st0" points="23.7,394.7 27.7,394.7 27.7,364 101.7,364 101.7,394.7 105,394.7 105,403.3 133,403.3 133,428.7 105.7,428.7 105.7,434 101,434 101,466.7 27.7,466.7 27.7,435.3 23.7,434 	"/>`,
      SEATS: 7
    },
    {
      ID: 3,
      STR: 'Table #3',
      PATH: '<polygon id="table-3" class="st0" points="213,432.7 219.7,382 246.3,382 252.3,432.7 245.7,480 221,480 	"/>',
      SEATS: 2
    },
    {
      ID: 4,
      STR: 'Table #4',
      PATH: '<polygon id="table-4" class="st0" points="294.3,431 303,382 325.7,382 331.7,431 325,484.7 300.3,484.7 	"/>',
      SEATS: 2
    },
    {
      ID: 5,
      STR: 'Table #5',
      PATH: '<polygon id="table-5" class="st0" points="379,310 365.7,360 372.3,377.3 399,403.3 415,410 430.3,404 469.7,372.7 469.7,349.3 452.3,310 	"/>',
      SEATS: 6
    },
    {
      ID: 6,
      STR: 'Table #6',
      PATH: '<polygon id="table-6" class="st0" points="377,520 383,504.7 417.7,470 433.7,463.3 447.7,469.3 485,505.3 489.7,520 483,536 433.3,547.3 383.7,535.3 	"/>',
      SEATS: 3
    },
    {
      ID: 7,
      STR: 'Table #7',
      PATH: '<polygon id="table-7" class="st0" points="547.7,368.7 516.3,399.3 511,410 511,492.7 547.7,523.3 561.7,528 573,524 609,494.7 609,415.3 605,400.7 574.3,368.7 	"/>',
      SEATS: 8
    }
  ],
  IMAGE_STR: './img/restaurant-plan.png',
  HOURS: [ 0, 1, 2, 18, 19, 20, 21, 22, 23]
};

export const FEAT_ARR = [
  {
    ID: 0,
    IMAGE: './img/feat-barbecue.jpg',
    TITLE: 'Barbecue',
    DESCRIPTION: `The Great American Barbecue Bucket List.`,
    PRICE: 18.00
  },
  {
    ID: 1,
    IMAGE: './img/feat-fish-supper.jpg',
    TITLE: 'Fish Supper',
    DESCRIPTION: 'The Special Fish Supper is SPECIAL.',
    PRICE: 21.00
  },
  {
    ID: 2,
    IMAGE: './img/feat-fruit-salad.jpg',
    TITLE: 'Fruit Salad',
    DESCRIPTION: 'A very very good fresh fruit salad.',
    PRICE: 8.00
  },
  {
    ID: 3,
    IMAGE: './img/feat-ham.jpg',
    TITLE: 'Ham',
    DESCRIPTION: 'Top Secret Restaurant Recipes.',
    PRICE: 17.00
  },
  {
    ID: 4,
    IMAGE: './img/feat-hamburger.jpg',
    TITLE: 'Hamburger',
    DESCRIPTION: 'Burgers of Every Description.',
    PRICE: 7.00
  },
  {
    ID: 5,
    IMAGE: './img/feat-meat-loaf.jpg',
    TITLE: 'Meat Loaf',
    DESCRIPTION: 'You can learn a lot about a restaurant by how it makes its meatloaf.',
    PRICE: 19.00
  },
  {
    ID: 6,
    IMAGE: './img/feat-rice-1.jpg',
    TITLE: 'Rice - Recipe #1',
    DESCRIPTION: 'White Steamed Rice.',
    PRICE: 10.00
  },
  {
    ID: 7,
    IMAGE: './img/feat-rice-2.jpg',
    TITLE: 'Rice - Recipe #2',
    DESCRIPTION: 'Menu of Fish Curry Rice.',
    PRICE: 12.00
  },
  {
    ID: 8,
    IMAGE: './img/feat-risotto.jpg',
    TITLE: 'Risotto',
    DESCRIPTION: 'A Classic Risotto Recipe.',
    PRICE: 14.00
  },
  {
    ID: 9,
    IMAGE: './img/feat-salad-1.jpg',
    TITLE: 'Salad - Recipe #1',
    DESCRIPTION: 'Salad.',
    PRICE: 7.00
  },
  {
    ID: 10,
    IMAGE: './img/feat-salad-2.jpg',
    TITLE: 'Salad - Recipe #2',
    DESCRIPTION: 'Salad.',
    PRICE: 5.00
  },
  {
    ID: 11,
    IMAGE: './img/feat-salad-3.jpg',
    TITLE: 'Salad - Recipe #3',
    DESCRIPTION: 'Salad.',
    PRICE: 6.00
  },
  {
    ID: 12,
    IMAGE: './img/feat-salad-4.jpg',
    TITLE: 'Salad - Recipe #4',
    DESCRIPTION: 'Salad',
    PRICE: 5.00
  },
  {
    ID: 13,
    IMAGE: './img/feat-sashimi.jpg',
    TITLE: 'Sashimi',
    DESCRIPTION: 'Fresh! One of the best sashimi.',
    PRICE: 23.00
  },
  {
    ID: 14,
    IMAGE: './img/feat-schnitzel.jpg',
    TITLE: 'Schnitzel',
    DESCRIPTION: 'Authentic German Schnitzel (Schweineschnitzel).',
    PRICE: 25.00
  },
  {
    ID: 15,
    IMAGE: './img/feat-steak.jpg',
    TITLE: 'Steak',
    DESCRIPTION: 'Steak Menu.',
    PRICE: 21.00
  },
  {
    ID: 16,
    IMAGE: './img/feat-sushi.jpg',
    TITLE: 'Sushi',
    DESCRIPTION: 'The Different Kinds of Sushi.',
    PRICE: 19.00
  },
  {
    ID: 17,
    IMAGE: './img/feat-tuna.jpg',
    TITLE: 'Tuna',
    DESCRIPTION: 'Ahi Tuna Ceviche.',
    PRICE: 27.00
  },
  {
    ID: 18,
    IMAGE: './img/feat-vegetables.jpg',
    TITLE: 'Vegetables - Mix',
    DESCRIPTION: 'Mix of Vegetables.',
    PRICE: 8.00
  }
];

// export const STATUS_CODES = {
//   OK: '200',
//   BAD_REQUEST: '400',
//   UNAUTHORIZED: '401',
//   FORBIDDEN: '403',
//   NOT_FOUND: '404'
// };
