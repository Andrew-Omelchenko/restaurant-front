import { bindAll, toHtml } from '../utils/helper';
import Component from '../framework/Component';

class Reservations extends Component {
  constructor(props) {
    super(props);

    bindAll(this, 'onClick');

    this.host = document.createElement('section');
    this.host.classList.add('container-fluid', 'reservations');

    this.host.addEventListener('click', this.onClick, true);
  }

  onClick(ev) {
    if (ev.target.id !== '') {
      if (ev.target.id.slice(0, -1) === 'table-') {
        document.getElementById('table').value = ev.target.id.slice(-1);
      }
    }
  }

  render() {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const monthNow = dateNow.getMonth() + 1;
    const dayOfMonthNow = dateNow.getDate();

    // Thank to:
    // https://patrickkettner.com/posts/responsive-image-maps/
    // http://thenewcode.com/744/Make-SVG-Responsive

    const htmlString = `
      <div class="row bg-dark text-white">
        <div class="col-sm-6 text-center">
          <div class="svg-container">
            <img class="reservations__plan" src="./img/restaurant-plan.png" alt="restaurant-plan">
            <svg class="svg-content" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 640 572" style="enable-background:new 0 0 640 572;" xml:space="preserve">
              <style type="text/css">
                .st0{ fill:transparent; }
              </style>
              <g>
                <title>Table #1</title>
                <polygon id="table-1" class="st0" points="23.7,278.7 27.7,278.7 27.7,246.7 101.7,246.7 101.7,278.7 105.7,278.7 105.7,286 133,286 133,310.7 105.7,310.7 105,318.7 101,318.7 101,349.3 29.7,349.3 29.7,318 23.7,318 	"/>
              </g>
              <g>
                <title>Table #2</title>
                <polygon id="table-2" class="st0" points="23.7,394.7 27.7,394.7 27.7,364 101.7,364 101.7,394.7 105,394.7 105,403.3 133,403.3 133,428.7 105.7,428.7 105.7,434 101,434 101,466.7 27.7,466.7 27.7,435.3 23.7,434 	"/>
              </g>
              <g>
                <title>Table #3</title>
                <polygon id="table-3" class="st0" points="213,432.7 219.7,382 246.3,382 252.3,432.7 245.7,480 221,480 	"/>
              </g>
              <g>
                <title>Table #4</title>
                <polygon id="table-4" class="st0" points="294.3,431 303,382 325.7,382 331.7,431 325,484.7 300.3,484.7 	"/>
              </g>
              <g>
                <title>Table #5</title>
                <polygon id="table-5" class="st0" points="379,310 365.7,360 372.3,377.3 399,403.3 415,410 430.3,404 469.7,372.7 469.7,349.3 452.3,310 	"/>
              </g>
              <g>
                <title>Table #6</title>
                <polygon id="table-6" class="st0" points="377,520 383,504.7 417.7,470 433.7,463.3 447.7,469.3 485,505.3 489.7,520 483,536 433.3,547.3 383.7,535.3 	"/>
              </g>
              <g>
                <title>Table #7</title>
                <polygon id="table-7" class="st0" points="547.7,368.7 516.3,399.3 511,410 511,492.7 547.7,523.3 561.7,528 573,524 609,494.7 609,415.3 605,400.7 574.3,368.7 	"/>
              </g>
            </svg>
          </div>
        </div>
        <div class="col-sm-6 text-sm-left text-center">
          <form class="register-form">
            <p class="text-danger" id="alert-placeholder">&nbsp</p>
            <div class="form-group">
              <label for="date">Choose a date:</label>
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
              <label for="table">Select a table or click one on the plan:</label>
              <select 
                name="table" 
                class="form-control" 
                id="table"  
                required
                value="1">
                <option value="1">Table #1 - 6 seats</option>
                <option value="2">Table #2 - 7 seats</option>
                <option value="3">Table #3 - 2 seats</option>
                <option value="4">Table #4 - 2 seats</option>
                <option value="5">Table #5 - 6 seats</option>
                <option value="6">Table #6 - 3 seats</option>
                <option value="7">Table #7 - 8 seats</option>
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
