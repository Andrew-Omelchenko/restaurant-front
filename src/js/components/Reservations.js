import { toHtml } from '../utils/helper';
import Component from '../framework/Component';

class Reservations extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('section');
    this.host.classList.add('container-fluid', 'reservations');
  }

  render() {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const monthNow = dateNow.getMonth() + 1;
    const dayOfMonthNow = dateNow.getDate();

    const htmlString = `
      <div class="row bg-dark text-white">
        <div class="col-sm-6 text-center">
        <div class="svg-container">
          <object type="image/svg+xml" data="./img/restaurant-plan.svg" 
            width="100%" height="100%" class="svg-content">
            </object>
          </div>
          <img class="reservations__plan" src="./img/restaurant-plan.png" alt="restaurant-plan">
        </div>
        <div class="col-sm-6 text-sm-left text-center">
          <form class="register-form">
            <p class="text-danger" id="alert-placeholder">&nbsp</p>
            <div class="form-group">
              <label for="date">Choose date:</label>
              <input 
                name="date" 
                class="form-control" 
                id="date" 
                type="date"  
                min="${yearNow}-${monthNow}-${dayOfMonthNow}" 
                max="3000-01-01" 
                required
                value="${yearNow}-${monthNow}-${dayOfMonthNow}">
            </div>
            <div class="form-group">
              <label for="table">Select table:</label>
              <select 
                name="table" 
                class="form-control" 
                id="table"  
                required
                value="1">
                <option value="1">#1</option>
                <option value="2">#2</option>
                <option value="3">#3</option>
                <option value="4">#4</option>
                <option value="5">#5</option>
                <option value="6">#6</option>
                <option value="7">#7</option>
              </select>  
            </div>
            <button class="btn btn-primary" id="order-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    `;

    const node = toHtml(htmlString);

    return node;
  }
}

export default Reservations;
