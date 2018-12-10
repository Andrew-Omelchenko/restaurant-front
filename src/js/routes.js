import { AUTH_SERVICE } from './services/AuthService';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Home from './components/Home';
import Dishes from './components/Dishes';
import Drinks from './components/Drinks';
import Reservations from './components/Reservations';
import Geo from './components/Geo';

const routes = [
  {
    href: '',
    redirectTo: '/'
  },
  {
    href: '/',
    component: Home
  },
  {
    href: '/login',
    component: Login
  },
  {
    href: '/register',
    component: Register
  },
  {
    href: '/profile',
    component: Profile,
    authorized: AUTH_SERVICE.isAuthorized
  },
  {
    href: '/dishes',
    component: Dishes
  },
  {
    href: '/drinks',
    component: Drinks
  },
  {
    href: '/reservations',
    component: Reservations,
    authorized: AUTH_SERVICE.isAuthorized
  },
  {
    href: '/location',
    component: Geo
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
