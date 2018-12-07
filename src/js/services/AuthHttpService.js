import { API } from '../utils/config';
import { processResponse } from '../utils/helper';
import { AUTH_SERVICE } from './AuthService';

class AuthHttpService {
  get(endpoint) {
    const headers = new Headers({ 'content-type': 'application/json' });
    
    if (AUTH_SERVICE.isAuthorized()) {
      headers.append('Authorization', `Bearer ${AUTH_SERVICE.token}`);
    }

    return fetch(`${API.BASE_URL}${endpoint}`, { headers })
      .then(processResponse);
  }

  post(endpoint, payload) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const init = { 
      method: 'POST',
      headers: headers,
      body: payload,
      mode: 'cors',
      cache: 'default' 
    };

    if (AUTH_SERVICE.isAuthorized()) {
      headers.append('Authorization', `Bearer ${AUTH_SERVICE.token}`);
    }

    return fetch(`${API.BASE_URL}${endpoint}`, init)
      .then(processResponse);
  }
  
  createUser(userData) {
    return this.post(API.ENDPOINTS.CREATE_USER, JSON.stringify(userData));
  }
}

export const AUTH_HTTP_SERVICE = new AuthHttpService();
