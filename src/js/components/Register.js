import Component from '../framework/Component';
import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ''
    };

    this.host = document.createElement('main');
    this.host.classList.add('container');

    this.host.addEventListener('focus', this.handleFocus, true);
    this.host.addEventListener('submit', this.handleSubmit);
  }

  handleFocus(ev) {
    if (
      ev.target.id === 'name' || 
      ev.target.id === 'password' ||
      ev.target.id === 'email'
    ) {
      document.getElementById('alert-placeholder').innerHTML = '&nbsp';
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const userData = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      password: ev.target.password.value
    };
    
    // console.log(userData);

    AUTH_HTTP_SERVICE.createUser(userData)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          window.location.hash = '/login';
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
      <section>
        <form class="register-form">
          <p class="text-danger" id="alert-placeholder">&nbsp</p>
          <div class="form-group">
            <label for="username">Username:</label>
            <input 
              name="username" 
              class="form-control" 
              id="name" 
              type="text" 
              minlength="2" 
              maxlength="24" 
              placeholder="Enter new user name..." 
              required
              value="">
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              name="password" 
              class="form-control" 
              id="password" 
              type="password" 
              minlength="8"
              placeholder="Enter password..."  
              required
              value="">
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              name="email" 
              class="form-control" 
              id="email" 
              type="email"
              placeholder="Enter email address..." 
              required
              value="">
          </div>
          <button class="btn btn-primary" id="register-btn" type="submit">Submit</button>
        </form>
      </section>
    `;
  }
}

export default Register;
