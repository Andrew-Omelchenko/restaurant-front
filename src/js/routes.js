import { AUTH_SERVICE } from './services/AuthService';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Home from './components/Home';

const routes = [
  {
    href: '',
    redirectTo: '/'
  },
  {
    href: '/',
    component: Home,
  },
  {
    href: '/login',
    component: Login
  },
  {
    href: '/register',
    component: Register,
  },
  {
    href: '/profile',
    component: Profile,
    authorized: AUTH_SERVICE.isAuthorized
  },
  {
    href: '/logout',
    onEnter: navigateTo => {
      AUTH_SERVICE.clearStorage();
      navigateTo('/');
      location.reload();
    }
  }
];

export default routes;
