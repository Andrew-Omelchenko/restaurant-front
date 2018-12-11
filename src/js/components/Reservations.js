import { RESERVATIONS } from '../utils/config';
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

    let tablesStr = '';
    let pathsStr = '';
    RESERVATIONS.TABLES.forEach(element => {
      tablesStr += `<option value="${element.ID}">${element.STR} - ${element.SEATS} seats</option>`;
      pathsStr += `
        <g>
          <title>${element.STR}</title>
          ${element.PATH}
        </g>
      `;
    });

    // Thank to:
    // https://patrickkettner.com/posts/responsive-image-maps/
    // http://thenewcode.com/744/Make-SVG-Responsive

    const htmlString = `
      <div class="row bg-dark text-white">
        <div class="col-sm-6 text-center">
          <div class="svg-container">
            <img class="reservations__plan" src="${RESERVATIONS.IMAGE_STR}" alt="restaurant-plan">
            <svg class="svg-content" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 640 572" style="enable-background:new 0 0 640 572;" xml:space="preserve">
              <style type="text/css">
                .st0{ fill:transparent; }
              </style>
              ${pathsStr}
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
                ${tablesStr}
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
