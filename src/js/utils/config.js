export const API = {
  BASE_URL: 'http://localhost:3000',
  ENDPOINTS: {
    CREATE_USER: '/register',
    LOGIN: '/signin',
    PROFILE: '/profile',
    MENU: '/menu',
    DRINKS: '/winecard'
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

// export const STATUS_CODES = {
//   OK: '200',
//   BAD_REQUEST: '400',
//   UNAUTHORIZED: '401',
//   FORBIDDEN: '403',
//   NOT_FOUND: '404'
// };
