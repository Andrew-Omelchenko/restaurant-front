import Component from '../framework/Component';
import { AUTH_SERVICE } from '../services/AuthService';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        name: AUTH_SERVICE.claims.name,
        email: AUTH_SERVICE.claims.email,
        joined: AUTH_SERVICE.claims.joined
      }
    };

    this.host = document.createElement('main');
    this.host.classList.add('container');
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
      <section>
        <h2>Username: ${profile.name}</h2>
        <p>E-mail: ${profile.email}</p>
        <p>Joined: ${profile.joined}</p>
        <button class="btn" id="home-btn" type="button">Home</button>
      </section>
    `;
  }
}

export default Profile;
