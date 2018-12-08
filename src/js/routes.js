import { AUTH_SERVICE } from './services/AuthService';
import Login from './components/Login';
import LoginComponent from './components/LoginComponent';
import Register from './components/Register';
import RegisterComponent from './components/RegisterComponent';
import Profile from './components/Profile';
import ProfileComponent from './components/ProfileComponent';
import Home from './components/Home';
import HomeComponent from './components/HomeComponent';

const routes = [
  {
    href: '',
    redirectTo: '/'
  },
  {
    href: '/',
    component: Home,
    args: HomeComponent
  },
  {
    href: '/login',
    component: Login,
    args: LoginComponent
  },
  {
    href: '/register',
    component: Register,
    args: RegisterComponent
  },
  {
    href: '/profile',
    component: Profile,
    args: ProfileComponent,
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
