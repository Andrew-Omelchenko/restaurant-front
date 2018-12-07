import Component from '../framework/Component';
import { AUTH_SERVICE } from '../services/AuthService';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        name: AUTH_SERVICE.claims.name,
        email: AUTH_SERVICE.claims.email,
        joined: AUTH_SERVICE.claims.joined
      }
    };

    this.host = document.createElement('div');
    this.host.classList.add('profile-container');
    this.host.addEventListener('click', this.handleClick);
  }

  handleClick(ev) {
    if (ev.target.id === 'home-btn') {
      window.location.hash = '/';
    }
  }

  render() {
    const { profile } = this.state;

    return `
      <h2>Username: ${profile.name}</h2>
      <p>E-mail: ${profile.email}</p>
      <p>Joined: ${profile.joined}</p>
      <button class="btn" id="home-btn" type="button">Home</button>
    `;
  }
}

export default ProfileComponent;
