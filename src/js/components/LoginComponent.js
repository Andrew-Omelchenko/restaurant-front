import { AUTH_SERVICE } from '../services/AuthService';
import Component from '../framework/Component';

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('div');
    this.host.classList.add('container');

    this.host.addEventListener('focus', this.handleFocus, true);
    this.host.addEventListener('submit', this.handleSubmit);
  }

  handleFocus(ev) {
    if (ev.target.id === 'email' || ev.target.id === 'password') {
      document.getElementById('alert-placeholder').innerHTML = '&nbsp';
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const userData = {
      email: ev.target.email.value,
      password: ev.target.password.value
    };

    AUTH_SERVICE.login(userData)
      .then(res => {
        if (res.status === 200) {
          console.log(AUTH_SERVICE.token);
          console.log(AUTH_SERVICE.claims);
          console.log(AUTH_SERVICE.isAuthorized());
          window.location.hash = '/profile';
        }
      })
      .catch(err => {
        document
          .getElementById('alert-placeholder')
          .innerHTML = `Error status: ${err.status || 
            'Server does not respond'}, ${err.answer || 
            'check connection'}`;
      });
  }

  render() {
    return `
      <form class="login-form">
        <p class="text-danger" id="alert-placeholder">&nbsp</p>
        <div class="form-group">
          <label for="email">E-mail: </label>
          <input 
            name="email"
            class="form-control" 
            id="email" 
            type="email" 
            placeholder="Enter your email..." 
            required 
            value="">
        </div>
        <div class="form-group">
          <label for="password">Password: </label>
          <input 
            name="password" 
            class="form-control" 
            id="password" 
            type="password" 
            minlength="8" 
            placeholder="Enter your password..." 
            required 
            value="">
        </div>
        <button class="btn btn-primary" id="submit-btn" type="submit">Submit</button>
      </form>
    `;
  }
}

export default LoginComponent;
