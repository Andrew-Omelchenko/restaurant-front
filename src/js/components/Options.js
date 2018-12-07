
import { AUTH_SERVICE } from '../services/AuthService';
import Component from '../framework/Component';

class Options extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('div');
    this.host.classList.add('options');

  }

  render() {
    const locArr = window.location.href.split('#');
    const href = locArr[locArr.length - 1];

    if (AUTH_SERVICE.isAuthorized()) {
      return `
        <p><a href="#/profile" class="btn-sm btn-info">${AUTH_SERVICE.claims.email}</a></p>
        <p><a href="#/logout" class="btn-sm btn-info">LOGOUT</a></p>
      `;
    } else if (href === '/login') {
      return `
        <p><a href="#/" class="btn-sm btn-info">HOME</a></p>
        <p><a href="#/register" class="btn-sm btn-info">REGISTER</a></p>
      `;
    } else if (href === '/register') {
      return `
        <p><a href="#/" class="btn-sm btn-info">HOME</a></p>
        <p><a href="#/login" class="btn-sm btn-info">LOGIN</a></p>
      `;
    } else {
      return `
        <p><a href="#/login" class="btn-sm btn-info">LOGIN</a></p>
        <p><a href="#/register" class="btn-sm btn-info">REGISTER</a></p>
      `;
    } 
  }
}

export default Options;
