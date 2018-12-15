import { AUTH_SERVICE } from './services/AuthService';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Search from './components/Search';
import Home from './components/Home';
import Featured from './components/Featured';
import Dishes from './components/Dishes';
import Drinks from './components/Drinks';
import Reservations from './components/Reservations';
import Events from './components/Events';
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
    href: '/search',
    component: Search
  },
  {
    href: '/featured',
    component: Featured
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
    href: '/events',
    component: Events
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
