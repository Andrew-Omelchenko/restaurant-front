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
  BASE_URL: 'http://www.mapquestapi.com/staticmap/v4/getmap',
  KEY: '?key=jtzQpP4TOwjB8HSvJQQZVpGVCUnwJDYb',
  SIZE: '&size=600,400',
  ZOOM: '&zoom=13',
  CENTER: '&center=',
  LAT: 49.224908799999994,
  LON: 28.401664
}

// export const STATUS_CODES = {
//   OK: '200',
//   BAD_REQUEST: '400',
//   UNAUTHORIZED: '401',
//   FORBIDDEN: '403',
//   NOT_FOUND: '404'
// };
