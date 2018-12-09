import { API } from '../utils/config';
import { processResponse } from '../utils/helper';
import { AUTH_SERVICE } from './AuthService';

class AuthHttpService {
  get(endpoint) {
    const headers = new Headers({ 'content-type': 'application/json' });
    
    if (AUTH_SERVICE.isAuthorized()) {
      headers.append('Authorization', `Bearer ${AUTH_SERVICE.token}`);
    }

    const init = { 
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default' 
    };

    return fetch(`${API.BASE_URL}${endpoint}`, init)
      .then(processResponse);
  }

  post(endpoint, payload) {
    const headers = new Headers({ 'content-type': 'application/json' });

    if (AUTH_SERVICE.isAuthorized()) {
      headers.append('Authorization', `Bearer ${AUTH_SERVICE.token}`);
    }

    const init = { 
      method: 'POST',
      headers: headers,
      body: payload,
      mode: 'cors',
      cache: 'default' 
    };

    return fetch(`${API.BASE_URL}${endpoint}`, init)
      .then(processResponse);
  }

  getDishes() {
    return this.get(API.ENDPOINTS.MENU);
  }

  getDrinks() {
    return this.get(API.ENDPOINTS.DRINKS);
  }
  
  createUser(userData) {
    return this.post(API.ENDPOINTS.CREATE_USER, JSON.stringify(userData));
  }
}

export const AUTH_HTTP_SERVICE = new AuthHttpService();
