import Component from '../framework/Component';
import { AUTH_SERVICE } from '../services/AuthService';
import { AUTH_HTTP_SERVICE } from '../services/AuthHttpService';
import { align2 } from '../utils/helper';

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

    this.orders = [];

    this.host = document.createElement('main');
    this.host.addEventListener('click', this.handleClick);

    const queryData = {
      email: AUTH_SERVICE.claims.email
    };

    AUTH_HTTP_SERVICE.getOrders(queryData)
      .then(res => {
        console.log(res);
        this.orders = res.answer;
        this.updateState({});
      })
      .catch(err => {
        document
          .getElementById('alert-placeholder')
          .innerHTML = `Error status: ${err.status || 
            'Server does not respond'}, ${err.answer || 
            'check connection'}`;
      });
  }

  handleClick(ev) {
    if (ev.target.id === 'home-btn') {
      window.location.hash = '/';
    }
  }

  render() {
    const { profile } = this.state;

    let ordersStr = '';
    this.orders.forEach(element => {
      ordersStr += `
        <div class="col-lg-3 col-md-4 col-sm-6 shadow mx-1 my-1">
          <p>ID: ${element.id}</p>
          <p>Date: ${new Date(element.reserved_date).format('YYYY-MM-DD')}</p>
          <p>Hour: ${align2(element.reserved_hour)}:00</p>
          <p>Table #: ${element.table_id}</p>
          <p><a class="btn btn-info" href="#">Complain</a></p>
        </div>
      `;
    });

    return `
      <section name="profile" class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3>Profile:</h3>
            <h4>Username: ${profile.name}</h4>
            <p>E-mail: ${profile.email}</p>
            <p>Joined: ${profile.joined}</p>
            <button class="btn btn-primary" id="home-btn" type="button">Home</button>
          </div>
        </div>
      </section>
      <section name="orders" class="container">
        <h3>Orders:</h3>
        <p class="text-danger" id="alert-placeholder">&nbsp</p>
        <div class="row">
          ${ordersStr}
        </div>
      </section>
    `;
  }
}

export default Profile;
